import { promises as fs } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SvgPickerClient from "@/components/SvgPickerClient";
import { createPageMetadata } from "@/lib/seo";

type FolderConfig = {
  id: string;
  label: string;
  root: string;
};

type SvgPickerFile = {
  id: string;
  fileName: string;
  relativePath: string;
  repoRelativePath: string;
  sizeLabel: string;
  sizeBytes: number;
  previewSrc?: string;
};

type SvgPickerCollection = {
  id: string;
  label: string;
  files: SvgPickerFile[];
};

const PREVIEW_MAX_BYTES = 25 * 1024 * 1024 - 1;

const folderConfigs: FolderConfig[] = [
  { id: "partners", label: "Partners", root: path.join(process.cwd(), "Partners", "Partners") },
  { id: "svg11", label: "SVG 11", root: path.join(process.cwd(), "SVG 11", "SVG 11") },
  { id: "svg33", label: "SVG 33", root: path.join(process.cwd(), "SVG 33", "SVG 33") },
  { id: "svg44", label: "svg 44", root: path.join(process.cwd(), "svg 44", "svg 44") },
];

const formatSize = (bytes: number) => `${(bytes / 1024).toFixed(1)} KB`;

export const metadata: Metadata = createPageMetadata({
  title: "SVG Picker",
  description:
    "Browse SVG files from Partners, SVG 11, SVG 33 and svg 44 folders and choose one to reuse.",
  path: "/svg-picker",
  image: "/images/og/home-og.jpg",
  keywords: ["svg picker", "svg library", "select svg", "opus svg"],
});

async function readSvgFiles(
  baseFolder: string,
  collectionRoot: string,
  publicFolder: string,
  parts: string[] = [],
): Promise<SvgPickerFile[]> {
  const currentPath = path.join(collectionRoot, ...parts);
  const entries = await fs.readdir(currentPath, { withFileTypes: true });
  const files: SvgPickerFile[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const nested = await readSvgFiles(baseFolder, collectionRoot, publicFolder, [...parts, entry.name]);
      files.push(...nested);
      continue;
    }

    if (!entry.isFile() || !entry.name.toLowerCase().endsWith(".svg")) {
      continue;
    }

    const relativePath = [...parts, entry.name].join(path.sep).replace(/\\/g, "/");
    const absolutePath = path.join(collectionRoot, ...parts, entry.name);
    const stat = await fs.stat(absolutePath);

    let previewSrc: string | undefined;
    if (stat.size <= PREVIEW_MAX_BYTES) {
      const publicPath = path.join(process.cwd(), "public", "svg-picker", publicFolder, relativePath);
      try {
        await fs.stat(publicPath);
        previewSrc = `/svg-picker/${publicFolder}/${relativePath}`;
      } catch {
        // no local public copy for this file
      }
    }

    files.push({
      id: `${baseFolder}:${relativePath}`,
      fileName: entry.name,
      relativePath,
      repoRelativePath: path.join(baseFolder, relativePath),
      sizeLabel: formatSize(stat.size),
      sizeBytes: stat.size,
      ...(previewSrc ? { previewSrc } : {}),
    });
  }

  return files;
}

async function buildCollections(): Promise<SvgPickerCollection[]> {
  const collections: SvgPickerCollection[] = [];

  for (const config of folderConfigs) {
    try {
      const files = await readSvgFiles(config.label, config.root, config.id);
      files.sort((a, b) => a.fileName.localeCompare(b.fileName, "en", { numeric: true }));

      collections.push({
        id: config.id,
        label: config.label,
        files: files.map((file) => ({
          ...file,
          sizeLabel: file.sizeLabel,
        })),
      });
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
        throw error;
      }
      collections.push({
        id: config.id,
        label: config.label,
        files: [],
      });
    }
  }

  return collections;
}

export default async function SvgPickerPage() {
  const collections = await buildCollections();

  return (
    <main className="min-h-screen bg-surface-main text-brand-navy-dark">
      <section className="px-4 pb-10 pt-16 sm:px-6">
        <div className="mx-auto max-w-[1320px]">
          <SiteHeader />
          <div className="mt-10">
            <SvgPickerClient collections={collections} />
          </div>
        </div>
      </section>
    </main>
  );
}

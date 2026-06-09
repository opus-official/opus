"use client";

import { useMemo, useState } from "react";

type SvgCollectionFile = {
  id: string;
  fileName: string;
  relativePath: string;
  repoRelativePath: string;
  sizeLabel: string;
  sizeBytes: number;
  previewSrc?: string;
};

type SvgCollection = {
  id: string;
  label: string;
  files: SvgCollectionFile[];
};

type SvgPickerClientProps = {
  collections: SvgCollection[];
};

export default function SvgPickerClient({ collections }: SvgPickerClientProps) {
  const [activeCollectionId, setActiveCollectionId] = useState(collections[0]?.id ?? "");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(collections[0]?.files[0]?.id ?? null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeCollection = collections.find((collection) => collection.id === activeCollectionId) ?? collections[0];

  const visibleFiles = useMemo(() => {
    const list = activeCollection?.files ?? [];

    if (!query.trim()) {
      return list;
    }

    const normalized = query.toLowerCase();
    return list.filter(
      (item) =>
        item.fileName.toLowerCase().includes(normalized) ||
        item.relativePath.toLowerCase().includes(normalized),
    );
  }, [activeCollection, query]);

  const selectedFile = activeCollection?.files.find((item) => item.id === selectedId) ?? visibleFiles[0] ?? null;

  const handleCopy = async (text: string, fileId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(fileId);
      window.setTimeout(() => setCopiedId((current) => (current === fileId ? null : current)), 1300);
    } catch (error) {
      console.error(error);
      alert("Unable to copy this value.");
    }
  };

  if (!collections.length) {
    return (
      <div className="rounded-3xl border border-red-200 bg-white p-6">
        <p className="text-sm font-medium text-rose-600">
          No SVG directories were found. Confirm folder names: Partners, SVG 11, SVG 33, svg 44.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-4 rounded-3xl border border-white/20 bg-white/80 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-brand-blue">SVG Picker</p>
            <h1 className="mt-2 font-serif text-[34px] leading-tight text-brand-navy-dark md:text-[42px]">
              Choose an SVG from your four source folders
            </h1>
            <p className="mt-3 max-w-[760px] text-[15px] leading-relaxed text-text-one">
              This page shows files in:
              <span className="ml-1 font-semibold">Partners</span>, <span className="font-semibold">SVG 11</span>,{" "}
              <span className="font-semibold">SVG 33</span>, <span className="font-semibold">svg 44</span>.
            </p>
          </div>

          <div className="w-full max-w-[260px]">
            <label htmlFor="svg-search" className="mb-2 block text-xs font-semibold text-text-one">
              Search files
            </label>
            <input
              id="svg-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Type file name..."
              className="w-full rounded-xl border border-brand-navy-muted/20 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-brand-blue"
            />
          </div>
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {collections.map((collection) => (
            <button
              key={collection.id}
              type="button"
              onClick={() => {
                setActiveCollectionId(collection.id);
                setSelectedId(collection.files[0]?.id ?? null);
                setQuery("");
              }}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                collection.id === activeCollectionId
                  ? "border-brand-blue bg-brand-blue text-white"
                  : "border-brand-navy-muted/20 bg-white text-brand-navy-dark hover:border-brand-blue"
              }`}
            >
              {collection.label}
              <span className="ml-2 text-xs opacity-80">({collection.files.length})</span>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/20 bg-white p-4">
        <div className="flex items-center justify-between px-2 pb-3 text-sm font-semibold text-text-one">
          <span>Files in {activeCollection?.label}</span>
          <span>{visibleFiles.length}</span>
        </div>

        {visibleFiles.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-brand-navy-muted/20 bg-surface-main p-4 text-sm text-text-one">
            No matching SVG found. Try a different keyword.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {visibleFiles.map((file) => (
              <article
                key={file.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedId(file.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedId(file.id);
                  }
                }}
                className={`rounded-2xl border p-3 transition ${
                  file.id === selectedFile?.id
                    ? "border-brand-blue bg-brand-blue/6"
                    : "border-white/60 bg-surface-main/80 hover:border-brand-blue/60"
                }`}
              >
                <div className="group relative flex min-h-[180px] items-center justify-center rounded-xl border border-white/40 bg-[#f7f8fc] p-3">
                  {file.previewSrc ? (
                    <img
                      src={file.previewSrc}
                      alt={file.fileName}
                      className="max-h-[150px] max-w-full object-contain"
                    />
                  ) : (
                    <p className="text-center text-xs text-text-one">
                      {file.sizeBytes >= 25 * 1024 * 1024
                        ? "Preview skipped (Cloudflare limit >25 MB)."
                        : "Preview not yet copied to public assets."}
                    </p>
                  )}
                </div>

                <div className="mt-3 space-y-2">
                  <p className="text-sm font-semibold text-brand-navy-dark">{file.fileName}</p>
                  <p className="text-xs text-text-one">{file.relativePath}</p>
                  <p className="text-xs font-semibold text-brand-blue">~ {file.sizeLabel}</p>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        void handleCopy(file.repoRelativePath, file.id);
                      }}
                      className="rounded-full border border-brand-blue/20 px-3 py-1.5 text-xs font-semibold text-brand-blue hover:bg-brand-blue hover:text-white"
                      aria-label={`Copy path for ${file.fileName}`}
                    >
                      {copiedId === file.id ? "Copied" : "Copy path"}
                    </button>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        void handleCopy(
                          `<img src="${file.repoRelativePath.replace(/\\/g, "/")}" alt="${file.fileName}" />`,
                          `${file.id}-markup`,
                        );
                      }}
                      className="rounded-full border border-brand-blue/20 px-3 py-1.5 text-xs font-semibold text-brand-blue hover:bg-brand-blue hover:text-white"
                    >
                      {copiedId === `${file.id}-markup` ? "Copied markup" : "Copy markup"}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {selectedFile ? (
        <div className="rounded-3xl border border-white/20 bg-white p-4">
          <p className="text-xs text-text-one">Selected</p>
          <p className="mt-1 text-sm font-semibold text-brand-navy-dark">{selectedFile.fileName}</p>
          <p className="mt-2 break-all text-xs text-text-one">{selectedFile.repoRelativePath.replace(/\\/g, "/")}</p>
          <button
            type="button"
            onClick={() => handleCopy(selectedFile.repoRelativePath, `${selectedFile.id}-selected-path`)}
            className="mt-3 rounded-full border border-brand-blue/20 px-3 py-1.5 text-xs font-semibold text-brand-blue hover:bg-brand-blue hover:text-white"
          >
            {copiedId === `${selectedFile.id}-selected-path` ? "Copied path" : "Copy selected path"}
          </button>
        </div>
      ) : null}

      <p className="text-xs text-text-one">
        Tip: copy the path or markup from a card and use it in your local HTML.
      </p>
    </div>
  );
}

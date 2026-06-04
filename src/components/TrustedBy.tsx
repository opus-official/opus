import LabelPill from "./LabelPill";

const logos = Array.from({ length: 30 }, (_, index) => `Partners-${String(index + 1).padStart(2, "0")}.svg`);

export default function TrustedBy() {
  return (
    <section className="w-full px-6 lg:px-12 py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12 lg:gap-16">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6">
          <LabelPill text="We Work With" />

          <h2 className="text-[44px] md:text-[64px] leading-[1.1] tracking-[-0.01em] font-serif text-brand-navy-dark">
            Trusted By
          </h2>
          <p className="max-w-[620px] text-[17px] leading-[1.7] text-text-one">
            These are some of the many clients that have trusted us with their brands.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
          {logos.map((logo, index) => {
            return (
              <div
                key={index}
                className="relative overflow-hidden bg-white rounded-[24px] h-[120px] flex items-center justify-center gap-2 p-3 text-brand-navy-dark md:h-[132px] md:gap-3"
              >
                <img
                  src={`/partners/${logo}`}
                  alt={`Partner logo ${index + 1}`}
                  className="max-h-[100%] w-auto max-w-[100%] object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}) {
  return (
    <div className="max-w-[620px]" data-reveal-stagger>
      <p
        data-scroll-reveal="left"
        className={`mb-5 text-[11px] font-bold uppercase tracking-[0.22em] ${
          light ? "text-[#f3a994]" : "text-[#c9573d]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        data-scroll-reveal="up"
        className={`m-0 font-serif text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.92] tracking-[-0.06em] ${
          light ? "text-white" : "text-[#1b2423]"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          data-scroll-reveal="up"
          className={`mt-6 max-w-[420px] text-base leading-8 ${
            light ? "text-white/70" : "text-[#5d6a66]"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  title,
  description,
  align = "left",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto" : "text-left"} max-w-2xl ${className}`}>
      <h2
        className={`font-display text-4xl sm:text-5xl leading-[0.95] ${
          tone === "dark" ? "text-ink" : "text-paper"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-base sm:text-lg font-body ${
            tone === "dark" ? "text-steel" : "text-paper/75"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

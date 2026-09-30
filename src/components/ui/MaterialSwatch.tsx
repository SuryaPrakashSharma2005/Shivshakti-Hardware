import { SwatchStop } from "@/types/product";

interface MaterialSwatchProps {
  stops: SwatchStop[];
  orientation?: "horizontal" | "vertical";
  showLabels?: boolean;
  className?: string;
  animate?: boolean;
}

/**
 * The site's signature visual motif: a hardware-store "material sample"
 * strip standing in for photography we don't have. Each band represents a
 * product / category's real material colour, not a decorative gradient.
 */
export function MaterialSwatch({
  stops,
  orientation = "horizontal",
  showLabels = false,
  className = "",
  animate = false,
}: MaterialSwatchProps) {
  const isVertical = orientation === "vertical";

  return (
    <div
      className={`flex ${isVertical ? "flex-col h-full w-full" : "flex-row w-full h-full"} overflow-hidden ${className}`}
      role="img"
      aria-label={`Material sample: ${stops.map((s) => s.label).join(", ")}`}
    >
      {stops.map((stop, index) => (
        <div
          key={stop.label + index}
          className={`relative flex-1 ${animate ? "animate-swatch-rise" : ""}`}
          style={{
            backgroundColor: stop.color,
            animationDelay: animate ? `${index * 90}ms` : undefined,
          }}
        >
          {showLabels && (
            <span
              className="absolute bottom-2 left-2 text-[11px] font-body tracking-wide text-white/85 mix-blend-difference"
            >
              {stop.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

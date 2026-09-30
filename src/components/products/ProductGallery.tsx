"use client";

import { useState } from "react";
import { SwatchStop } from "@/types/product";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { Photo } from "@/data/photos";

export function ProductGallery({
  stops,
  name,
  photo,
}: {
  stops: SwatchStop[];
  name: string;
  photo?: Photo;
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative h-72 sm:h-96 rounded-sm border border-line overflow-hidden">
        <PhotoTile photo={photo} swatchStops={[stops[active]]} swatchShowLabels sizes="(min-width: 1024px) 50vw, 100vw" priority />
      </div>
      {!photo && stops.length > 1 && (
        <div className="mt-3 flex gap-2">
          {stops.map((view, index) => (
            <button
              key={view.label + index}
              onClick={() => setActive(index)}
              aria-label={`Show ${view.label} sample for ${name}`}
              className={`w-16 h-16 rounded-sm border ${
                active === index ? "border-ink" : "border-line"
              }`}
              style={{ backgroundColor: view.color }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

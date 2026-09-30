import Image from "next/image";
import { SwatchStop } from "@/types/product";
import { MaterialSwatch } from "@/components/ui/MaterialSwatch";
import { Photo } from "@/data/photos";

interface PhotoTileProps {
  photo?: Photo;
  swatchStops: SwatchStop[];
  swatchShowLabels?: boolean;
  sizes?: string;
  priority?: boolean;
}

export function PhotoTile({
  photo,
  swatchStops,
  swatchShowLabels = false,
  sizes = "(min-width: 1024px) 25vw, 50vw",
  priority = false,
}: PhotoTileProps) {
  if (photo) {
    return (
      <div className="relative w-full h-full">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  return <MaterialSwatch stops={swatchStops} showLabels={swatchShowLabels} />;
}

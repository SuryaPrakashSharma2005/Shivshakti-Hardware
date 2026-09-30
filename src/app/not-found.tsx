import Link from "next/link";
import { PackageSearch } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <PackageSearch className="w-10 h-10 text-steel/50 mx-auto mb-4" />
      <h1 className="font-display text-5xl text-ink">Page Not Found</h1>
      <p className="mt-3 text-steel">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <ButtonLink href="/products">Explore Products</ButtonLink>
        <Link href="/" className="text-sm font-medium text-ink hover:text-rust">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

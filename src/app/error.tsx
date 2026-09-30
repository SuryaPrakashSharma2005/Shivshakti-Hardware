"use client";

import { useEffect } from "react";
import { TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <TriangleAlert className="w-10 h-10 text-rust mx-auto mb-4" />
      <h1 className="font-display text-4xl text-ink">Something Went Wrong</h1>
      <p className="mt-3 text-steel">
        This page couldn&apos;t be loaded. Please try again, or head back to the homepage.
      </p>
      <div className="mt-8">
        <Button onClick={reset}>Try Again</Button>
      </div>
    </div>
  );
}

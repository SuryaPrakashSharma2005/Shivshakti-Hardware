import { PackageSearch } from "lucide-react";

export function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
}: {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 border border-dashed border-line rounded-sm mt-6">
      <PackageSearch className="w-9 h-9 text-steel/50 mb-3" />
      <p className="text-ink font-medium">{title}</p>
      {description && <p className="text-sm text-steel mt-1 max-w-sm">{description}</p>}
      {actionLabel && onAction && (
        <button onClick={onAction} className="mt-4 text-sm text-rust font-medium hover:text-rust-dark">
          {actionLabel}
        </button>
      )}
    </div>
  );
}

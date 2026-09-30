export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 animate-pulse">
      <div className="h-10 w-64 bg-concrete-dark rounded-sm" />
      <div className="mt-4 h-4 w-96 max-w-full bg-concrete-dark rounded-sm" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-72 bg-concrete-dark rounded-sm" />
        ))}
      </div>
    </div>
  );
}

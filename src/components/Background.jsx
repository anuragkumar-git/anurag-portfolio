export default function Background() {
  return (
    <div
      className="fixed inset-0 -z-10
        pointer-events-none
        overflow-hidden"
    >
      {/* Orbit 1 */}
      <div className="absolute inset-0 flex items-center justify-center animate-[orbit_60s_linear_infinite]">
        <div className="absolute top-1/4 left-1/4 w-160 h-160 bg-accent/15 rounded-full translate-x-48 blur-3xl" />
      </div>

      {/* Orbit 2 */}
      <div className="absolute inset-0 flex items-center justify-center animate-[orbit_90s_linear_infinite]">
        <div className="absolute bottom-1/4 right-1/4 w-120 h-120 bg-accent/10 rounded-full translate-x-60 blur-3xl" />
      </div>
    </div>
  );
}

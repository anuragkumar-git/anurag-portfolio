export default function Background() {
  return (
    <div
      className="fixed inset-0 -z-10
        pointer-events-none
        overflow-hidden"
    >
      {/* Orbit 1 */}
      <div className="absolute inset-0 flex items-center justify-center animate-[orbit_60s_linear_infinite]">
        <div className="w-[40rem] h-[40rem] bg-accent/15 rounded-full blur-3xl translate-x-[12rem]" />
      </div>

      {/* Orbit 2 */}
      <div className="absolute inset-0 flex items-center justify-center animate-[orbit_90s_linear_infinite]">
        <div className="w-[30rem] h-[30rem] bg-accent/10 rounded-full blur-3xl translate-x-[15rem]" />
      </div>
    </div>
  );
}

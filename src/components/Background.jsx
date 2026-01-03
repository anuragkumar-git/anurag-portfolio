export default function Background() {
  return (
    <div
      className="fixed inset-0 -z-10
        pointer-events-none
        overflow-hidden"
    >
      {/* Large soft glow */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-3xl" />

      {/* Secondary glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-3xl" />
    </div>
  );
}

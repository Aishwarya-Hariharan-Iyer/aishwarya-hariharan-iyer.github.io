import { Boxes } from "@/components/ui/background-boxes";

export default function Home() {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-100 via-white to-indigo-100 font-sans">
      {/* Ambient glowing gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[50vw] h-[50vw] bg-sky-300/40 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[40vw] h-[40vw] bg-indigo-300/30 blur-[120px] rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Animated boxes */}
      <div className="absolute inset-0">
        <Boxes />
      </div>

      {/* Foreground glass panel */}
      <div className="relative z-10 px-8 py-10 rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-2xl text-center text-slate-700">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Futuristic Glass Interface
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-lg mx-auto">
          Light, airy, and alive — a minimal responsive world of glass and glow.
        </p>
      </div>
    </div>
  );
}

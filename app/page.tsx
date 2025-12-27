import { Boxes } from "@/components/ui/background-boxes";
import HeroGlassPanel from "./components/ui/hero-glasspanel";
import { Navbar } from "./components/ui/navbar";

export default function Home() {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-100 via-white to-indigo-100 font-sans">
      
      {/* Layer 1: Animated background boxes */}
      <div className="absolute inset-0 z-0">
        <Boxes />
      </div>

      {/* Layer 2: Ambient glowing gradients */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/3 left-1/4 w-[50vw] h-[50vw] bg-sky-300/40 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[40vw] h-[40vw] bg-indigo-300/30 blur-[120px] rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Layer 3: Navbar (above background, below hero panel) */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      {/* Layer 4: Foreground hero panel */}
      <div className="relative z-40">
        <HeroGlassPanel />
      </div>
    </div>
  );
}

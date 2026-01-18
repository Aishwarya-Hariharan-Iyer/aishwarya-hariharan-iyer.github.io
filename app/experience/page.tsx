"use client";

import { Timeline } from "@/components/ui/timeline";
import { experiences } from "../data/experience";
import { Navbar } from "../components/ui/navbar";

export default function ExperiencePage() {
  return (
    
    <div className="w-full">
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>
      <Timeline data={experiences} />
    </div>
  );
}

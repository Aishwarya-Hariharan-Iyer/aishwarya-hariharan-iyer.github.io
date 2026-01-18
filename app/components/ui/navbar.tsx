"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MenuItem, Menu } from "@/components/ui/navbar-menu";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 bg-white-100",
        className
      )}
    >
      <Menu setActive={setActive}>

        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        
        <Link href="/education">
          <MenuItem setActive={setActive} active={active} item="Education" />
        </Link>

        <Link href="/projects">
          <MenuItem setActive={setActive} active={active} item="Projects" />
        </Link>

        <Link href="/experience">
          <MenuItem setActive={setActive} active={active} item="Experience" />
        </Link>

        <Link href="/achievements">
          <MenuItem setActive={setActive} active={active} item="Achievements" />
        </Link>
      </Menu>
    </div>
  );
}

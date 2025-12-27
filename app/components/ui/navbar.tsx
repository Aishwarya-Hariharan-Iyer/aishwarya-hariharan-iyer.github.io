"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { MenuItem, HoveredLink, ProductItem, Menu } from "@/components/ui/navbar-menu";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 bg-white-100", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Education"/>
        <MenuItem setActive={setActive} active={active} item="Projects"/>
        <MenuItem setActive={setActive} active={active} item="Experience"/>
        <MenuItem setActive={setActive} active={active} item="Achievements"/>
      </Menu>
    </div>
  );
}

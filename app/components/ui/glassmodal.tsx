"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "motion/react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function GlassModal({
  open,
  onOpenChange,
  trigger,
  title,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" />

        <Dialog.Content asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
              fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              bg-white/70 backdrop-blur-xl
              border border-white/60
              rounded-2xl
              p-8
              shadow-[0_40px_80px_rgba(0,0,0,0.25)]
              max-w-[90vw]
              focus:outline-none
            "
          >
            <VisuallyHidden>
              <Dialog.Title>{title}</Dialog.Title>
            </VisuallyHidden>

            {children}
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

import { motion } from "framer-motion";

export function GlassCard({
  children,
  align,
  accent,
  label,
}: {
  children: React.ReactNode;
  align: "left" | "right"; // used ONLY for animation direction
  accent: "cyan" | "violet";
  label: string;
}) {
  const isLeft = align === "left";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="
        relative max-w-[440px]
        rounded-2xl
        bg-white/75 backdrop-blur-xl
        border border-white/60
        p-8
        shadow-[0_18px_40px_rgba(0,0,0,0.07)]
        text-left
      "
    >
      {/* Accent Edge Glow (purely decorative) */}
      <div
        className={`
          pointer-events-none absolute inset-0 rounded-2xl ring-1
          ${
            accent === "cyan"
              ? "ring-cyan-300/30"
              : "ring-violet-300/30"
          }
        `}
      />

      {/* Label */}
      <h4
        className={`
          mb-4 text-xs uppercase tracking-wider
          ${accent === "cyan" ? "text-cyan-600" : "text-violet-600"}
        `}
      >
        {label}
      </h4>

      {/* Content column – THIS fixes text */}
      <div className="max-w-[360px] leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}

import { motion } from "motion/react";

export function TimelineItem({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-x-12 items-start">
      {/* Node + Title */}
      <div className="relative flex flex-col items-center">
        <div className="h-10 w-10 rounded-full bg-neutral-950 border border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.5)]">
          <div className="h-3 w-3 rounded-full bg-cyan-400" />
        </div>

        <h3 className="mt-6 text-center text-lg font-semibold text-neutral-300">
          {title}
        </h3>
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="
          bg-white
          rounded-xl
          border border-neutral-200
          p-8
          shadow-[0_20px_40px_rgba(0,0,0,0.08)]
        "
      >
        {content}
      </motion.div>
    </div>
  );
}

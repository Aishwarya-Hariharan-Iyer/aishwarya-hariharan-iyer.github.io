interface PageHeaderProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export function PageHeader({
  title,
  subtitle,
  align = "center",
}: PageHeaderProps) {
  return (
    <header
      className={[
        "mb-20",
        align === "center" ? "text-center" : "text-left",
      ].join(" ")}
    >
      <h1 className="text-5xl md:text-6xl font-bold text-neutral-900">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-6 max-w-2xl mx-auto text-neutral-600 text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </header>
  );
}

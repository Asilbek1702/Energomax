interface LoadingProps {
  label?: string;
}

export default function Loading({ label = "Загрузка..." }: LoadingProps) {
  return (
    <div
      className="flex items-center justify-center py-20 font-data text-sm"
      style={{ color: "var(--industrial-text-dim)" }}
    >
      {label}
    </div>
  );
}

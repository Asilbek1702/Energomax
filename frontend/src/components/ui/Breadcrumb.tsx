import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div
      className="w-full py-3 font-data"
      style={{
        backgroundColor: "var(--industrial-surface)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        className="w-full px-4 sm:px-6 lg:px-10 flex items-center gap-2 text-xs flex-wrap"
        style={{ color: "var(--industrial-text-muted)" }}
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <ChevronRight size={11} />}
            {item.href ? (
              <Link to={item.href} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            ) : (
              <span style={{ color: "var(--industrial-text)" }}>{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

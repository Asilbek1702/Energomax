import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function TopBar() {
  return (
    <div
      className="w-full font-data text-xs"
      style={{
        backgroundColor: "#060e1d",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between py-2 gap-2">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="tel:+998712927711"
            className="flex items-center gap-1.5 transition-colors hover:text-accent"
            style={{ color: "var(--industrial-text-dim)" }}
          >
            <Phone size={11} />
            <span>+998 71 292 77 11</span>
          </a>
          <a
            href="mailto:info@energomaxgroup.com"
            className="flex items-center gap-1.5 transition-colors hover:text-accent"
            style={{ color: "var(--industrial-text-dim)" }}
          >
            <Mail size={11} />
            <span>info@energomaxgroup.com</span>
          </a>
          <span
            className="hidden md:flex items-center gap-1.5"
            style={{ color: "var(--industrial-text-muted)" }}
          >
            <MapPin size={11} />
            <span>Ташкент, Узбекистан</span>
          </span>
        </div>
        <div
          className="flex items-center gap-1.5"
          style={{ color: "var(--industrial-text-muted)" }}
        >
          <Clock size={11} />
          <span>Пн–Сб 09:00–18:00</span>
        </div>
      </div>
    </div>
  );
}

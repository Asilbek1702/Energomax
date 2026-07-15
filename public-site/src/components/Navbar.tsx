import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Продукция", href: "/catalog" },
  { label: "О компании", href: "/about" },
  { label: "Контакты", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav
      className="sticky top-0 z-50 w-full font-data"
      style={{
        backgroundColor: "#0A1226",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.5)",
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div
              className="w-8 h-8 flex items-center justify-center"
              style={{
                backgroundColor: "var(--industrial-accent)",
                clipPath: "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)",
              }}
            >
              <Zap size={16} color="#fff" fill="#fff" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-authority text-base tracking-wide font-bold"
                style={{ color: "var(--industrial-text)" }}
              >
                ENERGOMAX
              </span>
              <span
                className="text-[9px] tracking-[0.2em] uppercase"
                style={{ color: "var(--industrial-text-dim)" }}
              >
                Group
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0">
            {navLinks.map((link) => {
              const active = location.pathname === link.href || (link.href !== "/" && location.pathname.startsWith(link.href.split("?")[0]));
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-5 h-16 flex items-center text-sm font-medium tracking-wide transition-colors relative"
                  style={{
                    color: active ? "var(--industrial-accent)" : "var(--industrial-text-dim)",
                    borderBottom: active ? "2px solid var(--industrial-accent)" : "2px solid transparent",
                  }}
                  onMouseEnter={e => {
                    if (!active) {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--industrial-text)";
                    }
                  }}
                  onMouseLeave={e => {
                    if (!active) {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--industrial-text-dim)";
                    }
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="text-xs tracking-widest uppercase font-semibold px-5 py-2.5 transition-all btn-depress"
              style={{
                border: "1px solid var(--industrial-accent)",
                color: "var(--industrial-accent)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--industrial-accent)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--industrial-accent)";
              }}
            >
              Запросить расчёт
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            style={{ color: "var(--industrial-text)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            backgroundColor: "#0A1226",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="block px-6 py-3.5 text-sm font-medium border-b transition-colors"
              style={{
                color: "var(--industrial-text-dim)",
                borderColor: "rgba(255,255,255,0.06)",
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 py-4">
            <Link
              to="/contact"
              className="block text-center text-xs tracking-widest uppercase font-semibold px-5 py-3"
              style={{
                border: "1px solid var(--industrial-accent)",
                color: "var(--industrial-accent)",
              }}
              onClick={() => setMobileOpen(false)}
            >
              Запросить расчёт
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

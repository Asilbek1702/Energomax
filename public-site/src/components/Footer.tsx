import { Link } from "react-router-dom";
import { Zap, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="w-full font-data"
      style={{
        backgroundColor: "#060e1d",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-7 h-7 flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: "var(--industrial-accent)",
                  clipPath: "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)",
                }}
              >
                <Zap size={13} color="#fff" fill="#fff" />
              </div>
              <span className="font-authority font-bold text-sm tracking-wide" style={{ color: "var(--industrial-text)" }}>
                ENERGOMAX GROUP
              </span>
            </div>
            <p className="text-xs leading-relaxed mb-5" style={{ color: "var(--industrial-text-dim)" }}>
              Производство трансформаторов, КТП, щитового оборудования и кранов в Ташкенте. Соответствие ГОСТ и стандартам ISO 9001:2015.
            </p>
            <div className="flex flex-col gap-2 text-xs" style={{ color: "var(--industrial-text-muted)" }}>
              <span className="flex items-center gap-2"><Phone size={11} /> +998 71 292 77 11</span>
              <span className="flex items-center gap-2"><Mail size={11} /> info@energomaxgroup.com</span>
              <span className="flex items-center gap-2"><MapPin size={11} /> Ташкент, Узбекистан</span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-semibold mb-4 pb-2" style={{ color: "var(--industrial-accent)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              Продукция
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs" style={{ color: "var(--industrial-text-dim)" }}>
              {[
                { label: "Силовые трансформаторы", href: "/catalog?cat=transformers" },
                { label: "Трансформаторные подстанции (КТП)", href: "/catalog?cat=substations" },
                { label: "Щитовое оборудование", href: "/catalog?cat=switchgear" },
                { label: "Краны ITALYCRANE", href: "/catalog?cat=cranes" },
              ].map(item => (
                <li key={item.label}>
                  <Link to={item.href} className="transition-colors hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-semibold mb-4 pb-2" style={{ color: "var(--industrial-accent)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              Компания
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs" style={{ color: "var(--industrial-text-dim)" }}>
              <li><Link to="/about" className="transition-colors hover:text-white">О компании</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-white">Контакты</Link></li>
              <li><Link to="/catalog" className="transition-colors hover:text-white">Каталог продукции</Link></li>
            </ul>
          </div>

          {/* Standards */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-semibold mb-4 pb-2" style={{ color: "var(--industrial-accent)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              Сертификация
            </h4>
            <ul className="flex flex-col gap-2 text-xs" style={{ color: "var(--industrial-text-muted)" }}>
              {["Лицензия Госстандарта РУз", "ISO 9001:2015", "ISO 14001:2019", "ISO 45001:2020", "Сертификат UZ.SMT", "ГОСТ Р 52719"].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full inline-block shrink-0" style={{ backgroundColor: "var(--industrial-accent)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)", color: "var(--industrial-text-muted)" }}
        >
          <span>© 2026 Energomax Group. Все права защищены.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

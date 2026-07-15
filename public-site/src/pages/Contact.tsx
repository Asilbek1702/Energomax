import { Link } from "react-router-dom";
import {
  Phone, Mail, MapPin, ChevronRight, Send, Clock,
  Wrench, ShoppingCart, FileSearch, Settings, Truck
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const departments = [
  {
    id: "SUPPORT",
    name: "Техническая поддержка клиентов",
    icon: <Settings size={18} />,
    description: "Консультации по подбору оборудования, техническим параметрам и условиям монтажа.",
    contacts: [
      { name: "Азиз Каримов", role: "Руководитель отдела", email: "support@energomaxgroup.com" },
    ],
    hours: "Пн–Сб 09:00–18:00",
    email: "support@energomaxgroup.com",
    phone: "+998712927711",
    phoneDisplay: "+998 71 292 77 11",
  },
  {
    id: "SALES",
    name: "Отдел продаж",
    icon: <ShoppingCart size={18} />,
    description: "Коммерческие предложения, расчёт стоимости, сроки поставки и условия оплаты.",
    contacts: [
      { name: "Дилноза Юсупова", role: "Менеджер по продажам", email: "sales@energomaxgroup.com" },
    ],
    hours: "Пн–Сб 09:00–18:00",
    email: "sales@energomaxgroup.com",
    phone: "+998712927744",
    phoneDisplay: "+998 71 292 77 44",
  },
  {
    id: "CERT",
    name: "Отдел сертификации",
    icon: <FileSearch size={18} />,
    description: "Сертификаты соответствия, лицензии, документы для тендеров и госзакупок.",
    contacts: [
      { name: "Шерзод Ахмедов", role: "Специалист по сертификации", email: "cert@energomaxgroup.com" },
    ],
    hours: "Пн–Сб 09:00–18:00",
    email: "cert@energomaxgroup.com",
    phone: "+998712927733",
    phoneDisplay: "+998 71 292 77 33",
  },
  {
    id: "SUPPLY",
    name: "Отдел снабжения",
    icon: <Truck size={18} />,
    description: "Закупка комплектующих, логистика поставок и работа с производственными партнёрами.",
    contacts: [
      { name: "Бахтиёр Раимов", role: "Руководитель снабжения", email: "supply@energomaxgroup.com" },
    ],
    hours: "Пн–Сб 09:00–18:00",
    email: "supply@energomaxgroup.com",
    phone: "+998712927755",
    phoneDisplay: "+998 71 292 77 55",
  },
  {
    id: "ACC",
    name: "Бухгалтерия",
    icon: <Wrench size={18} />,
    description: "Счета, акты сверки, договоры и вопросы по оплате.",
    contacts: [
      { name: "Гульнора Исмаилова", role: "Главный бухгалтер", email: "accounting@energomaxgroup.com" },
    ],
    hours: "Пн–Сб 09:00–18:00",
    email: "accounting@energomaxgroup.com",
    phone: "+998712927722",
    phoneDisplay: "+998 71 292 77 22",
  },
];

const office = {
  city: "Ташкент",
  country: "Узбекистан",
  address: "Ташкентская область",
  zip: "68HG+FCG",
  phone: "+998712927711",
  role: "Головной офис и производство",
};

const Contact = () => {
  return (
    <div style={{ backgroundColor: "#0A1226", minHeight: "100vh" }}>
      <TopBar />
      <Navbar />

      {/* Breadcrumb */}
      <div className="w-full py-3 font-data" style={{ backgroundColor: "var(--industrial-surface)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="w-full px-4 sm:px-6 lg:px-10 flex items-center gap-2 text-xs" style={{ color: "var(--industrial-text-muted)" }}>
          <Link to="/" className="hover:text-white transition-colors">Главная</Link>
          <ChevronRight size={11} />
          <span style={{ color: "var(--industrial-text)" }}>Контакты</span>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
        {/* Page Header */}
        <div className="mb-12 pb-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <span className="text-xs uppercase tracking-[0.2em] font-semibold font-data block mb-2" style={{ color: "var(--industrial-accent)" }}>
            Контакты
          </span>
          <h1 className="font-authority text-4xl sm:text-5xl font-bold mb-3" style={{ color: "var(--industrial-text)" }}>
            Телефоны отделов
          </h1>
          <p className="text-sm font-data max-w-xl" style={{ color: "var(--industrial-text-dim)" }}>
            Каждый отдел работает как самостоятельный узел. Обращайтесь напрямую — так быстрее.
          </p>
        </div>

        {/* Department Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
            {departments.map((dept, i) => (
              <div
                key={dept.id}
                className="flex flex-col p-6"
                style={{
                  borderRight: (i + 1) % 3 !== 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  backgroundColor: "var(--industrial-surface)",
                }}
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="w-9 h-9 shrink-0 flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "rgba(77,127,255,0.1)", border: "1px solid rgba(77,127,255,0.3)", color: "var(--industrial-accent)" }}
                  >
                    {dept.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.1em] font-data mb-0.5" style={{ color: "var(--industrial-accent)" }}>
                      {dept.id}
                    </p>
                    <h3 className="font-authority text-base font-bold" style={{ color: "var(--industrial-text)" }}>
                      {dept.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs leading-relaxed mb-5 font-data flex-1" style={{ color: "var(--industrial-text-dim)" }}>
                  {dept.description}
                </p>

                {/* Direct Contacts */}
                <div className="mb-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1rem" }}>
                  <p className="text-xs uppercase tracking-[0.12em] font-semibold mb-2 font-data" style={{ color: "var(--industrial-text-muted)" }}>
                    Контактное лицо
                  </p>
                  {dept.contacts.map(c => (
                    <div key={c.name} className="mb-2 last:mb-0">
                      <p className="text-xs font-semibold font-data" style={{ color: "var(--industrial-text)" }}>{c.name}</p>
                      <p className="text-xs font-data mb-0.5" style={{ color: "var(--industrial-text-muted)" }}>{c.role}</p>
                      <a href={`mailto:${c.email}`} className="text-xs font-data hover:text-white transition-colors" style={{ color: "var(--industrial-text-dim)" }}>
                        {c.email}
                      </a>
                    </div>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex flex-col gap-1.5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "0.75rem" }}>
                  <a href={`tel:${dept.phone}`} className="flex items-center gap-2 text-xs font-data hover:text-white transition-colors" style={{ color: "var(--industrial-text-dim)" }}>
                    <Phone size={10} /> {dept.phoneDisplay}
                  </a>
                  <a href={`mailto:${dept.email}`} className="flex items-center gap-2 text-xs font-data hover:text-white transition-colors" style={{ color: "var(--industrial-text-dim)" }}>
                    <Mail size={10} /> {dept.email}
                  </a>
                  <span className="flex items-center gap-2 text-xs font-data" style={{ color: "var(--industrial-text-muted)" }}>
                    <Clock size={10} /> {dept.hours}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* General Inquiry Form + Office */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
          {/* Form */}
          <div className="p-8 lg:p-10" style={{ borderRight: "1px solid rgba(255,255,255,0.1)", backgroundColor: "var(--industrial-surface)" }}>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.15em] font-semibold font-data block mb-1" style={{ color: "var(--industrial-accent)" }}>
                Заявка
              </span>
              <h2 className="font-authority text-2xl font-bold" style={{ color: "var(--industrial-text)" }}>
                Отправить запрос
              </h2>
            </div>
            <form className="flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Имя"
                  className="px-4 py-3 text-xs font-data bg-transparent outline-none w-full"
                  style={{ border: "1px solid rgba(255,255,255,0.15)", color: "var(--industrial-text)" }}
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="px-4 py-3 text-xs font-data bg-transparent outline-none w-full"
                  style={{ border: "1px solid rgba(255,255,255,0.15)", color: "var(--industrial-text)" }}
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 text-xs font-data bg-transparent outline-none w-full"
                style={{ border: "1px solid rgba(255,255,255,0.15)", color: "var(--industrial-text)" }}
              />
              <select
                className="px-4 py-3 text-xs font-data outline-none w-full"
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "var(--industrial-text-dim)",
                  backgroundColor: "var(--industrial-surface)",
                }}
              >
                <option>Отдел / тема обращения</option>
                {departments.map(d => (
                  <option key={d.id}>{d.name}</option>
                ))}
                <option>Другое</option>
              </select>
              <select
                className="px-4 py-3 text-xs font-data outline-none w-full"
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "var(--industrial-text-dim)",
                  backgroundColor: "var(--industrial-surface)",
                }}
              >
                <option>Интересующая продукция</option>
                <option>Силовые трансформаторы</option>
                <option>Трансформаторные подстанции (КТП)</option>
                <option>Щитовое оборудование</option>
                <option>Краны</option>
              </select>
              <textarea
                placeholder="Опишите требования к оборудованию, параметры объекта или другие детали..."
                rows={5}
                className="px-4 py-3 text-xs font-data bg-transparent outline-none resize-none w-full"
                style={{ border: "1px solid rgba(255,255,255,0.15)", color: "var(--industrial-text)" }}
              />
              <button
                type="submit"
                className="w-full py-3.5 text-xs uppercase tracking-widest font-semibold font-data btn-depress flex items-center justify-center gap-2"
                style={{ backgroundColor: "var(--industrial-accent)", color: "#fff" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#3a6ee8")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--industrial-accent)")}
              >
                <Send size={12} /> Отправить заявку
              </button>
              <p className="text-xs font-data text-center" style={{ color: "var(--industrial-text-muted)" }}>
                Ответ в течение 1 рабочего дня.
              </p>
            </form>
          </div>

          {/* Office */}
          <div style={{ backgroundColor: "var(--industrial-surface)" }}>
            <div className="px-8 lg:px-10 py-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <span className="text-xs uppercase tracking-[0.15em] font-semibold font-data block mb-1" style={{ color: "var(--industrial-accent)" }}>
                Расположение
              </span>
              <h2 className="font-authority text-2xl font-bold" style={{ color: "var(--industrial-text)" }}>
                Головной офис
              </h2>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 px-8 lg:px-10 py-5 hover-row">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-authority font-bold text-sm" style={{ color: "var(--industrial-text)" }}>{office.city}</span>
                    <span
                      className="px-2 py-0.5 text-xs font-data font-medium tracking-wide"
                      style={{ border: "1px solid rgba(77,127,255,0.3)", color: "var(--industrial-accent)", backgroundColor: "rgba(77,127,255,0.07)" }}
                    >
                      {office.role}
                    </span>
                  </div>
                  <p className="text-xs font-data" style={{ color: "var(--industrial-text-muted)" }}>{office.country}</p>
                  <p className="text-xs font-data mt-1" style={{ color: "var(--industrial-text-dim)" }}>{office.address}</p>
                  <p className="text-xs font-data" style={{ color: "var(--industrial-text-dim)" }}>{office.zip}</p>
                </div>
                <div className="flex flex-col justify-center gap-1">
                  <a
                    href={`tel:${office.phone}`}
                    className="flex items-center gap-2 text-xs font-data hover:text-white transition-colors"
                    style={{ color: "var(--industrial-text-dim)" }}
                  >
                    <Phone size={10} /> +998 71 292 77 11
                  </a>
                  <a
                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.1!2d69.2390!3d41.3111"
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-2 text-xs font-data"
                    style={{ color: "var(--industrial-accent)" }}
                  >
                    <MapPin size={10} /> Смотреть на карте
                  </a>
                </div>
              </div>

              <div className="px-8 lg:px-10 pb-8">
                <div style={{ height: "220px", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.1!2d69.2390!3d41.3111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8f501a5d1525%3A0x7c13eb49d31e6b7b!2sEnergomaxgroup!5e0!3m2!1sru!2suz!4v1750000000000!5m2!1sru!2suz"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Energomax Group на карте"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;

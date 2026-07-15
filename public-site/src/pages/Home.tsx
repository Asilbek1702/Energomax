import { Link } from "react-router-dom";
import { ArrowRight, Shield, Cpu, BarChart3, CheckCircle2, FileText, Wrench } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "0.4–35", label: "кВ класс напряжения" },
  { value: "6.3", label: "МВА макс. мощность" },
  { value: "24 000", label: "м² производство" },
  { value: "18", label: "лет на рынке" },
];

const productLines = [
  {
    code: "ТМГ",
    name: "Силовые трансформаторы",
    range: "25–2 500 кВА",
    voltage: "до 35 кВ",
    standard: "ГОСТ Р 52719",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_3108e9495b_ab94883e3ae1f4a6.png",
    specs: [
      { label: "Мощность", val: "25–2 500 кВА" },
      { label: "Класс напряжения", val: "до 35 кВ" },
      { label: "Охлаждение", val: "ONAN / ONAF" },
      { label: "Стандарт", val: "ГОСТ Р 52719" },
    ],
  },
  {
    code: "КТП",
    name: "Трансформаторные подстанции",
    range: "100–3 150 кВА",
    voltage: "6–10 кВ",
    standard: "ГОСТ 14695",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_7ae3e8a3cc_0ebb7c2ff0a17802.png",
    specs: [
      { label: "Мощность", val: "100–3 150 кВА" },
      { label: "Напряжение ВН", val: "6–10 кВ" },
      { label: "Исполнение", val: "БКТП / КТПС" },
      { label: "Стандарт", val: "ГОСТ 14695" },
    ],
  },
  {
    code: "ЩО",
    name: "Щитовое оборудование",
    range: "630–4 000 А",
    voltage: "до 10 кВ",
    standard: "ГОСТ Р 51321",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_e24b921344_de62c07c11bcc32f.png",
    specs: [
      { label: "Номинальный ток", val: "630–4 000 А" },
      { label: "Напряжение", val: "до 10 кВ" },
      { label: "Секций / вводов", val: "1–8" },
      { label: "Стандарт", val: "ГОСТ Р 51321" },
    ],
  },
  {
    code: "КРАН",
    name: "Краны ITALYCRANE",
    range: "1–250 т",
    voltage: "группа A1–A8",
    standard: "ГОСТ 25546",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_e13a61bead_c67bfbf27485ba46.png",
    specs: [
      { label: "Грузоподъёмность", val: "до 250 т" },
      { label: "Пролёт", val: "до 35 м" },
      { label: "Группа режима", val: "A1–A8" },
      { label: "Исполнение", val: "мостовые / козловые" },
    ],
  },
];

const certifications = [
  "ISO 9001:2015", "ISO 14001:2019", "ISO 45001:2020", "ГОСТ Р 52719", "Лицензия Госстандарта РУз", "UZ.SMT.01.0089", "Партнёр Elettromeccanica Piossasco",
];

const Home = () => {
  return (
    <div style={{ backgroundColor: "#0A1226", minHeight: "100vh" }}>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="w-full" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[580px]">
            {/* Left */}
            <div
              className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 lg:py-20"
              style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-px" style={{ backgroundColor: "var(--industrial-accent)" }} />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold font-data" style={{ color: "var(--industrial-accent)" }}>
                  Производство · Ташкент, Узбекистан
                </span>
              </div>
              <h1
                className="font-authority text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ color: "var(--industrial-text)" }}
              >
                Питаем<br />
                <span style={{ color: "var(--industrial-accent)" }}>промышленность</span><br />
                Узбекистана
              </h1>
              <p className="text-sm leading-relaxed mb-8 max-w-md font-data" style={{ color: "var(--industrial-text-dim)" }}>
                Трансформаторы, подстанции и щитовое оборудование для промышленных объектов и городских сетей. Соответствие ГОСТ. Заводские испытания каждой единицы.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <Link
                  to="/catalog"
                  className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-6 py-3 btn-depress transition-all"
                  style={{ backgroundColor: "var(--industrial-accent)", color: "#fff" }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#3a6ee8")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--industrial-accent)")}
                >
                  Смотреть каталог <ArrowRight size={13} />
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-6 py-3 btn-depress transition-all"
                  style={{ border: "1px solid rgba(255,255,255,0.2)", color: "var(--industrial-text-dim)", backgroundColor: "transparent" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--industrial-text-dim)")}
                >
                  Технический запрос
                </Link>
              </div>

              {/* Stats Bar */}
              <div
                className="grid grid-cols-2 sm:grid-cols-4 gap-0"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              >
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-start px-4 py-4"
                    style={{
                      borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                    }}
                  >
                    <span
                      className="font-authority text-2xl sm:text-3xl font-bold mb-1"
                      style={{ color: "var(--industrial-accent)" }}
                    >
                      {s.value}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-data" style={{ color: "var(--industrial-text-muted)" }}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Blueprint */}
            <div className="relative hidden lg:block overflow-hidden">
              <img className="absolute inset-0 w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_3de7536814_6c6b3baac643e536.png" alt="промышленная электрическая подстанция трансформатор чертёж тёмный синий фон" />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to right, #0A1226 0%, rgba(10,18,38,0.4) 40%, rgba(10,18,38,0.2) 100%)",
                }}
              />
              {/* Overlay badge */}
              <div
                className="absolute bottom-8 right-8 px-4 py-3"
                style={{ border: "1px solid rgba(77,127,255,0.4)", backgroundColor: "rgba(10,18,38,0.85)" }}
              >
                <p className="text-xs uppercase tracking-widest mb-1 font-data" style={{ color: "var(--industrial-accent)" }}>Текущая линия</p>
                <p className="text-sm font-data font-semibold" style={{ color: "var(--industrial-text)" }}>ТМГ — класс 35 кВ</p>
                <p className="text-xs mt-1 font-data" style={{ color: "var(--industrial-text-muted)" }}>Охлаждение ONAF / 2 500 кВА</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Lines */}
      <section className="w-full py-16 lg:py-20" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold font-data mb-2 block" style={{ color: "var(--industrial-accent)" }}>
                Линейка продукции
              </span>
              <h2 className="font-authority text-3xl sm:text-4xl font-bold" style={{ color: "var(--industrial-text)" }}>
                Каталог оборудования
              </h2>
            </div>
            <Link
              to="/catalog"
              className="text-xs uppercase tracking-widest font-semibold flex items-center gap-2 font-data shrink-0"
              style={{ color: "var(--industrial-accent)" }}
            >
              Весь каталог <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-0" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
            {productLines.map((p, i) => (
              <Link
                key={p.code}
                to={`/catalog?cat=${p.code.toLowerCase()}`}
                className="group flex flex-col"
                style={{
                  borderRight: i < productLines.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <img
                    src={p.img_url}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,18,38,0.85) 0%, transparent 60%)" }} />
                  <div
                    className="absolute top-3 left-3 px-2 py-0.5 text-xs font-semibold font-data tracking-wider"
                    style={{ backgroundColor: "var(--industrial-accent)", color: "#fff" }}
                  >
                    {p.code}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5" style={{ backgroundColor: "var(--industrial-surface)" }}>
                  <h3 className="font-authority text-base font-bold mb-1" style={{ color: "var(--industrial-text)" }}>
                    {p.name}
                  </h3>
                  <p className="text-xs mb-4 font-data" style={{ color: "var(--industrial-text-muted)" }}>{p.standard}</p>

                  {/* Spec mini-table */}
                  <div className="flex-1" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    {p.specs.map((s) => (
                      <div
                        key={s.label}
                        className="flex justify-between items-center py-2 hover-row"
                        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                      >
                        <span className="text-xs font-data" style={{ color: "var(--industrial-text-muted)" }}>{s.label}</span>
                        <span className="text-xs font-semibold font-data" style={{ color: "var(--industrial-text)" }}>{s.val}</span>
                      </div>
                    ))}
                  </div>

                  <div
                    className="mt-4 flex items-center gap-1.5 text-xs font-semibold font-data uppercase tracking-widest"
                    style={{ color: "var(--industrial-accent)" }}
                  >
                    Подробнее <ArrowRight size={11} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="w-full py-16" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
            {[
              {
                icon: <Shield size={20} />,
                title: "Заводские испытания",
                desc: "Каждая единица проходит полный комплекс приёмо-сдаточных испытаний: измерение сопротивления обмоток, коэффициента трансформации, потерь, тока холостого хода и электрической прочности изоляции.",
              },
              {
                icon: <Cpu size={20} />,
                title: "Инженерная поддержка",
                desc: "Инженеры сопровождают подбор оборудования, расчёт мощности и согласование схем подключения. Технические консультации на этапе тендера и проектирования.",
              },
              {
                icon: <Wrench size={20} />,
                title: "Сервис и монтаж",
                desc: "Пусконаладочные работы, гарантийное и постгарантийное обслуживание, диагностика на объекте. Оперативный выезд бригады по Узбекистану.",
              },
            ].map((c, i) => (
              <div
                key={c.title}
                className="p-8 flex flex-col gap-4"
                style={{ borderRight: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none" }}
              >
                <div className="w-10 h-10 flex items-center justify-center" style={{ border: "1px solid rgba(77,127,255,0.4)", color: "var(--industrial-accent)", backgroundColor: "rgba(77,127,255,0.08)" }}>
                  {c.icon}
                </div>
                <h3 className="font-authority text-lg font-bold" style={{ color: "var(--industrial-text)" }}>{c.title}</h3>
                <p className="text-xs leading-relaxed font-data" style={{ color: "var(--industrial-text-dim)" }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="w-full py-12" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold shrink-0 font-data" style={{ color: "var(--industrial-text-muted)" }}>
              Сертификация
            </span>
            <div className="flex flex-wrap gap-2">
              {certifications.map(cert => (
                <span
                  key={cert}
                  className="px-3 py-1.5 text-xs font-data font-semibold tracking-wide"
                  style={{ border: "1px solid rgba(255,255,255,0.15)", color: "var(--industrial-text-dim)", backgroundColor: "rgba(255,255,255,0.03)" }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full py-16">
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 p-8 lg:p-12"
            style={{ border: "1px solid rgba(77,127,255,0.3)", backgroundColor: "rgba(77,127,255,0.05)" }}
          >
            <div>
              <h2 className="font-authority text-2xl sm:text-3xl font-bold mb-2" style={{ color: "var(--industrial-text)" }}>
                Запросите расчёт
              </h2>
              <p className="text-sm font-data" style={{ color: "var(--industrial-text-dim)" }}>
                Опишите параметры объекта — подберём оптимальную модель за 1 рабочий день.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                to="/contact"
                className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-6 py-3 btn-depress"
                style={{ backgroundColor: "var(--industrial-accent)", color: "#fff" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#3a6ee8")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--industrial-accent)")}
              >
                Отправить заявку <ArrowRight size={13} />
              </Link>
              <a
                href="#"
                className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-6 py-3 btn-depress"
                style={{ border: "1px solid rgba(255,255,255,0.2)", color: "var(--industrial-text-dim)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--industrial-text-dim)")}
              >
                <FileText size={13} /> Скачать каталог PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

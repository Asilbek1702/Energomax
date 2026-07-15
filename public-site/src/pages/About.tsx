import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, Award, Factory, Users } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const facts = [
  { icon: <Factory size={20} />, value: "24 000 м²", label: "производственная площадь" },
  { icon: <Award size={20} />, value: "18 лет", label: "на рынке Узбекистана" },
  { icon: <Users size={20} />, value: "300+", label: "постоянных клиентов" },
];

const About = () => {
  return (
    <div style={{ backgroundColor: "#0A1226", minHeight: "100vh" }}>
      <TopBar />
      <Navbar />

      {/* Breadcrumb */}
      <div className="w-full py-3 font-data" style={{ backgroundColor: "var(--industrial-surface)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="w-full px-4 sm:px-6 lg:px-10 flex items-center gap-2 text-xs" style={{ color: "var(--industrial-text-muted)" }}>
          <Link to="/" className="hover:text-white transition-colors">Главная</Link>
          <ChevronRight size={11} />
          <span style={{ color: "var(--industrial-text)" }}>О компании</span>
        </div>
      </div>

      {/* Header */}
      <section className="w-full py-16 lg:py-20" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold font-data block mb-3" style={{ color: "var(--industrial-accent)" }}>
            Energomax Group
          </span>
          <h1 className="font-authority text-4xl sm:text-5xl font-bold mb-4 max-w-2xl" style={{ color: "var(--industrial-text)" }}>
            Производство электротехнического оборудования в Узбекистане
          </h1>
          <p className="text-sm font-data max-w-xl" style={{ color: "var(--industrial-text-dim)" }}>
            Собственное производство силовых трансформаторов, комплектных подстанций, щитового оборудования и грузоподъёмной техники.
          </p>
        </div>
      </section>

      {/* Facts strip */}
      <section className="w-full py-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
            {facts.map((f, i) => (
              <div
                key={f.label}
                className="flex items-center gap-4 p-6"
                style={{ borderRight: i < facts.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}
              >
                <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ border: "1px solid rgba(77,127,255,0.4)", color: "var(--industrial-accent)", backgroundColor: "rgba(77,127,255,0.08)" }}>
                  {f.icon}
                </div>
                <div>
                  <p className="font-authority text-xl font-bold" style={{ color: "var(--industrial-text)" }}>{f.value}</p>
                  <p className="text-xs font-data" style={{ color: "var(--industrial-text-muted)" }}>{f.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body text */}
      <section className="w-full py-16" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 flex flex-col gap-5">
              <p className="text-sm leading-relaxed font-data" style={{ color: "var(--industrial-text-dim)" }}>
                Группа компаний ENERGOMAX GROUP предлагает высококачественное электротехническое и светотехническое оборудование.
                Каталог продукции включает силовые трансформаторы и комплектные трансформаторные подстанции на класс напряжения
                0.4, 6, 10 и 35 кВ мощностью от 1 кВА до 6.3 МВА, а также распределительные и разъединительные устройства,
                высоковольтные камеры и грузоподъёмное оборудование ITALYCRANE.
              </p>
              <p className="text-sm leading-relaxed font-data" style={{ color: "var(--industrial-text-dim)" }}>
                Вся продукция — собственного производства, комплектующие приобретаются у ведущих производителей мира.
                Производство соответствует международному стандарту QC 100 TQM (Total Quality Management).
                Качеству продукции ENERGOMAX GROUP доверяют более 300 компаний из различных регионов Узбекистана.
              </p>
              <p className="text-sm leading-relaxed font-data" style={{ color: "var(--industrial-text-dim)" }}>
                Строительно-монтажный участок завода оказывает полный комплекс услуг по строительству трансформаторных
                подстанций — от проектирования до пусконаладочных работ и сдачи объекта заказчику.
              </p>
            </div>

            {/* Certifications sidebar */}
            <div style={{ border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "var(--industrial-surface)" }}>
              <div className="px-6 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <h3 className="font-authority text-lg font-bold" style={{ color: "var(--industrial-text)" }}>Сертификация</h3>
              </div>
              <ul className="flex flex-col">
                {[
                  "Лицензия Госстандарта РУз №054537",
                  "Сертификат соответствия СМК №0000075",
                  "ISO 9001:2015",
                  "ISO 14001:2019",
                  "ISO 45001:2020",
                  "Сертификат UZ.SMT.01.0089",
                ].map((c, i, arr) => (
                  <li
                    key={c}
                    className="px-6 py-3 text-xs font-data flex items-start gap-2"
                    style={{ borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none", color: "var(--industrial-text-dim)" }}
                  >
                    <span className="w-1 h-1 rounded-full inline-block shrink-0 mt-1.5" style={{ backgroundColor: "var(--industrial-accent)" }} />
                    {c}
                  </li>
                ))}
              </ul>
              <div className="px-6 py-4">
                <Link to="/contact" className="text-xs font-semibold font-data uppercase tracking-widest flex items-center gap-1.5" style={{ color: "var(--industrial-accent)" }}>
                  Запросить копии документов <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="w-full py-16" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold font-data block mb-6" style={{ color: "var(--industrial-accent)" }}>
            Производство
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
            {[
              "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_3108e9495b_ab94883e3ae1f4a6.png",
              "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_7ae3e8a3cc_0ebb7c2ff0a17802.png",
              "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_e24b921344_de62c07c11bcc32f.png",
            ].map((src, i) => (
              <div key={src} className="h-56 overflow-hidden" style={{ borderRight: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                <img src={src} alt="Производство Energomax" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16">
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 p-8 lg:p-12"
            style={{ border: "1px solid rgba(77,127,255,0.3)", backgroundColor: "rgba(77,127,255,0.05)" }}
          >
            <div>
              <h2 className="font-authority text-2xl sm:text-3xl font-bold mb-2" style={{ color: "var(--industrial-text)" }}>
                Обсудим ваш проект?
              </h2>
              <p className="text-sm font-data" style={{ color: "var(--industrial-text-dim)" }}>
                Свяжитесь с отделом продаж — подберём оборудование под задачи объекта.
              </p>
            </div>
            <Link
              to="/contact"
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-6 py-3 btn-depress shrink-0"
              style={{ backgroundColor: "var(--industrial-accent)", color: "#fff" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#3a6ee8")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--industrial-accent)")}
            >
              Связаться с нами <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

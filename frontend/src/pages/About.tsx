import { Link } from "react-router-dom";
import { ArrowRight, Award, Factory, Users } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/ui/Breadcrumb";

const facts = [
  { icon: <Factory size={20} />, value: "24 000 м²", label: "производственная площадь" },
  { icon: <Award size={20} />, value: "18 лет", label: "на рынке Узбекистана" },
  { icon: <Users size={20} />, value: "300+", label: "постоянных клиентов" },
];

const certifications = [
  { title: "Лицензия Госстандарта РУз", code: "№054537" },
  { title: "Сертификат соответствия СМК", code: "№0000075" },
  { title: "ISO 9001:2015", code: "Система менеджмента качества" },
  { title: "ISO 14001:2019", code: "Экологический менеджмент" },
  { title: "ISO 45001:2020", code: "Охрана труда" },
  { title: "Сертификат UZ.SMT", code: "UZ.SMT.01.0089" },
  { title: "ГОСТ Р 52719", code: "Силовые трансформаторы" },
  { title: "ГОСТ 14695", code: "Комплектные подстанции" },
  { title: "ГОСТ Р 51321", code: "Щитовое оборудование" },
  { title: "ГОСТ 25546", code: "Грузоподъёмные краны" },
];

export default function About() {
  return (
    <PageLayout>
      <Breadcrumb
        items={[
          { label: "Главная", href: "/home" },
          { label: "О компании" },
        ]}
      />

      <section
        className="w-full py-16 lg:py-20"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold font-data text-accent block mb-3">
            Energomax Group
          </span>
          <h1
            className="font-authority text-4xl sm:text-5xl font-bold mb-4 max-w-2xl"
            style={{ color: "var(--industrial-text)" }}
          >
            Производство электротехнического оборудования в Узбекистане
          </h1>
          <p
            className="text-sm font-data max-w-xl"
            style={{ color: "var(--industrial-text-dim)" }}
          >
            Собственное производство силовых трансформаторов, комплектных подстанций,
            щитового оборудования и грузоподъёмной техники ITALYCRANE.
          </p>
        </div>
      </section>

      <section
        className="w-full py-10"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-0"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {facts.map((f, i) => (
              <div
                key={f.label}
                className="flex items-center gap-4 p-6"
                style={{
                  borderRight:
                    i < facts.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center shrink-0"
                  style={{
                    border: "1px solid rgba(77,127,255,0.4)",
                    color: "var(--industrial-accent)",
                    backgroundColor: "rgba(77,127,255,0.08)",
                  }}
                >
                  {f.icon}
                </div>
                <div>
                  <p
                    className="font-authority text-xl font-bold"
                    style={{ color: "var(--industrial-text)" }}
                  >
                    {f.value}
                  </p>
                  <p
                    className="text-xs font-data"
                    style={{ color: "var(--industrial-text-muted)" }}
                  >
                    {f.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="w-full py-16"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 flex flex-col gap-5">
              <p
                className="text-sm leading-relaxed font-data"
                style={{ color: "var(--industrial-text-dim)" }}
              >
                Группа компаний ENERGOMAX GROUP предлагает высококачественное
                электротехническое и светотехническое оборудование. Каталог продукции
                включает силовые трансформаторы и комплектные трансформаторные подстанции
                на класс напряжения 0.4, 6, 10 и 35 кВ мощностью от 1 кВА до 6.3 МВА, а
                также распределительные и разъединительные устройства, высоковольтные камеры
                и грузоподъёмное оборудование ITALYCRANE.
              </p>
              <p
                className="text-sm leading-relaxed font-data"
                style={{ color: "var(--industrial-text-dim)" }}
              >
                Вся продукция — собственного производства, комплектующие приобретаются у
                ведущих производителей мира. Производство соответствует международному
                стандарту QC 100 TQM (Total Quality Management). Качеству продукции
                ENERGOMAX GROUP доверяют более 300 компаний из различных регионов
                Узбекистана.
              </p>
              <p
                className="text-sm leading-relaxed font-data"
                style={{ color: "var(--industrial-text-dim)" }}
              >
                Помимо производства, группа компаний располагает строительно-монтажным
                подразделением, выполняющим полный цикл работ: проектирование, поставку,
                монтаж и пусконаладку электрооборудования на объектах заказчика по всей
                территории Республики Узбекистан.
              </p>
            </div>
            <div
              className="p-6"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                backgroundColor: "var(--industrial-surface)",
              }}
            >
              <p
                className="text-xs uppercase tracking-widest font-data mb-4"
                style={{ color: "var(--industrial-text-muted)" }}
              >
                Партнёры
              </p>
              <ul className="flex flex-col gap-3 text-sm font-data" style={{ color: "var(--industrial-text-dim)" }}>
                <li>Elettromeccanica Piossasco (Италия)</li>
                <li>ITALYCRANE — грузоподъёмная техника</li>
                <li>ABB, Schneider Electric — комплектующие</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <h2
            className="font-authority text-2xl font-bold mb-8"
            style={{ color: "var(--industrial-text)" }}
          >
            Сертификация и лицензии
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {certifications.map((cert, i) => (
              <div
                key={cert.title}
                className="p-5 hover-row"
                style={{
                  borderRight:
                    (i + 1) % 3 !== 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p
                  className="text-sm font-data font-semibold mb-1"
                  style={{ color: "var(--industrial-text)" }}
                >
                  {cert.title}
                </p>
                <p className="text-xs font-data" style={{ color: "var(--industrial-text-muted)" }}>
                  {cert.code}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-accent hover:underline"
            >
              Смотреть каталог продукции <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

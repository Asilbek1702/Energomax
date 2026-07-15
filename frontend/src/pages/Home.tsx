import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Cpu,
  BarChart3,
  CheckCircle2,
  FileText,
  Wrench,
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { CATEGORIES, PRODUCT_LINE_IMAGES } from "@/constants/categories";
import type { Category } from "@/types/product";

const stats = [
  { value: "0.4–35", label: "кВ класс напряжения" },
  { value: "6.3", label: "МВА макс. мощность" },
  { value: "24 000", label: "м² производство" },
  { value: "18", label: "лет на рынке" },
];

const productLines: {
  code: string;
  category: Category;
  name: string;
  range: string;
  voltage: string;
  standard: string;
  specs: { label: string; val: string }[];
}[] = [
  {
    code: "ТМГ",
    category: "transformers",
    name: "Силовые трансформаторы",
    range: "25–2 500 кВА",
    voltage: "до 35 кВ",
    standard: "ГОСТ Р 52719",
    specs: [
      { label: "Мощность", val: "25–2 500 кВА" },
      { label: "Класс напряжения", val: "до 35 кВ" },
      { label: "Охлаждение", val: "ONAN / ONAF" },
      { label: "Стандарт", val: "ГОСТ Р 52719" },
    ],
  },
  {
    code: "КТП",
    category: "substations",
    name: "Трансформаторные подстанции",
    range: "100–3 150 кВА",
    voltage: "6–10 кВ",
    standard: "ГОСТ 14695",
    specs: [
      { label: "Мощность", val: "100–3 150 кВА" },
      { label: "Напряжение ВН", val: "6–10 кВ" },
      { label: "Исполнение", val: "БКТП / КТПС" },
      { label: "Стандарт", val: "ГОСТ 14695" },
    ],
  },
  {
    code: "ЩО",
    category: "switchgear",
    name: "Щитовое оборудование",
    range: "630–4 000 А",
    voltage: "до 10 кВ",
    standard: "ГОСТ Р 51321",
    specs: [
      { label: "Номинальный ток", val: "630–4 000 А" },
      { label: "Напряжение", val: "до 10 кВ" },
      { label: "Секций / вводов", val: "1–8" },
      { label: "Стандарт", val: "ГОСТ Р 51321" },
    ],
  },
  {
    code: "КРАН",
    category: "cranes",
    name: "Краны ITALYCRANE",
    range: "1–250 т",
    voltage: "группа A1–A8",
    standard: "ГОСТ 25546",
    specs: [
      { label: "Грузоподъёмность", val: "до 250 т" },
      { label: "Пролёт", val: "до 35 м" },
      { label: "Группа режима", val: "A1–A8" },
      { label: "Исполнение", val: "мостовые / козловые" },
    ],
  },
];

const certifications = [
  "ISO 9001:2015",
  "ISO 14001:2019",
  "ISO 45001:2020",
  "ГОСТ Р 52719",
  "Лицензия Госстандарта РУз",
  "UZ.SMT.01.0089",
  "Партнёр Elettromeccanica Piossasco",
];

const capabilities = [
  {
    icon: <Shield size={18} />,
    title: "Заводские испытания",
    text: "Приёмо-сдаточные испытания каждой единицы: измерение сопротивления обмоток, потерь холостого хода и КЗ, испытание изоляции, проверка группы соединения и коэффициента трансформации.",
  },
  {
    icon: <Cpu size={18} />,
    title: "Инженерная поддержка",
    text: "Подбор оборудования на стадии тендера и проектирования. Расчёт нагрузок, выбор схемы питания, согласование технических условий с энергоснабжающей организацией.",
  },
  {
    icon: <Wrench size={18} />,
    title: "Сервис и монтаж",
    text: "Шеф-монтаж, пусконаладка, гарантийное и постгарантийное обслуживание. Выездные бригады по всей территории Узбекистана.",
  },
];

export default function Home() {
  return (
    <PageLayout>
      {/* Hero */}
      <section
        className="w-full"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[580px]">
            <div
              className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 lg:py-20"
              style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div
                  className="w-8 h-px"
                  style={{ backgroundColor: "var(--industrial-accent)" }}
                />
                <span
                  className="text-xs uppercase tracking-[0.2em] font-semibold font-data text-accent"
                >
                  Производство · Ташкент, Узбекистан
                </span>
              </div>
              <h1
                className="font-authority text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ color: "var(--industrial-text)" }}
              >
                Питаем
                <br />
                <span className="text-accent">промышленность</span>
                <br />
                Узбекистана
              </h1>
              <p
                className="text-sm leading-relaxed mb-8 max-w-md font-data"
                style={{ color: "var(--industrial-text-dim)" }}
              >
                Трансформаторы, подстанции и щитовое оборудование для промышленных
                объектов и городских сетей. Соответствие ГОСТ. Заводские испытания
                каждой единицы.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <Link
                  to="/catalog"
                  className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-6 py-3 btn-depress transition-colors bg-industrial-accent text-white hover:bg-[#3a6ee8]"
                >
                  Смотреть каталог <ArrowRight size={13} />
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-6 py-3 btn-depress border border-industrial-accent text-accent hover:bg-industrial-accent hover:text-white transition-colors"
                >
                  Запросить расчёт
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 industrial-border">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className="px-4 py-4"
                    style={{
                      borderRight:
                        i < stats.length - 1
                          ? "1px solid rgba(255,255,255,0.1)"
                          : "none",
                    }}
                  >
                    <p
                      className="font-authority text-xl font-bold"
                      style={{ color: "var(--industrial-text)" }}
                    >
                      {s.value}
                    </p>
                    <p
                      className="text-[10px] font-data mt-0.5"
                      style={{ color: "var(--industrial-text-muted)" }}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="relative overflow-hidden min-h-[320px] lg:min-h-0"
              style={{ backgroundColor: "var(--industrial-surface)" }}
            >
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_3108e9495b_ab94883e3ae1f4a6.png"
                alt="Силовой трансформатор Energomax"
                className="w-full h-full object-cover opacity-90"
              />
              <div
                className="absolute bottom-0 left-0 right-0 px-6 py-4 font-data text-xs"
                style={{
                  background: "linear-gradient(transparent, rgba(10,18,38,0.95))",
                  color: "var(--industrial-text-dim)",
                }}
              >
                <span className="text-accent font-semibold">ТМГ-630</span> · Силовой
                трансформатор 630 кВА · ГОСТ Р 52719
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product lines */}
      <section
        className="w-full py-16 lg:py-20"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold font-data text-accent block mb-2">
                Каталог
              </span>
              <h2
                className="font-authority text-3xl sm:text-4xl font-bold"
                style={{ color: "var(--industrial-text)" }}
              >
                Линейка продукции
              </h2>
            </div>
            <Link
              to="/catalog"
              className="flex items-center gap-1 text-xs uppercase tracking-widest font-semibold font-data text-accent hover:underline"
            >
              Весь каталог <ArrowRight size={12} />
            </Link>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {productLines.map((line, i) => (
              <Link
                key={line.code}
                to={`/catalog?cat=${line.category}`}
                className="group hover-row transition-colors"
                style={{
                  borderRight:
                    i < productLines.length - 1
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "none",
                }}
              >
                <div
                  className="h-40 overflow-hidden"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <img
                    src={PRODUCT_LINE_IMAGES[line.category]}
                    alt={line.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-xs font-data font-semibold"
                      style={{ color: "var(--industrial-accent)" }}
                    >
                      {line.code}
                    </span>
                    <span
                      className="text-[10px] font-data"
                      style={{ color: "var(--industrial-text-muted)" }}
                    >
                      {line.standard}
                    </span>
                  </div>
                  <h3
                    className="font-authority text-base font-bold mb-3"
                    style={{ color: "var(--industrial-text)" }}
                  >
                    {line.name}
                  </h3>
                  <div className="flex flex-col gap-1">
                    {line.specs.map((s) => (
                      <div
                        key={s.label}
                        className="flex justify-between text-[11px] font-data"
                      >
                        <span style={{ color: "var(--industrial-text-muted)" }}>
                          {s.label}
                        </span>
                        <span style={{ color: "var(--industrial-text-dim)" }}>
                          {s.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section
        className="w-full py-16"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold font-data text-accent block mb-2">
            Сервис
          </span>
          <h2
            className="font-authority text-3xl font-bold mb-10"
            style={{ color: "var(--industrial-text)" }}
          >
            Возможности производства
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-0"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className="p-6 lg:p-8"
                style={{
                  borderRight:
                    i < capabilities.length - 1
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "none",
                }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center mb-4"
                  style={{
                    border: "1px solid rgba(77,127,255,0.4)",
                    color: "var(--industrial-accent)",
                    backgroundColor: "rgba(77,127,255,0.08)",
                  }}
                >
                  {cap.icon}
                </div>
                <h3
                  className="font-authority text-lg font-bold mb-3"
                  style={{ color: "var(--industrial-text)" }}
                >
                  {cap.title}
                </h3>
                <p
                  className="text-xs leading-relaxed font-data"
                  style={{ color: "var(--industrial-text-dim)" }}
                >
                  {cap.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section
        className="w-full py-12"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-center gap-3">
            <FileText size={16} style={{ color: "var(--industrial-accent)" }} />
            {certifications.map((cert) => (
              <span
                key={cert}
                className="flex items-center gap-1.5 text-xs font-data px-3 py-1.5"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "var(--industrial-text-dim)",
                }}
              >
                <CheckCircle2 size={11} style={{ color: "var(--industrial-positive)" }} />
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 lg:py-20">
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-0"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div
              className="p-8 lg:p-12 flex flex-col justify-center"
              style={{ backgroundColor: "var(--industrial-surface)" }}
            >
              <BarChart3
                size={24}
                className="mb-4"
                style={{ color: "var(--industrial-accent)" }}
              />
              <h2
                className="font-authority text-2xl lg:text-3xl font-bold mb-4"
                style={{ color: "var(--industrial-text)" }}
              >
                Нужен расчёт для тендера?
              </h2>
              <p
                className="text-sm font-data mb-6"
                style={{ color: "var(--industrial-text-dim)" }}
              >
                Отправьте техническое задание — подготовим коммерческое предложение с
                полной спецификацией, сроками поставки и сертификатами в течение 2
                рабочих дней.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-6 py-3 w-fit bg-industrial-accent text-white btn-depress"
              >
                Связаться с отделом продаж <ArrowRight size={13} />
              </Link>
            </div>
            <div
              className="p-8 lg:p-12"
              style={{
                backgroundColor: "var(--industrial-surface-2)",
                borderLeft: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <p
                className="text-xs uppercase tracking-widest font-data mb-4"
                style={{ color: "var(--industrial-text-muted)" }}
              >
                Категории продукции
              </p>
              <ul className="flex flex-col gap-3">
                {(Object.entries(CATEGORIES) as [Category, string][]).map(
                  ([key, label]) => (
                    <li key={key}>
                      <Link
                        to={`/catalog?cat=${key}`}
                        className="flex items-center justify-between text-sm font-data hover:text-accent transition-colors"
                        style={{ color: "var(--industrial-text-dim)" }}
                      >
                        {label}
                        <ArrowRight size={14} />
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

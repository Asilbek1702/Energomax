import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, Download, Send, ZoomIn, Phone, Mail, Shield } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const productData: Record<string, any> = {
  "tmg-100": {
    code: "ТМГ-100",
    series: "Трансформаторы",
    fullName: "Силовой трансформатор ТМГ-100",
    category: "Силовой трансформатор",
    headline: "Трёхфазный, масляный, естественное охлаждение",
    standard: "ГОСТ Р 52719",
    status: "В производстве",
    lead: "8–12 недель",
    certifications: ["ГОСТ Р 52719", "Сертификат UZ.SMT", "ISO 9001:2015"],
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_a29ddb12bc_5292ccd471f2f581.png",
    gallery: [
      { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_ae15226af7_9b10f9fb330a4dbe.png"},
      { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_0726987b75_6870ebaa1d17f37d.png"},
      { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_441ff1aff0_11842e4b1c974d34.png"},
    ],
    specs: {
      "Электрические": [
        { label: "Номинальная мощность", value: "100 кВА" },
        { label: "Напряжение ВН", value: "10 000 В ±5%" },
        { label: "Напряжение НН", value: "400/231 В" },
        { label: "Частота", value: "50 Гц" },
        { label: "Схема соединения", value: "Y/Yн-0" },
        { label: "Потери холостого хода", value: "210 Вт" },
        { label: "Потери короткого замыкания", value: "1 450 Вт" },
        { label: "Ток холостого хода", value: "1.8%" },
      ],
      "Механические": [
        { label: "Тип охлаждения", value: "ONAN" },
        { label: "Полная масса", value: "480 кг" },
        { label: "Масса масла", value: "135 кг" },
        { label: "Габариты (Д×Ш×В)", value: "820×580×1040 мм" },
        { label: "Степень защиты", value: "IP54" },
        { label: "Климатическое исполнение", value: "У1" },
      ],
    },
  },
  "tmg-630": {
    code: "ТМГ-630",
    series: "Трансформаторы",
    fullName: "Силовой трансформатор ТМГ-630",
    category: "Силовой трансформатор",
    headline: "Трёхфазный, масляный, естественное охлаждение",
    standard: "ГОСТ Р 52719",
    status: "В производстве",
    lead: "10–14 недель",
    certifications: ["ГОСТ Р 52719", "Сертификат UZ.SMT", "ISO 9001:2015"],
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_d7abe9b296_cb857d6ba9a6d1b1.png",
    gallery: [
      { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_74be7f006e_cd42a61902a44559.png"},
      { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_87d7abdbac_abb76b00c748f476.png"},
      { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_8b6b2c3ffd_61f5b30a89cd3c11.png"},
    ],
    specs: {
      "Электрические": [
        { label: "Номинальная мощность", value: "630 кВА" },
        { label: "Напряжение ВН", value: "10 000 В ±5%" },
        { label: "Напряжение НН", value: "400/231 В" },
        { label: "Частота", value: "50 Гц" },
        { label: "Потери холостого хода", value: "860 Вт" },
        { label: "Потери короткого замыкания", value: "6 200 Вт" },
      ],
      "Механические": [
        { label: "Тип охлаждения", value: "ONAN" },
        { label: "Полная масса", value: "1 850 кг" },
        { label: "Масса масла", value: "520 кг" },
        { label: "Габариты (Д×Ш×В)", value: "1380×890×1680 мм" },
        { label: "Степень защиты", value: "IP54" },
      ],
    },
  },
  "tmg-2500": {
    code: "ТМГ-2500",
    series: "Трансформаторы",
    fullName: "Силовой трансформатор ТМГ-2500",
    category: "Силовой трансформатор",
    headline: "Трёхфазный, масляный, с обдувом",
    standard: "ГОСТ Р 52719",
    status: "Под заказ",
    lead: "16–20 недель",
    certifications: ["ГОСТ Р 52719", "Сертификат UZ.SMT", "ISO 9001:2015"],
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_f8e5d1baeb_ff4d77bcc97ab01d.png",
    gallery: [
      { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_65b3ea9bd6_ce096212d111e2ce.png"},
      { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b28d05374f_8427d975cbe5d504.png"},
      { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_0f917330c9_743f7c5e4521dcbb.png"},
    ],
    specs: {
      "Электрические": [
        { label: "Номинальная мощность", value: "2 500 кВА" },
        { label: "Напряжение ВН", value: "35 000 В ±5%" },
        { label: "Напряжение НН", value: "10 000 В" },
        { label: "Потери холостого хода", value: "2 850 Вт" },
        { label: "Потери короткого замыкания", value: "17 800 Вт" },
      ],
      "Механические": [
        { label: "Тип охлаждения", value: "ONAF" },
        { label: "Полная масса", value: "5 200 кг" },
        { label: "Масса масла", value: "1 440 кг" },
        { label: "Степень защиты", value: "IP44" },
      ],
    },
  },
  "eco-1000": {
    code: "ECO-1000",
    series: "Трансформаторы",
    fullName: "Трансформатор с литой изоляцией ECO-1000",
    category: "Сухой трансформатор",
    headline: "Трёхфазный, сухой, литая изоляция",
    standard: "ГОСТ Р 52719",
    status: "В производстве",
    lead: "12–16 недель",
    certifications: ["ГОСТ Р 52719", "ISO 9001:2015"],
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_8d1930f55b_e5e23a68e75dba04.png",
    gallery: [
      { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_65b3ea9bd6_ce096212d111e2ce.png"},
      { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b28d05374f_8427d975cbe5d504.png"},
    ],
    specs: {
      "Электрические": [
        { label: "Номинальная мощность", value: "1 000 кВА" },
        { label: "Напряжение ВН", value: "10 000 В ±5%" },
        { label: "Напряжение НН", value: "400/231 В" },
      ],
      "Механические": [
        { label: "Тип охлаждения", value: "AN (сухой)" },
        { label: "Полная масса", value: "2 100 кг" },
        { label: "Степень защиты", value: "IP23" },
      ],
    },
  },
  "ktpb-500": {
    code: "КТПБ-500",
    series: "Подстанции",
    fullName: "Блочная трансформаторная подстанция КТПБ-500",
    category: "Комплектная трансформаторная подстанция",
    headline: "Блочное исполнение, наружная установка",
    standard: "ГОСТ 14695",
    status: "В производстве",
    lead: "10–14 недель",
    certifications: ["ГОСТ 14695", "Сертификат UZ.SMT", "ISO 9001:2015"],
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_7ae3e8a3cc_2b58e1fcc4e857e5.png",
    gallery: [
      { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_15cc27e074_adf97aeceedbe1a4.png"},
    ],
    specs: {
      "Электрические": [
        { label: "Мощность трансформатора", value: "500 кВА" },
        { label: "Напряжение ВН", value: "10 кВ" },
        { label: "Напряжение НН", value: "0.4 кВ" },
      ],
      "Механические": [
        { label: "Тип КТП", value: "Блочная (БКТП)" },
        { label: "Исполнение", value: "наружное" },
        { label: "Степень защиты", value: "IP54" },
      ],
    },
  },
  "ktps-1600": {
    code: "КТПС-1600",
    series: "Подстанции",
    fullName: "Столбовая трансформаторная подстанция КТПС-1600",
    category: "Комплектная трансформаторная подстанция",
    headline: "Столбовое исполнение",
    standard: "ГОСТ 14695",
    status: "В производстве",
    lead: "10–14 недель",
    certifications: ["ГОСТ 14695", "ISO 9001:2015"],
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_15cc27e074_adf97aeceedbe1a4.png",
    gallery: [
      { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_7ae3e8a3cc_2b58e1fcc4e857e5.png"},
    ],
    specs: {
      "Электрические": [
        { label: "Мощность трансформатора", value: "1 600 кВА" },
        { label: "Напряжение ВН", value: "6 кВ" },
        { label: "Напряжение НН", value: "0.4 кВ" },
      ],
      "Механические": [
        { label: "Тип КТП", value: "Столбовая (КТПС)" },
        { label: "Степень защиты", value: "IP44" },
      ],
    },
  },
  "scho-70": {
    code: "ЩО-70",
    series: "Щитовое оборудование",
    fullName: "Щитовое оборудование ЩО-70",
    category: "Низковольтное щитовое оборудование",
    headline: "Типовое исполнение, распределение до 1 кВ",
    standard: "ГОСТ Р 51321",
    status: "В производстве",
    lead: "6–10 недель",
    certifications: ["ГОСТ Р 51321", "ISO 9001:2015"],
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_e13a61bead_b463fdf51432150d.png",
    gallery: [
      { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_1f7fa2602a_d2f79f2869492cd4.png"},
    ],
    specs: {
      "Электрические": [
        { label: "Номинальный ток", value: "1 600 А" },
        { label: "Номинальное напряжение", value: "до 1 кВ" },
      ],
      "Механические": [
        { label: "Тип щита", value: "ЩО-70" },
        { label: "Секций / вводов", value: "1–4" },
        { label: "Степень защиты", value: "IP31" },
      ],
    },
  },
  "grsch-4000": {
    code: "ГРЩ-4000",
    series: "Щитовое оборудование",
    fullName: "Главный распределительный щит ГРЩ-4000",
    category: "Низковольтное щитовое оборудование",
    headline: "Индивидуальное исполнение по схеме заказчика",
    standard: "ГОСТ Р 51321",
    status: "Под заказ",
    lead: "8–12 недель",
    certifications: ["ГОСТ Р 51321", "ISO 9001:2015"],
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_1f7fa2602a_d2f79f2869492cd4.png",
    gallery: [
      { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_e13a61bead_b463fdf51432150d.png"},
    ],
    specs: {
      "Электрические": [
        { label: "Номинальный ток", value: "4 000 А" },
        { label: "Номинальное напряжение", value: "до 1 кВ" },
      ],
      "Механические": [
        { label: "Тип щита", value: "ГРЩ" },
        { label: "Секций / вводов", value: "до 8" },
        { label: "Степень защиты", value: "IP41" },
      ],
    },
  },
  "kran-most-50": {
    code: "МК-50",
    series: "Краны",
    fullName: "Мостовой кран одногирдерный МК-50",
    category: "Грузоподъёмное оборудование",
    headline: "ITALYCRANE — мостовой, одногирдерный",
    standard: "ГОСТ 25546",
    status: "Под заказ",
    lead: "14–20 недель",
    certifications: ["ГОСТ 25546"],
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_c2bfc2e800_89dd08cf676f0857.png",
    gallery: [
      { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_8d1930f55b_e5e23a68e75dba04.png"},
    ],
    specs: {
      "Электрические": [
        { label: "Управление", value: "радиоуправление / кабина" },
      ],
      "Механические": [
        { label: "Грузоподъёмность", value: "до 50 т" },
        { label: "Пролёт", value: "до 35 м" },
        { label: "Группа режима", value: "A1–A8" },
        { label: "Исполнение", value: "одногирдерное" },
      ],
    },
  },
  "kran-kozl-100": {
    code: "КК-100",
    series: "Краны",
    fullName: "Козловой кран двухгирдерный КК-100",
    category: "Грузоподъёмное оборудование",
    headline: "ITALYCRANE — козловой, двухгирдерный",
    standard: "ГОСТ 25546",
    status: "Под заказ",
    lead: "16–22 недели",
    certifications: ["ГОСТ 25546"],
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_93c3d195b9_8a5809c097c1e42d.png",
    gallery: [
      { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_c2bfc2e800_89dd08cf676f0857.png"},
    ],
    specs: {
      "Электрические": [
        { label: "Управление", value: "радиоуправление / кабина" },
      ],
      "Механические": [
        { label: "Грузоподъёмность", value: "до 100 т" },
        { label: "Пролёт", value: "до 35 м" },
        { label: "Группа режима", value: "A1–A8" },
        { label: "Исполнение", value: "двухгирдерное" },
      ],
    },
  },
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? productData[id] : null;
  const [activeSection, setActiveSection] = useState("Электрические");
  const [galleryIndex, setGalleryIndex] = useState(0);

  if (!product) {
    return (
      <div style={{ backgroundColor: "#0A1226", minHeight: "100vh" }}>
        <TopBar />
        <Navbar />
        <div className="w-full px-10 py-32 text-center">
          <p className="font-authority text-3xl" style={{ color: "var(--industrial-text)" }}>Товар не найден</p>
          <Link to="/catalog" className="text-sm font-data mt-4 inline-block" style={{ color: "var(--industrial-accent)" }}>← Вернуться в каталог</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const sections = Object.keys(product.specs);
  const currentSection = product.specs[activeSection] ? activeSection : sections[0];

  return (
    <div style={{ backgroundColor: "#0A1226", minHeight: "100vh" }}>
      <TopBar />
      <Navbar />

      {/* Breadcrumb */}
      <div className="w-full py-3 font-data" style={{ backgroundColor: "var(--industrial-surface)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="w-full px-4 sm:px-6 lg:px-10 flex items-center gap-2 text-xs" style={{ color: "var(--industrial-text-muted)" }}>
          <Link to="/" className="hover:text-white transition-colors">Главная</Link>
          <ChevronRight size={11} />
          <Link to="/catalog" className="hover:text-white transition-colors">Каталог</Link>
          <ChevronRight size={11} />
          <span style={{ color: "var(--industrial-text)" }}>{product.code}</span>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-10 py-8">
        {/* Title Row */}
        <div
          className="mb-0 pb-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span
                className="px-2 py-0.5 text-xs font-semibold tracking-wider font-data"
                style={{ backgroundColor: "var(--industrial-accent)", color: "#fff" }}
              >
                {product.series}
              </span>
              <span className="text-xs font-data" style={{ color: "var(--industrial-text-muted)" }}>{product.category}</span>
              <span
                className="px-2 py-0.5 text-xs font-data tracking-wide"
                style={{
                  border: "1px solid rgba(34,197,94,0.4)",
                  color: "#22C55E",
                  backgroundColor: "rgba(34,197,94,0.07)",
                }}
              >
                {product.status}
              </span>
            </div>
            <h1 className="font-authority text-3xl sm:text-4xl font-bold mb-1" style={{ color: "var(--industrial-text)" }}>
              {product.fullName}
            </h1>
            <p className="text-sm font-data" style={{ color: "var(--industrial-text-dim)" }}>{product.headline}</p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            <a
              href="#quote"
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-5 py-2.5 font-data btn-depress"
              style={{ backgroundColor: "var(--industrial-accent)", color: "#fff" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#3a6ee8")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--industrial-accent)")}
            >
              <Send size={12} /> Запросить цену
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-5 py-2.5 font-data btn-depress"
              style={{ border: "1px solid rgba(255,255,255,0.2)", color: "var(--industrial-text-dim)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--industrial-text-dim)")}
            >
              <Download size={12} /> PDF спецификация
            </a>
          </div>
        </div>

        {/* Main 2-column dossier layout */}
        <div className="flex flex-col xl:flex-row gap-0 items-start">
          {/* LEFT — Specs + Gallery */}
          <div className="flex-1 min-w-0" style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}>
            {/* Section Tabs */}
            <div className="flex overflow-x-auto" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              {sections.map(sec => (
                <button
                  key={sec}
                  className="px-5 py-3.5 text-xs uppercase tracking-wider font-semibold font-data shrink-0 transition-colors"
                  style={{
                    color: currentSection === sec ? "var(--industrial-accent)" : "var(--industrial-text-dim)",
                    borderBottom: currentSection === sec ? "2px solid var(--industrial-accent)" : "2px solid transparent",
                    backgroundColor: "transparent",
                  }}
                  onClick={() => setActiveSection(sec)}
                >
                  {sec}
                </button>
              ))}
            </div>

            {/* Specification Dense Table */}
            <div className="overflow-x-auto">
              <table className="w-full font-data spec-table" style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                    <th className="text-left py-2.5 text-xs uppercase tracking-[0.12em] font-semibold" style={{ color: "var(--industrial-text-muted)", width: "45%" }}>
                      Параметр
                    </th>
                    <th className="text-left py-2.5 text-xs uppercase tracking-[0.12em] font-semibold" style={{ color: "var(--industrial-text-muted)" }}>
                      Значение
                    </th>
                    <th className="text-right py-2.5 text-xs uppercase tracking-[0.12em] font-semibold" style={{ color: "var(--industrial-text-muted)" }}>
                      Стандарт
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.specs[currentSection]?.map((row: any) => (
                    <tr
                      key={row.label}
                      className="hover-row"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <td className="py-2.5 pr-4 text-xs" style={{ color: "var(--industrial-text-dim)" }}>
                        {row.label}
                      </td>
                      <td className="py-2.5 text-sm font-semibold" style={{ color: "var(--industrial-text)" }}>
                        {row.value}
                      </td>
                      <td className="py-2.5 text-right text-xs" style={{ color: "var(--industrial-text-muted)" }}>
                        {product.standard}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Gallery */}
            <div className="mt-8 px-0" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="px-6 py-4 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="text-xs uppercase tracking-[0.15em] font-semibold font-data" style={{ color: "var(--industrial-text-muted)" }}>
                  Фотогалерея
                </span>
                <span className="text-xs font-data" style={{ color: "var(--industrial-text-muted)" }}>
                  {galleryIndex + 1} / {product.gallery.length}
                </span>
              </div>
              <div className="flex gap-0">
                <div className="flex-1 relative h-52 overflow-hidden" style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                  <img
                    src={product.gallery[galleryIndex].img_url}
                    alt={`Фото ${galleryIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity" style={{ backgroundColor: "rgba(10,18,38,0.6)" }}>
                    <ZoomIn size={24} style={{ color: "var(--industrial-accent)" }} />
                  </div>
                </div>
                {product.gallery.length > 1 && (
                  <div className="flex flex-col w-20 shrink-0">
                    {product.gallery.map((g: any, i: number) => (
                      <button
                        key={i}
                        className="relative h-[calc(13rem/3)] overflow-hidden"
                        style={{
                          borderBottom: i < product.gallery.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                          outline: galleryIndex === i ? "2px solid var(--industrial-accent)" : "none",
                          outlineOffset: "-2px",
                        }}
                        onClick={() => setGalleryIndex(i)}
                      >
                        <img src={g.img_url} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT — Quick Inquiry Sidebar (sticky) */}
          <aside
            id="quote"
            className="w-full xl:w-80 shrink-0 xl:sticky xl:top-20 self-start mt-8 xl:mt-0"
            style={{ border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "var(--industrial-surface)" }}
          >
            {/* Product image */}
            <div className="relative h-48 overflow-hidden" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <img src={product.img_url} alt={product.fullName} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,26,48,0.9) 20%, transparent 60%)" }} />
              <div className="absolute bottom-4 left-4">
                <span className="text-2xl font-authority font-bold" style={{ color: "var(--industrial-text)" }}>{product.code}</span>
              </div>
            </div>

            <div className="p-5">
              {/* Lead time */}
              <div className="flex justify-between items-center mb-4 pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="text-xs font-data" style={{ color: "var(--industrial-text-muted)" }}>Срок изготовления</span>
                <span className="text-xs font-semibold font-data" style={{ color: "var(--industrial-text)" }}>{product.lead}</span>
              </div>

              {/* Certifications */}
              <div className="mb-5">
                <p className="text-xs uppercase tracking-[0.12em] font-semibold mb-2 font-data" style={{ color: "var(--industrial-text-muted)" }}>
                  Сертификация
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {product.certifications.map((c: string) => (
                    <span
                      key={c}
                      className="px-2 py-1 text-xs font-data"
                      style={{ border: "1px solid rgba(255,255,255,0.12)", color: "var(--industrial-text-dim)", backgroundColor: "rgba(255,255,255,0.03)" }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Inquiry Form */}
              <div>
                <p className="text-xs uppercase tracking-[0.15em] font-semibold mb-3 font-data" style={{ color: "var(--industrial-accent)" }}>
                  Быстрая заявка
                </p>
                <div className="flex flex-col gap-2.5">
                  <input
                    type="text"
                    placeholder="Имя"
                    className="w-full px-3 py-2.5 text-xs font-data bg-transparent outline-none"
                    style={{ border: "1px solid rgba(255,255,255,0.15)", color: "var(--industrial-text)" }}
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-3 py-2.5 text-xs font-data bg-transparent outline-none"
                    style={{ border: "1px solid rgba(255,255,255,0.15)", color: "var(--industrial-text)" }}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 py-2.5 text-xs font-data bg-transparent outline-none"
                    style={{ border: "1px solid rgba(255,255,255,0.15)", color: "var(--industrial-text)" }}
                  />
                  <textarea
                    placeholder="Комментарий / параметры объекта..."
                    rows={3}
                    className="w-full px-3 py-2.5 text-xs font-data bg-transparent outline-none resize-none"
                    style={{ border: "1px solid rgba(255,255,255,0.15)", color: "var(--industrial-text)" }}
                  />
                  <button
                    className="w-full py-3 text-xs uppercase tracking-widest font-semibold font-data btn-depress flex items-center justify-center gap-2"
                    style={{ backgroundColor: "var(--industrial-accent)", color: "#fff" }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#3a6ee8")}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--industrial-accent)")}
                  >
                    <Send size={12} /> Отправить заявку
                  </button>
                </div>
              </div>

              {/* Direct contacts */}
              <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <p className="text-xs font-data mb-2" style={{ color: "var(--industrial-text-muted)" }}>Отдел продаж</p>
                <a href="tel:+998712927744" className="flex items-center gap-2 text-xs font-data mb-1.5 hover:text-white transition-colors" style={{ color: "var(--industrial-text-dim)" }}>
                  <Phone size={11} /> +998 71 292 77 44
                </a>
                <a href="mailto:info@energomaxgroup.com" className="flex items-center gap-2 text-xs font-data hover:text-white transition-colors" style={{ color: "var(--industrial-text-dim)" }}>
                  <Mail size={11} /> info@energomaxgroup.com
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Standards bar */}
        <div className="mt-8 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4" style={{ border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.02)" }}>
          <div className="flex items-center gap-2 shrink-0">
            <Shield size={14} style={{ color: "var(--industrial-accent)" }} />
            <span className="text-xs uppercase tracking-wider font-semibold font-data" style={{ color: "var(--industrial-text-muted)" }}>Применяемые стандарты</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.certifications.map((c: string) => (
              <span key={c} className="px-3 py-1 text-xs font-data" style={{ border: "1px solid rgba(255,255,255,0.12)", color: "var(--industrial-text-dim)" }}>{c}</span>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;

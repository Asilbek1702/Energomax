import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronDown, ChevronRight, Filter, ArrowRight, SlidersHorizontal, X } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allProducts = [
  {
    id: "tmg-100",
    code: "ТМГ-100",
    category: "transformers",
    name: "Силовой трансформатор",
    power: "100 кВА",
    voltage: "10/0.4 кВ",
    cooling: "ONAN",
    protection: "IP54",
    standard: "ГОСТ Р 52719",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_531d7b432f_c8356b0258c9568a.png",
  },
  {
    id: "tmg-630",
    code: "ТМГ-630",
    category: "transformers",
    name: "Силовой трансформатор",
    power: "630 кВА",
    voltage: "10/0.4 кВ",
    cooling: "ONAN",
    protection: "IP54",
    standard: "ГОСТ Р 52719",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_469388346a_8fb11053c9231349.png",
  },
  {
    id: "tmg-2500",
    code: "ТМГ-2500",
    category: "transformers",
    name: "Силовой трансформатор",
    power: "2 500 кВА",
    voltage: "35/10 кВ",
    cooling: "ONAF",
    protection: "IP44",
    standard: "ГОСТ Р 52719",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_f8e5d1baeb_6d36099fd7a0476e.png",
  },
  {
    id: "eco-1000",
    code: "ECO-1000",
    category: "transformers",
    name: "Трансформатор с литой изоляцией",
    power: "1 000 кВА",
    voltage: "10/0.4 кВ",
    cooling: "AN (сухой)",
    protection: "IP23",
    standard: "ГОСТ Р 52719",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_8d1930f55b_e5e23a68e75dba04.png",
  },
  {
    id: "ktpb-500",
    code: "КТПБ-500",
    category: "substations",
    name: "Блочная трансформаторная подстанция",
    power: "500 кВА",
    voltage: "10/0.4 кВ",
    cooling: "блочное исполнение",
    protection: "IP54",
    standard: "ГОСТ 14695",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_7ae3e8a3cc_2b58e1fcc4e857e5.png",
  },
  {
    id: "ktps-1600",
    code: "КТПС-1600",
    category: "substations",
    name: "Столбовая трансформаторная подстанция",
    power: "1 600 кВА",
    voltage: "6/0.4 кВ",
    cooling: "столбовое исполнение",
    protection: "IP44",
    standard: "ГОСТ 14695",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_15cc27e074_adf97aeceedbe1a4.png",
  },
  {
    id: "scho-70",
    code: "ЩО-70",
    category: "switchgear",
    name: "Щитовое оборудование",
    power: "—",
    voltage: "до 1 кВ",
    cooling: "1 600 А",
    protection: "IP31",
    standard: "ГОСТ Р 51321",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_e13a61bead_b463fdf51432150d.png",
  },
  {
    id: "grsch-4000",
    code: "ГРЩ-4000",
    category: "switchgear",
    name: "Главный распределительный щит",
    power: "—",
    voltage: "до 1 кВ",
    cooling: "4 000 А",
    protection: "IP41",
    standard: "ГОСТ Р 51321",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_1f7fa2602a_d2f79f2869492cd4.png",
  },
  {
    id: "kran-most-50",
    code: "МК-50",
    category: "cranes",
    name: "Мостовой кран одногирдерный",
    power: "до 50 т",
    voltage: "пролёт до 35 м",
    cooling: "группа A1–A8",
    protection: "—",
    standard: "ГОСТ 25546",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_c2bfc2e800_89dd08cf676f0857.png",
  },
  {
    id: "kran-kozl-100",
    code: "КК-100",
    category: "cranes",
    name: "Козловой кран двухгирдерный",
    power: "до 100 т",
    voltage: "пролёт до 35 м",
    cooling: "группа A1–A8",
    protection: "—",
    standard: "ГОСТ 25546",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_93c3d195b9_8a5809c097c1e42d.png",
  },
];

const categoryOptions = [
  { label: "Все категории", value: "All" },
  { label: "Трансформаторы", value: "transformers" },
  { label: "Подстанции (КТП)", value: "substations" },
  { label: "Щитовое оборудование", value: "switchgear" },
  { label: "Краны", value: "cranes" },
];

const AccordionFilter = ({
  title, children, defaultOpen = false
}: { title: string; children: React.ReactNode; defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <button
        className="w-full flex items-center justify-between px-4 py-3 text-xs uppercase tracking-wider font-semibold font-data transition-colors"
        style={{ color: "var(--industrial-text-dim)" }}
        onClick={() => setOpen(!open)}
        onMouseEnter={e => (e.currentTarget.style.color = "var(--industrial-text)")}
        onMouseLeave={e => (e.currentTarget.style.color = "var(--industrial-text-dim)")}
      >
        {title}
        {open ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
      </button>
      {open && <div className="px-4 pb-4">{children}</div>}
    </div>
  );
};

const Catalog = () => {
  const [searchParams] = useSearchParams();
  const catFromUrl = searchParams.get("cat");
  const initialCat = categoryOptions.find(c => c.value === catFromUrl)?.value || "All";
  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = allProducts.filter(p => {
    if (selectedCategory !== "All" && p.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div style={{ backgroundColor: "#0A1226", minHeight: "100vh" }}>
      <TopBar />
      <Navbar />

      {/* Breadcrumb */}
      <div
        className="w-full py-3 font-data"
        style={{ backgroundColor: "var(--industrial-surface)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10 flex items-center gap-2 text-xs" style={{ color: "var(--industrial-text-muted)" }}>
          <Link to="/" className="hover:text-white transition-colors">Главная</Link>
          <ChevronRight size={11} />
          <span style={{ color: "var(--industrial-text)" }}>Каталог продукции</span>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-10 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="font-authority text-3xl sm:text-4xl font-bold mb-1" style={{ color: "var(--industrial-text)" }}>
              Каталог продукции
            </h1>
            <p className="text-xs font-data" style={{ color: "var(--industrial-text-muted)" }}>
              {filtered.length} моделей — трансформаторы · КТП · щитовое оборудование · краны
            </p>
          </div>
          <button
            className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-4 py-2.5 font-data"
            style={{ border: "1px solid rgba(255,255,255,0.2)", color: "var(--industrial-text-dim)" }}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <SlidersHorizontal size={13} /> Фильтры
          </button>
        </div>

        <div className="flex gap-0">
          {/* Sidebar */}
          <aside
            className={`${sidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-56 xl:w-64 shrink-0`}
            style={{ border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "var(--industrial-surface)" }}
          >
            <div
              className="px-4 py-3 flex items-center justify-between"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span className="text-xs uppercase tracking-[0.15em] font-semibold font-data" style={{ color: "var(--industrial-text-dim)" }}>
                <Filter size={11} className="inline mr-1.5" />Фильтры
              </span>
              <button
                className="lg:hidden"
                style={{ color: "var(--industrial-text-muted)" }}
                onClick={() => setSidebarOpen(false)}
              >
                <X size={14} />
              </button>
            </div>

            <AccordionFilter title="Категория" defaultOpen>
              <div className="flex flex-col gap-1">
                {categoryOptions.map(c => (
                  <button
                    key={c.value}
                    className="text-left px-2 py-1.5 text-xs font-data transition-colors"
                    style={{
                      color: selectedCategory === c.value ? "var(--industrial-accent)" : "var(--industrial-text-dim)",
                      backgroundColor: selectedCategory === c.value ? "rgba(77,127,255,0.1)" : "transparent",
                    }}
                    onClick={() => setSelectedCategory(c.value)}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </AccordionFilter>

            {/* Standards */}
            <div className="px-4 py-4">
              <p className="text-xs uppercase tracking-[0.12em] font-semibold mb-3 font-data" style={{ color: "var(--industrial-text-muted)" }}>
                Стандарты
              </p>
              {["ГОСТ Р 52719", "ГОСТ 14695", "ГОСТ Р 51321", "ГОСТ 25546"].map(std => (
                <label key={std} className="flex items-center gap-2 mb-2 cursor-pointer group">
                  <input type="checkbox" className="accent-blue-500" />
                  <span className="text-xs font-data transition-colors" style={{ color: "var(--industrial-text-dim)" }}>{std}</span>
                </label>
              ))}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 min-w-0" style={{ borderLeft: "1px solid rgba(255,255,255,0.1)", marginLeft: "-1px" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-0">
              {filtered.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="group flex flex-col"
                  style={{ border: "1px solid rgba(255,255,255,0.08)", marginLeft: "-1px", marginTop: "-1px" }}
                >
                  {/* Image */}
                  <div className="relative h-36 overflow-hidden" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <img src={p.img_url} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,18,38,0.8) 0%, transparent 60%)" }} />
                    <div
                      className="absolute top-2 left-2 px-2 py-0.5 text-xs font-semibold tracking-wide font-data"
                      style={{ backgroundColor: "var(--industrial-accent)", color: "#fff" }}
                    >
                      {p.code}
                    </div>
                  </div>

                  {/* Content — spec table */}
                  <div className="flex flex-col p-4" style={{ backgroundColor: "var(--industrial-surface)" }}>
                    <div className="mb-3">
                      <p className="text-xs font-semibold tracking-widest uppercase font-data mb-0.5" style={{ color: "var(--industrial-accent)" }}>
                        {p.code}
                      </p>
                      <h3 className="font-authority text-sm font-bold" style={{ color: "var(--industrial-text)" }}>
                        {p.name}
                      </h3>
                    </div>

                    <table className="w-full text-xs font-data spec-table mb-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                      <tbody>
                        {[
                          { l: "Мощность", v: p.power },
                          { l: "Напряжение", v: p.voltage },
                          { l: "Охлаждение / исполнение", v: p.cooling },
                          ...(p.protection !== "—" ? [{ l: "Степень защиты", v: p.protection }] : []),
                          { l: "Стандарт", v: p.standard },
                        ].map(row => (
                          <tr key={row.l} className="hover-row" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                            <td className="py-1.5 pr-3" style={{ color: "var(--industrial-text-muted)" }}>{row.l}</td>
                            <td className="py-1.5 text-right font-medium" style={{ color: "var(--industrial-text)" }}>{row.v}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest font-data" style={{ color: "var(--industrial-accent)" }}>
                      Техническая спецификация <ArrowRight size={11} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="flex items-center justify-center h-64" style={{ color: "var(--industrial-text-muted)" }}>
                <p className="text-sm font-data">Нет моделей по выбранным фильтрам.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;

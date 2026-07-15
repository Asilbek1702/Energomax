import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, SlidersHorizontal, X } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Loading from "@/components/ui/Loading";
import { getProducts, resolveMediaUrl } from "@/lib/api";
import { CATEGORIES, CATEGORY_FILTERS } from "@/constants/categories";
import type { Product, Category } from "@/types/product";

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = searchParams.get("cat") || "";
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  const activeCategory = (catParam as Category) || "";

  useEffect(() => {
    setLoading(true);
    setError("");
    getProducts({ category: activeCategory || undefined })
      .then((res) => setProducts(res.items))
      .catch(() => setError("Не удалось загрузить каталог. Проверьте подключение к серверу."))
      .finally(() => setLoading(false));
  }, [activeCategory]);

  const setCategory = (cat: string) => {
    if (cat) setSearchParams({ cat });
    else setSearchParams({});
    setFilterOpen(false);
  };

  return (
    <PageLayout>
      <Breadcrumb
        items={[
          { label: "Главная", href: "/home" },
          { label: "Каталог продукции" },
        ]}
      />

      <section className="w-full py-12 lg:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold font-data text-accent block mb-2">
                Продукция
              </span>
              <h1
                className="font-authority text-3xl sm:text-4xl font-bold"
                style={{ color: "var(--industrial-text)" }}
              >
                Каталог оборудования
              </h1>
              <p
                className="text-sm font-data mt-2"
                style={{ color: "var(--industrial-text-dim)" }}
              >
                {activeCategory
                  ? CATEGORIES[activeCategory as Category]
                  : "Все категории"}{" "}
                · {loading ? "..." : `${products.length} позиций`}
              </p>
            </div>

            <button
              className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-4 py-2 industrial-border"
              style={{ color: "var(--industrial-text-dim)" }}
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <SlidersHorizontal size={14} />
              Фильтр
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-0 lg:gap-8">
            {/* Sidebar filter */}
            <aside
              className={`${filterOpen ? "block" : "hidden"} lg:block`}
            >
              <div
                className="p-4 lg:sticky lg:top-20"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  backgroundColor: "var(--industrial-surface)",
                }}
              >
                <div className="flex items-center justify-between mb-4 lg:hidden">
                  <span
                    className="text-xs uppercase tracking-widest font-semibold"
                    style={{ color: "var(--industrial-text)" }}
                  >
                    Категория
                  </span>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={16} style={{ color: "var(--industrial-text-muted)" }} />
                  </button>
                </div>
                <p
                  className="text-xs uppercase tracking-widest font-semibold mb-3 hidden lg:block"
                  style={{ color: "var(--industrial-text-muted)" }}
                >
                  Категория
                </p>
                <ul className="flex flex-col gap-1">
                  {CATEGORY_FILTERS.map((f) => (
                    <li key={f.value}>
                      <button
                        onClick={() => setCategory(f.value)}
                        className="w-full text-left px-3 py-2 text-xs font-data transition-colors hover-row"
                        style={{
                          color:
                            activeCategory === f.value
                              ? "var(--industrial-accent)"
                              : "var(--industrial-text-dim)",
                          backgroundColor:
                            activeCategory === f.value
                              ? "rgba(77,127,255,0.1)"
                              : "transparent",
                          borderLeft:
                            activeCategory === f.value
                              ? "2px solid var(--industrial-accent)"
                              : "2px solid transparent",
                        }}
                      >
                        {f.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Product grid */}
            <div>
              {loading && <Loading />}
              {error && (
                <p className="text-sm font-data py-10" style={{ color: "#ef4444" }}>
                  {error}
                </p>
              )}
              {!loading && !error && products.length === 0 && (
                <p
                  className="text-sm font-data py-10"
                  style={{ color: "var(--industrial-text-dim)" }}
                >
                  В этой категории пока нет опубликованных товаров.
                </p>
              )}
              {!loading && !error && products.length > 0 && (
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-0"
                  style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  {products.map((p, i) => (
                    <Link
                      key={p.id}
                      to={`/product/${p.id}`}
                      className="group hover-row transition-colors"
                      style={{
                        borderRight:
                          (i + 1) % 3 !== 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                        borderBottom: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div
                        className="h-48 overflow-hidden"
                        style={{ backgroundColor: "var(--industrial-surface)" }}
                      >
                        {p.image_url ? (
                          <img
                            src={resolveMediaUrl(p.image_url)}
                            alt={p.code}
                            className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity"
                          />
                        ) : (
                          <div
                            className="w-full h-full flex items-center justify-center text-xs font-data"
                            style={{ color: "var(--industrial-text-muted)" }}
                          >
                            {p.code}
                          </div>
                        )}
                      </div>
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-1">
                          <span
                            className="text-xs font-data font-semibold text-accent"
                          >
                            {p.code}
                          </span>
                          <span
                            className="text-[10px] font-data"
                            style={{ color: "var(--industrial-text-muted)" }}
                          >
                            {CATEGORIES[p.category]}
                          </span>
                        </div>
                        <h3
                          className="font-authority text-sm font-bold mb-3"
                          style={{ color: "var(--industrial-text)" }}
                        >
                          {p.name}
                        </h3>
                        <div className="flex flex-col gap-1 mb-4">
                          {Object.entries(p.specs || {})
                            .slice(0, 3)
                            .map(([key, val]) => (
                              <div
                                key={key}
                                className="flex justify-between text-[11px] font-data"
                              >
                                <span style={{ color: "var(--industrial-text-muted)" }}>
                                  {key}
                                </span>
                                <span style={{ color: "var(--industrial-text-dim)" }}>
                                  {val}
                                </span>
                              </div>
                            ))}
                        </div>
                        <span
                          className="flex items-center gap-1 text-[11px] uppercase tracking-widest font-semibold text-accent"
                        >
                          Подробнее <ArrowRight size={11} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

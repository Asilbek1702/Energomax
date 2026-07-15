import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Download, Send, Phone, Mail, Shield } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Loading from "@/components/ui/Loading";
import { getProduct, resolveMediaUrl } from "@/lib/api";
import { CATEGORIES } from "@/constants/categories";
import type { Product } from "@/types/product";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeImage, setActiveImage] = useState("");
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getProduct(id)
      .then((p) => {
        setProduct(p);
        setActiveImage(resolveMediaUrl(p.image_url));
      })
      .catch(() => setError("Товар не найден"))
      .finally(() => setLoading(false));
  }, [id]);

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Запрос: ${product?.code} — ${product?.name}`);
    const body = encodeURIComponent(
      `Имя: ${form.name}\nКомпания: ${form.company}\nТелефон: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:sales@energomaxgroup.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (loading) {
    return (
      <PageLayout>
        <Loading />
      </PageLayout>
    );
  }

  if (error || !product) {
    return (
      <PageLayout>
        <div className="w-full px-4 sm:px-6 lg:px-10 py-32 text-center">
          <p className="text-sm font-data mb-6" style={{ color: "var(--industrial-text-dim)" }}>
            {error || "Товар не найден"}
          </p>
          <Link
            to="/catalog"
            className="text-xs uppercase tracking-widest font-semibold text-accent"
          >
            Вернуться в каталог
          </Link>
        </div>
      </PageLayout>
    );
  }

  const galleryImages = [
    resolveMediaUrl(product.image_url),
    ...Object.entries(product.specs || {})
      .filter(([k]) => k.startsWith("_gallery_"))
      .map(([, v]) => resolveMediaUrl(v))
      .filter(Boolean),
  ].filter(Boolean);

  const displaySpecs = Object.entries(product.specs || {}).filter(
    ([k]) => !k.startsWith("_gallery_"),
  );

  return (
    <PageLayout>
      <Breadcrumb
        items={[
          { label: "Главная", href: "/home" },
          { label: "Каталог", href: "/catalog" },
          { label: product.code },
        ]}
      />

      <section className="w-full py-10 lg:py-14">
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
            {/* Gallery */}
            <div style={{ borderRight: "1px solid rgba(255,255,255,0.1)" }}>
              <div
                className="aspect-[4/3] overflow-hidden"
                style={{ backgroundColor: "var(--industrial-surface)" }}
              >
                {activeImage ? (
                  <img
                    src={activeImage}
                    alt={product.code}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center font-authority text-2xl"
                    style={{ color: "var(--industrial-text-muted)" }}
                  >
                    {product.code}
                  </div>
                )}
              </div>
              {galleryImages.length > 1 && (
                <div className="flex gap-0" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  {galleryImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(img)}
                      className="flex-1 h-20 overflow-hidden opacity-60 hover:opacity-100 transition-opacity"
                      style={{
                        borderRight: i < galleryImages.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                        outline: activeImage === img ? "2px solid var(--industrial-accent)" : "none",
                      }}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-6 lg:p-10 flex flex-col">
              <span className="text-xs font-data text-accent mb-1">
                {CATEGORIES[product.category]}
              </span>
              <h1
                className="font-authority text-2xl lg:text-3xl font-bold mb-2"
                style={{ color: "var(--industrial-text)" }}
              >
                {product.code}
              </h1>
              <p
                className="text-sm font-data mb-4"
                style={{ color: "var(--industrial-text-dim)" }}
              >
                {product.name}
              </p>
              {product.standard && (
                <div
                  className="flex items-center gap-2 text-xs font-data mb-4 px-3 py-2 w-fit"
                  style={{
                    border: "1px solid rgba(77,127,255,0.3)",
                    color: "var(--industrial-accent)",
                    backgroundColor: "rgba(77,127,255,0.08)",
                  }}
                >
                  <Shield size={12} />
                  {product.standard}
                </div>
              )}
              {product.description && (
                <p
                  className="text-sm leading-relaxed font-data mb-6"
                  style={{ color: "var(--industrial-text-dim)" }}
                >
                  {product.description}
                </p>
              )}
              {product.price && (
                <p className="font-data text-lg font-semibold mb-4" style={{ color: "var(--industrial-text)" }}>
                  {Number(product.price).toLocaleString("ru-RU")} {product.currency}
                </p>
              )}
              {product.pdf_url && (
                <a
                  href={resolveMediaUrl(product.pdf_url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold mb-6 text-accent hover:underline"
                >
                  <Download size={14} />
                  Скачать спецификацию (PDF)
                </a>
              )}
              <div className="mt-auto flex flex-wrap gap-3 text-xs font-data" style={{ color: "var(--industrial-text-muted)" }}>
                <span className="flex items-center gap-1.5">
                  <Phone size={11} /> +998 71 292 77 44
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail size={11} /> sales@energomaxgroup.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs table */}
      {displaySpecs.length > 0 && (
        <section
          className="w-full py-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="w-full px-4 sm:px-6 lg:px-10">
            <h2
              className="font-authority text-xl font-bold mb-6"
              style={{ color: "var(--industrial-text)" }}
            >
              Технические характеристики
            </h2>
            <div style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
              <table className="w-full spec-table text-sm font-data">
                <tbody>
                  {displaySpecs.map(([key, val], i) => (
                    <tr
                      key={key}
                      className="hover-row"
                      style={{
                        borderBottom:
                          i < displaySpecs.length - 1
                            ? "1px solid rgba(255,255,255,0.06)"
                            : "none",
                      }}
                    >
                      <td
                        className="px-5 py-3 w-1/2"
                        style={{ color: "var(--industrial-text-muted)" }}
                      >
                        {key}
                      </td>
                      <td
                        className="px-5 py-3"
                        style={{ color: "var(--industrial-text)" }}
                      >
                        {val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Inquiry form */}
      <section className="w-full py-12 lg:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-0"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div
              className="p-8 lg:p-10"
              style={{ backgroundColor: "var(--industrial-surface)" }}
            >
              <h2
                className="font-authority text-xl font-bold mb-2"
                style={{ color: "var(--industrial-text)" }}
              >
                Запрос коммерческого предложения
              </h2>
              <p
                className="text-xs font-data mb-6"
                style={{ color: "var(--industrial-text-dim)" }}
              >
                Укажите контактные данные — менеджер отдела продаж подготовит КП по позиции{" "}
                <strong style={{ color: "var(--industrial-accent)" }}>{product.code}</strong>.
              </p>
              {submitted ? (
                <p className="text-sm font-data" style={{ color: "var(--industrial-positive)" }}>
                  Запрос отправлен. Мы свяжемся с вами в ближайшее время.
                </p>
              ) : (
                <form onSubmit={handleInquiry} className="flex flex-col gap-3">
                  <input
                    placeholder="Ваше имя *"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="px-3 py-2.5 text-sm bg-transparent outline-none industrial-border"
                    style={{ color: "var(--industrial-text)" }}
                  />
                  <input
                    placeholder="Компания"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="px-3 py-2.5 text-sm bg-transparent outline-none industrial-border"
                    style={{ color: "var(--industrial-text)" }}
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      placeholder="Телефон *"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="px-3 py-2.5 text-sm bg-transparent outline-none industrial-border"
                      style={{ color: "var(--industrial-text)" }}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="px-3 py-2.5 text-sm bg-transparent outline-none industrial-border"
                      style={{ color: "var(--industrial-text)" }}
                    />
                  </div>
                  <textarea
                    placeholder="Дополнительные требования (количество, сроки, условия поставки)"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="px-3 py-2.5 text-sm bg-transparent outline-none industrial-border resize-none"
                    style={{ color: "var(--industrial-text)" }}
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 py-3 text-xs uppercase tracking-widest font-semibold bg-industrial-accent text-white btn-depress"
                  >
                    <Send size={13} />
                    Отправить запрос
                  </button>
                </form>
              )}
            </div>
            <div
              className="p-8 lg:p-10"
              style={{
                backgroundColor: "var(--industrial-surface-2)",
                borderLeft: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <p
                className="text-xs uppercase tracking-widest font-data mb-4"
                style={{ color: "var(--industrial-text-muted)" }}
              >
                Отдел продаж
              </p>
              <p className="font-authority text-lg font-bold mb-2" style={{ color: "var(--industrial-text)" }}>
                Дилноза Юсупова
              </p>
              <p className="text-xs font-data mb-4" style={{ color: "var(--industrial-text-dim)" }}>
                Менеджер по продажам
              </p>
              <div className="flex flex-col gap-2 text-sm font-data" style={{ color: "var(--industrial-text-dim)" }}>
                <a href="tel:+998712927744" className="hover:text-accent transition-colors">
                  +998 71 292 77 44
                </a>
                <a href="mailto:sales@energomaxgroup.com" className="hover:text-accent transition-colors">
                  sales@energomaxgroup.com
                </a>
              </div>
              <p className="text-xs font-data mt-6" style={{ color: "var(--industrial-text-muted)" }}>
                Пн–Сб 09:00–18:00 · Ответ в течение 2 рабочих дней
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

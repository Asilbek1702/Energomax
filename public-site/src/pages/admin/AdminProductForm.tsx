import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct, createProduct, updateProduct, uploadFile } from "@/lib/api";

const emptyProduct = {
  code: "", name: "", category: "transformers", standard: "",
  price: "", currency: "UZS", image_url: "", pdf_url: "",
  description: "", specs: {} as Record<string, string>, is_published: true,
};

const AdminProductForm = () => {
  const { id } = useParams();
  const isEdit = id && id !== "new";
  const navigate = useNavigate();
  const [form, setForm] = useState<any>(emptyProduct);
  const [specRows, setSpecRows] = useState<{ key: string; val: string }[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isEdit) {
      getProduct(id!).then(p => {
        setForm(p);
        setSpecRows(Object.entries(p.specs || {}).map(([key, val]) => ({ key, val: val as string })));
      });
    }
  }, [id]);

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>, field: "image_url" | "pdf_url") => {
    const file = e.target.files?.[0];
    if (!file) return;
    const res = await uploadFile(file);
    setForm((f: any) => ({ ...f, [field]: res.url }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const specs = Object.fromEntries(specRows.filter(r => r.key).map(r => [r.key, r.val]));
    const payload = { ...form, specs, price: form.price ? Number(form.price) : null };
    try {
      if (isEdit) await updateProduct(id!, payload);
      else await createProduct(payload);
      navigate("/admin/products");
    } finally {
      setSaving(false);
    }
  };

  const inputStyle = { border: "1px solid rgba(255,255,255,0.15)", color: "var(--industrial-text)" };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      <h1 className="font-authority text-2xl font-bold mb-6" style={{ color: "var(--industrial-text)" }}>
        {isEdit ? "Изменить товар" : "Новый товар"}
      </h1>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <input placeholder="Код (ТМГ-630)" value={form.code} onChange={e => setForm({ ...form, code: e.target.value })} className="px-3 py-2 bg-transparent outline-none text-sm" style={inputStyle} required />
        <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} className="px-3 py-2 outline-none text-sm" style={{ ...inputStyle, backgroundColor: "var(--industrial-surface)" }}>
          <option value="transformers">Трансформаторы</option>
          <option value="substations">Подстанции</option>
          <option value="switchgear">Щитовое оборудование</option>
          <option value="cranes">Краны</option>
        </select>
      </div>

      <input placeholder="Название" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 mb-3 bg-transparent outline-none text-sm" style={inputStyle} required />
      <input placeholder="Стандарт (ГОСТ...)" value={form.standard || ""} onChange={e => setForm({ ...form, standard: e.target.value })} className="w-full px-3 py-2 mb-3 bg-transparent outline-none text-sm" style={inputStyle} />

      <div className="grid grid-cols-2 gap-3 mb-3">
        <input placeholder="Цена" type="number" value={form.price || ""} onChange={e => setForm({ ...form, price: e.target.value })} className="px-3 py-2 bg-transparent outline-none text-sm" style={inputStyle} />
        <input placeholder="Валюта" value={form.currency} onChange={e => setForm({ ...form, currency: e.target.value })} className="px-3 py-2 bg-transparent outline-none text-sm" style={inputStyle} />
      </div>

      <textarea placeholder="Описание" rows={3} value={form.description || ""} onChange={e => setForm({ ...form, description: e.target.value })} className="w-full px-3 py-2 mb-3 bg-transparent outline-none text-sm resize-none" style={inputStyle} />

      <div className="mb-3">
        <label className="text-xs block mb-1" style={{ color: "var(--industrial-text-muted)" }}>Изображение</label>
        <input type="file" accept="image/*" onChange={e => handleFile(e, "image_url")} className="text-xs" style={{ color: "var(--industrial-text-dim)" }} />
        {form.image_url && <p className="text-xs mt-1" style={{ color: "var(--industrial-accent)" }}>{form.image_url}</p>}
      </div>

      <div className="mb-4">
        <label className="text-xs block mb-1" style={{ color: "var(--industrial-text-muted)" }}>PDF спецификация</label>
        <input type="file" accept="application/pdf" onChange={e => handleFile(e, "pdf_url")} className="text-xs" style={{ color: "var(--industrial-text-dim)" }} />
        {form.pdf_url && <p className="text-xs mt-1" style={{ color: "var(--industrial-accent)" }}>{form.pdf_url}</p>}
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <label className="text-xs" style={{ color: "var(--industrial-text-muted)" }}>Характеристики</label>
          <button type="button" onClick={() => setSpecRows([...specRows, { key: "", val: "" }])} className="text-xs" style={{ color: "var(--industrial-accent)" }}>+ Добавить</button>
        </div>
        {specRows.map((row, i) => (
          <div key={i} className="grid grid-cols-[1fr_1fr_auto] gap-2 mb-2">
            <input placeholder="Параметр" value={row.key} onChange={e => setSpecRows(specRows.map((r, idx) => idx === i ? { ...r, key: e.target.value } : r))} className="px-2 py-1.5 bg-transparent outline-none text-xs" style={inputStyle} />
            <input placeholder="Значение" value={row.val} onChange={e => setSpecRows(specRows.map((r, idx) => idx === i ? { ...r, val: e.target.value } : r))} className="px-2 py-1.5 bg-transparent outline-none text-xs" style={inputStyle} />
            <button type="button" onClick={() => setSpecRows(specRows.filter((_, idx) => idx !== i))} style={{ color: "#ef4444" }}>✕</button>
          </div>
        ))}
      </div>

      <label className="flex items-center gap-2 mb-6 text-xs" style={{ color: "var(--industrial-text-dim)" }}>
        <input type="checkbox" checked={form.is_published} onChange={e => setForm({ ...form, is_published: e.target.checked })} />
        Опубликован
      </label>

      <button type="submit" disabled={saving} className="px-6 py-3 text-xs uppercase tracking-widest font-semibold" style={{ backgroundColor: "var(--industrial-accent)", color: "#fff" }}>
        {saving ? "Сохранение..." : "Сохранить"}
      </button>
    </form>
  );
};

export default AdminProductForm;
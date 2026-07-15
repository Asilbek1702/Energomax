import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductsAdmin, deleteProduct } from "@/lib/api";

const AdminProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    getProductsAdmin().then(res => setProducts(res.items)).finally(() => setLoading(false));
  };

  useEffect(load, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Удалить товар?")) return;
    await deleteProduct(id);
    load();
  };

  if (loading) return <p style={{ color: "var(--industrial-text-dim)" }}>Загрузка...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-authority text-2xl font-bold" style={{ color: "var(--industrial-text)" }}>Товары</h1>
        <Link to="/admin/products/new" className="px-4 py-2 text-xs uppercase tracking-widest" style={{ backgroundColor: "var(--industrial-accent)", color: "#fff" }}>
          + Добавить
        </Link>
      </div>
      <table className="w-full text-sm" style={{ color: "var(--industrial-text-dim)" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <th className="text-left py-2">Код</th>
            <th className="text-left py-2">Название</th>
            <th className="text-left py-2">Категория</th>
            <th className="text-left py-2">Опубликован</th>
            <th className="text-right py-2">Действия</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <td className="py-2">{p.code}</td>
              <td className="py-2">{p.name}</td>
              <td className="py-2">{p.category}</td>
              <td className="py-2">{p.is_published ? "Да" : "Нет"}</td>
              <td className="py-2 text-right">
                <Link to={`/admin/products/${p.id}`} className="mr-3" style={{ color: "var(--industrial-accent)" }}>Изменить</Link>
                <button onClick={() => handleDelete(p.id)} style={{ color: "#ef4444" }}>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;
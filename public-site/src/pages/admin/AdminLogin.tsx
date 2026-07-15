import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "@/lib/api";
import { setAdminToken } from "@/lib/adminAuth";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await login(username, password);
      setAdminToken(res.access_token);
      navigate("/admin/products");
    } catch {
      setError("Неверный логин или пароль");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: "#0A1226" }}>
      <form onSubmit={handleSubmit} className="w-full max-w-sm p-8" style={{ border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "var(--industrial-surface)" }}>
        <h1 className="font-authority text-2xl font-bold mb-6" style={{ color: "var(--industrial-text)" }}>Вход в админку</h1>
        {error && <p className="text-xs mb-4" style={{ color: "#ef4444" }}>{error}</p>}
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Логин"
          className="w-full px-3 py-2.5 mb-3 text-sm bg-transparent outline-none"
          style={{ border: "1px solid rgba(255,255,255,0.15)", color: "var(--industrial-text)" }}
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Пароль"
          className="w-full px-3 py-2.5 mb-4 text-sm bg-transparent outline-none"
          style={{ border: "1px solid rgba(255,255,255,0.15)", color: "var(--industrial-text)" }}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 text-xs uppercase tracking-widest font-semibold"
          style={{ backgroundColor: "var(--industrial-accent)", color: "#fff" }}
        >
          {loading ? "Вход..." : "Войти"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
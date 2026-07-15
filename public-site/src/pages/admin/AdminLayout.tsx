import { Navigate, Outlet, Link, useLocation } from "react-router-dom";
import { isAdminAuthed, logoutAdmin } from "@/lib/adminAuth";

const AdminLayout = () => {
  const location = useLocation();
  if (!isAdminAuthed()) return <Navigate to="/admin/login" replace />;

  return (
    <div style={{ backgroundColor: "#0A1226", minHeight: "100vh" }}>
      <nav className="flex items-center justify-between px-6 h-14" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="flex items-center gap-6">
          <span className="font-authority font-bold text-sm" style={{ color: "var(--industrial-text)" }}>ADMIN</span>
          <Link to="/admin/products" className="text-xs uppercase tracking-widest" style={{ color: location.pathname.includes("products") ? "var(--industrial-accent)" : "var(--industrial-text-dim)" }}>
            Товары
          </Link>
        </div>
        <button
          onClick={() => { logoutAdmin(); window.location.href = "/admin/login"; }}
          className="text-xs uppercase tracking-widest"
          style={{ color: "var(--industrial-text-muted)" }}
        >
          Выйти
        </button>
      </nav>
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
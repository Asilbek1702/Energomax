import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";

export default function NotFound() {
  return (
    <PageLayout>
      <div className="w-full px-4 sm:px-6 lg:px-10 py-32 text-center">
        <h1
          className="font-authority text-6xl font-bold mb-4"
          style={{ color: "var(--industrial-text)" }}
        >
          404
        </h1>
        <p className="text-sm font-data mb-8" style={{ color: "var(--industrial-text-dim)" }}>
          Страница не найдена
        </p>
        <Link
          to="/home"
          className="inline-block px-6 py-3 text-xs uppercase tracking-widest font-semibold"
          style={{ backgroundColor: "var(--industrial-accent)", color: "#fff" }}
        >
          На главную
        </Link>
      </div>
    </PageLayout>
  );
}

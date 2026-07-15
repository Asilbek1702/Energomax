import type { ReactNode } from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div style={{ backgroundColor: "#0A1226", minHeight: "100vh" }}>
      <TopBar />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

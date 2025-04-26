import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-50">
      <Header />
      <main className="h-96">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;

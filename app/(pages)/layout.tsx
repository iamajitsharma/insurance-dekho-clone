import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-50">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;

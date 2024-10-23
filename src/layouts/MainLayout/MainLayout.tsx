import React from "react";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";

const MainLayout = () => {
  return (
    <div className={`max-w-6xl mx-auto px-4 `}>
      <Header />
      <Footer />
    </div>
  );
};

export default MainLayout;

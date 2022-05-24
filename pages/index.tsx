import React from "react";
import Script from "next/script";
import Main from "../src/components/template/main";
import Navbar from "../src/components/modules/nav";
import Footer from "../src/components/modules/footer";

function Home() {
  return (
    <div>
      <Script src="/js/scroll.js"></Script>
      <Navbar />
      <Main></Main>
      <Footer />
    </div>
  );
}

export default Home;

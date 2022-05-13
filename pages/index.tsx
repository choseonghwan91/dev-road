import React from "react";
import Script from "next/script";
import Main from "../pages/main";

function Home() {
  return (
    <div>
      <Script src="/js/scroll.js"></Script>

      <Main></Main>
    </div>
  );
}

export default Home;

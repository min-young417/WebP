import React from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";

// isDark를실질적으로사용하지않고, 자녀컴포넌트들에게전달하는역할
// data필요하지않음!
const Page= () => {
  return(
    <div className="page">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
};
 
export default Page;
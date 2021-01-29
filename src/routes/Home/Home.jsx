import "./Home.scss";
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import React from "react";

function template() {
  return (
    <div className="home">
      <div>
        <Header />
        <Nav />
        <Footer />
      </div>
    </div>
  );
}

export default template;

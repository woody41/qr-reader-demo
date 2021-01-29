import React from 'react'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import './Home.scss'

function template() {
  return (
    <div className="home">
      <Header />
      <Nav />
      <Footer />
    </div>
  )
}

export default template;

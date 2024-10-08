import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"

const Header = () => {
  const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/logo.jpg' alt='' />
          </div>
          <div className='nav'>
            <div className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <div key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </div>
              ))}
            </div>
          </div>
         

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

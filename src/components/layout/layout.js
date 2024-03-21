import React from "react"
import "./layout.css"

export default function Layout({ children }) {
  return (
    <div className="container-fluid">
      <div className="header">
        <h1 className="title">
          <a href="/">Dinu Rodnitchi</a>
        </h1>
        <div className="menu">
        </div>
      </div>
      <div className="main">
        {children}
      </div>
    </div>
  )
}

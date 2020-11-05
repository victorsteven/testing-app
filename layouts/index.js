import React from "react"
import Link from "next/link"
import Navbar from "./nav"
import bodycss from "../styles/body.module.css"

const Layout = ({ children }) => {
  return (
    <React.Fragment>

      <Navbar />
       
      <div className={bodycss.pageBody}>{children}</div>

    </React.Fragment>
  )
}

export default Layout
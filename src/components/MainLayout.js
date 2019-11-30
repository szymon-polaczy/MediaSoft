import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Example from "./Menu"

export default ({children}) => (
    <>
        <Example/>
        <Header/>
        {children}
        <Footer/>
    </>
)
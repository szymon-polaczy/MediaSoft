import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Example from "./Menu"

export default ({children}) => {
	return (
		<>
			<Example/>
			<Header/>
			{children}
			<Footer/>
		</>
	)
}
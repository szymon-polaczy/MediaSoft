import React from 'react'
import { Link } from 'react-scroll'

const DefaultScrollLink = ({to, children, onclick = null}) => {
	return (
		<Link 
			to={to} 
			activeClass="active" 
			spy={true} 
			smooth={true} 
			offset={-100} 
			duration={500}
			onClick={onclick}>
			{children}
		</Link>
	)
}

export default DefaultScrollLink
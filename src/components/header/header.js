import React from 'react'
import {Nav, NavItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import './header.scss'

const Header = () => {
	return (
		<div className='header'>
		<h3><Link to="/">Game of Thrones DB</Link></h3>
		<Nav>
			<NavItem>
				<Link to="/characters/">Characters</Link>
			</NavItem>
			<NavItem><Link to="/houses/">Houses</Link></NavItem>
			<NavItem><Link to="/books/">Books</Link></NavItem>
		</Nav>
	</div>)
}

export default Header

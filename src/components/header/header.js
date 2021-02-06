import React from 'react'
import {Nav, NavLink, NavItem} from 'reactstrap'
import './header.scss'

const Header = () => {
	return (
		<div className='header'>
		<h3><NavLink href="/">Game of Thrones DB</NavLink></h3>
		<Nav>
			<NavItem>
				<NavLink href="/">Characters</NavLink>
			</NavItem>
			<NavItem><NavLink href="/houses">Houses</NavLink></NavItem>
			<NavItem><NavLink href="/books">Books</NavLink></NavItem>
		</Nav>
	</div>)
}

export default Header

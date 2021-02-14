import React, {useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container, Row, Col, Button} from 'reactstrap'
import Header from '../header'
import RandomChar from '../random-char'
import {CharacterPage, BooksPage, HousesPage, BooksItem} from '../pages'
import './app.scss'

const App = () => {
	const [showChar, setShowChar] = useState(true)
	const showCharRender = showChar ? <RandomChar interval={15000}/> : null
	return (
		<Router>
			<div className='app'>
				<Container>
					<Header/>
				</Container>
				<Container>
					<Row>
						<Col sm={12}>
							<Button className='mb-2' onClick={()=>setShowChar(!showChar)} color="primary">Toggle</Button>
						</Col>
						<Col lg={{size: 5, offset: 0}}>
							{showCharRender}
						</Col>
					</Row>
					<Route path='/characters' exact component={CharacterPage}/>
					<Route path='/books' exact component={BooksPage}/>
					<Route path='/books/:id' exact render={
						({match})=>{
							const {id} = match.params
							return <BooksItem bookId={id}/>
						}
					}/>
					<Route path='/houses' exact component={HousesPage}/>
				</Container>
			</div>
		</Router>)
}

export default App

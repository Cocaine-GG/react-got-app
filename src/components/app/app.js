import React, {useState} from 'react'
import {Container, Row, Col, Button} from 'reactstrap'
import Header from '../header'
import RandomChar from '../random-char'
import {CharacterPage, BooksPage, HousesPage} from '../pages'
import './app.scss'

const App = () => {
	const [showChar, setShowChar] = useState(true)
	const showCharRender = showChar ? <RandomChar/> : null
	return (
		<>
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
				{/*<CharacterPage/>*/}
				<HousesPage/>
				{/*<BooksPage/>*/}
			</Container>
		</>)
}

export default App

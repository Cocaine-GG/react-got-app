import React, {useState} from 'react'
import {Container, Row, Col, Button} from 'reactstrap'
import Header from '../header'
import RandomChar from '../random-char'
import ItemList from '../item-list'
import CharDetails from '../char-details'
import './app.scss'

const App = () => {
	const [showChar, setShowChar] = useState(false)
	const showCharRender = !showChar ? <RandomChar/> : null
	return (
		<>
			<Container>
				<Header/>
			</Container>
			<Container>
				<Row>
					<Col>
						<Button onClick={()=>setShowChar(!showChar)} color="primary">Toggle Random Character</Button>
					</Col>
					<Col lg={{size: 5, offset: 0}}>
						{showCharRender}
					</Col>
				</Row>
				<Row>
					<Col md='6'>
						<ItemList/>
					</Col>
					<Col md='6'>
						<CharDetails/>
					</Col>
				</Row>
			</Container>
		</>)
}

export default App

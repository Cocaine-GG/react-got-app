import React, {useState, useEffect} from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'
import Loading from '../loading'
import ErrorMessage from '../error-message'
import GotService from '../../services/got-service'
import './random-char.scss'

const RandomChar = ({interval}) => {
	const [char, setChar] = useState({})
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const gotService = new GotService()

	useEffect(() => {
		updateChar()
		const timerId = setInterval(updateChar, interval)
		return () => clearInterval(timerId)
	}, [])

	const onCharLoaded = (char) => {
		setChar(char)
		setLoading(false)
	}

	const onError = (err) => {
		setError(true)
		setLoading(false)
		return err
	}

	const updateChar = () => {
		const id = Math.floor(Math.random() * 140 + 25)
		gotService.getCharacter(id)
							.then(onCharLoaded)
							.catch(onError)
	}

	const content = loading
										? <Loading/>
										: !error ? <View char={char}/>
										: <ErrorMessage/>
	return (
		<div className="random-block rounded">
			{content}
		</div>)
}

const View = ({ char: {name, gender, born, died, culture} }) => {
	return (
		<>
			<h4>Random Character: {name}</h4>
			<ListGroup className="list-group-flush">
				<ListGroupItem className="d-flex justify-content-between">
					<span className="term">Gender </span>
					<span>{gender}</span>
				</ListGroupItem>
				<ListGroupItem className="d-flex justify-content-between">
					<span className="term">Born </span>
					<span>{born}</span>
				</ListGroupItem>
				<ListGroupItem className="d-flex justify-content-between">
					<span className="term">Died </span>
					<span>{died}</span>
				</ListGroupItem>
				<ListGroupItem className="d-flex justify-content-between">
					<span className="term">Culture </span>
					<span>{culture}</span>
				</ListGroupItem>
			</ListGroup>
		</>)
}

export default RandomChar

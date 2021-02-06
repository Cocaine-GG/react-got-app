import React, {Component} from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'
import Loading from '../loading'
import ErrorMessage from '../error-message'
import gotService from '../../services/got-service'
import './random-char.scss'

export default class RandomChar extends Component {
	constructor(props) {
		super(props)
		this.updateChar()
	}

	gotService = new gotService()
	state = {
		char : {},
		loading: true,
		error : false
	}

	onCharLoaded = (char) => {
		this.setState({char, loading: false})
	}

	onError = (err) => {
		this.setState({
			error : true,
			loading : false
		})
	}

	updateChar(){
		const id = Math.floor(Math.random()*140+25)
		this.gotService.getCharacter(id)
				.then(this.onCharLoaded)
				.catch(this.onError)
	}
	render() {
		const {char, loading, error } = this.state
		const content = loading
										? <Loading/>
										: !error ? <View char={char} />
										: <ErrorMessage/>
			return (
			<div className="random-block rounded">
				{content}
			</div>
		)
	}
}

const View = ({char}) => {
	let {name,gender,born,died,culture} = char
	born = born.length > 0 ? born : 'Date and place of birth unknown'
	died = died.length > 0 ? died : 'Date and place of death unknown or character is still alive'
	culture = culture.length > 0 ? culture : 'Culture not defined'
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
		</>
	)
}

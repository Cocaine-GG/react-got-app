import React, {Component} from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'
import './item-details.scss'

const Field = ({ item, field, label }) => {
	return (
		<ListGroupItem className="d-flex justify-content-between">
			<span className="term">{label}</span>
			<span>{item[field]}</span>
		</ListGroupItem>
	)
}
export {
	Field
}
export default class ItemDetails extends Component {
	state = {
		item : null
	}

	componentDidMount() {
		this.updateItem()
	}

	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId){
			this.updateItem()
		}
	}

	updateItem = () => {
		const {itemId,getData} = this.props

		if (!itemId){
			return
		}

		getData(itemId)
			.then((item)=>{
				this.setState({item})
			})
	}

	render() {
		const {spanLabel} = this.props

		if (!this.state.item){
			return <span className='select-error'> Please select a {spanLabel}</span>
		}

		const {item, item: {name}} = this.state

		return (
			<div className="item-details rounded">
			<h4>{name}</h4>
			<ListGroup className="list-group-flush">
				{
					React.Children.map(this.props.children, (child)=>{
						return React.cloneElement(child, {item})
					})
				}
			</ListGroup>
		</div>)
	}
}

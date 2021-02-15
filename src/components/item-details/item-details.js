import React, {useState, useEffect} from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'
import './item-details.scss'

const Field = ({item, field, label}) => {
	return (
		<ListGroupItem className="d-flex justify-content-between">
		<span className="term">{label}</span>
		<span>{item[field]}</span>
	</ListGroupItem>)
}

export {
	Field
}

const ItemDetails = ({itemId, getData, spanLabel, children}) => {
	const [item, setItem] = useState(null)

	useEffect(() => {
		updateItem()
	},[itemId])

	const updateItem = () => {
		if (!itemId) {
			return
		}
		getData(itemId).then(item => setItem({item}))
	}


	if (!item) {
		return <span className='select-error'> Please select a {spanLabel}</span>
	}

	const {item: {name}} = item

	return (
		<div className="item-details rounded">
		<h4>{name}</h4>
		<ListGroup className="list-group-flush">
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, item)
			})}
		</ListGroup>
	</div>)
}

export default ItemDetails

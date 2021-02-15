import React, {useState, useEffect} from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'
import Loading from '../loading'
import './item-list.scss'

const ItemList = ({getData, onItemSelected, renderItem}) => {
	const [itemList, setItemList] = useState([])

	useEffect(() => {
		getData()
			.then(itemList => setItemList(itemList))
	}, [])

	const renderItems = (arr) => {
		return arr.map((item) => {
			const {id} = item
			const label = renderItem(item)
			return (
				<ListGroupItem
				key={id}
				onClick={() => onItemSelected(id)}>
				{label}
			</ListGroupItem>)
		})
	}

	if (!itemList) {
		return <Loading/>
	}

	const items = renderItems(itemList)
	return <ListGroup className="item-list">{items}</ListGroup>
}

export default ItemList

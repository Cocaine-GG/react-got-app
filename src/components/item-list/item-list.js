import React, {Component} from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'
import './item-list.scss'

export default class ItemList extends Component {

	render() {
		return (
			<ListGroup className="item-list">
				<ListGroupItem>John Snow</ListGroupItem>
				<ListGroupItem>Brandon Stark</ListGroupItem>
				<ListGroupItem>Geremy</ListGroupItem>
			</ListGroup>)
	}
}

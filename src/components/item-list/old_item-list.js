import React, {Component} from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'
import Loading from '../loading'
import PropTypes from 'prop-types'
import './item-list.scss'

export default class ItemList extends Component {
	state = {
		itemList: null
	}

	static propsTypes = {
		onItemSelected : PropTypes.func,
		getData: PropTypes.arrayOf(PropTypes.object),
		renderItem: PropTypes.func
	}

	componentDidMount() {
		const {getData} = this.props
		getData()
			.then(itemList => this.setState({itemList}))
	}

	renderItem = (arr) => {
		return arr.map((item)=>{
			const {id} = item
			const label = this.props.renderItem(item)
			return (
				<ListGroupItem
					key={id}
					onClick={()=>this.props.onItemSelected(id)}>
					{label}
				</ListGroupItem>
			)
		})
	}

	render() {
		const {itemList} = this.state
		if (!itemList){
			return <Loading/>
		}
		const items = this.renderItem(itemList)
		return <ListGroup className="item-list">{items}</ListGroup>
	}
}

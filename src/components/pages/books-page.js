import React from 'react'
import ItemList from '../item-list'
import GotService from '../../services/got-service'
import {withRouter} from 'react-router-dom'

const BooksPage = ({history}) => {
	const gotService = new GotService()

	return (
		<ItemList
			onItemSelected={ (itemId) => history.push(itemId) }
			getData={gotService.getAllBooks}
			renderItem={({name})=>name}/>
	)
}

export default withRouter(BooksPage)

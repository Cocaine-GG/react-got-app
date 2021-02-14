import React from 'react'
import GotService from '../../services/got-service'
import ItemDetails,{Field} from '../item-details'


const BooksItem = ({bookId}) => {
	const gotService = new GotService()
	return (
		<ItemDetails
			spanLabel='book'
			itemId={bookId}
			getData={gotService.getBook}>
			<Field field='numberOfPages' label='Number of pages'/>
			<Field field='publisher' label='Publisher'/>
			<Field field='released' label='Released'/>
		</ItemDetails>)
}

export default BooksItem

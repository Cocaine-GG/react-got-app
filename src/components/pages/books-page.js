import React, {useState} from 'react'
import ItemList from '../item-list'
import ItemDetails, {Field} from '../item-details'
import GotService from '../../services/got-service'
import RowBlock from '../row-block'

const BooksPage = () => {
	const [selectedItem, setSelectedItem] = useState(null)
	const gotService = new GotService()
	const itemList = (
		<ItemList
			onItemSelected={ (id) => setSelectedItem(id) }
			getData={gotService.getAllBooks}
			renderItem={({name})=>name}/>
	)
	const itemDetails = (
		<ItemDetails
			spanLabel='book'
			itemId={selectedItem}
			getData={gotService.getBook}>
			<Field field='numberOfPages' label='Number of pages' />
			<Field field='publisher' label='Publisher' />
			<Field field='released' label='Released' />
		</ItemDetails>
	)

	return (
		<RowBlock left={itemList} right={itemDetails}/>
	)
}

export default BooksPage

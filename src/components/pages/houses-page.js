import React, {useState} from 'react'
import ItemList from '../item-list'
import ItemDetails, {Field} from '../item-details'
import GotService from '../../services/got-service'
import RowBlock from '../row-block'

const HousesPage = () => {
	const [selectedItem, setSelectedItem] = useState(null)
	const gotService = new GotService()
	const itemList = (
		<ItemList
			onItemSelected={ (id) => setSelectedItem(id) }
			getData={gotService.getAllHouses}
			renderItem={(item)=>item.name}/>
	)
	const itemDetails = (
		<ItemDetails
			spanLabel='house'
			itemId={selectedItem}
			getData={gotService.getHouse}>
			<Field field='region' label='Region' />
			<Field field='words' label='Words' />
		</ItemDetails>
	)

	return (
		<RowBlock left={itemList} right={itemDetails}/>
	)
}

export default HousesPage

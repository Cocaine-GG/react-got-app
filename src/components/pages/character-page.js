import React, {useState} from 'react'
import ItemList from '../item-list'
import ItemDetails, {Field} from '../item-details'
import GotService from '../../services/got-service'
import RowBlock from '../row-block'

const CharacterPage = () => {
	const [selectedItem, setSelectedItem] = useState(null)
	const gotService = new GotService()
	const itemList = (
		<ItemList
			onItemSelected={ (id) => setSelectedItem(id) }
			getData={gotService.getAllCharacters}
			renderItem={(item)=>item.name}/>
	)
	const itemDetails = (
		<ItemDetails
			spanLabel='character'
			itemId={selectedItem}
			getData={gotService.getCharacter}>
			<Field field='gender' label='Gender' />
			<Field field='born' label='Born' />
			<Field field='died' label='Died' />
			<Field field='culture' label='Culture' />
		</ItemDetails>
	)

	return (
		<RowBlock left={itemList} right={itemDetails}/>
	)
}

export default CharacterPage

export default class GotService {
	constructor() {
		this._apiBase = 'https://www.anapioficeandfire.com/api'
	}

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`)
		if (!res.ok) {
			throw new Error(`Could not fetch ${url} , received ${res.status}`)
		}
		return await res.json()
	}

}

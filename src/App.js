import { useState, useEffect } from "react"

import SearchBox from "./components/search-box/SearchBox"
import CardList from "./components/card-list/CardList"
import "./App.css"

const App = () => {
	const [searchField, setSearchField] = useState("")
	const [characters, setCharacters] = useState([])
	const [filteredCharacters, setFilteredCharacters] = useState(characters)

	// Fetch data on start
	useEffect(() => {
		fetch("https://thronesapi.com/api/v2/characters")
			.then(res => res.json())
			.then(chars => setCharacters(chars))
	}, [])

	// Prevents filter from needlessly running as characters and searchField only change when they need to
	useEffect(() => {
		const newFilteredCharacters = characters.filter(
			character =>
				character.fullName.toLowerCase().includes(searchField) ||
				character.family.toLowerCase().includes(searchField) ||
				character.title.toLowerCase().includes(searchField)
		)
		setFilteredCharacters(newFilteredCharacters)
	}, [characters, searchField])

	const onSearchChange = event => {
		const searchFieldString = event.target.value.toLowerCase()
		setSearchField(searchFieldString)
	}

	return (
		<div className="App">
			<div className="header">
				<img src="throne.png" alt="Throne" width="256" height="256" />
				<h1 className="app-title">Game of Thrones</h1>
				<h2 className="app-subtitle">Character Reference</h2>
				<SearchBox
					onChangeHandler={onSearchChange}
					placeholder="search characters"
					className="characters-search-box"
				/>
			</div>
			<CardList characters={filteredCharacters} />
		</div>
	)
}

export default App


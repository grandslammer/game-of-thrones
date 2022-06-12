import "./card-list.css"
import Card from "../card/Card"

const CardList = ({ characters }) => (
	<div className="card-list">
		{characters.map(char => {
			return <Card character={char} key={char.id} />
		})}
	</div>
)

export default CardList

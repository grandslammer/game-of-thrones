import "./card.css"

const Card = ({ character }) => {
	const { id, fullName, title, family, imageUrl } = character

	return (
		<div key={id} className="card-container">
			<img src={imageUrl} alt={fullName} width="225" height="225" />
			<h3 className="charName">{fullName}</h3>
			<h4 className="charTitle">{title}</h4>
			<p>{family}</p>
		</div>
	)
}

export default Card

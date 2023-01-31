// import trash from '../assets/trash.svg'
import trash2 from '../../assets/trash.svg'

export function CardRender({ id, description, price, entrance, cards, setCards }) {

    function deleteCard(string) {
        console.log(id)
        console.log(string)
        const filteredCards = cards.filter(card => card.id != string)
        setCards(filteredCards)

    }

    return (
        <div className="card">
            <div>
                <h2>{description}</h2>
                <span>{entrance}</span>
            </div>
            <p>R$ {price}</p>
            <img id={id} src={trash2} alt="trash" onClick={() => deleteCard(id)} />
            {console.log(id)}
        </div>

    )
}
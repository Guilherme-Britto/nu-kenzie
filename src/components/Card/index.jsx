
export function CardRender({ id, description, price, entrance, cards }) {

    function deleteCard() {
        // console.log("id")
    }

    return (
        <>
            {cards == [] ?
                <h2> Você ainda não possui nenhum lançamento</h2>:

                <div className="card">
                <h2>{description}</h2>
                <span>{entrance}</span>
                <p>{price}</p>
                <img id={id} src="../src/assets/trash.svg" alt="trash" onClick={deleteCard()} />
            </div>}
            {console.log(cards)}

        </>
    )
}
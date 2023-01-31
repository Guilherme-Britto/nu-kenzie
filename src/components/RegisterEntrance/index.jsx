import { useState } from "react"
import { v4 as uuid } from "uuid"

export function RegisterEntrance({ setCards, }) {
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [entrance, setEntrance] = useState('Entrada')
  const [totalPrice, setTotalPrice] = useState(0.00)
  const [show, setShow] = useState(false)


  function handleSubmit(e) {
    e.preventDefault()

    const newCard = {
      id: uuid(),
      description,
      price,
      entrance
    }
    setCards((oldCards) => [...oldCards, newCard])

    setShow(true)

    if (newCard.entrance == 'Entrada') {
      setTotalPrice(totalPrice + Number(price))
    } else {
      setTotalPrice(totalPrice - Number(price))
    }
  }

  return (

    <>
      <form className='input__container' onSubmit={handleSubmit}>
        <label htmlFor="description">Descrição</label>
        <input
          type="text"
          id="description"
          onChange={e => setDescription(e.target.value)}
          placeholder='Digite aqui sua descrição' />
        <span>Ex: Compra de roupas</span>
        <div className='select__container'>
          <div className='label__container'>
            <label htmlFor="price">Valor</label>
            <div>
              <input
                type="number"
                step="0.01"
                id="price"
                onChange={e => setPrice(Number(e.target.value).toFixed(2))}
                placeholder='0,00' />
              <span>R$</span>
            </div>
          </div>
          <div className='label__container'>
            <label htmlFor="entrance">Tipo de valor</label>
            <select
              id="entrance"
              onChange={e => setEntrance(e.target.value)}>
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </div>
        </div>
        <button type='submit'>Inserir valor</button>
      </form>
      {show == [] ? <></> :
        <div className="totatSum">
          <h2>Valor total:</h2>
          <span>O valor se refere ao saldo</span>
          <p>R$ {totalPrice.toFixed(2)}</p>
        </div>
      }
    </>

  )
}
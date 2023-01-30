import { useState } from 'react'
import './index.css'
import './App.css'
import { RegisterEntrance } from './components/RegisterEntrance';
import { CardRender } from './components/Card';

export function App() {
  const [page, setPage] = useState(['homePage']);
  const [cards, setCards] = useState([]);

  return (
    <>
      {page == 'homePage' ?
        <main className='homePage'>
          <div>
            <img src="./src/assets/Nu Kenzie.svg" alt="" />
            <h1>Centralize o controle das suas finanças</h1>
            <p>de forma rápida e segura</p>
            <button type='button' onClick={() => setPage("dashboard")}>Iniciar</button>
          </div>
          <img className='modelImg' src="./src/assets/homePage.svg" alt="" />
        </main> :

        <main className='dashboard'>
          <header>
            <img src="./src/assets/Nu Kenzie2.svg" alt="" />
            <button type='button' onClick={() => setPage("homePage")}>Inicio</button>
          </header>
          <body>
            <section>
            <RegisterEntrance setCards={setCards} cards={cards} />
            </section>
            <section className='cards__container'>
            <h2 className='title2'>Resumo Financeiro</h2>
            {cards.map((card) => (
              <CardRender key={card.id} description={card.description} price={card.price} entrance={card.entrance} cards={cards} />
            ))}
            </section>
          </body>

        </main>
      }

    </>
  )
}


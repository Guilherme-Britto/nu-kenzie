import { useState } from 'react'
import './index.css'
import './App.css'
import { RegisterEntrance } from './components/RegisterEntrance';
import { CardRender } from './components/Card';
import NuKenzie from './assets/NuKenzie.svg'
import homePage from './assets/homePage.svg'
import NuKenzie2 from './assets/NuKenzie2.svg'

export function App() {
  const [page, setPage] = useState(['homePage']);
  const [cards, setCards] = useState([]);

  return (
    <>
      {page == 'homePage' ?
        <main className='homePage'>
          <div>
            <img src={NuKenzie} alt="logo" />
            <h1>Centralize o controle das suas finanças</h1>
            <p>de forma rápida e segura</p>
            <button type='button' onClick={() => setPage("dashboard")}>Iniciar</button>
          </div>
          <img className='modelImg' src={homePage} alt="" />
        </main> :

        <main className='dashboard'>
          <header>
            <img src={NuKenzie2} alt="" />
            <button type='button' onClick={() => setPage("homePage")}>Inicio</button>
          </header>
          <body>
            <section>
              <RegisterEntrance setCards={setCards} cards={cards} />
            </section>
            <section className='cards__container'>
              <h2 className='title2'>Resumo Financeiro</h2>

              {cards.length == 0 ?
                <><h3 className='title3'>Você ainda não possui nenhum lançamento</h3></>
                :
                <>
                  {cards.map((card) => (
                    <CardRender key={card.id} id={card.id} description={card.description} price={card.price} entrance={card.entrance} cards={cards} setCards={setCards} />
                  ))}
                </>
              }
            </section>
          </body>

        </main>
      }

    </>
  )
}


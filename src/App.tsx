import './App.css'
import { ShoeHighlight } from './components/ShoeHighlight'
import { Shoe } from './interfaces/shoe_interface'



const shoeList: Shoe[] = [
  {
    name: 'air jordan 1 mid dutch green',
    path: '1.png'
  },
  {
    name: 'air jordan 1 high zoom cmft tropical twist',
    path: '2.png'
  },
  {
    name: 'air jordan 1 retro high court purple W',
    path: '3.png'
  },
  {
    name: 'air jordan 1 mid light smoke grey GS',
    path: '4.png'
  },
  {
    name: 'air jordan 1 mid black noble red w',
    path: '5.png'
  },
  {
    name: 'air jordan 1 mid bright citrus',
    path: '6.png'
  },
  {
    name: 'Air Jordan 1 mid grey camo',
    path: '7.png'
  },
  {
    name: 'Air Jordan 1 Mid Carbon Fiber',
    path: '8.png'
  },
]

function App() {



  return (
    <div className="App">
      <header>
        <div className="message">Ganhe R$ 10,00 de desconto no frete</div>
        <div className="logo">JordanShoes</div>
      </header>
      <main>

        <section className="hero">
          <div className="overlay"></div>
          <div className="container">
            <h1>A melhor loja de Jordan</h1>
            <p>O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>
          </div>
        </section>
        <section className="highlights">
          <div className="container">
            <h2>Destaques</h2>
            <h3>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </h3>
            <ul>
              {
                shoeList.map((shoe, index) => {
                  return <ShoeHighlight key={index} name={shoe.name} path={shoe.path} />
                })
              }
            </ul>
          </div>
        </section>
      </main>
      <footer>
        Todos os direitos reservados.
      </footer>
    </div>
  )
}

export default App

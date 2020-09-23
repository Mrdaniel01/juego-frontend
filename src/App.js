import React, { useState } from 'react';
import Warrior1 from './components/Warrior1';
import Warrior2 from './components/Warrior2';
import gitLogo from './assets/git.png'

const App = () => {

  const modalWinner = document.getElementById('modalWinner')
  const gameContainer = document.getElementById('gameContainer')

  const handleModal = () => {
    modalWinner.classList.add('hide');
    gameContainer.classList.remove('hide');
  }

  const [life1, setLife1 ] = useState(100)

  const handlePlay1 = () => {
    setLife1( life1 - Math.floor(Math.random() * (40 - 20 ) + 20))
  }
  const [life2, setLife2 ] = useState(100)

  const handlePlay2 = () => {
    setLife2( life2 - Math.floor(Math.random() * (40 - 20 ) + 20))
  }


  return (
    <>
      <h1 className="tittle">The Game</h1>
      <div className="game__container" id='gameContainer'>
        <div className="card">
          <ul className="card__items">
            <li className="card__items--name">Player 1</li>
            <li className="card__items--logic">
              <div id='remainLife1'>{life2}                 
                  <span id="remainLife1Num"></span>            
              </div>
              <div>
                <button type="button" id='playBtn1' onClick={handlePlay1}>
                  Play
                </button>
              </div>
            </li>    
            <li className="card__items--img">
              <Warrior1 />
            </li>
          </ul>
        </div>

        <div className="card">
          <ul className="card__items">
            <li className="card__items--name">Player 2</li>

            <li className="card__items--logic">
              <div id='remainLife2'>{life1}</div>
              <div>
                <button type='button' id='playBtn2' onClick={handlePlay2}>
                  Play
                </button>
              </div>
            </li>

            <li className="card__items--img">
              <Warrior2 />
            </li>
          </ul>
        </div>
      </div>   

      <div className="author">
        <h3 className="author__link">Made by. Juan Rios</h3>
        <a href="https://github.com/Mrdaniel01" target="_blank" rel="noopener noreferrer">
          <img src={gitLogo} alt="git hub Daniel Link" />
        </a>
      </div>

  

  <div className="modal hide" id='modalWinner'>
    <div className="modal__img">
      <Warrior1 />
    </div>

    <div className="modal__detail">
      <ul>
        <li> 
          <h2>
            the winner is:
          </h2>
          <div id="show__winner">
            Ganador
          </div>
        </li>
        <li>
          <button type="button" id='playAgainBtn' onClick={handleModal}>Play again</button>
        </li>
      </ul>
    </div>
    </div>
  </>
  )
};

export default App;
import React, { useState } from 'react';
import Warrior1 from './components/Warrior1';
import Warrior2 from './components/Warrior2';
import gitLogo from './assets/git.png';
//import { ModalWinner } from './components/ModalWinner';

const App = () => {
  
  const [ life, setLife] = useState({
    life1: 100,
    life2: 100
  }) 

  const { life1, life2} = life;
  
  const reset = () => {
    setLife ({
      life1: 100,
      life2: 100
     })
  }

  return (
    <div className='game'>
      <h1 className="tittle">The Game</h1>
      <button onClick={reset} className='btn'>Reset</button>
      <div className="game__container" id='gameContainer'>
        <div className="card">
          <ul className="card__items">
            <li className="card__items--name">Player 1</li>
            <li className="card__items--logic">
              <div id='remainLife1'>{life2}                 
                  <span id="remainLife1Num"></span>            
              </div>
              <div>
                <button type="button" id='playBtn1' 
                
                onClick={() => 
                  setLife({
                    ...life,
                    life1: life1 - Math.floor(Math.random() * (40 - 20 ) + 20)}
                  )}>
                  
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
                <button type='button' id='playBtn2' 
                
                  onClick={() => 
                    setLife({
                      ...life,
                      life2: life2 - Math.floor(Math.random() * (40 - 20 ) + 20)}
                    )}>
                  
                  
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
  </div>
  )
};

export default App;
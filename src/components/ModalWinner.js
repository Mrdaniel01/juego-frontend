import React from 'react'
import Warrior1 from './Warrior1'

export const ModalWinner = () => {
  return (
    <div className="modal" id='modalWinner'>
    <div className="modal__img">
      <Warrior1 />
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
          <button type="button" id='playAgainBtn'>Play again</button>
        </li>
      </ul>
    </div>
    </div>
    </div>
      
    
  )
}

import { useState } from "react"
//import { ModalWinner } from "../components/ModalWinner";

export const useShowWinner = ( initialState = 100 ) => {
  
  const [ life, setLife] = useState(initialState);

  const decrease = () => {
    setLife( life - Math.floor(Math.random() * (40 - 20 ) + 20))
  }

  const reset = () => {
    setLife (initialState)
  }

  if(life <= 0){
    alert('Jugador 2 Gano')
  }

  return  {
    life,
    decrease,
    reset
  }
}

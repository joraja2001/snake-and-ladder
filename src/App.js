import React, { useState } from 'react'
import Start from './prop'
import './App.css'
import boardcell from './gamedata'
let winner = 'Winner is'
const Board = () => {
  const [vis, setVis] = useState('visible')
  let ladder = [20, 31, 52, 75]
  let Fromsnakebite = [15, 33, 44, 80, 97]
  let Toladderno = [24, 39, 63, 90]
  let Tosnakeno = [4, 12, 26, 59, 23]
  let dice = Math.floor(Math.random() * 6) + 1

  const [player, setplayer] = useState("player1")

  function Playerturn() {
    if (player === "player1") {
      setplayer("player2")
    } else {
      setplayer("player1")
    }
  }

  const [player1, setposition1] = useState(1)
  const [player2, setposition2] = useState(1)
  
  // const[winner,setWinner]=useState('')
  function game() {
    Playerturn()
    if (player === "player1") {
      setposition1("player2")
      if(player1+dice<=100){
        if (Fromsnakebite.includes(player1 + dice)) {
          setposition1(Tosnakeno[Fromsnakebite.indexOf(player1 + dice)])
        } else if (ladder.includes(player1 + dice)) {
          setposition1(Toladderno[ladder.indexOf(player1 + dice)])
        } else {
          setposition1(player1 + dice)
        }
      }
      else{
        setposition1(player1)
      }
      if (player1+dice === 100) {
        winner += ' Player 1'
        console.log("player1 is winner")
        setVis('invisible')
      }
    }
    else if (player === "player2") {
      setposition2("player1")
      if(player2+dice<=100){
        if (Fromsnakebite.includes(player2 + dice)) {
          setposition2(Tosnakeno[Fromsnakebite.indexOf(player2 + dice)])
        } else if (ladder.includes(player2 + dice)) {
          setposition2(Toladderno[ladder.indexOf(player2 + dice)])
        } else {
          setposition2(player2 + dice)
        }
        if (player2+dice === 100) {
          winner += ' Player 2'
          console.log("Player 2 is winner")
          setVis('invisible')
        }
      }
      else{
        setposition2(player2)
      }
    }
    
    
  }




  return (
    <div className='window'>
      <h1>{winner}</h1>
      <div className={vis}>
        <button onClick={game}>Dice</button>
        <p>player1:{player1}</p>
        <p>player2:{player2}</p>
        <h3>Random number:{dice}</h3>
      </div>
      <div className='Maingrid'>
        {boardcell.map((properties) => (
          <Start
            square={properties}
            snake={Fromsnakebite.includes(properties) ? '🐍' : ''}
            ladder={ladder.includes(properties) ? '⬆️' : ''}
            player_1={player1 === properties ? '🟡' : ''}
            player_2={player2 === properties ? '🔴' : ''}
            key={properties}
          />
        ))}
      </div>
    </div>
  )
}


export default Board
import React from 'react'
import './propBox.css'
const Start = ({ square, snake, ladder, player_1, player_2 }) => {
  return (
    <div className="gridBox">
      <div className="leftSide">
      <p>{player_1}</p>
      <p>{player_2}</p>
      </div>
      <div className="rightSide">
      <p>{snake}</p>
      <p>{square}</p>
      <p>{ladder}</p>
      </div>
    </div>
  )
}
export default Start
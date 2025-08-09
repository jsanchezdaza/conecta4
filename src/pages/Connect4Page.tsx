import React from 'react'
import { Connect4Game } from '../games/connect4/Connect4Game'

export const Connect4Page = () => {
  return (
    <div className="container">
      <h1 className="title">
        <span className="red-letter">CONNECT</span> <span className="yellow-letter">4</span>
      </h1>
      <Connect4Game />
    </div>
  )
}
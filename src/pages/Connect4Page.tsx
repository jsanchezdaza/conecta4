import React from 'react'
import { Connect4Game } from '../games/connect4/Connect4Game'

export const Connect4Page = () => {
  return (
    <div className="container">
      <h1 className="title">CONNECT 4</h1>
      <Connect4Game />
    </div>
  )
}
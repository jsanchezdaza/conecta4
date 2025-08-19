import React from 'react'
import { Connect4Game } from '../games/connect4/Connect4Game'

export const Connect4Page = () => {
  return (
    <div>
      <h1 className="main-title">
        <span className="connect">CONNECT</span>{' '}
        <span className="four">4</span>
      </h1>
      <Connect4Game />
    </div>
  )
}
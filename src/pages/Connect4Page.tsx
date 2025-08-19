import React from 'react'
import { Connect4Game } from '../games/connect4/Connect4Game'

export const Connect4Page = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl sm:text-6xl font-black mb-6">
        <span className="text-neon-pink animate-pulse-neon" style={{ textShadow: '0 0 20px #ff0080, 0 0 40px #ff0080' }}>CONNECT</span>{' '}
        <span className="text-neon-yellow animate-flicker" style={{ textShadow: '0 0 20px #ffff00, 0 0 40px #ffff00' }}>4</span>
      </h1>
      <Connect4Game />
    </div>
  )
}
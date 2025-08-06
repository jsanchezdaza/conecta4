import React from 'react'
import { Connect4Game } from '@/games/connect4/Connect4Game'

export const Connect4Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 p-2 sm:p-4">
      <div className="flex flex-col items-center max-w-lg mx-auto">
        <h1 className="mb-4 sm:mb-8 mt-2 sm:mt-6 text-4xl sm:text-7xl font-black tracking-wide text-white" style={{
          fontFamily: '"Arial Black", Impact, sans-serif',
          textShadow: `
            2px 2px 0px #1a1a2e,
            4px 4px 0px #16213e,
            0px 0px 10px rgba(34,211,238,0.6),
            0px 0px 20px rgba(34,211,238,0.4)
          `
        }}>
          CONNECT 4
        </h1>
        <div className="rounded-xl bg-slate-800 p-3 sm:p-6 shadow-2xl ring-1 ring-cyan-400/20 w-full">
          <Connect4Game />
        </div>
      </div>
    </div>
  )
}
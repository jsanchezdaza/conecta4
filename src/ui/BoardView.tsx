import React from 'react'
import { initialState, step } from '@/board'

export const BoardView = () => {
  const [state, setState] = React.useState(() => initialState())

  const onClick = (col: number) => {
    setState((s) => step(s, col))
  }

  const reset = () => {
    setState(initialState())
  }

  return (
    <div>
      <div className="mb-4 text-center">
        {state.winner ? (
          <div className="text-lg font-semibold text-white">Winner: Player {state.winner}</div>
        ) : state.draw ? (
          <div className="text-lg font-semibold text-white">Draw!</div>
        ) : (
          <div className="text-lg font-semibold text-white">
            Player{' '}
            <span className={state.turn === 1 ? 'text-red-500' : 'text-yellow-500'}>
              {state.turn}
            </span>'s Turn
          </div>
        )}
      </div>
      <div role="grid" className="grid grid-cols-7 gap-1">
        {state.board.map((row, r) =>
          row.map((cell, c) => (
            <div
              key={`${r}-${c}`}
              data-testid="cell"
              role="gridcell"
              aria-label={cell === 0 ? 'cell' : `cell p${cell}`}
              className={
                cell === 1
                  ? 'size-16 rounded-full bg-red-500 border border-red-600 cursor-pointer hover:bg-red-600 transition-colors'
                  : cell === 2
                  ? 'size-16 rounded-full bg-yellow-400 border border-yellow-500 cursor-pointer hover:bg-yellow-500 transition-colors'
                  : 'size-16 rounded-full bg-slate-300 border border-slate-400 cursor-pointer hover:bg-slate-200 transition-colors'
              }
              style={
                cell === 1
                  ? {
                      background: `
                        radial-gradient(circle at 35% 25%, rgba(255,255,255,0.3), transparent 60%),
                        #dc2626
                      `,
                    }
                  : cell === 2
                  ? {
                      background: `
                        radial-gradient(circle at 35% 25%, rgba(255,255,255,0.3), transparent 60%),
                        #facc15
                      `,
                    }
                  : undefined
              }
              onClick={() => onClick(c)}
            />
          )),
        )}
      </div>
      <div className="mt-4 text-center">
        <button 
          className="group relative px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg hover:from-purple-700 hover:to-pink-700 hover:shadow-xl transform hover:scale-105 transition-all duration-200 border border-white/20"
          style={{
            background: `
              linear-gradient(45deg, #9333ea, #ec4899),
              radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), transparent 50%)
            `,
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}
          onClick={reset}
        >
          <span className="relative z-10">
            NEW GAME
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-200" />
        </button>
      </div>
    </div>
  )
}

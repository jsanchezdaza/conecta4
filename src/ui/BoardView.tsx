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
                  ? 'size-16 rounded-full bg-red-500'
                  : cell === 2
                  ? 'size-16 rounded-full bg-yellow-400'
                  : 'size-16 rounded-full bg-slate-300'
              }
              onClick={() => onClick(c)}
            />
          )),
        )}
      </div>
      <div className="mt-4 text-center">
        <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  )
}

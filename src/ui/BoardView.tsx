import React from 'react'
import { COLS, initialState, step } from '@/board'

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
      <div className="mb-2 flex items-center gap-2">
        {state.winner ? <div>Ganador: p{state.winner}</div> : state.draw ? <div>Empate</div> : null}
        <button onClick={reset}>Reiniciar</button>
      </div>
      <div role="grid" className={`grid grid-cols-${COLS} gap-1`}>
        {state.board.map((row, r) =>
          row.map((cell, c) => (
            <div
              key={`${r}-${c}`}
              data-testid="cell"
              role="gridcell"
              aria-label={cell === 0 ? 'cell' : `cell p${cell}`}
              className={
                cell === 1
                  ? 'size-10 rounded bg-red-500'
                  : cell === 2
                  ? 'size-10 rounded bg-yellow-400'
                  : 'size-10 rounded bg-slate-200'
              }
              onClick={() => onClick(c)}
            />
          )),
        )}
      </div>
    </div>
  )
}

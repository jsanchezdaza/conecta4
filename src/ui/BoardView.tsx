import React from 'react'
import { createBoard, dropPiece, checkWinner, COLS } from '@/board'

export const BoardView = () => {
  const [board, setBoard] = React.useState(() => createBoard())
  const [player, setPlayer] = React.useState<1 | 2>(1)
  const winner = checkWinner(board)

  const onClick = (col: number) => {
    if (winner) return
    setBoard((b) => dropPiece(b, col, player))
    setPlayer((p) => (p === 1 ? 2 : 1))
  }

  return (
    <div>
      {winner !== 0 && <div>Ganador: p{winner}</div>}
      <div role="grid" className={`grid grid-cols-${COLS} gap-1`}>
        {board.map((row, r) =>
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

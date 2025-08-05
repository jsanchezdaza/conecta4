import React from 'react'
import { createBoard, dropPiece } from '@/board'

export const BoardView = () => {
  const [board, setBoard] = React.useState(() => createBoard())
  const [player] = React.useState<1 | 2>(1)

  const onClick = (col: number) => {
    setBoard((b) => dropPiece(b, col, player))
  }

  return (
    <div role="grid" className="grid grid-cols-7 gap-1">
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
  )
}

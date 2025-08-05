import React from 'react'
import { createBoard } from '@/board'

export const BoardView = () => {
  const board = createBoard()
  return (
    <div role="grid" className="grid grid-cols-7 gap-1">
      {board.map((row, r) =>
        row.map((_, c) => (
          <div
            key={`${r}-${c}`}
            data-testid="cell"
            role="gridcell"
            className="size-10 rounded bg-slate-200"
          />
        )),
      )}
    </div>
  )
}

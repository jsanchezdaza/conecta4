import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BoardView } from '@/ui/BoardView'

const idx = (row: number, col: number) => row * 7 + col

describe('Win - diagonal ↗︎', () => {
  it('declares p1 winner on 4 in a diagonal ↗︎', () => {
    render(<BoardView />)
    const cells = screen.getAllByRole('gridcell')

    // Target p1 at (5,3),(4,2),(3,1),(2,0)
    fireEvent.click(cells[idx(0, 3)]) // p1: (5,3)
    fireEvent.click(cells[idx(0, 6)]) // p2 elsewhere

    fireEvent.click(cells[idx(0, 2)]) // p1: (5,2)
    fireEvent.click(cells[idx(0, 2)]) // p2: (4,2)

    fireEvent.click(cells[idx(0, 1)]) // p1: (5,1)
    fireEvent.click(cells[idx(0, 1)]) // p2: (4,1)
    fireEvent.click(cells[idx(0, 1)]) // p1: (3,1)
    fireEvent.click(cells[idx(0, 6)]) // p2 elsewhere

    fireEvent.click(cells[idx(0, 0)]) // p1: (5,0)
    fireEvent.click(cells[idx(0, 0)]) // p2: (4,0)
    fireEvent.click(cells[idx(0, 0)]) // p1: (3,0)
    fireEvent.click(cells[idx(0, 6)]) // p2 elsewhere

    // Final p1 to (2,0)
    fireEvent.click(cells[idx(0, 0)])

    expect(screen.getByText(/winner: player 1/i)).toBeInTheDocument()
  })
})

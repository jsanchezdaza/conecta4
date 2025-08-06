import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BoardView } from '@/ui/BoardView'

describe('Win - vertical', () => {
  it('declares p1 winner on 4 in a column', () => {
    render(<BoardView />)
    const cells = screen.getAllByRole('gridcell')
    const col = 1
    const idx = (r: number, c: number) => r * 7 + c

    const clickCol = () => fireEvent.click(cells[idx(0, col)])

    clickCol() // p1 at row5
    fireEvent.click(cells[idx(0, 0)]) // p2 elsewhere
    clickCol() // p1 at row4
    fireEvent.click(cells[idx(0, 0)]) // p2 elsewhere
    clickCol() // p1 at row3
    fireEvent.click(cells[idx(0, 0)]) // p2 elsewhere
    clickCol() // p1 at row2 (fourth)

    expect(screen.getByText(/winner: player 1/i)).toBeInTheDocument()
  })
})

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BoardView } from '@/ui/BoardView'

const idx = (row: number, col: number) => row * 7 + col

describe('Draw', () => {
  it('declares draw when board is full without a winner and blocks further moves', () => {
    render(<BoardView />)
    const cells = screen.getAllByRole('gridcell')

    // Fill board without creating 4 in a row: alternate column orders each row
    const orders = [
      [0,2,4,6,1,3,5],
      [1,3,5,0,2,4,6],
      [0,2,4,6,1,3,5],
      [1,3,5,0,2,4,6],
      [0,2,4,6,1,3,5],
      [1,3,5,0,2,4,6],
    ]
    for (let r = 0; r < 6; r++) {
      for (const c of orders[r]) fireEvent.click(cells[idx(0, c)])
    }

    expect(screen.getByText(/empate/i)).toBeInTheDocument()

    const before = cells[idx(5, 0)].getAttribute('aria-label')
    fireEvent.click(cells[idx(0, 0)])
    const after = cells[idx(5, 0)].getAttribute('aria-label')
    expect(after).toBe(before)
  })
})

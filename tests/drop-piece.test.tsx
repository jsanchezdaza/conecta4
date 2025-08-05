import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BoardView } from '@/ui/BoardView'

describe('Drop piece', () => {
  it('on click column, drops player 1 piece to lowest empty cell', () => {
    render(<BoardView />)
    const cells = screen.getAllByRole('gridcell')
    const col = 3
    const getIndex = (r: number, c: number) => r * 7 + c
    const topCell = cells[getIndex(0, col)]
    fireEvent.click(topCell)
    const lowest = cells[getIndex(5, col)]
    expect(lowest).toHaveAttribute('aria-label', 'cell p1')
  })
})

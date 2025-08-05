import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BoardView } from '@/ui/BoardView'

describe('Turns', () => {
  it('alternates players p1 then p2 on consecutive clicks', () => {
    render(<BoardView />)
    const cells = screen.getAllByRole('gridcell')
    const col = 2
    const idx = (r: number, c: number) => r * 7 + c

    fireEvent.click(cells[idx(0, col)])
    fireEvent.click(cells[idx(0, col)])

    expect(cells[idx(5, col)]).toHaveAttribute('aria-label', 'cell p1')
    expect(cells[idx(4, col)]).toHaveAttribute('aria-label', 'cell p2')
  })
})

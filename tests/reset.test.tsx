import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BoardView } from '@/ui/BoardView'

const idx = (row: number, col: number) => row * 7 + col

describe('Reset', () => {
  it('resets board to empty and turn to p1', () => {
    render(<BoardView />)
    const cells = screen.getAllByRole('gridcell')

    fireEvent.click(cells[idx(0, 0)])
    fireEvent.click(cells[idx(0, 1)])

    fireEvent.click(screen.getByRole('button', { name: /reset/i }))

    expect(cells.every((c) => c.getAttribute('aria-label') === 'cell')).toBe(true)

    fireEvent.click(cells[idx(0, 0)])
    expect(cells[idx(5, 0)]).toHaveAttribute('aria-label', 'cell p1')
  })
})

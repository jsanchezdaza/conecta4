import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BoardView } from '@/ui/BoardView'

const idx = (row: number, col: number) => row * 7 + col

describe('Column full', () => {
  it('ignores clicks when a column is full', () => {
    render(<BoardView />)
    const cells = screen.getAllByRole('gridcell')
    const col = 4

    for (let i = 0; i < 6; i++) fireEvent.click(cells[idx(0, col)])

    const topBefore = cells[idx(0, col)].getAttribute('aria-label')
    fireEvent.click(cells[idx(0, col)])
    const topAfter = cells[idx(0, col)].getAttribute('aria-label')

    expect(topAfter).toBe(topBefore)
  })
})

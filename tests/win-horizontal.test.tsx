import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BoardView } from '@/ui/BoardView'

const idx = (r: number, c: number) => r * 7 + c

describe('Win - horizontal', () => {
  it('declares p1 winner on 4 in a row', () => {
    render(<BoardView />)
    const cells = screen.getAllByRole('gridcell')

    // Fill bottom row: columns 0..3 for p1, interleave p2 elsewhere to alternate turns
    fireEvent.click(cells[idx(0, 0)]) // p1 -> (5,0)
    fireEvent.click(cells[idx(0, 6)]) // p2 elsewhere
    fireEvent.click(cells[idx(0, 1)]) // p1 -> (5,1)
    fireEvent.click(cells[idx(0, 6)]) // p2 elsewhere
    fireEvent.click(cells[idx(0, 2)]) // p1 -> (5,2)
    fireEvent.click(cells[idx(0, 6)]) // p2 elsewhere
    fireEvent.click(cells[idx(0, 3)]) // p1 -> (5,3)

    expect(screen.getByText(/ganador: p1/i)).toBeInTheDocument()
  })
})

import { screen, fireEvent } from '@testing-library/react'
import { startGameWithPlayers } from './test-utils'

const idx = (row: number, col: number) => row * 7 + col

describe('Win - diagonal', () => {
  it('declares p1 winner on 4 in a diagonal ↘︎', () => {
    startGameWithPlayers()
    const cells = screen.getAllByRole('gridcell')

    // Target diagonal for p1: (5,0),(4,1),(3,2),(2,3)
    fireEvent.click(cells[idx(0, 0)]) // p1: (5,0)
    fireEvent.click(cells[idx(0, 6)]) // p2 elsewhere

    fireEvent.click(cells[idx(0, 1)]) // p1: (5,1)
    fireEvent.click(cells[idx(0, 1)]) // p2: (4,1)

    fireEvent.click(cells[idx(0, 2)]) // p1: (5,2)
    fireEvent.click(cells[idx(0, 2)]) // p2: (4,2)
    fireEvent.click(cells[idx(0, 2)]) // p1: (3,2)
    fireEvent.click(cells[idx(0, 6)]) // p2 elsewhere

    fireEvent.click(cells[idx(0, 3)]) // p1: (5,3)
    fireEvent.click(cells[idx(0, 3)]) // p2: (4,3)
    fireEvent.click(cells[idx(0, 3)]) // p1: (3,3)
    fireEvent.click(cells[idx(0, 6)]) // p2 elsewhere

    // Final p1 to complete at (2,3)
    fireEvent.click(cells[idx(0, 3)]) // p1: (2,3)

    expect(screen.getByText('TestPlayer1')).toBeInTheDocument()
  })
})

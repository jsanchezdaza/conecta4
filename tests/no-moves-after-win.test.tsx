import { screen, fireEvent } from '@testing-library/react'
import { startGameWithPlayers } from './test-utils'

const idx = (row: number, col: number) => row * 7 + col

describe('No moves after win', () => {
  it('ignores clicks after winner is declared', () => {
    startGameWithPlayers()
    const cells = screen.getAllByRole('gridcell')

    // Make p1 win horizontally on bottom row
    fireEvent.click(cells[idx(0, 0)])
    fireEvent.click(cells[idx(0, 6)])
    fireEvent.click(cells[idx(0, 1)])
    fireEvent.click(cells[idx(0, 6)])
    fireEvent.click(cells[idx(0, 2)])
    fireEvent.click(cells[idx(0, 6)])
    fireEvent.click(cells[idx(0, 3)])

    expect(screen.getByText('TestPlayer1')).toBeInTheDocument()

    const before = cells[idx(5, 4)].getAttribute('aria-label')
    fireEvent.click(cells[idx(0, 4)])
    const after = cells[idx(5, 4)].getAttribute('aria-label')

    expect(after).toBe(before)
  })
})

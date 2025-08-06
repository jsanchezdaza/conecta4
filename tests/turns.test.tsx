import { screen, fireEvent } from '@testing-library/react'
import { startGameWithPlayers } from './test-utils'

describe('Turns', () => {
  it('alternates players p1 then p2 on consecutive clicks', () => {
    startGameWithPlayers()
    const cells = screen.getAllByRole('gridcell')
    const col = 2
    const idx = (r: number, c: number) => r * 7 + c

    fireEvent.click(cells[idx(0, col)])
    fireEvent.click(cells[idx(0, col)])

    expect(cells[idx(5, col)]).toHaveAttribute('aria-label', 'cell p1')
    expect(cells[idx(4, col)]).toHaveAttribute('aria-label', 'cell p2')
  })
})

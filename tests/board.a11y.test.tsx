import { screen } from '@testing-library/react'
import { startGameWithPlayers } from './test-utils'

describe('BoardView a11y', () => {
  it('marks each cell as an identifiable gridcell', () => {
    startGameWithPlayers()
    const cells = screen.getAllByRole('gridcell', { name: 'cell' })
    expect(cells).toHaveLength(6 * 7)
  })
})

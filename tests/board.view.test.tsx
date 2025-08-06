import { screen } from '@testing-library/react'
import { startGameWithPlayers } from './test-utils'

describe('BoardView', () => {
  it('renders a 6x7 grid after setup', () => {
    startGameWithPlayers()
    const cells = screen.getAllByTestId('cell')
    expect(cells).toHaveLength(6 * 7)
  })
})

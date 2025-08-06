import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import { startGameWithPlayers } from './test-utils'

const idx = (row: number, col: number) => row * 7 + col

describe('Reset', () => {
  it('resets game and returns to player setup', () => {
    startGameWithPlayers()
    const cells = screen.getAllByRole('gridcell')

    // Make some moves
    fireEvent.click(cells[idx(0, 0)])
    fireEvent.click(cells[idx(0, 1)])

    // Click NEW GAME button
    fireEvent.click(screen.getByRole('button', { name: /new game/i }))

    // Should be back in setup phase
    expect(screen.getByText('Choose Player Names')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter player 1 name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter player 2 name')).toBeInTheDocument()
  })
})

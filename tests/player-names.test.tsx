import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import { startGameWithPlayers } from './test-utils'

describe('Player Names', () => {
  it('displays custom player names during gameplay', () => {
    startGameWithPlayers('Alice', 'Bob')
    
    // Should show Alice's turn initially  
    expect(screen.getByText('Alice')).toBeInTheDocument()
    expect(screen.getByText("'s Turn")).toBeInTheDocument()
    
    // Make a move - now should be Bob's turn
    const cells = screen.getAllByRole('gridcell')
    fireEvent.click(cells[0]) // First cell
    
    expect(screen.getByText('Bob')).toBeInTheDocument()
    expect(screen.getByText("'s Turn")).toBeInTheDocument()
  })

  it('shows winner name when game ends', () => {
    startGameWithPlayers('Winner', 'Loser')
    const cells = screen.getAllByRole('gridcell')
    const idx = (r: number, c: number) => r * 7 + c
    
    // Make Winner (player 1) win horizontally
    fireEvent.click(cells[idx(0, 0)]) // Winner
    fireEvent.click(cells[idx(0, 6)]) // Loser elsewhere
    fireEvent.click(cells[idx(0, 1)]) // Winner  
    fireEvent.click(cells[idx(0, 6)]) // Loser elsewhere
    fireEvent.click(cells[idx(0, 2)]) // Winner
    fireEvent.click(cells[idx(0, 6)]) // Loser elsewhere
    fireEvent.click(cells[idx(0, 3)]) // Winner wins!
    
    expect(screen.getByText('Winner:')).toBeInTheDocument()
    expect(screen.getByText('Winner')).toBeInTheDocument()
  })
})
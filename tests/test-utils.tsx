import { render, screen, fireEvent } from '@testing-library/react'
import { BoardView } from '@/ui/BoardView'

export const startGameWithPlayers = (player1 = 'TestPlayer1', player2 = 'TestPlayer2') => {
  render(<BoardView />)
  
  // Fill in player names
  fireEvent.change(screen.getByPlaceholderText('Enter player 1 name'), { 
    target: { value: player1 } 
  })
  fireEvent.change(screen.getByPlaceholderText('Enter player 2 name'), { 
    target: { value: player2 } 
  })
  
  // Start the game
  fireEvent.click(screen.getByRole('button', { name: /start game/i }))
  
  return { player1, player2 }
}
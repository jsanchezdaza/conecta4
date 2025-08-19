import React from 'react'
import { initialState, step } from '@/board'

type GamePhase = 'setup' | 'playing'

export const BoardView = () => {
  const [state, setState] = React.useState(() => initialState())
  const [gamePhase, setGamePhase] = React.useState<GamePhase>('setup')
  const [playerNames, setPlayerNames] = React.useState({ player1: '', player2: '' })

  const onClick = (col: number) => {
    setState((s) => step(s, col))
  }

  const reset = () => {
    setState(initialState())
    setGamePhase('setup')
    setPlayerNames({ player1: '', player2: '' })
  }

  const startGame = () => {
    if (playerNames.player1.trim() && playerNames.player2.trim()) {
      setGamePhase('playing')
    }
  }

  const getCurrentPlayerName = () => {
    return state.turn === 1 ? playerNames.player1 : playerNames.player2
  }

  if (gamePhase === 'setup') {
    return (
      <div className="setup-container">
        <h2 className="setup-title">Choose Player Names</h2>
        <div className="input-group">
          <label className="input-label player1">
            Player 1 (Neon Pink)
          </label>
          <input
            type="text"
            value={playerNames.player1}
            onChange={(e) => setPlayerNames(prev => ({ ...prev, player1: e.target.value }))}
            className="player-input player1"
            placeholder="Enter player 1 name"
            maxLength={20}
          />
        </div>
        <div className="input-group">
          <label className="input-label player2">
            Player 2 (Neon Yellow)
          </label>
          <input
            type="text"
            value={playerNames.player2}
            onChange={(e) => setPlayerNames(prev => ({ ...prev, player2: e.target.value }))}
            className="player-input player2"
            placeholder="Enter player 2 name"
            maxLength={20}
          />
        </div>
        <button
          onClick={startGame}
          disabled={!playerNames.player1.trim() || !playerNames.player2.trim()}
          className="start-button"
        >
          START GAME
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="game-status">
        {state.winner ? (
          <div className="winner-container">
            <div className="winner-popup">
              <div className="winner-text">WINNER</div>
              <div className={`winner-name ${state.winner === 1 ? 'player1' : 'player2'}`}>
                {state.winner === 1 ? playerNames.player1 : playerNames.player2}
              </div>
              <button onClick={reset} className="winner-button">
                NEW GAME
              </button>
            </div>
          </div>
        ) : state.draw ? (
          <div className="draw-container">
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🤝</div>
            <div className="draw-text">
              It's a Draw!
            </div>
            <div className="draw-message">Great game, both players! 🎲</div>
          </div>
        ) : (
          <div className="current-turn">
            <span className={state.turn === 1 ? 'turn-player1' : 'turn-player2'}>
              {getCurrentPlayerName()}
            </span>'s Turn
          </div>
        )}
      </div>
      <div role="grid" className="game-board">
        {state.board.map((row, r) =>
          row.map((cell, c) => (
            <div
              key={`${r}-${c}`}
              data-testid="cell"
              role="gridcell"
              aria-label={cell === 0 ? 'cell' : `cell p${cell}`}
              className={`cell ${cell === 1 ? 'player1' : cell === 2 ? 'player2' : 'empty'}`}
              onClick={() => onClick(c)}
            />
          )),
        )}
      </div>
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <button 
          onClick={reset}
          className="new-game-button"
        >
          RESET
        </button>
      </div>
    </div>
  )
}

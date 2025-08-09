import React from 'react'
import { initialState, step } from '../../board'

type GamePhase = 'setup' | 'playing'

export const Connect4Game = () => {
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
        <div className="glass-card">
          <h2 className="setup-title">Choose Player Names</h2>
          <div className="player-input">
            <label className="player-label red">Player 1 (Red)</label>
            <input
              type="text"
              value={playerNames.player1}
              onChange={(e) => setPlayerNames(prev => ({ ...prev, player1: e.target.value }))}
              className="input"
              placeholder="Enter player 1 name"
              maxLength={20}
            />
          </div>
          <div className="player-input">
            <label className="player-label yellow">Player 2 (Yellow)</label>
            <input
              type="text"
              value={playerNames.player2}
              onChange={(e) => setPlayerNames(prev => ({ ...prev, player2: e.target.value }))}
              className="input"
              placeholder="Enter player 2 name"
              maxLength={20}
            />
          </div>
          <button
            onClick={startGame}
            disabled={!playerNames.player1.trim() || !playerNames.player2.trim()}
            className="button-chip"
          >
            <div>START</div>
            <div>GAME</div>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="game-container">
      <div className="status">
        {state.winner ? (
          <div className="winner">
            {state.winner === 1 ? playerNames.player1 : playerNames.player2} WINS!
          </div>
        ) : state.draw ? (
          <div className="draw">
            🤝 It's a Draw! 🤝
          </div>
        ) : (
          <div>
            <span className={state.turn === 1 ? 'turn-player1' : 'turn-player2'}>
              {getCurrentPlayerName()}'s
            </span> Turn
          </div>
        )}
      </div>
      
      <div className="board">
        {state.board.map((row, r) =>
          row.map((cell, c) => (
            <div
              key={`${r}-${c}`}
              data-testid="cell"
              className={`cell ${cell === 1 ? 'red' : cell === 2 ? 'yellow' : ''}`}
              onClick={() => onClick(c)}
            />
          )),
        )}
      </div>
      
      <button className="button button-purple" onClick={reset}>
        <div>NEW</div>
        <div>GAME</div>
      </button>
    </div>
  )
}
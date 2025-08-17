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
      <div className="text-center">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-neon-blue mb-4 animate-pulse-neon" style={{ textShadow: '0 0 10px #00f3ff' }}>Choose Player Names</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neon-pink mb-2" style={{ textShadow: '0 0 5px #ff0080' }}>
                Player 1 (Neon Pink)
              </label>
              <input
                type="text"
                value={playerNames.player1}
                onChange={(e) => setPlayerNames(prev => ({ ...prev, player1: e.target.value }))}
                className="w-full max-w-64 px-4 py-2 rounded-lg bg-black border-2 border-neon-pink text-neon-pink placeholder-gray-500 focus:shadow-neon-pink focus:border-neon-pink transition-all duration-300"
                placeholder="Enter player 1 name"
                maxLength={20}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neon-yellow mb-2" style={{ textShadow: '0 0 5px #ffff00' }}>
                Player 2 (Neon Yellow)
              </label>
              <input
                type="text"
                value={playerNames.player2}
                onChange={(e) => setPlayerNames(prev => ({ ...prev, player2: e.target.value }))}
                className="w-full max-w-64 px-4 py-2 rounded-lg bg-black border-2 border-neon-yellow text-neon-yellow placeholder-gray-500 focus:shadow-neon-yellow focus:border-neon-yellow transition-all duration-300"
                placeholder="Enter player 2 name"
                maxLength={20}
              />
            </div>
          </div>
          <button
            onClick={startGame}
            disabled={!playerNames.player1.trim() || !playerNames.player2.trim()}
            className="mt-6 px-8 py-3 bg-black border-2 border-neon-green text-neon-green text-xl font-bold rounded-lg hover:shadow-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ textShadow: '0 0 5px #39ff14' }}
          >
            START GAME
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-4 text-center">
        {state.winner ? (
          <div className="relative">
            {/* Celebration Background */}
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue rounded-2xl opacity-30 blur-xl"></div>
            
            {/* Winner Announcement */}
            <div className="relative bg-black border-4 border-neon-green rounded-2xl p-4 sm:p-6 shadow-neon-green animate-bounce">
              <div className="text-center">
                {/* Trophy/Crown Icon */}
                <div className="text-4xl sm:text-6xl animate-spin-slow mb-2">👑</div>
                
                {/* Winner Text */}
                <div className="text-xl sm:text-3xl font-black text-neon-green mb-2 animate-flicker" style={{ textShadow: '0 0 15px #39ff14' }}>
                  🎉 WINNER! 🎉
                </div>
                
                {/* Player Name */}
                <div className="text-lg sm:text-2xl font-bold bg-black border-2 rounded-lg px-3 sm:px-4 py-2 inline-block">
                  <span className={state.winner === 1 ? 'text-neon-pink' : 'text-neon-yellow'} style={{ textShadow: state.winner === 1 ? '0 0 10px #ff0080' : '0 0 10px #ffff00' }}>
                    {state.winner === 1 ? playerNames.player1 : playerNames.player2}
                  </span>
                </div>
                
                {/* Celebration Message */}
                <div className="text-base sm:text-lg font-semibold text-neon-blue mt-2" style={{ textShadow: '0 0 10px #00f3ff' }}>
                  Congratulations! 🏆
                </div>
              </div>
            </div>
          </div>
        ) : state.draw ? (
          <div className="relative">
            <div className="bg-black border-2 border-neon-purple rounded-xl p-4 shadow-neon-purple">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-2">🤝</div>
                <div className="text-xl sm:text-2xl font-bold text-neon-purple animate-pulse-neon" style={{ textShadow: '0 0 10px #bf00ff' }}>
                  It's a Draw!
                </div>
                <div className="text-xs sm:text-sm text-neon-blue mt-1" style={{ textShadow: '0 0 5px #00f3ff' }}>Great game, both players! 🎲</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-base sm:text-lg font-semibold text-white">
            <span className={state.turn === 1 ? 'text-neon-pink' : 'text-neon-yellow'} style={{ textShadow: state.turn === 1 ? '0 0 10px #ff0080' : '0 0 10px #ffff00' }}>
              {getCurrentPlayerName()}
            </span>'s Turn
          </div>
        )}
      </div>
      <div role="grid" className="grid grid-cols-7 gap-2 p-4 bg-black border-2 border-neon-blue rounded-xl shadow-neon-blue">
        {state.board.map((row, r) =>
          row.map((cell, c) => (
            <div
              key={`${r}-${c}`}
              data-testid="cell"
              role="gridcell"
              aria-label={cell === 0 ? 'cell' : `cell p${cell}`}
              className={
                cell === 1
                  ? 'size-10 sm:size-16 rounded-full bg-neon-pink border-2 border-neon-pink cursor-pointer hover:shadow-neon-pink transition-all duration-300 animate-pulse-neon'
                  : cell === 2
                  ? 'size-10 sm:size-16 rounded-full bg-neon-yellow border-2 border-neon-yellow cursor-pointer hover:shadow-neon-yellow transition-all duration-300 animate-pulse-neon'
                  : 'size-10 sm:size-16 rounded-full bg-gray-800 border-2 border-gray-600 cursor-pointer hover:border-neon-green hover:shadow-neon-green transition-all duration-300'
              }
              style={
                cell === 1
                  ? {
                      background: `
                        radial-gradient(circle at 35% 25%, rgba(255,255,255,0.4), transparent 60%),
                        #ff0080
                      `,
                      boxShadow: '0 0 15px #ff0080'
                    }
                  : cell === 2
                  ? {
                      background: `
                        radial-gradient(circle at 35% 25%, rgba(255,255,255,0.4), transparent 60%),
                        #ffff00
                      `,
                      boxShadow: '0 0 15px #ffff00'
                    }
                  : undefined
              }
              onClick={() => onClick(c)}
            />
          )),
        )}
      </div>
      <div className="mt-6 text-center">
        <button 
          onClick={reset}
          className="px-6 py-3 bg-black border-2 border-neon-orange text-neon-orange font-bold rounded-lg hover:shadow-neon-orange hover:bg-neon-orange hover:text-black transition-all duration-300"
          style={{ textShadow: '0 0 5px #ff8c00' }}
        >
          NEW GAME
        </button>
      </div>
    </div>
  )
}

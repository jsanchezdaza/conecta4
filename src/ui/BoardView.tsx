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
          <h2 className="text-2xl font-bold text-white mb-4">Choose Player Names</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-red-400 mb-2">
                Player 1 (Red)
              </label>
              <input
                type="text"
                value={playerNames.player1}
                onChange={(e) => setPlayerNames(prev => ({ ...prev, player1: e.target.value }))}
                className="w-64 px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Enter player 1 name"
                maxLength={20}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-yellow-400 mb-2">
                Player 2 (Yellow)
              </label>
              <input
                type="text"
                value={playerNames.player2}
                onChange={(e) => setPlayerNames(prev => ({ ...prev, player2: e.target.value }))}
                className="w-64 px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Enter player 2 name"
                maxLength={20}
              />
            </div>
          </div>
          <button
            onClick={startGame}
            disabled={!playerNames.player1.trim() || !playerNames.player2.trim()}
            className="mt-6 px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-lg hover:from-green-700 hover:to-emerald-700 hover:shadow-xl transform hover:scale-105 transition-all duration-200 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            style={{
              background: !playerNames.player1.trim() || !playerNames.player2.trim() 
                ? '#64748b' 
                : `linear-gradient(45deg, #059669, #10b981)`,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
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
          <div className="text-lg font-semibold text-white">
            Winner: <span className={state.winner === 1 ? 'text-red-500' : 'text-yellow-500'}>
              {state.winner === 1 ? playerNames.player1 : playerNames.player2}
            </span>
          </div>
        ) : state.draw ? (
          <div className="text-lg font-semibold text-white">Draw!</div>
        ) : (
          <div className="text-lg font-semibold text-white">
            <span className={state.turn === 1 ? 'text-red-500' : 'text-yellow-500'}>
              {getCurrentPlayerName()}
            </span>'s Turn
          </div>
        )}
      </div>
      <div role="grid" className="grid grid-cols-7 gap-1">
        {state.board.map((row, r) =>
          row.map((cell, c) => (
            <div
              key={`${r}-${c}`}
              data-testid="cell"
              role="gridcell"
              aria-label={cell === 0 ? 'cell' : `cell p${cell}`}
              className={
                cell === 1
                  ? 'size-16 rounded-full bg-red-500 border border-red-600 cursor-pointer hover:bg-red-600 transition-colors'
                  : cell === 2
                  ? 'size-16 rounded-full bg-yellow-400 border border-yellow-500 cursor-pointer hover:bg-yellow-500 transition-colors'
                  : 'size-16 rounded-full bg-slate-300 border border-slate-400 cursor-pointer hover:bg-slate-200 transition-colors'
              }
              style={
                cell === 1
                  ? {
                      background: `
                        radial-gradient(circle at 35% 25%, rgba(255,255,255,0.3), transparent 60%),
                        #dc2626
                      `,
                    }
                  : cell === 2
                  ? {
                      background: `
                        radial-gradient(circle at 35% 25%, rgba(255,255,255,0.3), transparent 60%),
                        #facc15
                      `,
                    }
                  : undefined
              }
              onClick={() => onClick(c)}
            />
          )),
        )}
      </div>
      <div className="mt-4 text-center">
        <button 
          className="group relative px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg hover:from-purple-700 hover:to-pink-700 hover:shadow-xl transform hover:scale-105 transition-all duration-200 border border-white/20"
          style={{
            background: `
              linear-gradient(45deg, #9333ea, #ec4899),
              radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), transparent 50%)
            `,
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}
          onClick={reset}
        >
          <span className="relative z-10">
            NEW GAME
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-200" />
        </button>
      </div>
    </div>
  )
}

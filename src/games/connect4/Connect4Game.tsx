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
      <div className="text-center">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Choose Player Names</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-red-400 mb-2">
                Player 1 (Red)
              </label>
              <input
                type="text"
                value={playerNames.player1}
                onChange={(e) => setPlayerNames(prev => ({ ...prev, player1: e.target.value }))}
                className="w-full max-w-64 px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
                className="w-full max-w-64 px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Enter player 2 name"
                maxLength={20}
              />
            </div>
          </div>
          <button
            onClick={startGame}
            disabled={!playerNames.player1.trim() || !playerNames.player2.trim()}
            className="mt-6 px-6 sm:px-8 py-3 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-lg hover:from-green-700 hover:to-emerald-700 hover:shadow-xl transform hover:scale-105 transition-all duration-200 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 rounded-2xl opacity-20 blur-xl"></div>
            
            {/* Winner Announcement */}
            <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-4 sm:p-6 shadow-2xl border-4 border-yellow-300 animate-bounce">
              <div className="text-center">
                {/* Trophy/Crown Icon */}
                <div className="text-4xl sm:text-6xl animate-spin-slow mb-2">👑</div>
                
                {/* Winner Text */}
                <div className="text-xl sm:text-3xl font-black text-white mb-2">
                  🎉 WINNER! 🎉
                </div>
                
                {/* Player Name */}
                <div className="text-lg sm:text-2xl font-bold text-slate-900 bg-white/90 rounded-lg px-3 sm:px-4 py-2 inline-block shadow-lg">
                  <span className={state.winner === 1 ? 'text-red-600' : 'text-yellow-600'}>
                    {state.winner === 1 ? playerNames.player1 : playerNames.player2}
                  </span>
                </div>
                
                {/* Celebration Message */}
                <div className="text-base sm:text-lg font-semibold text-white mt-2">
                  Congratulations! 🏆
                </div>
              </div>
            </div>
          </div>
        ) : state.draw ? (
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 shadow-lg border-2 border-blue-400">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-2">🤝</div>
                <div className="text-xl sm:text-2xl font-bold text-white">
                  It's a Draw!
                </div>
                <div className="text-xs sm:text-sm text-blue-100 mt-1">Great game, both players! 🎲</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-base sm:text-lg font-semibold text-white">
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
                  ? 'size-10 sm:size-16 rounded-full bg-red-500 border border-red-600 cursor-pointer hover:bg-red-600 transition-colors'
                  : cell === 2
                  ? 'size-10 sm:size-16 rounded-full bg-yellow-400 border border-yellow-500 cursor-pointer hover:bg-yellow-500 transition-colors'
                  : 'size-10 sm:size-16 rounded-full bg-slate-300 border border-slate-400 cursor-pointer hover:bg-slate-200 transition-colors'
              }
              onClick={() => onClick(c)}
            />
          )),
        )}
      </div>
      <div className="mt-4 text-center">
        <button 
          className="group relative px-4 sm:px-6 py-3 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg hover:from-purple-700 hover:to-pink-700 hover:shadow-xl transform hover:scale-105 transition-all duration-200 border border-white/20"
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
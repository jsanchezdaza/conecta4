import React from 'react'
import { createRoot } from 'react-dom/client'
import { BoardView } from '@/ui/BoardView'
import './styles.css'

export const App = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 p-4">
    <div className="flex flex-col items-center">
      <h1 className="mb-8 mt-6 text-7xl font-black tracking-wide text-white" style={{
        fontFamily: '"Arial Black", Impact, sans-serif',
        textShadow: `
          3px 3px 0px #1a1a2e,
          6px 6px 0px #16213e,
          0px 0px 15px rgba(34,211,238,0.6),
          0px 0px 30px rgba(34,211,238,0.4)
        `
      }}>
        CONNECT 4
      </h1>
      <div className="rounded-xl bg-slate-800 p-6 shadow-2xl ring-1 ring-cyan-400/20">
        <BoardView />
      </div>
    </div>
  </div>
)

createRoot(document.getElementById('root')!).render(<App />)

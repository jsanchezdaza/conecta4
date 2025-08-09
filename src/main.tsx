import React from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './router'
import './styles.css'

console.log('🚀 Connect4 App starting...')

export const App = () => {
  console.log('📱 App component rendering')
  return <Router />
}

console.log('🔧 Creating React root...')
createRoot(document.getElementById('root')!).render(<App />)

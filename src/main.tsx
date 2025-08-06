import React from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from '@/router'
import './styles.css'

export const App = () => <Router />

createRoot(document.getElementById('root')!).render(<App />)

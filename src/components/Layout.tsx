import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div 
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900"
      style={{
        minHeight: '100vh',
        minHeight: '100dvh',
        minHeight: '100svh',
        minHeight: '-webkit-fill-available'
      }}
    >
      {children}
    </div>
  )
}
import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="neon-background">
      {/* Neon Grid Background */}
      <div className="neon-grid"></div>
      
      {/* Main content - centered container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  )
}
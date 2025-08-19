import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="neon-background">
      {/* Neon Grid Background */}
      <div className="neon-grid"></div>
      
      {/* Main content - perfectly centered */}
      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  )
}
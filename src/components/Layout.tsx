import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="neon-background">
      {/* Neon Grid Background */}
      <div className="neon-grid"></div>
      
      {/* Main content */}
      <div className="relative z-10 p-4 sm:p-8">
        {children}
      </div>
    </div>
  )
}
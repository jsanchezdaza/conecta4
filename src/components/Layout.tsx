import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Neon Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,243,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,243,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      
      {/* Main content */}
      <div className="relative z-10 p-4 sm:p-8">
        {children}
      </div>
    </div>
  )
}
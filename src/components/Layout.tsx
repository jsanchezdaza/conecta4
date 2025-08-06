import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* Fixed background that covers entire screen */}
      <div 
        className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1
        }}
      />
      
      {/* Content container */}
      <div className="relative min-h-screen">
        {children}
      </div>
    </>
  )
}
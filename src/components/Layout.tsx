import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const divRef = React.useRef<HTMLDivElement>(null)
  
  React.useEffect(() => {
    if (divRef.current) {
      divRef.current.style.minHeight = '100vh'
      divRef.current.style.setProperty('min-height', '100dvh')
      divRef.current.style.setProperty('min-height', '100svh')
      divRef.current.style.setProperty('min-height', '-webkit-fill-available')
    }
  }, [])

  return (
    <div 
      ref={divRef}
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900"
    >
      {children}
    </div>
  )
}
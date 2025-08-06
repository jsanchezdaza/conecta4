import React from 'react'

interface Route {
  path: string
  component: React.ComponentType
}

const routes: Route[] = [
  {
    path: '/connect4',
    component: React.lazy(() => import('@/pages/Connect4Page').then(m => ({ default: m.Connect4Page })))
  }
]

export const Router: React.FC = () => {
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname)

  React.useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Default to /connect4 for root path
  const path = currentPath === '/' ? '/connect4' : currentPath
  
  const route = routes.find(r => r.path === path)
  
  if (!route) {
    return (
      <div className="min-h-screen min-h-dvh bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 flex items-center justify-center" style={{
        minHeight: 'calc(100vh + env(safe-area-inset-top) + env(safe-area-inset-bottom))',
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)'
      }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">404 - Game Not Found</h1>
          <p className="text-slate-300 mb-6">The game you're looking for doesn't exist.</p>
          <a 
            href="/connect4" 
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
          >
            Go to Connect 4
          </a>
        </div>
      </div>
    )
  }

  const Component = route.component

  return (
    <React.Suspense fallback={
      <div className="min-h-screen min-h-dvh bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 flex items-center justify-center" style={{
        minHeight: 'calc(100vh + env(safe-area-inset-top) + env(safe-area-inset-bottom))',
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)'
      }}>
        <div className="text-white text-xl">Loading game...</div>
      </div>
    }>
      <Component />
    </React.Suspense>
  )
}
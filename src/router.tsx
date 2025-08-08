import React from 'react'
import { Layout } from './components/Layout'

interface Route {
  path: string
  component: React.ComponentType
}

const routes: Route[] = [
  {
    path: '/conecta4',
    component: React.lazy(() => import('./pages/Connect4Page').then(m => ({ default: m.Connect4Page })))
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

  // Default to /conecta4 for root path
  const path = currentPath === '/' ? '/conecta4' : currentPath
  
  const route = routes.find(r => r.path === path)
  
  if (!route) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">404 - Game Not Found</h1>
            <p className="text-slate-300 mb-6">The game you're looking for doesn't exist.</p>
            <a 
              href="/conecta4" 
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              Go to Connect 4
            </a>
          </div>
        </div>
      </Layout>
    )
  }

  const Component = route.component

  return (
    <React.Suspense fallback={
      <Layout>
        <div className="flex items-center justify-center h-full">
          <div className="text-white text-xl">Loading game...</div>
        </div>
      </Layout>
    }>
      <Layout>
        <Component />
      </Layout>
    </React.Suspense>
  )
}
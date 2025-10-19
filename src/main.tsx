import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routers from './routes/Router.tsx'
import { SocketProvider } from './hooks/SocketContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SocketProvider>
      <RouterProvider router={Routers} />
    </SocketProvider>
  </StrictMode>,
)

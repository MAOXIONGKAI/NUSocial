import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {UserProvider} from './contexts/UserProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <UserProvider>
          <App />
      </UserProvider>
  </StrictMode>,
)

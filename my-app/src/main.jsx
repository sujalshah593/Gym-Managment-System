import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { AuthProvider } from './Contexts/AuthContext.jsx'
import { RevenueProvider } from './Contexts/useRevenue.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <RevenueProvider>
      <App />
      </RevenueProvider>
    </AuthProvider>
  </BrowserRouter>
)

// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'  // <-- import HashRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>   {/* wrap App with HashRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>
)

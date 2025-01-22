// Import global CSS styles
import './globals.css'

// Import React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

// Import the main App component
import App from './App'

// Rendering the root of the React app
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // Wrapping the App component with React.StrictMode for development checks
  <React.StrictMode>
    {/* The main App component that houses the entire app logic */}
    <App />
  </React.StrictMode>
)

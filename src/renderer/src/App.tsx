import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './components/layout-components/theme-provider'
import routes from './routes/routes'
import { GlobalStateProvider } from './context/global-state-context'
import { Toaster } from 'react-hot-toast'

// Create a new instance of QueryClient with default options for queries

// Main App component
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* GlobalStateProvider manages global state across the application */}
      <GlobalStateProvider>
        {/* RouterProvider is used to manage routing for the application */}
        <RouterProvider router={routes} />
      </GlobalStateProvider>

      {/* Toaster is used to show toast notifications */}
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000
          },
          error: {
            duration: 5000
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px'
          }
        }}
      />
    </ThemeProvider>
  )
}

export default App

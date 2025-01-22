// Import necessary dependencies
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './components/layout-components/theme-provider'
import { Toaster } from './components/ui/sonner'
import routes from './routes/routes'
import { GlobalStateProvider } from './context/global-state-context'

// Create a new instance of QueryClient with default options for queries
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0 // Set the default staleTime to 0 for queries (no caching)
    }
  }
})

// Main App component
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* ThemeProvider is used to manage theme across the app (default "dark" theme) */}
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {/* GlobalStateProvider manages global state across the application */}
        <GlobalStateProvider>
          {/* RouterProvider is used to manage routing for the application */}
          <RouterProvider router={routes} />
        </GlobalStateProvider>

        {/* Toaster is used to show toast notifications */}
        <Toaster richColors position="top-center" />
      </ThemeProvider>

      {/* ReactQueryDevtools provides debugging tools for React Query */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
}

// Export the App component
export default App

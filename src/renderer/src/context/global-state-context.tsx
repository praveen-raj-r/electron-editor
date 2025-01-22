import { createContext, useContext, useState } from 'react'

type GlobalStateProps = {
  children: React.ReactNode
}

interface GlobalStateContextType {
  values: Record<string, any>
  setValue: (key: string, value: any) => void
  getValue: (key: string) => any
}

// Create a context for global state management
const GlobalStateContext = createContext<GlobalStateContextType | undefined>(undefined)

export const GlobalStateProvider: React.FC<GlobalStateProps> = ({ children }) => {
  // Initialize state with values from sessionStorage, if available
  const [values, setValues] = useState<Record<string, any>>(() => {
    const sessionData: Record<string, any> = {}
    // Loop through sessionStorage and parse any saved values
    Object.keys(sessionStorage).forEach((key) => {
      sessionData[key] = JSON.parse(sessionStorage.getItem(key) || 'null')
    })
    return sessionData
  })

  // Function to update a specific key in the global state and save it to sessionStorage
  const setValue = (key: string, value: any) => {
    setValues((prevValues) => ({ ...prevValues, [key]: value }))
    // Save updated value to sessionStorage for persistence
    sessionStorage.setItem(key, JSON.stringify(value))
  }

  // Function to retrieve a value from sessionStorage or current state
  const getValue = (key: string) => {
    // Check sessionStorage for the latest value
    const value = sessionStorage.getItem(key)
    return value ? JSON.parse(value) : undefined // Return parsed value if it exists
  }

  return (
    // Provide global state values to the rest of the app via context
    <GlobalStateContext.Provider value={{ values, setValue, getValue }}>
      {children}
    </GlobalStateContext.Provider>
  )
}

// Custom hook to access global state and actions
export const useGlobalState = (): GlobalStateContextType => {
  const context = useContext(GlobalStateContext)
  if (!context) {
    // Ensure the hook is used within the GlobalStateProvider
    throw new Error('useGlobalState must be used within a GlobalStateProvider')
  }
  return context
}

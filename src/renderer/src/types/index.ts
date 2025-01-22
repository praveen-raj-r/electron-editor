export type Theme = 'dark' | 'light' | 'system'

export type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}
export interface ApiResponse<T> {
  success: boolean
  data: T
  timestamp: string
  message: string
}

export interface ApiError {
  message: string
}
export interface DomainFormApiData {
  domainName: string
}
export interface SignUpApiData {
  name: string
  email: string
  phoneNumber: string
}
export type chartTypes = 'daily' | 'weekly' | 'monthly'

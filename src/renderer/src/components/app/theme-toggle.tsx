import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../layout-components/theme-provider'
import { Button } from '../ui/button'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <Button
      className="rounded-full"
      size="icon"
      variant="ghost"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      <div
        className={`flex items-center cursor-pointer transition-transform duration-500 ${
          isDark ? 'rotate-180' : 'rotate-0'
        }`}
      >
        {isDark ? (
          <Sun className="text-yellow-500 transition-all rotate-0 ghost" />
        ) : (
          <Moon className="text-blue-500 transition-all rotate-0 ghost" />
        )}
        <span className="sr-only">Toggle theme</span>
      </div>
    </Button>
  )
}

export default ThemeToggle

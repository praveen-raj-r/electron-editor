import * as React from 'react'
import { cn } from '@/lib/utils'
import { useTheme } from '../layout-components/theme-provider'

interface InputProps extends React.ComponentProps<'input'> {}

const TextArea = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const { theme } = useTheme() // Get the current theme from your theme provider

    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          theme === 'dark'
            ? 'border-gray-700 bg-white-800 text-black placeholder-gray-400 focus-visible:ring-gray-500'
            : 'border-gray-300 bg-white text-black placeholder-gray-500 focus-visible:ring-blue-500',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

TextArea.displayName = 'Input'

export { TextArea }

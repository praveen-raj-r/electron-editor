import darkThemeLogo from '@/assets/macrologo.png'
import lightThemeLogo from '@/assets/macrologo-black.png'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { useMoveBack } from '@/hooks/use-move-back'
import { ChevronLeft, ChevronRight, Copy, Minus, Search, Square, X } from 'lucide-react'
import { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useTheme } from '../layout-components/theme-provider'

interface TitleBarProps {
  className?: string
}

const TitleBar: FC<TitleBarProps> = ({ className }) => {
  const [isMaximized, setIsMaximized] = useState(true)
  const { pathname } = useLocation()
  const handleMinimize = () => window.api.minimizeWindow()
  const handleMaximize = () => window.api.maximizeWindow()
  const handleClose = () => window.api.closeWindow()
  const { theme } = useTheme()

  const moveBack = useMoveBack()

  useEffect(() => {
    if (window.api) {
      window.api.onMaximizedStateChange(setIsMaximized)
    }
  }, [])
  const [isOpen, setIsOpen] = useState(false)
  function handlefocus() {
    setIsOpen((e) => !e)
  }

  return (
    <div
      className={`region-drag flex justify-between items-center h-12 backdrop-blur-[44px] py-0 pl-[10px] ${className} ${
        theme === 'dark' ? 'text-[#fff]' : 'text-[#000]'
      }`}
    >
      <div className="flex flex-col items-center justify-center py-4">
        <div className="text-2xl font-bold flex gap-6 items-center">
          {/* Logo */}
          <img
            className="h-11 pl-0"
            src={theme === 'dark' ? darkThemeLogo : lightThemeLogo}
            alt="Logo"
          />
          {/* Brand Name */}
        </div>
        {/* Time-saving embedded tools text */}
      </div>

      {pathname !== '/' &&
        pathname !== '/create-account' &&
        pathname !== '/domain' &&
        pathname !== '/login' && (
          <div className="flex items-center gap-1 justify-center">
            <div className="flex items-center gap-3">
              <Button onClick={moveBack} variant="ghost" size="icon" className=" size-7">
                <ChevronLeft />
              </Button>
              <Button variant="ghost" size="icon" className="size-7">
                <ChevronRight />
              </Button>
            </div>
            <div>
              <form>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input onFocus={handlefocus} placeholder="Search" className="pl-8" />
                </div>
              </form>
            </div>
            <Dialog onOpenChange={handlefocus} open={isOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        )}

      <div className="flex">
        <ActionButton clickfunction={handleMinimize}>
          <Minus className="size-4" strokeWidth={1} />
        </ActionButton>

        <ActionButton clickfunction={handleMaximize}>
          {isMaximized ? (
            <Copy className="size-4 rotate-90" strokeWidth={1} />
          ) : (
            <Square className="size-4" strokeWidth={1} />
          )}
        </ActionButton>

        <ActionButton clickfunction={handleClose} isClose={true}>
          <X className="size-4 " strokeWidth={1} />
        </ActionButton>
      </div>
    </div>
  )
}

function ActionButton({ children, clickfunction, isClose = false }) {
  const { theme } = useTheme() // Get the current theme (light/dark)
  return (
    <button
      onClick={clickfunction}
      className={`transition-colors duration-300 
      ${theme === 'dark' ? 'hover:bg-gray-700' : 'bg-[#474646] hover:bg-[#000]'}
      ${isClose ? 'hover:bg-red-600' : ''}
    `}
    >
      <div className="w-10 p-2 flex justify-center items-center">{children}</div>
    </button>
  )
}

export default TitleBar

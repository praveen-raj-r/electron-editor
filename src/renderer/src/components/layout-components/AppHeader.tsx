import { SidebarTrigger } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { ChevronRight, Play, TrashIcon } from 'lucide-react'
import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NotificationsSheet from '../app/notifications-sheet'
import ThemeToggle from '../app/theme-toggle'
import AnimatedGradientText from '../ui/animated-gradient-text'
import { Button } from '../ui/button'
import { HEIGHT_OF_APP_HEADER } from '@/lib/constants'
import ProfileDropdown from './profile-dropdown'
import { useGlobalState } from '@/context/global-state-context'

const AppHeader: FC<{ onLayoutClear: () => void }> = ({ onLayoutClear }) => {
  const { pathname } = useLocation()
  const isNotEditor = pathname !== '/editor'

  const handleClearLayout = () => {
    localStorage.setItem('layout', '[]')
    localStorage.setItem('dashboardComponents', '[]')
    onLayoutClear() // Notify DropArea
  }
  const { getValue } = useGlobalState()
  return (
    <header
      style={{ height: HEIGHT_OF_APP_HEADER }}
      className={`flex justify-center items-center border-b gap-1 sm:gap-2 transition-[width,height] ease-linear ${
        isNotEditor ? 'group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12' : ''
      }`}
    >
      <div className="flex items-center w-full justify-between gap-2 px-4">
        <SidebarTrigger className="-ml-1" />

        <div className="px-1 sm:px-4 flex items-center gap-2">
          {isNotEditor ? (
            <Link to="/editor">
              <AnimatedGradientText>
                🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{' '}
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  Introducing Macro Editor
                </span>
                <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedGradientText>
            </Link>
          ) : (
            <>
              <Button onClick={handleClearLayout} variant="destructive" size="sm">
                <TrashIcon />
                Clear Layout
              </Button>
              <Button variant="secondary" size="sm">
                Query Library
              </Button>
              <Button variant="secondary" size="sm">
                Share
              </Button>
              <Link to="/dashboard">
                <Button variant="secondary" size="sm">
                  Back to App
                </Button>
              </Link>
            </>
          )}

          {isNotEditor && <NotificationsSheet />}
          {!isNotEditor && (
            <Link to="/preview-page">
              <Button variant="secondary" size="sm">
                <Play />
              </Button>
            </Link>
          )}

          <ThemeToggle />
          <ProfileDropdown
            user={{
              domainName: getValue('domainName'),
              email: getValue('userDetails').email
            }}
          />
        </div>
      </div>
    </header>
  )
}

export default AppHeader

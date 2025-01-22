import NotificationsSheet from '../app/notifications-sheet'
import ThemeToggle from '../app/theme-toggle'
import { SidebarTrigger } from '../ui/sidebar'
import ProfileDropdown from './profile-dropdown'

interface HeaderProps {
  className: string
  user: {
    domainName: string
    email: string
    avatar: string
  }
}
function Header({ className, user }: HeaderProps) {
  return (
    <header className={className}>
      <div className="flex items-center gap-5 px-4">
        <SidebarTrigger className="-ml-1" />
      </div>

      <div className="px-1 sm:px-4 flex items-center gap-2">
        <NotificationsSheet />

        <ThemeToggle />

        <ProfileDropdown user={user} />
      </div>
    </header>
  )
}

export default Header

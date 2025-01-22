import { useElectron } from '@/hooks/use-electron'
import { ScrollArea } from '../ui/scroll-area'
import { Sidebar } from '../ui/sidebar'
import AppSidebarContent from './AppSidebarContent'
import AppSidebarFooter from './AppSidebarFooter'
import AppSidebarHeader from './AppSidebarHeader'
interface UserProps {
  user: {
    domainName: string
    email: string
    avatar: string
  }
}
function AppSidebar({ user }: UserProps) {
  const isElectron = useElectron()
  return (
    <div>
      <Sidebar className={`absolute ${isElectron ? `!max-h-[calc(100vh-48px)]` : 'h-screen'}`}>
        <AppSidebarHeader />
        <ScrollArea className="h-[calc(100%-128px)]">
          <AppSidebarContent />
        </ScrollArea>
        <AppSidebarFooter user={user} />
      </Sidebar>
    </div>
  )
}

export default AppSidebar

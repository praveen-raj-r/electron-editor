import AppSidebar from '@/components/layout-components/AppSidebar' // Importing the sidebar component

import { ScrollArea } from '@/components/ui/scroll-area' // Importing scroll area to make content scrollable

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar' // Importing context and wrapper for sidebar functionality
import { useElectron } from '@/hooks/use-electron' // Custom hook to check if the app is running in Electron
import { Outlet } from 'react-router-dom' // Outlet to render nested routes
import { useGlobalState } from '@/context/global-state-context' // Access to global state management
import AppHeader from '@/components/layout-components/AppHeader'

function AppLayout() {
  // Check if the app is running in an Electron environment
  const isElectron = useElectron()

  // Accessing global state to retrieve user details from the state
  const { getValue } = useGlobalState()

  return (
    <div>
      {/* SidebarProvider provides context for Sidebar functionality */}
      <SidebarProvider>
        <div className="relative">
          {/* Render the sidebar component with user details passed as props */}
          <AppSidebar user={getValue('userDetails')} />
        </div>

        {/* SidebarInset wraps content so it doesn't overlap with the sidebar */}
        <SidebarInset>
          <div className="flex flex-col h-full">
            {/* Header component that contains user information and navigation */}
            {/* <Header
              className="justify-between flex h-[65px] shrink-0 items-center gap-1 sm:gap-2 transition-[width] ease-linear border-b"
              user={getValue('userDetails')} // Pass user details to the header
            /> */}

            <AppHeader onLayoutClear={() => {}} />

            {/* ScrollArea makes the main content scrollable based on the environment */}
            <ScrollArea
              // Adjust height dynamically depending on whether it's running in Electron or the browser
              className={`m-2 ${isElectron ? 'h-[calc(100vh-129px)]' : 'h-[calc(100vh-81px)]'}`}
            >
              {/* Nested routes will be rendered here */}
              <div className="flex flex-col">
                <Outlet /> {/* Render the child routes */}
              </div>
            </ScrollArea>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}

export default AppLayout

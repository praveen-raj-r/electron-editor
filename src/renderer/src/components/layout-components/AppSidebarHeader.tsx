/* eslint-disable react/prop-types */
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar'
import * as LuicideIcons from 'lucide-react'
import { useState } from 'react'

const teams = [
  {
    name: 'Fleet',
    logo: 'GalleryVerticalEnd',
    plan: 'IoT Dashboard Builder'
  },
  {
    name: 'Site',
    logo: 'Factory',
    plan: 'IoT Dashboard Builder'
  }
]

function AppSidebarHeader() {
  const [activeTeam, setActiveTeam] = useState(teams[0])
  const ActiveLogo = LuicideIcons[activeTeam.logo]

  return (
    <SidebarHeader className="border-b">
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <div className="flex items-center justify-center rounded-lg aspect-square size-8 bg-sidebar-primary text-sidebar-primary-foreground">
                  <ActiveLogo className="size-4" />
                </div>
                <div className="grid flex-1 text-sm leading-tight text-left">
                  <span className="font-semibold truncate">{activeTeam.name}</span>
                  <span className="text-xs truncate">{activeTeam.plan}</span>
                </div>
                <LuicideIcons.ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              align="start"
              side="bottom"
              sideOffset={4}
            >
              <DropdownMenuLabel className="text-xs text-muted-foreground">Teams</DropdownMenuLabel>
              {teams.map((team, index) => {
                const Icon = LuicideIcons[team.logo]

                return (
                  <DropdownMenuItem
                    key={team.name}
                    onClick={() => setActiveTeam(team)}
                    className="gap-2 p-2"
                  >
                    <div className="flex items-center justify-center border rounded-sm size-6">
                      <Icon className="size-4 shrink-0" />
                    </div>
                    {team.name}
                    <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                  </DropdownMenuItem>
                )
              })}
              <DropdownMenuSeparator />

              <DropdownMenuItem disabled className="gap-2 p-2 justify-center">
                <div className="flex items-center justify-center border rounded-md size-6 bg-background">
                  <LuicideIcons.Lock className="size-4 " />
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  )
}

export default AppSidebarHeader

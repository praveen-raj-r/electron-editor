/* eslint-disable react/prop-types */
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from '@/components/ui/sidebar'

import * as LuicideIcons from 'lucide-react'
import { ChevronRight } from 'lucide-react'

import { Link, useLocation } from 'react-router-dom'

// Define the main navigation structure
const navMain = [
  {
    title: 'Dashboard',
    icon: 'LayoutDashboard',
    url: '/dashboard',
    isActive: true
  },
  {
    title: 'Fleet',
    icon: 'Cpu',
    items: [
      { title: 'Add', url: '/create-fleet', icon: 'GitBranchPlus' },
      { title: 'Configure', url: '/config-fleet', icon: 'MonitorCog' },
      { title: 'View', url: '/view-fleet', icon: 'PackageCheck' }
    ]
  },
  {
    title: 'Customer',
    icon: 'UsersRound',
    items: [
      { title: 'Add', url: '/create-customer', icon: 'UserPlus' },
      { title: 'Configure', url: '/config-customer', icon: 'UserCog' },
      { title: 'View', url: '/view-customer', icon: 'ContactRound' }
    ]
  },
  {
    title: 'Report',
    icon: 'Clipboard',
    items: [
      { title: 'General', url: '/general-report', icon: 'Clipboard' },
      { title: 'Consolidated', url: '/consolidated-report', icon: 'ClipboardList' },
      { title: 'Alert', url: '/alert-report', icon: 'FileWarning' }
    ]
  },
  {
    title: 'Settings',
    url: '/app/settings/profile',
    icon: 'Cog'
  },
  {
    title: 'Help',
    icon: 'CircleHelp',
    items: [
      { title: 'Support', url: '/support', icon: 'Phone' },
      { title: 'Documentation', url: '/document', icon: 'FileWarning' }
    ]
  }
]
function AppSidebarContent() {
  let { pathname } = useLocation()
  pathname = pathname.split('/').length > 3 ? pathname.split('/').slice(0, 3).join('/') : pathname

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Platform</SidebarGroupLabel>
        <SidebarMenu>
          {navMain.map((item) => {
            const Icon = LuicideIcons[item.icon]
            return (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                {item.url ? (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      className="data-[active=true]:text-[#fff]"
                      asChild
                      isActive={item.url.includes(pathname)}
                    >
                      <Link to={item.url}>
                        {item.icon && <Icon className="size-4 shrink-0" />}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ) : (
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <Icon className="size-4 shrink-0" />}
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => {
                          const SubIcon = LuicideIcons[subItem.icon]

                          return (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <Link to={subItem.url}>
                                  {item.icon && <SubIcon className="size-4 shrink-0" />}
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          )
                        })}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                )}
              </Collapsible>
            )
          })}
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  )
}

export default AppSidebarContent

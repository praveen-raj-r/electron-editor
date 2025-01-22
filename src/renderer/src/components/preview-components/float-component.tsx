import micrologo from '@/assets/microbin-white-logo.png'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { buttonVariants } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { Bell, ChevronUp, Cog, Home, LogOut, Webhook } from 'lucide-react'
import { Link } from 'react-router-dom'

const FloatComponent = () => {
  return (
    <div className="absolute bottom-4 left-3">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }))}>
            <img className="h-5" src={micrologo} />
            Microbin
            <Avatar className="size-6">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <ChevronUp />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
          side="bottom"
          align="end"
          sideOffset={4}
        >
          <Link to="/editor">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Home />
                Back to Home
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </Link>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Webhook />
              Browse Apps
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Cog />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Bell />
              Notifications
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <Link to="/logout">
            <DropdownMenuItem>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default FloatComponent

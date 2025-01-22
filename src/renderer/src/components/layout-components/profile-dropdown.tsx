import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { LogOut, User, UserCog } from 'lucide-react'
import { Link } from 'react-router-dom'

interface UserProps {
  user: {
    domainName: string
    email: string
  }
}
function ProfileDropdown({ user }: UserProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar className="h-8 w-8 ml-2">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mr-3 mt-2">
        <DropdownMenuLabel>
          <div className="flex gap-3 p-1 items-start">
            <Avatar className="w-14 h-14 rounded-lg">
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-sm leading-tight text-left">
              <span className="font-semibold text-base truncate">{user.domainName}</span>
              <span className="text-sm font-normal truncate">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <div className="p-1">
          <Link to="/profile">
            <DropdownMenuItem>
              <User />
              Profile
            </DropdownMenuItem>
          </Link>

          <DropdownMenuItem>
            <UserCog />
            Account Settings
          </DropdownMenuItem>

          <Link to="/logout">
            <DropdownMenuItem>
              <LogOut />
              Sign out
            </DropdownMenuItem>
          </Link>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileDropdown

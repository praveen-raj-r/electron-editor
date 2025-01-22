import { ChevronDown } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '../ui/command'

import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

function CardsTeamMembers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>Invite your team members to collaborate.</CardDescription>
      </CardHeader>

      <CardContent className="grid gap-6 px-3">
        <Comp avatar={1} avatarFallback="OM" name="Sofia Davis" email="m@example.com" />
        <Comp avatar={2} avatarFallback="JL" name="Justin Langer" email="j@example.com" />
        <Comp avatar={3} avatarFallback="IN" name="Sofia Davis" email="i@example.com" />
      </CardContent>
    </Card>
  )
}

const Comp = ({ avatar, avatarFallback, name, email }) => {
  return (
    <div className="flex items-center justify-between space-x-2">
      <div className="flex items-center space-x-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src={`/avatars/0${avatar}.png`} alt="Image" />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium leading-none">{name}</p>
          <p className="text-sm text-muted-foreground truncate">{email}</p>
        </div>
      </div>

      <PopoverComponent />
    </div>
  )
}

const PopoverComponent = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="ml-auto">
          Member <ChevronDown className="text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" align="end">
        <Command>
          <CommandInput placeholder="Select new role..." />
          <CommandList>
            <CommandEmpty>No roles found.</CommandEmpty>
            <CommandGroup className="p-1.5">
              <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                <p>Viewer</p>
                <p className="text-sm text-muted-foreground">Can view and comment.</p>
              </CommandItem>
              <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                <p>Developer</p>
                <p className="text-sm text-muted-foreground">Can view, comment and edit.</p>
              </CommandItem>
              <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                <p>Billing</p>
                <p className="text-sm text-muted-foreground">
                  Can view, comment and manage billing.
                </p>
              </CommandItem>
              <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                <p>Owner</p>
                <p className="text-sm text-muted-foreground">
                  Admin-level access to all resources.
                </p>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default CardsTeamMembers

import { Badge } from '../ui/badge'

const ComponentBadge = ({ children }) => {
  return (
    <Badge className="absolute bg-[#3170f9] hover:bg-[#3170f9] text-white px-1 top-1 left-1 z-10 text-[11px]">
      {children}
    </Badge>
  )
}

export default ComponentBadge

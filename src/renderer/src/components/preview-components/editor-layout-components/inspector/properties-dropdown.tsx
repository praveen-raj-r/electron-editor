import { Triangle } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../../layout-components/theme-provider'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../../ui/collapsible'
import { Input } from '../../ui/input'
import { Label } from '../../ui/label'
import Color from './properties-components/color'

const values = {
  apperance: (
    <>
      <Color />
    </>
  ),
  content: (
    <>
      <Color />
    </>
  ),
  size: (
    <div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Label className="text-[12px]">Value</Label>
        <Input className="h-7" type="text" />
      </div>
    </div>
  ),
  weight: (
    <div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Label className="text-[12px]">Value</Label>
        <Input className="h-7" type="text" />
      </div>
    </div>
  )
}
const PropertiesDropdown = ({ item }: { item: string }) => {
  const [open, setOpen] = useState(false)
  const { theme } = useTheme()
  const iconColor = theme === 'dark' ? '#fff' : '#808080'

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="border-b px-1 py-2">
      <CollapsibleTrigger className="flex items-center gap-1 min-h-6 text-[12px]">
        <div className="p-1">
          {open ? (
            <Triangle fill={iconColor} stroke={iconColor} size={7} className="rotate-180" />
          ) : (
            <Triangle stroke={iconColor} fill={iconColor} size={7} className="rotate-90" />
          )}
        </div>
        <span className="capitalize text-[13px]">{item}</span>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="pb-2 px-4 pt-1">
          <div className="space-y-2">{values[item]}</div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default PropertiesDropdown

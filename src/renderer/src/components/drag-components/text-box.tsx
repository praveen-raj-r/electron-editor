import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const DragTextBox = () => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 px-2">
      <Label>Label</Label>
      <Input type="text" placeholder="" />
    </div>
  )
}

export default DragTextBox

import { Minus, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ZoomComponent = ({ setZoomValue, zoomValue }) => {
  const handleZoomOut = () => {
    setZoomValue(Math.max(zoomValue - 10, 50))
  }
  const handleZoomIn = () => {
    setZoomValue(Math.min(zoomValue + 10, 100))
  }
  return (
    <div className="absolute bottom-4 left-4 z-10 p-[2px] bg-white rounded-sm select-none border">
      <div className="flex gap-1 items-center text-black">
        <Button
          disabled={zoomValue < 60}
          onClick={handleZoomOut}
          variant="ghost"
          className="size-6"
        >
          <Minus />
        </Button>
        <h1 className="text-sm">{zoomValue}%</h1>
        <Button className="size-6" disabled={zoomValue > 90} onClick={handleZoomIn} variant="ghost">
          <Plus />
        </Button>
      </div>
    </div>
  )
}

export default ZoomComponent

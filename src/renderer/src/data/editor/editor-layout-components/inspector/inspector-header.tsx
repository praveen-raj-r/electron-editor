import { X } from 'lucide-react'

const InspectorHeader = ({
  dashboardComponents,
  selectedEditItem,
  selectedComponent,
  setInspectorOpen
}) => {
  return (
    <div className="flex justify-between text-black p-2 border-b dark:border-[#5b5b5b6e]">
      {dashboardComponents.length > 0 && selectedEditItem !== null ? (
        <h1 className="text-[13px] font-medium dark:text-[#ffffff6e]">
          {selectedComponent?.componentLabel || 'Unnamed Component'}
        </h1>
      ) : (
        <h1 className="text-[13px] font-medium dark:text-[#ffffff6e]">No components</h1>
      )}
      <X
        className="dark:text-white hover:dark:text-black cursor-pointer hover:bg-[#b8b4b4] rounded-full"
        size={18}
        onClick={() => {
          setInspectorOpen(false)
        }}
      />
    </div>
  )
}
export default InspectorHeader

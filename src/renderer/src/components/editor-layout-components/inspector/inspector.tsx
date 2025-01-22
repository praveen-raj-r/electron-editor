/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button'
import { Copy, Database, Trash } from 'lucide-react'
import PropertiesDropdown from './properties-dropdown'
import { InspectorProps } from '@/types/editor'
import { WIDTH_OF_INSPECTOR } from '@/lib/constants'
import InspectorHeader from './inspector-header'

const Inspector = ({
  setInspectorOpen,
  selectedEditItem,
  dashboardComponents,
  setSelectedEditItem,
  setDashboardComponents
}: InspectorProps) => {
  const handleDelete = (index: number | null) => {
    if (index !== null) {
      setDashboardComponents(dashboardComponents.filter((_, i) => i !== index))
      setSelectedEditItem(null)
      setInspectorOpen(false)
    }
  }

  const selectedComponent = selectedEditItem !== null && dashboardComponents[selectedEditItem]

  return (
    <div
      style={{ minWidth: WIDTH_OF_INSPECTOR, maxWidth: WIDTH_OF_INSPECTOR }}
      className="border-l h-full bg-white dark:bg-black"
    >
      <div className="flex flex-col">
        <InspectorHeader
          dashboardComponents={dashboardComponents}
          selectedComponent={selectedComponent}
          selectedEditItem={selectedEditItem}
          setInspectorOpen={setInspectorOpen}
        />
        <div className="flex flex-col gap-3">
          {selectedComponent ? (
            <>
              <div className="m-[2px]">
                <div className="flex justify-center items-center m-4">
                  <Button size="sm" className="w-full bg-green-500">
                    <Database /> Connect Data
                  </Button>
                </div>
                {selectedComponent.props.map((item: string, key: number) => (
                  <PropertiesDropdown item={item} key={`PropertiesDropdown-${key}`} />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 mx-auto mt-10">
                <Button variant="secondary" size="sm">
                  <Copy /> Duplicate
                </Button>
                <Button
                  onClick={() => {
                    handleDelete(selectedEditItem)
                  }}
                  variant="destructive"
                  size="sm"
                >
                  <Trash /> Delete
                </Button>
              </div>
            </>
          ) : (
            <div className="border dark:border-[#ffffff6e] text-center rounded-sm py-px text-sm dark:text-[#ffffff6e] text-[#4d4a4a] select-none mx-auto p-3 mt-3">
              No components selected
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Inspector

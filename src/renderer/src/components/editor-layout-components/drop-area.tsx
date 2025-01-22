/* eslint-disable @typescript-eslint/no-explicit-any */
import { useElectron } from '@/hooks/use-electron'
import { DragEvent, isValidElement, useEffect, useState } from 'react'
import ReactGridLayout, { WidthProvider } from 'react-grid-layout'
import { ScrollArea } from '../ui/scroll-area'
import { DropAreaProps } from '@/types/editor'
import {
  HEIGHT_OF_APP_HEADER,
  HEIGHT_OF_TITLE_BAR,
  MINIMUM_WIDTH_OF_DROPAREA,
  PADDING_OF_DROPAREA
} from '@/lib/constants'
import { handleOnDrop } from '@/lib/handle-drop'
import { componentsList } from '@/data/editor/components'
import { Badge } from '../ui/badge'
import ComponentBadge from './component-badge'

const Layout = WidthProvider(ReactGridLayout)

function DropArea({
  zoomValue,
  layoutClearTrigger,
  setInspectorOpen,
  setSelectedEditItem,
  selectedEditItem,
  setDashboardComponents,
  dashboardComponents
}: DropAreaProps) {
  const isElectron = useElectron()
  const [layout, setLayout] = useState<any[]>([])

  const handleOnDragOver = (e: DragEvent) => e.preventDefault()

  const handleDropAction = handleOnDrop({
    layout,
    setLayout,
    dashboardComponents,
    setDashboardComponents,
    setSelectedEditItem,
    setInspectorOpen
  })
  const lsLayout = localStorage.getItem('layout')
    ? JSON.parse(localStorage.getItem('layout') as string)
    : []

  const lsDashboardComponents = localStorage.getItem('dashboardComponents')
    ? JSON.parse(localStorage.getItem('dashboardComponents') as string)
    : []

  useEffect(() => {
    const refactoredList = lsDashboardComponents.map((comp) => {
      return { ...comp, element: componentsList.find((obj) => obj.id === comp.id)?.element }
    })

    setLayout(lsLayout)
    setDashboardComponents(refactoredList)
  }, [layoutClearTrigger])

  const zoomFactor = (100 - zoomValue) / 100
  const zoomHeight = zoomFactor ? window.innerHeight * (1 - zoomFactor) : window.innerHeight

  return (
    <div style={{ minWidth: MINIMUM_WIDTH_OF_DROPAREA }} className="size-full p-5">
      <div
        style={{ width: `${zoomValue}%` }}
        onClick={() => {
          console.log('clicked')
        }}
        className="bg-[#f6f6f6] dark:bg-[#1a1919] relative h-full mx-auto border-[#3b82f6] border select-none"
      >
        <ComponentBadge>defaultPage Main</ComponentBadge>
        <div
          onDragOver={handleOnDragOver}
          onDrop={(e) => handleDropAction(e)}
          className="relative w-full h-full flex gap-1"
        >
          <ScrollArea
            style={{
              height: isElectron
                ? `calc(${zoomHeight}px - ${PADDING_OF_DROPAREA} - ${HEIGHT_OF_APP_HEADER} - ${HEIGHT_OF_TITLE_BAR})`
                : `calc(${zoomHeight}px - ${PADDING_OF_DROPAREA} - ${HEIGHT_OF_APP_HEADER})`
            }}
            className="w-full"
          >
            <Layout
              className="layout w-full h-full py-2 px-3"
              cols={12}
              layout={layout}
              rowHeight={30}
              onLayoutChange={(newLayout) => {
                setLayout(newLayout)
                localStorage.setItem('layout', JSON.stringify(newLayout))
              }}
            >
              {dashboardComponents.map((component, index) => {
                if (!component) return null

                const DroppedComponent = isValidElement(component.element)
                  ? component.element.type
                  : null

                return (
                  <div
                    key={index}
                    className={`py-2 px-3 relative w-full h-full hover:border-1 border-white border min-h-max cursor-move hover:border-dashed hover:border-[#ce79ce] ${
                      index === selectedEditItem
                        ? '!border-[#35373a] border-[1.5]'
                        : 'border-transparent'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedEditItem(index)
                    }}
                  >
                    <div className="w-full h-full cursor-default overflow-hidden">
                      {DroppedComponent ? <DroppedComponent key={index} /> : null}
                    </div>
                  </div>
                )
              })}
            </Layout>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

export default DropArea

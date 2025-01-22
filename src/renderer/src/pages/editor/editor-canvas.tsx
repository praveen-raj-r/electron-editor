/* eslint-disable @typescript-eslint/no-explicit-any */
import DropArea from '@/components/editor-layout-components/drop-area'
import Inspector from '@/components/editor-layout-components/inspector/inspector'
import OpenInspectorButton from '@/components/editor-layout-components/inspector/open-inspector-button'
import ZoomComponent from '@/components/editor-layout-components/zoom-component'
import DotPattern from '@/components/ui/dot-pattern'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { useSidebar } from '@/components/ui/sidebar'
import { useElectron } from '@/hooks/use-electron'
import {
  HEIGHT_OF_APP_HEADER,
  HEIGHT_OF_TITLE_BAR,
  WIDTH_OF_EDITOR_SIDEBAR,
  WIDTH_OF_INSPECTOR,
  WIDTH_OF_PRIMARY_SIDEBAR
} from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Component } from '@/types/editor'
import { useState } from 'react'

const EditorCanvas = ({ layoutClearTrigger }) => {
  const [isInspectorOpen, setInspectorOpen] = useState(true)
  const [selectedEditItem, setSelectedEditItem] = useState<number | null>(null)
  const [dashboardComponents, setDashboardComponents] = useState<Component[]>([])
  const { isMobile, open } = useSidebar()
  const [zoomValue, setZoomValue] = useState(100)
  const isElectron = useElectron()

  const editorSidebarWidth = isMobile
    ? '0px'
    : open
      ? WIDTH_OF_EDITOR_SIDEBAR
      : WIDTH_OF_PRIMARY_SIDEBAR

  const inspectorWidth = isInspectorOpen ? WIDTH_OF_INSPECTOR : '0px'
  const width = `calc(100vw - ${editorSidebarWidth} - ${inspectorWidth})`

  return (
    <div
      style={{
        maxHeight: isElectron
          ? `calc(100% - ${HEIGHT_OF_TITLE_BAR} - ${HEIGHT_OF_APP_HEADER})`
          : `calc(100% - ${HEIGHT_OF_APP_HEADER})`
      }}
      className="h-full"
    >
      <div className="flex h-full w-full relative">
        <div className="w-full relative h-full">
          {/* Design Background */}
          <DotPattern
            cx={1.2}
            cy={1.2}
            cr={1.2}
            className={cn(
              '[mask-image:radial-gradient(100000px_circle_at_center,white,transparent)] fill-blue-500 bg-[#ebebeb]'
            )}
          />

          <ScrollArea style={{ width }} className="h-full">
            <DropArea
              zoomValue={zoomValue}
              layoutClearTrigger={layoutClearTrigger}
              dashboardComponents={dashboardComponents}
              setDashboardComponents={setDashboardComponents}
              selectedEditItem={selectedEditItem}
              setSelectedEditItem={setSelectedEditItem}
              isInspectorOpen={isInspectorOpen}
              setInspectorOpen={setInspectorOpen}
            />

            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <ZoomComponent zoomValue={zoomValue} setZoomValue={setZoomValue} />

          {!isInspectorOpen && <OpenInspectorButton setInspectorOpen={setInspectorOpen} />}
        </div>

        {isInspectorOpen && (
          <Inspector
            setDashboardComponents={setDashboardComponents}
            setSelectedEditItem={setSelectedEditItem}
            dashboardComponents={dashboardComponents}
            selectedEditItem={selectedEditItem}
            setInspectorOpen={setInspectorOpen}
          />
        )}
      </div>
    </div>
  )
}

export default EditorCanvas

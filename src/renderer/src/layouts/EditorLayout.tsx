import EditorSidebar from '@/components/editor-layout-components/editor-sidebar'
import AppHeader from '@/components/layout-components/AppHeader'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { WIDTH_OF_EDITOR_SIDEBAR } from '@/lib/constants'
import EditorCanvas from '@/pages/editor/editor-canvas'

import React, { useState } from 'react'

export default function EditorLayout() {
  const [layoutClearTrigger, setLayoutClearTrigger] = useState(0)

  const handleLayoutClear = () => {
    setLayoutClearTrigger((prev) => prev + 1) // Increment trigger
  }

  return (
    <div className="font-inter">
      <SidebarProvider
        style={
          {
            '--sidebar-width': WIDTH_OF_EDITOR_SIDEBAR
          } as React.CSSProperties
        }
      >
        <div className="relative">
          <EditorSidebar />
        </div>

        <SidebarInset>
          <div className="flex flex-col h-full">
            <AppHeader onLayoutClear={handleLayoutClear} />
            <EditorCanvas layoutClearTrigger={layoutClearTrigger} />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}

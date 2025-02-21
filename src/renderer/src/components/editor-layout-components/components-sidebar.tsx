/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput
} from '@/components/ui/sidebar'
import { DragEvent } from 'react'
import DraggableSidebarItem from './draggable-sidebar-item'
import { componentsList } from '@/data/editor/components'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useElectron } from '@/hooks/use-electron'
import { HEIGHT_OF_TITLE_BAR } from '@/lib/constants'

const ComponentsSidebar = () => {
  const isElectron = useElectron()
  const handleOnDrag = (e: DragEvent<HTMLDivElement>, i: string) => {
    e.dataTransfer.setData('uuid', i.toString())
  }

  return (
    <>
      <div className="p-4 pb-0">
        <SidebarInput className=" placeholder:text-[#beb0b0]" placeholder="Search components" />
      </div>

      <h2 className="dark:text-gray-200 text-sm p-4 pb-0">Fleet Components</h2>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <ScrollArea
              style={{
                height: `calc(100vh - 165px -  ${isElectron ? HEIGHT_OF_TITLE_BAR : '0px'})`
              }}
            >
              <div className="grid grid-cols-3 2xl:gap-x-2 2xl:gap-y-1">
                {componentsList.map((item, index) => (
                  <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleOnDrag(e, item.id)}
                    className={`font-sans text-black bg-transparent p-2 cursor-move`}
                  >
                    <DraggableSidebarItem item={item} />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </>
  )
}

export default ComponentsSidebar

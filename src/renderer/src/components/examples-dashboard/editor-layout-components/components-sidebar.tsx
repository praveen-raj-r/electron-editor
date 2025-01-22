/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput
} from '@/components/ui/sidebar'
import { DragEvent } from 'react'
import DraggableSidebarItem from './draggable-sidebar-item'
import { componentsList } from '@/data/editor/components'

const ComponentsSidebar = () => {
  const handleOnDrag = (e: DragEvent<HTMLDivElement>, i: string) => {
    e.dataTransfer.setData('uuid', i.toString())
  }

  return (
    <Sidebar collapsible="none" className="flex-1 hidden md:flex">
      <SidebarHeader className="gap-3.5 border-b p-4">
        <SidebarInput className=" placeholder:text-[#070606]" placeholder="Search components" />
      </SidebarHeader>
      <h2 className="dark:text-gray-200 text-sm p-4 pb-0">Fleet Components</h2>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <div className="grid grid-cols-3 2xl:gap-x-2 2xl:gap-y-2">
              {componentsList.map((item, index) => (
                <div
                  key={index}
                  draggable
                  onDragStart={(e) => handleOnDrag(e, item.id)}
                  className={`font-sans text-black bg-transparent mb-2 p-2 cursor-move`}
                >
                  <DraggableSidebarItem item={item} />
                </div>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default ComponentsSidebar

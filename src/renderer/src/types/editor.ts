import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface Component {
  id: string
  name: string
  props?: Record<string, any>
  element: ReactNode
  image?: string
}

export interface DropAreaProps {
  zoomValue: number
  layoutClearTrigger: number
  isInspectorOpen: boolean
  setInspectorOpen: Dispatch<SetStateAction<boolean>>
  setSelectedEditItem: Dispatch<SetStateAction<number | null>>
  selectedEditItem: number | null
  dashboardComponents: Component[]
  setDashboardComponents: Dispatch<SetStateAction<Component[]>>
}

export interface EditorCanvasProps {
  components: Component[]
}

export interface ComponentsSidebarProps {
  components: {
    name: string
    props?: Record<string, any>
    element: ReactNode
    image?: string
  }[]
}

export interface DraggableSidebarItemProps {
  item: {
    componentLabel: string
    image?: string
  }
}

export interface InspectorProps {
  setInspectorOpen: Dispatch<SetStateAction<boolean>>
  selectedEditItem: number | null
  dashboardComponents: any[]
  setSelectedEditItem: Dispatch<SetStateAction<number | null>>
  setDashboardComponents: Dispatch<SetStateAction<any[]>>
}

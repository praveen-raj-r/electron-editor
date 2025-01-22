/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sidebar } from '@/components/ui/sidebar'
import { useElectron } from '@/hooks/use-electron'

import ComponentsSidebar from './components-sidebar'
import PrimarySidebar from './primary-sidebar'
import { HEIGHT_OF_TITLE_BAR } from '@/lib/constants'

function EditorSidebar() {
  const isElectron = useElectron()

  return (
    <Sidebar
      style={{ maxHeight: isElectron ? `calc(100vh - ${HEIGHT_OF_TITLE_BAR})` : '' }}
      collapsible="icon"
      className={`overflow-hidden [&>[data-sidebar=sidebar]]:flex-row absolute ${isElectron ? `` : 'h-screen'}`}
    >
      <PrimarySidebar />

      <ComponentsSidebar />
    </Sidebar>
  )
}
export default EditorSidebar

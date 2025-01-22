import PreviewHeader from '@/components/preview-components/preview-header'
import FloatComponent from '@/components/preview-components/float-component'
import NainContainer from '@/components/preview-components/main-container'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useElectron } from '@/hooks/use-electron'

const PagePreview = () => {
  const isElectron = useElectron()
  return (
    <div className="h-full">
      <PreviewHeader />
      <div className="bg-white h-full flex">
        <div className="text-black w-[300px] flex justify-center items-center border-r">
          <h1>Sidebar</h1>
        </div>
        <div className="bg-gray-400 w-full">
          <ScrollArea className={isElectron ? 'h-[calc(100vh-108px)]' : 'h-[calc(100vh-72px)]'}>
            <div className="h-full">
              <NainContainer />
            </div>
          </ScrollArea>
        </div>
      </div>
      <FloatComponent />
    </div>
  )
}
export default PagePreview

import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import microbinLogo from '@/assets/macrologo.png'
import { useElectron } from '@/hooks/use-electron'

const PreviewHeader = () => {
  const isElectron = useElectron()
  return (
    <div className="w-full p-3 flex justify-between items-center">
      {isElectron ? (
        <span className="uppercase">Preview Page</span>
      ) : (
        <img src={microbinLogo} className="h-12" />
      )}

      <div className="flex items-center gap-3">
        <Button size="sm" disabled>
          Publish
        </Button>
        <Link to="/editor">
          <Button className="bg-blue-600 hover:bg-blue-900 text-white" size="sm">
            Edit app
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default PreviewHeader

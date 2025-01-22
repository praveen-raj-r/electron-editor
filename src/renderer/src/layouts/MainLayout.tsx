import TitleBar from '@/components/app/title-bar' // Importing the TitleBar component for Electron apps
import { useElectron } from '@/hooks/use-electron' // Import custom hook to check if app is running in Electron
import { Outlet } from 'react-router-dom' // Import Outlet to render child routes

// Define MainLayout component
const MainLayout: React.FC = () => {
  // Check if the app is running in an Electron environment
  const isElectron = useElectron()

  return (
    <div className="flex flex-col border h-screen overflow-hidden font-poppins">
      {/* Conditionally render TitleBar if running in Electron */}
      {isElectron && (
        <TitleBar
          className={`region-drag border-b flex justify-between items-center min-h-12 backdrop-blur-[44px] text-[#fff] py-0 pl-[10px]`}
        />
      )}

      {/* Main content area */}
      <main className="h-full">
        {/* Outlet will render the current child route content */}
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout

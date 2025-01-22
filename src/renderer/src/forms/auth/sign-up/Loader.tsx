import { MultiStepLoader } from '@/components/ui/multi-step-loader'
import { loadingStates } from '@/data/loadingStates.json'
import { X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

// Loader component that handles displaying a multi-step loader and provides a cancel button
function StatesLoader({
  loading,
  setLoading
}: {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const navigate = useNavigate()

  return (
    <div className="w-full flex items-center justify-center">
      {/* Multi-step loader that visually shows the loading process */}
      <MultiStepLoader
        loadingStates={loadingStates} // Provides the states for each step in the loader
        loading={loading} // Controls whether the loader is shown or not
        duration={500} // Duration for each step in milliseconds
        loop={false} // Ensures the loader does not loop indefinitely
      />

      {/* Display cancel button if loading is true */}
      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]" // Position button on top-right corner
          onClick={() => {
            setLoading(false) // Stop loading and hide the loader
            navigate('/') // Navigate the user back to the home page (or other route)
          }}
        >
          <X className="h-10 w-10" /> {/* Icon to represent the "close" button */}
        </button>
      )}
    </div>
  )
}

export default StatesLoader

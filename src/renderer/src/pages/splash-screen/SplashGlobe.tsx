// Importing necessary assets, components, and utilities
import microbinLogo from '@/assets/microbin-full-white.svg' // Importing the logo for display
import RoutedGlobeModel from '@/components/app/routed-globe-model' // 3D globe model for visual representation
import AnimatedGradientText from '@/components/ui/animated-gradient-text' // Custom animated gradient text component
import { Button } from '@/components/ui/button' // Custom button component
import Particles from '@/components/ui/particles' // Particles effect for visual enhancement
import { cn } from '@/lib/utils' // Utility function for className manipulation
import { ChevronRight } from 'lucide-react' // Importing the ChevronRight icon for navigation arrow
import { Link } from 'react-router-dom' // React Router for navigation between pages

// SplashScreen component, the entry point of the screen
export function SplashScreen(): JSX.Element {
  return (
    // Container for the splash screen with full-screen height and centered content
    <div className="max-h-screen splash-screen relative h-screen w-full bg-[#30135f40] flex justify-center items-center">
      <div className="xl:px-auto px-10 max-w-[1400px] w-full h-[calc(100%-30px)] rounded">
        {/* Grid layout to divide the screen into left and right sections */}
        <div className="grid md:grid-cols-2 h-full">
          {/* Left side content */}
          <LeftSide />
          {/* Right side content with the 3D model */}
          <RightSide />
        </div>
      </div>

      {/* Particles background effect */}
      <Particles className="absolute inset-0" size={0.5} quantity={300} ease={80} refresh />
    </div>
  )
}

// Right side content of the splash screen
function RightSide() {
  return (
    <div className="hidden md:flex justify-center items-center">
      <div className="relative md:h-[550px]">
        {/* Positioning the globe model */}
        <div className="absolute top-32 lg:-top-4 min-[1000px]:bottom-0 left-1/2 -translate-x-[30%] lg:-translate-x-1/2 w-fit overflow-hidden h-fit">
          {/* RoutedGlobeModel displays the interactive globe model */}
          <RoutedGlobeModel />
        </div>
      </div>
    </div>
  )
}

// Left side content of the splash screen
function LeftSide() {
  return (
    <div className="flex justify-center items-center">
      <div className="p-2 space-y-6">
        {/* Microbin Logo */}
        <img src={microbinLogo} alt="Microbin Logo" />
        {/* Main Heading */}
        <h1 className="text-5xl font-bold">Empower your fleet and IoT solutions</h1>
        {/* Subheading with gradient effect */}
        <p className="text-2xl font-semibold gradient retro-2">
          With our cutting-edge dashboard builder for future-ready performance.
        </p>

        {/* Sign in button linking to /domain */}
        <Link to="/domain">
          <AnimatedGradientText className="mx-0 mt-10">
            {/* Animated text with gradient effect */}
            🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{' '}
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Sign in into your Macro account
            </span>
            {/* ChevronRight icon for navigation arrow */}
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
        </Link>

        {/* Text and button for users without an account */}
        <div className="text-sm flex items-center">
          Don't have an account? {/* Text prompt */}
          <Link to="/create-account">
            {/* Button to create an account */}
            <Button className="text-[#3073f8]" variant="link" effect="hoverUnderline">
              Create Account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Default export of the SplashScreen component
export default SplashScreen

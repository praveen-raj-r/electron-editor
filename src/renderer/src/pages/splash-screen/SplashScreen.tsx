import microbinLogo from '@/assets/microbin-full-white.svg'
import SplashScreenComp from '@/components/app/splash-screen-comp'
import { Button } from '@/components/ui/button'
import Particles from '@/components/ui/particles'
import ShimmerButton from '@/components/ui/shimmer-button'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function AnimatedSplashScreenVariant() {
  const [fadeIn, setFadeIn] = useState(false)

  // Trigger fade-in animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true)
    }, 600) // Slight delay for animation to kick in

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-black to-gray-800 flex justify-center items-center overflow-hidden font-poppins">
      {/* Dynamic Background Particles */}
      <Particles className="absolute inset-0" size={0.6} quantity={250} ease={80} refresh />

      <div
        className={`relative z-10 max-w-[1400px] w-full h-full flex justify-center items-center px-6 transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="w-full max-w-6xl bg-gradient-to-br from-white/20 to-black/40 rounded-3xl shadow-2xl p-10 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0">
          {/* Left Section - Content */}
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-10">
            <img
              src={microbinLogo}
              alt="Microbin Logo"
              className="w-40 lg:w-56 transition-transform duration-700 transform scale-0 opacity-0 animate-logoAppear"
            />

            <h1 className="text-2xl lg:text-42l font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 opacity-0 animate-slideInLeft">
              Future-Proof Your Fleet and Site with a Custom IoT Dashboard Builder
            </h1>

            <p className="text-lg lg:text-xl text-gray-300 font-medium max-w-lg opacity-0 animate-slideInLeft delay-200">
              Enhance your business operations with intuitive and powerful tools built for the
              future
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              {/* Sign-in Button */}
              <Link to="/domain">
                <ShimmerButton className="shadow-2xl">
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Sign in Macro
                  </span>
                </ShimmerButton>
              </Link>

              {/* Create Account Link */}
              <div className="flex items-center text-sm text-gray-400">
                <span>New here?</span>
                <Link to="/create-account">
                  <Button
                    variant="link"
                    className="text-sm lg:text-base font-semibold text-white hover:underline ml-2"
                  >
                    Create an Account
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Visual */}
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <SplashScreenComp />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedSplashScreenVariant

import { motion } from 'framer-motion'
import microbinLogo from '@/assets/microbin-full-white.svg' // Importing the logo image
import bgImage from '@/assets/three-dashboard.png' // Importing the background image
import DomainForm from '@/forms/auth/startup-domain/DomainForm' // Importing the domain form component

import { FC } from 'react' // Importing the type for a React functional component

/**
 * Domain component that serves as the main layout, splitting the screen
 * into a left and right section.
 */
const Domain: FC = () => {
  return (
    <div className="container relative max-h-screen h-screen lg:grid max-w-full lg:grid-cols-2 lg:px-0">
      <LeftBox /> {/* Left section of the layout */}
      <RightBox /> {/* Right section of the layout */}
    </div>
  )
}

/**
 * LeftBox component responsible for rendering the content on the left side.
 * Includes animations, text, and images for a visually appealing layout.
 */
function LeftBox() {
  // Animation variants for the motion container
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeInOut' } }
  }

  return (
    <motion.div
      className="hidden lg:flex justify-center items-center p-10 bg-[#040D12]" // Styling for the left box
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div>
        {/* Logo section */}
        <div className="relative z-20 flex items-center gap-2 font-medium">
          <img src={microbinLogo} alt="Microbin Logo" />
        </div>

        {/* Title and description */}
        <div className="relative z-20 my-3 2xl:my-10">
          <motion.h1
            className="text-4xl text-center gradient-title-white 2xl:text-4xl lg:text-left 2xl:mb-10 mb-4"
            whileHover={{ scale: 1.1 }} // Hover animation for scaling
          >
            Fleet | Site | Cloud IoT Telemetry Dashboard Builder
          </motion.h1>

          <p className="mb-2 text-1xl text-center text-gray-200 lg:text-left">
            Are you looking to elevate the safety and efficiency of your industrial site? Discover
            the power of our Fleet/Site Cloud IoT Dashboard Builder
          </p>
        </div>

        {/* Animated image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img className="rounded-[15px] h-10 md:h-auto" src={bgImage} alt="Dashboard Preview" />
        </motion.div>
      </div>
    </motion.div>
  )
}

/**
 * RightBox component for the right-hand section, including a form and animations.
 */
const RightBox: FC = () => {
  return (
    <motion.div
      className="lg:p-8 max-h-screen h-screen flex items-center justify-center bg-black" // Styling for the right box
      initial={{ x: '100vw' }} // Initial animation state
      animate={{ x: 0 }} // Final animation state
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="w-[calc(100%-50px)] min-[450px]:w-[400px] sm:w-[500px] text-center space-y-4 text-white">
        {/* Rotating logo animation */}
        <motion.div
          className="flex items-center justify-center mb-4"
          initial={{ opacity: 0, rotate: 90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="flex items-center justify-center mb-4"
            whileHover={{ scale: 1.2 }} // Hover animation for scaling
          >
            <img src={microbinLogo} alt="logo" />
          </motion.div>
        </motion.div>

        {/* Animated heading */}
        <motion.h1
          className="text-3xl font-semibold tracking-tight lg:hidden gradient-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Fleet | Site | Cloud IoT Telemetry Dashboard Builder
        </motion.h1>

        {/* Subheading and description */}
        <motion.p
          className="text-2xl lg:text-xl pb-1 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Welcome back!
        </motion.p>

        <motion.p
          className="text-lg pb-1 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          Connect to Microbin by entering your domain.
        </motion.p>

        {/* Domain form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <DomainForm />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Domain

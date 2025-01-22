import microbin from '@/assets/microbin-full-white.svg' // Import the Microbin logo
import threeDashboard from '@/assets/three-dashboard.png' // Import the image for the dashboard preview
import CreateAccountForm from '@/forms/auth/sign-up/CreateAccount-Form'

import { motion } from 'framer-motion' // Import motion from framer-motion for animations

/**
 * CreateAccount component renders the page to create a new account, which includes two sections:
 * - Left section with a description and dashboard preview
 * - Right section with the form for creating an account
 */
const CreateAccount = () => {
  return (
    <div className="h-full grid lg:grid-cols-2">
      {' '}
      {/* Create a two-column layout on larger screens */}
      <LeftBox /> {/* Left section with logo, text, and dashboard image */}
      <RightBox /> {/* Right section with the form for creating an account */}
    </div>
  )
}

/**
 * LeftBox component handles the left section of the page. It includes the logo, a description,
 * and a preview of the dashboard. It is animated with framer-motion for a sliding effect.
 */
function LeftBox() {
  const containerVariants = {
    hidden: { opacity: 0, x: -100 }, // Start with hidden and off-screen
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeInOut' } } // Final visible state with animation
  }

  return (
    <motion.div
      className="hidden lg:flex justify-center items-center p-10 bg-[#040D12]" // Hide on smaller screens, show on larger ones
      initial="hidden" // Initial animation state
      animate="visible" // When visible, use the specified animation
      variants={containerVariants} // Apply the animation variants
    >
      <div>
        {/* Logo */}
        <div className="relative z-20 flex items-center gap-2 font-medium">
          <img src={microbin} alt="Microbin Logo" />
        </div>

        {/* Heading and description */}
        <div className="relative z-20 my-3 2xl:my-10">
          <motion.h1
            className="text-4xl text-center gradient-title-white 2xl:text-4xl lg:text-left 2xl:mb-10 mb-4"
            whileHover={{ scale: 1.1 }} // Hover effect for scaling
          >
            Fleet | Site | Cloud IoT Telemetry Dashboard Builder
          </motion.h1>

          <p className="mb-2 text-1xl text-center text-gray-200 lg:text-left">
            Are you looking to elevate the safety and efficiency of your industrial site? Discover
            the power of our Fleet/Site Cloud IoT Dashboard Builder
          </p>
        </div>

        {/* Dashboard preview image with animation */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slide up
          animate={{ opacity: 1, y: 0 }} // End with fully visible and at the normal position
          transition={{ duration: 1 }} // Animation duration
        >
          <img
            className="rounded-[15px] h-10 md:h-auto"
            src={threeDashboard}
            alt="Dashboard Preview"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

/**
 * RightBox component handles the right section, which includes the form for creating a new account.
 * It also includes animations for sliding in and fading in the content.
 */
function RightBox() {
  const formVariants = {
    hidden: { opacity: 0, x: 100 }, // Start with hidden and off-screen to the right
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeInOut' } } // Final visible state with animation
  }

  return (
    <motion.div
      className="border flex justify-center items-center"
      initial="hidden" // Initial animation state
      animate="visible" // Apply the visible state when it becomes visible
      variants={formVariants} // Apply the form animation variants
    >
      <div className="w-[calc(100%-50px)] min-[450px]:w-[400px] sm:w-[500px] text-center space-y-4 text-white">
        {/* Logo */}
        <motion.div className="flex items-center justify-center mb-4" whileHover={{ scale: 1.2 }}>
          <img src={microbin} alt="logo" />
        </motion.div>

        {/* Welcome text */}
        <p className="text-2xl lg:text-xl pb-1 font-medium">
          Welcome. Let's embark on an adventure
        </p>
        <p className="text-lg pb-1 font-medium">
          Join us on a journey to innovate, inspire, and achieve greatness together.
        </p>

        {/* Create account form with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial state: off-screen and invisible
          animate={{ opacity: 1, y: 0 }} // Final state: fully visible and in position
          transition={{ delay: 0.5, duration: 1 }} // Animation delay and duration
        >
          <CreateAccountForm /> {/* The actual form for creating an account */}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default CreateAccount // Export the CreateAccount component to be used in the app

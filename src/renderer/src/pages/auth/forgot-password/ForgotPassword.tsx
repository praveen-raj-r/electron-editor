import microbinLogo from '@/assets/microbin-full-white.svg' // Import the Microbin logo
import { motion } from 'framer-motion' // Import motion from framer-motion for animations
import { useNavigate } from 'react-router-dom' // Import useNavigate hook from React Router for navigation
import ForgotPasswordForm from '@/forms/auth/forgot-password/ForgotPassword-Form' // Import the forgot password form component

/**
 * ForgotPassword component renders a page where the user can enter their email to reset their password.
 * It includes animations and a link to return to the login page.
 */
function ForgotPassword() {
  const navigate = useNavigate() // Initialize the useNavigate hook for navigation

  return (
    // Full-screen container with gradient background, centered content
    <div className="h-screen w-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center">
      {/* Motion div for the card that holds the form and content */}
      <motion.div
        className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-lg shadow-2xl p-8"
        initial={{ scale: 0.9, opacity: 0 }} // Initial animation state (scaled down and transparent)
        animate={{ scale: 1, opacity: 1 }} // Final animation state (normal size and fully visible)
        transition={{ duration: 0.5, ease: 'easeInOut' }} // Animation duration and easing
      >
        {/* Motion div for the header section (logo and title) */}
        <motion.div
          className="text-center mb-6"
          initial={{ y: -50, opacity: 0 }} // Initial animation state (positioned above and transparent)
          animate={{ y: 0, opacity: 1 }} // Final animation state (centered and visible)
          transition={{ duration: 0.6, ease: 'easeOut' }} // Animation duration and easing
        >
          {/* Microbin logo */}
          <img src={microbinLogo} alt="Microbin Logo" className="h-12 mx-auto opacity-90" />

          {/* Page Title */}
          <h1 className="text-3xl font-bold text-white mt-6 tracking-wide">
            Forgot Your Password?
          </h1>

          {/* Description text */}
          <p className="text-gray-400 mt-2 text-sm">
            Enter your email, and we’ll send you instructions to reset your password.
          </p>

          {/* ForgotPasswordForm component which handles the form input and submission */}
          <ForgotPasswordForm />
        </motion.div>

        {/* Motion div for the footer section (back to login button) */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }} // Initial animation state (invisible)
          animate={{ opacity: 1 }} // Final animation state (visible)
          transition={{ duration: 0.5, delay: 0.3 }} // Animation duration and delay
        >
          {/* Button to navigate back to the login page */}
          <button
            onClick={() => navigate('/login')} // Navigate to the login page on click
            className="text-sm text-gray-400 hover:text-blue-400 hover:underline transition-all duration-300"
          >
            Back to Login
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ForgotPassword

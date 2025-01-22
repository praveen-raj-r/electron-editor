import { FC } from 'react' // Importing the functional component type from React
import { motion } from 'framer-motion' // Importing the motion library for animations
import microbinLogo from '@/assets/microbin-full-white.svg' // Importing the Microbin logo
import bgImage from '@/assets/three-dashboard.png' // Importing the background image

import { FaGoogle } from 'react-icons/fa' // Importing the Google icon from react-icons
import { useGlobalState } from '@/context/global-state-context' // Importing context for global state management
import LoginForm from '@/forms/auth/sign-in/login-form'

/**
 * Login component serves as the main layout for the login page.
 * It displays a two-column layout with animations and interactive elements.
 */
const Login = () => {
  const { getValue } = useGlobalState() // Extracting the global state context method
  return (
    <div className="container relative max-h-screen h-screen lg:grid max-w-full lg:grid-cols-2 lg:px-0">
      <LeftBox domainName={getValue('domainName')} /> {/* Left box with domain-specific details */}
      <RightBox /> {/* Right box with login form and sign-in options */}
    </div>
  )
}

// Interface for the LeftBox component props
interface DomainProps {
  domainName: string // Prop to pass the domain name
}

/**
 * LeftBox component renders the left side of the login page.
 * Includes animations, domain-specific text, and a background image.
 */
const LeftBox: FC<DomainProps> = ({ domainName }) => {
  return (
    <motion.div
      className="relative hidden bg-[#0a0a0a] max-h-screen h-screen flex-col p-10 text-white lg:flex justify-center"
      initial={{ x: '-100vw' }} // Starts off-screen to the left
      animate={{ x: 0 }} // Animates to its position
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div>
        {/* Logo with scaling animation on hover */}
        <motion.div
          className="relative z-20 flex items-center gap-2 font-medium"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div className="flex items-center justify-center mb-4" whileHover={{ scale: 1.2 }}>
            <img src={microbinLogo} alt="logo" /> {/* Microbin logo */}
          </motion.div>
        </motion.div>

        {/* Welcome message with domain name */}
        <motion.div
          className="relative z-20 my-3 2xl:my-10"
          initial={{ opacity: 0, y: -20 }} // Starts slightly above its position
          animate={{ opacity: 1, y: 0 }} // Animates into position
          transition={{ duration: 1, delay: 1 }}
        >
          <h1 className="text-2xl text-center gradient-title 2xl:text-4xl lg:text-left 2xl:mb-10 mb-4">
            Welcome to {domainName} {/* Dynamic domain name */}
          </h1>
          <motion.p
            className="mb-2 text-xl text-center text-gray-200 lg:text-left"
            initial={{ opacity: 0, x: -50 }} // Starts off-screen to the left
            animate={{ opacity: 1, x: 0 }} // Animates into position
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.span
              className="text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                delay: 2,
                repeat: Infinity,
                repeatType: 'reverse' // Alternates between visible and hidden
              }}
              style={{ fontWeight: 'bold', color: '#FFDD00' }} // Highlighted text style
            >
              Securely manage your fleet, site, and IoT dashboards with ease.
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Background image with scaling animation */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }} // Starts slightly smaller and less opaque
          animate={{ opacity: 1, scale: 1 }} // Animates to full size and opacity
          transition={{ duration: 1, delay: 1.5 }}
        >
          <img className="rounded-[15px] h-10 md:h-auto" src={bgImage} alt="Background" />
        </motion.div>
      </div>
    </motion.div>
  )
}

/**
 * RightBox component renders the right side of the login page.
 * Contains the login form, sign-in button, and animations for various elements.
 */
const RightBox = () => {
  return (
    <motion.div
      className="lg:p-8 max-h-screen h-screen flex items-center justify-center bg-black"
      initial={{ x: '100vw' }} // Starts off-screen to the right
      animate={{ x: 0 }} // Animates into position
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <motion.div
        className="w-[calc(100%-50px)] min-[450px]:w-[400px] sm:w-[500px] text-center space-y-4 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }} // Delayed opacity change for the container
      >
        {/* Rotating logo */}
        <motion.div
          className="flex items-center justify-center mb-4"
          initial={{ opacity: 0, rotate: 90 }} // Starts rotated
          animate={{ opacity: 1, rotate: 0 }} // Animates to upright position
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div className="flex items-center justify-center mb-4" whileHover={{ scale: 1.2 }}>
            <img src={microbinLogo} alt="logo" />
          </motion.div>
        </motion.div>

        {/* Welcome text */}
        <motion.h1
          className="text-3xl font-semibold tracking-tight lg:hidden gradient-title"
          initial={{ opacity: 0, y: -20 }} // Starts slightly above
          animate={{ opacity: 1, y: 0 }} // Animates into position
          transition={{ duration: 0.8, delay: 1 }}
        >
          Welcome to Microbin
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-2xl lg:text-xl pb-1 font-medium"
          initial={{ opacity: 0, y: 20 }} // Starts slightly below
          animate={{ opacity: 1, y: 0 }} // Animates into position
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Sign in to continue
        </motion.p>

        {/* Login form with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <LoginForm />
        </motion.div>

        {/* Google sign-in button with icon */}
        <motion.button
          className="w-full flex items-center justify-center space-x-3 bg-[#4285F4] text-white py-3 px-4 rounded-md font-semibold mt-6 hover:bg-[#357AE8] transition duration-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <FaGoogle size={24} /> {/* Google icon */}
          <span>Sign in with Google</span>
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default Login

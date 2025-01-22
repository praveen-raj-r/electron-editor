import { motion } from 'framer-motion' // Importing framer-motion for animations
import microbinLogo from '@/assets/microbin-full-white.svg'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useMoveBack } from '@/hooks/use-move-back'

function PageNotFound() {
  const moveBack = useMoveBack()

  return (
    // Outer container for centering the content in the middle of the screen
    <div className="max-h-screen h-screen w-screen bg-gray-900 flex justify-center items-center">
      {/* Wrapping the entire content for animation effects */}
      <motion.div
        className="flex flex-col gap-5 justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }} // Start with low opacity and smaller scale
        animate={{ opacity: 1, scale: 1 }} // Animate to full opacity and normal scale
        transition={{ duration: 0.6 }} // Duration of the animation
      >
        {/* Logo animation: Moves from the top and fades in */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ y: -50 }} // Start 50px above its final position
          animate={{ y: 0 }} // Animate to its final position
          transition={{ duration: 0.6, type: 'spring', stiffness: 120 }} // Smooth spring effect
        >
          <img src={microbinLogo} alt="Microbin Logo" className="w-40" /> {/* Logo image */}
        </motion.div>

        {/* 404 text and description with fade and slight upward movement */}
        <motion.div
          className="flex items-center gap-5"
          initial={{ opacity: 0, y: 30 }} // Start with low opacity and 30px below its final position
          animate={{ opacity: 1, y: 0 }} // Animate to full opacity and final position
          transition={{ delay: 0.3, duration: 0.6 }} // Delay for staggered effect
        >
          <span className="text-white text-2xl font-bold">404</span> {/* The "404" text */}
          <Separator className="h-12" orientation="vertical" /> {/* Vertical separator */}
          <p className="text-base text-white">This page could not be found.</p>{' '}
          {/* Error description */}
        </motion.div>

        {/* "Go Back" button with fade-in animation */}
        <motion.div
          initial={{ opacity: 0 }} // Start with the button invisible
          animate={{ opacity: 1 }} // Fade in the button
          transition={{ delay: 0.6, duration: 0.4 }} // Delay slightly and animate fade
        >
          <Button onClick={moveBack} variant="destructive" size="sm">
            Go Back
          </Button>{' '}
          {/* Button to trigger the back action */}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default PageNotFound

import { Error as ErrorComp } from '@/components/app/error'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'
import { checkForgotPasswordMail } from '@/services/apiAuth'

// Define the validation schema using Zod
const formSchema = z.object({
  forgotPasswordEmail: z.string().trim().min(1, 'Email is required').email('Invalid email address')
})

// Define FormData type based on schema
type FormData = z.infer<typeof formSchema>

function ForgotPasswordForm() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    defaultValues: {
      forgotPasswordEmail: '' // Start with an empty input field
    },
    resolver: zodResolver(formSchema)
  })

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      // Call the API function to handle the forgot password request
      const response = await checkForgotPasswordMail(data.forgotPasswordEmail)
      if (response.status === 'Success') {
        toast.success('We sent you an email with instructions on how to reset your password.')
        navigate('/login') // Redirect to login
      } else {
        toast.error('Something went wrong')
      }
    } catch (error: any) {
      console.error('Error:', error)
      setError('root', {
        type: 'manual',
        message: error.message || 'Failed to send reset password email'
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid w-full items-center gap-2">
        {/* Email input with label for better accessibility */}
        <label htmlFor="forgotPasswordEmail" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <motion.input
          type="email"
          id="forgotPasswordEmail"
          placeholder="Enter your email"
          required
          className="mt-2 block w-full px-4 py-3 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
          whileFocus={{ scale: 1.02 }}
          disabled={isSubmitting}
          {...register('forgotPasswordEmail')}
          onFocus={() => clearErrors('root')} // Clear root error when user starts typing
        />

        {/* Display validation errors */}
        {errors.forgotPasswordEmail && <ErrorComp>{errors.forgotPasswordEmail.message}</ErrorComp>}
        {errors.root && <ErrorComp>{errors.root.message}</ErrorComp>}

        {/* Submit button with loading state */}
        <motion.button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 px-5 rounded-lg shadow-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isSubmitting} // Disable button while submitting
        >
          {isSubmitting ? 'Sending...' : 'Send Reset Link'}
        </motion.button>
      </div>
    </form>
  )
}

export default ForgotPasswordForm

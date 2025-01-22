import { Button } from '@/components/ui/button' // Import custom Button component
import { Input } from '@/components/ui/input' // Import custom Input component
import { Label } from '@/components/ui/label' // Import custom Label component
import { ApiError } from '@/types' // Import the ApiError type
import { zodResolver } from '@hookform/resolvers/zod' // Import the zod resolver for React Hook Form
import { Loader } from 'lucide-react' // Import Loader icon from lucide-react
import { FC } from 'react' // Import FC (Functional Component) from React
import { useForm } from 'react-hook-form' // Import useForm hook from react-hook-form
import { useNavigate } from 'react-router-dom' // Import useNavigate hook for navigation
import { z } from 'zod' // Import Zod schema library for validation
import { useGlobalState } from '@/context/global-state-context' // Import global state context

// Define the validation schema for the form using Zod
const schema = z.object({
  domainName: z.string().trim().min(1, 'Domain name is required') // Ensures domainName is a non-empty string
})

// Type definition for the form data using Zod schema
type FormData = z.infer<typeof schema>

// Define the functional component for the domain form
const DomainForm: FC = () => {
  // Accessing global state and setter function for domain name
  const { setValue } = useGlobalState()
  // Hook for navigation to other routes
  const navigate = useNavigate()

  // useForm hook to manage form state and validation using Zod resolver
  const {
    register, // Register inputs
    handleSubmit, // Function to handle form submission
    setError, // Function to manually set errors
    clearErrors, // Function to clear specific errors
    formState: { errors, isSubmitting } // Accessing errors and submitting state
  } = useForm<FormData>({
    resolver: zodResolver(schema), // Integrate Zod validation with react-hook-form
    defaultValues: {
      domainName: '' // Initial form values
    }
  })

  // Function to handle form submission
  const onSubmit = async (data: FormData) => {
    try {
      // Making a fetch request to validate the domain name
      const response = await fetch(
        `https://test.microbin.io/v1/fleet/domainValidation/${data.domainName}`
      )

      // If the response is not OK, throw an error
      if (!response.ok) throw new Error('Domain Not Found')

      // Parse the response JSON
      const json = await response.json()

      // If the response status is not "Success", throw an error
      if (json.status !== 'Success') throw new Error('something went wrong')

      // Set the domain name in global state and navigate to login
      setValue('domainName', data.domainName)
      navigate('/login')
    } catch (error) {
      // Handle errors: Log the error and set it as a manual form error
      console.error('Error:', error)
      setError('root', {
        type: 'manual',
        message: (error as ApiError).message // Extract the error message from the API error
      })
    }
  }

  return (
    // Form submission wrapped inside 'handleSubmit' for form validation
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 !mt-6">
      {/* Domain Name Input Section */}
      <div className="space-y-1 text-left">
        <Label
          className={`text-sm ${errors.domainName || errors.root?.message ? 'text-red-500' : ''}`}
        >
          Domain Name
        </Label>
        <Input
          disabled={isSubmitting} // Disable input while form is submitting
          className={`border-white bg-black md:border-inherit ${
            errors.domainName || errors.root?.message ? '!border-red-500' : ''
          }`}
          autoComplete="off"
          id="domainName"
          {...register('domainName', {
            onChange: () => errors.root && clearErrors('root') // Clear root error on input change
          })}
        />

        {/* Displaying domain name errors */}
        {errors.domainName && <p className="text-red-500 text-sm">{errors.domainName.message}</p>}
        {errors.root && <p className="text-red-500 text-sm">{errors.root.message}</p>}
      </div>

      {/* Submit Button Section */}
      <div className="flex justify-center">
        <Button
          className="w-full bg-white text-black hover:bg-gray-400"
          disabled={isSubmitting} // Disable button while submitting
          type="submit"
        >
          {/* Loader icon and text while the form is submitting */}
          {isSubmitting ? (
            <>
              <Loader className="animate-spin" />
              <span className="ml-2">Validating</span>
            </>
          ) : (
            'Submit' // Display 'Submit' when not submitting
          )}
        </Button>
      </div>

      {/* Account creation link */}
      <p className="text-sm font-medium">
        <span>Don't have an account?</span>
        <Button
          type="button"
          disabled={isSubmitting}
          onClick={() => navigate('/create-account')} // Redirect to create account page
          className="pl-3 text-blue-500"
          variant="link"
          effect="hoverUnderline"
        >
          Create Account
        </Button>
      </p>
    </form>
  )
}

export default DomainForm

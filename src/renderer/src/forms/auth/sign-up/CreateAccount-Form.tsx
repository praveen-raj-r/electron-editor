import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { checkCreateAccount } from '@/services/apiAuth'
import { ApiError } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader } from 'lucide-react'
import { FC, useState } from 'react'
import { useForm, UseFormRegister } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import DialogComp from './Dialog'
import StatesLoader from './Loader'

// Validation schema using Zod
const schema = z.object({
  name: z.string().trim().min(1, 'Business name is required'),
  email: z.string().trim().email('Invalid email address').min(1, 'Email is required'),
  phoneNumber: z
    .string()
    .trim()
    .regex(/^\d{10}$/, 'Phone Number must be 10 digits')
})

// Type inferred from the schema
type FormData = z.infer<typeof schema>

const CreateAccountForm: FC = () => {
  const navigate = useNavigate()
  const [showDialog, setShowDialog] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  // Initialize form handling with react-hook-form and Zod validation
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: 'microbin',
      email: 'demo@microbin.com',
      phoneNumber: '9789882888'
    }
  })

  // Submit handler to create account
  const onSubmit = async (credential: FormData) => {
    const { email } = credential
    setEmail(email)

    try {
      const data = await checkCreateAccount(email)
      if (data.status !== 'Success') throw new Error('something went wrong')
      setShowDialog(true)
    } catch (error) {
      setError('root', {
        type: 'manual',
        message: (error as ApiError).message
      })
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 !mt-6">
        <FormFieldComp
          label="Business Name"
          id="name"
          register={register}
          error={errors.name?.message}
          isSubmitting={isSubmitting}
          clearErrors={clearErrors}
        />
        <FormFieldComp
          label="Email"
          id="email"
          type="email"
          register={register}
          error={errors.email?.message}
          isSubmitting={isSubmitting}
          clearErrors={clearErrors}
        />
        <FormFieldComp
          label="Phone Number"
          id="phoneNumber"
          register={register}
          error={errors.phoneNumber?.message}
          isSubmitting={isSubmitting}
          clearErrors={clearErrors}
        />

        {/* Display any root error messages */}
        {errors.root?.message && <p className="text-red-500 text-sm">{errors.root?.message}</p>}

        <div className="flex justify-center">
          <Button
            className="w-full bg-white text-black hover:bg-gray-400"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? (
              <>
                <Loader className="animate-spin" />
                <span className="ml-2">Validating</span>
              </>
            ) : (
              'Submit'
            )}
          </Button>
        </div>

        {/* Button for users to navigate back to the login page */}
        <p className="text-sm font-medium">
          <span>Already have an account?</span>
          <Button
            type="button"
            disabled={isSubmitting}
            onClick={() => navigate('/')}
            className="pl-3 text-blue-500"
            variant="link"
            effect="hoverUnderline"
          >
            Back to Login
          </Button>
        </p>
      </form>

      {/* Dialog for OTP Verification */}
      <DialogComp
        setLoading={setLoading}
        email={email}
        setShowDialog={setShowDialog}
        showDialog={showDialog}
      />

      {/* Loader to display while waiting for background processes */}
      <StatesLoader setLoading={setLoading} loading={loading} />
    </>
  )
}

// Reusable component for form fields with error handling
const FormFieldComp: FC<{
  label: string
  id: keyof FormData
  type?: string
  register: UseFormRegister<FormData>
  error?: string
  isSubmitting: boolean
  clearErrors: (name?: keyof FormData) => void
}> = ({ label, id, type = 'text', register, error, isSubmitting, clearErrors }) => (
  <div className="space-y-1 text-left">
    <Label className={`text-sm ${error ? 'text-red-500' : ''}`}>{label}</Label>
    <Input
      disabled={isSubmitting}
      className={`border-white bg-black md:border-inherit ${error ? '!border-red-500' : ''}`}
      autoComplete="off"
      id={id}
      type={type}
      {...register(id, {
        onChange: () => error && clearErrors(id) // Clear error on input change
      })}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>} {/* Display error message */}
  </div>
)

export default CreateAccountForm

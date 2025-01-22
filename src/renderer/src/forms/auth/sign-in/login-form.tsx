import { Error as ErrorComp } from '@/components/app/error'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader, StepForward } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { useGlobalState } from '@/context/global-state-context'

const formSchema = z.object({
  password: z.string().trim().min(1, 'Password is required'),
  userName: z.string().trim().min(1, 'Email is required').email('Invalid email address')
})

// Define FormData type based on schema
type FormData = z.infer<typeof formSchema>

function LoginForm() {
  const { setValue, getValue } = useGlobalState()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    defaultValues: {
      userName: '',
      password: ''
    },
    resolver: zodResolver(formSchema)
  })

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch(
        `https://test.microbin.io/v1/fleet/loginValidation/${getValue('domainName')}/${data.userName}/${data.password}`
      )
      if (!response.ok) throw new Error('Invalid login credentials')

      const json = await response.json()
      if (json.status !== 'Success') throw new Error('Something went wrong')

      setValue('userDetails', json.result)
      navigate('/dashboard')
    } catch (error: any) {
      console.error('Error:', error)
      setError('root', { type: 'manual', message: error.message })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-5">
        {/* Username Field */}
        <div className="grid w-full items-center gap-2">
          <Label className="text-left">Username</Label>
          <Input
            {...register('userName')}
            onFocus={() => clearErrors('root')} // Clear root error on input focus
          />
          {errors.userName && <ErrorComp>{errors.userName.message}</ErrorComp>}
        </div>

        {/* Password Field */}
        <div className="grid w-full items-center gap-1.5">
          <Label className="text-left">Password</Label>
          <Input
            type="password"
            {...register('password')}
            onFocus={() => clearErrors('root')} // Clear root error on input focus
          />
          {errors.password && <ErrorComp>{errors.password.message}</ErrorComp>}
        </div>

        {/* Root Error */}
        {errors.root && <ErrorComp className="text-center">{errors.root.message}</ErrorComp>}

        {/* Submit Button */}
        <Button disabled={isSubmitting} className="w-full" type="submit">
          {isSubmitting ? (
            <Loader className="animate-spin" />
          ) : (
            <>
              Continue <StepForward />
            </>
          )}
        </Button>

        {/* Forgot Password */}
        <Button
          type="button"
          onClick={() => navigate('/reset-password')}
          disabled={isSubmitting} // Disable the "Forgot your password?" link during submission
          variant="link"
          effect="hoverUnderline"
          className="text-[#2662d9] text-sm w-full"
        >
          Forgot your password?
        </Button>
      </div>
    </form>
  )
}

export default LoginForm

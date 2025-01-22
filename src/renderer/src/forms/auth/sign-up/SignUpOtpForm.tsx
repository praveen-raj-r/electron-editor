import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'
import { verifyOTP } from '@/services/apiAuth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// Validation schema for OTP pin input using Zod
const OtpFormSchema = z.object({
  pin: z
    .string()
    .min(6, {
      message: 'Your one-time password must be 6 characters.'
    })
    .toUpperCase() // Ensures OTP is always entered in uppercase
})

// SignUpOTPForm component for verifying OTP
export function SignUpOTPForm({ setShowDialog, email, setLoading }) {
  const [timeLeft, setTimeLeft] = useState(60) // Timer set for 60 seconds before OTP can be resent
  const [canResend, setCanResend] = useState(false) // Flag to control if the OTP resend button is enabled

  // Timer effect to count down seconds for OTP resend
  useEffect(() => {
    if (timeLeft <= 0) {
      setCanResend(true) // OTP can be resent after timer expires
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1) // Decrease timeLeft by 1 every second
    }, 1000)

    return () => clearInterval(timer) // Cleanup timer on unmount
  }, [timeLeft])

  // Function to handle OTP resend logic
  const resendOTP = async () => {
    setTimeLeft(60) // Reset the timer
    setCanResend(false) // Disable resend button immediately after clicking

    try {
      const response = await fetch(
        `https://test.microbin.io/v1/fleet/verificationCode/resend/${email}`
      )
      if (!response.ok) throw new Error('Failed to resend OTP') // Handle failed request
      console.log('OTP resent successfully')
    } catch (error) {
      console.error('Error resending OTP:', error) // Log error if resend fails
    }
  }

  // React Hook Form setup with Zod schema validation
  const form = useForm<z.infer<typeof OtpFormSchema>>({
    resolver: zodResolver(OtpFormSchema),
    defaultValues: {
      pin: '' // Initialize pin field to empty string
    }
  })

  // Function to handle OTP submission
  async function onSubmit(data: z.infer<typeof OtpFormSchema>) {
    const { pin } = data
    try {
      const response = await verifyOTP(email, pin) // Call API to verify OTP
      if (response.status === 'Success') {
        setShowDialog(false) // Close dialog on successful OTP verification
        setLoading(true) // Set loading state to true
      }
    } catch (error) {
      form.setError('pin', { message: 'Invalid one-time password' }) // Display error if OTP verification fails
      console.error('Error:', error) // Log error details
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        {/* Form Field for OTP */}
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem className="flex justify-center flex-col gap-3 items-center">
              <FormLabel>One-Time Password</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup className="uppercase">
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup className="uppercase">
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                Please enter the one-time password sent to your email.
              </FormDescription>

              {/* Timer for OTP resend */}
              <FormDescription className="text-base">
                <span>
                  {canResend ? (
                    <Button
                      className="p-0 pl-1 text-base text-[#3060ff]"
                      onClick={resendOTP}
                      disabled={!canResend}
                      variant="link"
                    >
                      Resend OTP
                    </Button>
                  ) : (
                    <>
                      Resend OTP in{' '}
                      <span className="text-[#3060ff]">
                        00:{timeLeft.toString().padStart(2, '0')}
                      </span>
                    </>
                  )}
                </span>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit and Cancel Buttons */}
        <div className="flex justify-center gap-10">
          <Button onClick={() => setShowDialog(false)} type="button" variant="destructive">
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  )
}

export default SignUpOTPForm

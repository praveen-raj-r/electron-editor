import { FormEvent, HTMLAttributes, useState } from 'react'
import { buttonVariants } from '@/components/ui/button'
import toast from 'react-hot-toast'
import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Loader } from 'lucide-react'

interface BillingFormProps extends HTMLAttributes<HTMLFormElement> {}

export function BillingForm({ className, ...props }: BillingFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // Corrected onSubmit function with a return type of void
  async function onSubmit(event: FormEvent): Promise<void> {
    event.preventDefault()
    setIsLoading(true)

    try {
      // Get a Stripe session URL.
      const response = await fetch('/api/users/stripe')

      if (!response?.ok) {
        toast.error(() => (
          <div>
            <h1 className="text-lg font-medium text-red-700">Something went wrong.</h1>
            <h3>Please refresh the page and try again.</h3>
          </div>
        ))
        return // No need to return anything else
      }

      // Redirect to the Stripe session if response is successful
      const session = await response.json()
      if (session) {
        window.location.href = session.url
      }
    } catch (error) {
      // Handle any network or API errors
      console.error({
        title: 'Error occurred.',
        description: 'There was an issue connecting to the server.',
        variant: 'destructive'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className={cn(className)} onSubmit={onSubmit} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Subscription Plan</CardTitle>
          <CardDescription>You currently don't have an active subscription plan.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Please select a plan to proceed with your subscription.</p>
        </CardContent>
        <CardFooter className="flex flex-col items-start space-y-2 md:flex-row md:justify-between md:space-x-0">
          <button type="submit" className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
            Upgrade to PRO
          </button>
        </CardFooter>
      </Card>
    </form>
  )
}

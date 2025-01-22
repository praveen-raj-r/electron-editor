// components/Support.tsx
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useSupportForm } from '@/forms/support/Support-Form'
import { ToastContainer } from 'react-toastify'

function Support() {
  const { formData, errors, handleChange, handleSubmit } = useSupportForm()

  return (
    <>
      <ToastContainer />
      <Card>
        <CardHeader>
          <CardTitle>Contact us</CardTitle>
          <CardDescription>
            Please use the form below if you have any questions, suggestions, or need help with the
            products. Our team will be happy to provide all the information you need.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Your Name *</Label>
              <Input
                id="name"
                placeholder="Enter Your Name..."
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Your Email *</Label>
              <Input
                id="email"
                placeholder="Enter Your Email Address..."
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>
            <div className="grid gap-4 sm:grid-cols-1">
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject *</Label>
                <Select
                  value={formData.subject}
                  onValueChange={(value) => handleChange('subject', value)}
                >
                  <SelectTrigger id="subject" aria-label="Subject">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="team">General Enquiry / Feedback</SelectItem>
                    <SelectItem value="billing">Sales and Product Enquiry</SelectItem>
                    <SelectItem value="account">Support Request</SelectItem>
                  </SelectContent>
                </Select>
                {errors.subject && <span className="text-red-500 text-sm">{errors.subject}</span>}
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Please include all information relevant to your issue."
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="justify-between space-x-2">
            <Button
              variant="ghost"
              size="sm"
              type="button"
              onClick={() => {
                handleChange('name', '')
                handleChange('email', '')
                handleChange('subject', 'billing')
                handleChange('description', '')
              }}
            >
              Cancel
            </Button>
            <Button size="sm" type="submit">
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  )
}

export default Support

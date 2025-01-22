// hooks/useSupportForm.ts
import { useState } from 'react'
import { toast } from 'react-toastify'

export type FormData = {
  name: string
  email: string
  subject: string
  description: string
}

export type FormErrors = Partial<Record<keyof FormData, string>>

export function useSupportForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: 'billing',
    description: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required.'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.'
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      setErrors({})
      toast.success('Your form has been submitted successfully!')
      console.log('Form submitted:', formData)
      setFormData({ name: '', email: '', subject: 'billing', description: '' })
    }
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return {
    formData,
    errors,
    handleChange,
    handleSubmit
  }
}

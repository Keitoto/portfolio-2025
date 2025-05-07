'use client'
import type { FC } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

interface Props {}

const formSchema = z.object({
  name: z.string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(50, { message: 'Name cannot exceed 50 characters' })
    .regex(/^[a-z\s'-]+$/i, {
      message: 'Name can only contain letters, spaces, hyphens, and apostrophes',
    }),

  email: z.string()
    .email({ message: 'Please enter a valid email address' })
    .max(100, { message: 'Email cannot exceed 100 characters' }),

  content: z.string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(1000, { message: 'Message cannot exceed 1000 characters' })
    .refine(val => val.trim().length > 0, {
      message: 'Message cannot be empty or just whitespace',
    }),
})

type FormInputTypes = z.infer<typeof formSchema>

export const ContactForm: FC<Props> = () => {
  const form = useForm<FormInputTypes>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      content: '',
    },
  })

  const processForm: SubmitHandler<FormInputTypes> = () => {

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(processForm)} className="space-y-8 font-sans">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Message" {...field} className="min-h-32" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button type="submit" className="cursor-pointer">Submit</Button>
        </div>
      </form>
    </Form>
  )
}

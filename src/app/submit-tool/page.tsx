'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Tool name must be at least 2 characters.'),
  website: z.string().url('Please enter a valid URL.'),
  description: z.string().min(20, 'Description must be at least 20 characters.'),
  category: z.string().min(2, 'Category is required.'),
});

export default function SubmitToolPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      website: '',
      description: '',
      category: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Submission Received!',
      description: "Thanks for submitting your tool. We'll review it shortly.",
    });
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline leading-tight mb-4">
            Submit a Tool
          </h1>
          <p className="text-lg text-muted-foreground">
            Have an AI tool you'd like us to feature? Let us know!
          </p>
        </header>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tool Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Scribe AI" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe what your tool does in one or two sentences."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Writing, Image, etc." {...field} />
                  </FormControl>
                  <FormDescription>
                    What category does your tool best fit into?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit for Review</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

const formSchema = z.object({
   fullName: z.string().min(2, "Name must be at least 2 characters"),
   age: z.string().regex(/^\d+$/, "Must be a valid age"),
   province: z.string().min(2, "Province must be at least 2 characters"),
   skills: z.string().min(2, "Please enter at least one skill"),
   experiences: z.string(),
   description: z.string(),
   photo: z.any().optional(),
   cv: z.any().optional(),
})

export default function ProfileForm() {
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         fullName: "",
         age: "",
         province: "",
         skills: "",
         experiences: "",
         description: "",
      },
   })

   function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
   }

   return (
      <div className="w-full max-w-md mx-auto p-4 space-y-6">
         <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center">
               <Image src="/images/logomain.png" alt="Profile" width={100} height={100} />
            </div>

            <div className="relative w-32 h-32 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50 overflow-hidden group cursor-pointer hover:border-blue-600 transition-colors">
               <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  onChange={(e) => {
                     const file = e.target.files?.[0]
                     if (file) {
                        // Handle file upload
                        console.log(file)
                     }
                  }}
               />
               <div className="flex flex-col items-center gap-2 text-gray-500 group-hover:text-blue-600">
                  <Upload className="w-6 h-6" />
                  <span className="text-xs">Upload Photo</span>
               </div>
            </div>
         </div>

         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
               <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                           <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                           <Input placeholder="Enter your age" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="province"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Province</FormLabel>
                        <FormControl>
                           <Input placeholder="Enter your province" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="skills"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Skills</FormLabel>
                        <FormControl>
                           <Input placeholder="Enter your skills" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="experiences"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Experiences or Licenses</FormLabel>
                        <FormControl>
                           <Textarea
                              placeholder="Enter your experiences or licenses"
                              className="min-h-[100px]"
                              {...field}
                           />
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
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                           <Textarea
                              placeholder="Enter your description"
                              className="min-h-[100px]"
                              {...field}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <div className="relative">
                  <input
                     type="file"
                     accept=".pdf,.doc,.docx"
                     className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                     onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                           // Handle CV upload
                           console.log(file)
                        }
                     }}
                  />
                  <Button
                     type="button"
                     variant="outline"
                     className="w-full flex items-center gap-2"
                  >
                     <Upload className="w-4 h-4" />
                     Upload CV (Optional)
                  </Button>
               </div>

               <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Save
               </Button>
            </form>
         </Form>
      </div>
   )
}
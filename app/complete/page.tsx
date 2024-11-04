'use client'

import * as React from "react"
import { CalendarIcon, X } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form"
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover"
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Image from "next/image"
import { useRouter } from "next/navigation"

const formSchema = z.object({
   province: z.string().min(1, "Province is required"),
   dateOfBirth: z.date({
      required_error: "Date of birth is required",
   }),
   gender: z.string({
      required_error: "Gender is required",
   }),
   skills: z.array(z.string()).min(1, "Select at least one skill"),
   customSkill: z.string().optional(),
})

const predefinedSkills = [
   "BE Engineer",
   "FE Engineer",
   "DevOps Engineer",
   "UI/UX Designer",
   "Product Manager",
   "Data Scientist",
   "Mobile Developer",
   "Quality Assurance",
   "Technical Writer",
   "Video Editor",
   "Content Writer",
   "Digital Marketing",
   "Project Manager",
   "Business Analyst",
   "Internet of Things",
]

export default function CompleteSignUp() {
   const [showCustomInput, setShowCustomInput] = React.useState(false)
   const router = useRouter()

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         skills: [],
      },
   })

   const onSubmit = (values: z.infer<typeof formSchema>) => {
      console.log(values)
      router.push("/profile")
   }

   const toggleSkill = (skill: string) => {
      const currentSkills = form.getValues("skills")
      const updatedSkills = currentSkills.includes(skill)
         ? currentSkills.filter(s => s !== skill)
         : [...currentSkills, skill]
      form.setValue("skills", updatedSkills, { shouldValidate: true })
   }

   const addCustomSkill = () => {
      const customSkill = form.getValues("customSkill")
      if (customSkill && customSkill.trim()) {
         const currentSkills = form.getValues("skills")
         form.setValue("skills", [...currentSkills, customSkill.trim()], { shouldValidate: true })
         form.setValue("customSkill", "")
         setShowCustomInput(false)
      }
   }

   return (
      <div className="min-h-screen bg-white p-4">
         <div className="mx-auto max-w-md">
            {/* Logo */}
            <div className="mb-3 flex justify-center">
               <Image src="/images/logomain.png" alt="Logo" width={200} height={200} />
            </div>

            <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Province Field */}
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

                  {/* Date of Birth Field */}
                  <FormField
                     control={form.control}
                     name="dateOfBirth"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Date of Birth</FormLabel>
                           <Popover>
                              <PopoverTrigger asChild>
                                 <FormControl>
                                    <Button
                                       variant="date"
                                       className={cn(
                                          "w-full pl-3 text-left font-normal",
                                          !field.value && "text-muted-foreground"
                                       )}
                                    >
                                       {field.value ? (
                                          format(field.value, "PPP")
                                       ) : (
                                          <span>Pick a date</span>
                                       )}
                                       <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                 </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                 <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                       date > new Date() || date < new Date("1900-01-01")
                                    }
                                    initialFocus
                                 />
                              </PopoverContent>
                           </Popover>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  {/* Gender Field */}
                  <FormField
                     control={form.control}
                     name="gender"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Gender</FormLabel>
                           <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                 <SelectTrigger>
                                    <SelectValue placeholder="Select your gender" />
                                 </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                 <SelectItem value="male">Male</SelectItem>
                                 <SelectItem value="female">Female</SelectItem>
                              </SelectContent>
                           </Select>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  {/* Skills Field */}
                  <FormField
                     control={form.control}
                     name="skills"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Choose your skills</FormLabel>
                           <FormControl>
                              <div className="space-y-4">
                                 <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                                    <div className="grid grid-cols-3 gap-2">
                                       {predefinedSkills.map((skill) => (
                                          <Button
                                             key={skill}
                                             type="button"
                                             variant={field.value.includes(skill) ? "default" : "outline"}
                                             className={cn(
                                                "h-auto w-full py-2 px-3 text-xs",
                                                field.value.includes(skill) && "bg-blue-100 hover:bg-blue-200"
                                             )}
                                             onClick={() => toggleSkill(skill)}
                                          >
                                             {skill}
                                          </Button>
                                       ))}
                                    </div>
                                 </ScrollArea>
                                 <div className="flex gap-2">
                                    <Input
                                       placeholder="Add custom skill"
                                       value={form.watch("customSkill")}
                                       onChange={(e) => form.setValue("customSkill", e.target.value)}
                                    />
                                    <Button
                                       type="button"
                                       onClick={addCustomSkill}
                                       disabled={!form.watch("customSkill")}
                                    >
                                       Add
                                    </Button>
                                 </div>
                                 <div className="flex flex-wrap gap-2">
                                    {field.value.map((skill) => (
                                       <div
                                          key={skill}
                                          className="flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs"
                                       >
                                          {skill}
                                          <Button
                                             type="button"
                                             variant="ghost"
                                             size="sm"
                                             className="ml-2 h-4 w-4 p-0"
                                             onClick={() => toggleSkill(skill)}
                                          >
                                             <X className="h-3 w-3" />
                                          </Button>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                     Next
                  </Button>
               </form>
            </Form>
         </div>
      </div>
   )
}
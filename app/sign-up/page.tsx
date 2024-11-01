'use client'

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"

export default function SignUp() {
   return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
         {/* Logo */}
         <div className="mb-3">
            <Image src="/images/logosatu.png" alt="Logo" width={200} height={200} />
         </div>

         <Card className="w-full max-w-sm border-none bg-transparent shadow-none">
            <CardHeader>
               <CardTitle className="text-2xl text-center">Welcome To Satu Langkah!</CardTitle>
               <CardDescription className="text-center">
                  Sign up to create your account
               </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                     id="name"
                     placeholder="Enter your name"
                     type="text"
                     className="h-12 rounded-xl border-blue-100 bg-white/50 backdrop-blur-sm placeholder:text-muted-foreground/50 focus-visible:ring-blue-600"
                  />
               </div>
               <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                     id="password"
                     placeholder="Enter your password"
                     type="password"
                     className="h-12 rounded-xl border-blue-100 bg-white/50 backdrop-blur-sm placeholder:text-muted-foreground/50 focus-visible:ring-blue-600"
                  />
               </div>
               <Button
                  className="h-12 w-full rounded-xl bg-white font-medium text-blue-600 hover:bg-blue-50"
                  variant="outline"
               >
                  <svg
                     className="mr-2 h-5 w-5"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                     />
                     <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                     />
                     <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                     />
                     <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                     />
                  </svg>
                  Sign up with Google
               </Button>
               <Link href={"/complete-sign-up"}>
                  <Button className="h-12 my-4 w-full rounded-xl bg-blue-600 text-white hover:bg-blue-700">
                     Sign up
                  </Button>
               </Link>
               <p className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                     href="/sign-in"
                     className="underline underline-offset-4 hover:text-primary"
                  >
                     Sign In
                  </Link>
               </p>
            </CardContent>
         </Card>
      </div>
   )
}

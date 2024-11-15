"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import {
   ArrowLeft,
   Bold,
   Italic,
   AlignLeft,
   AlignCenter,
   AlignRight,
   Image as ImageIcon,
   Link as LinkIcon,
   Code,
} from "lucide-react"

export default function WriteArticle() {
   const [title, setTitle] = useState("")
   const [content, setContent] = useState("")

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      // Handle form submission
      console.log({ title, content })
   }

   return (
      <div className="min-h-screen bg-gray-50">
         <div className="max-w-2xl mx-auto p-4">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
               <Link href="/article">
                  <Button variant="ghost" size="icon" className="text-blue-600">
                     <ArrowLeft className="h-6 w-6" />
                  </Button>
               </Link>
               <h1 className="text-xl font-bold">Write</h1>
            </div>

            {/* Editor Form */}
            <form onSubmit={handleSubmit}>
               <Card className="bg-blue-50/50 border-blue-100 p-4">
                  <div className="space-y-4">
                     {/* Title Input */}
                     <div className="space-y-2">
                        <label className="text-lg font-semibold">Title</label>
                        <Input
                           placeholder="Enter your title"
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                           className="bg-white border-blue-200"
                        />
                     </div>

                     {/* Content Section */}
                     <div className="space-y-2">
                        <label className="text-lg font-semibold">Content:</label>

                        {/* Formatting Toolbar */}
                        <div className="bg-white border border-blue-200 rounded-lg p-2 flex flex-wrap gap-2">
                           <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                           >
                              <Bold className="h-4 w-4" />
                           </Button>
                           <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                           >
                              <Italic className="h-4 w-4" />
                           </Button>
                           <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                           >
                              <AlignLeft className="h-4 w-4" />
                           </Button>
                           <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                           >
                              <AlignCenter className="h-4 w-4" />
                           </Button>
                           <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                           >
                              <AlignRight className="h-4 w-4" />
                           </Button>
                           <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                           >
                              <ImageIcon className="h-4 w-4" />
                           </Button>
                           <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                           >
                              <LinkIcon className="h-4 w-4" />
                           </Button>
                           <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                           >
                              <Code className="h-4 w-4" />
                           </Button>
                        </div>

                        {/* Content Textarea */}
                        <Textarea
                           placeholder="Write your content here..."
                           value={content}
                           onChange={(e) => setContent(e.target.value)}
                           className="min-h-[400px] bg-white border-blue-200 resize-none"
                        />
                     </div>

                     {/* Submit Button */}
                     <div className="flex justify-end">
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                           Publish
                        </Button>
                     </div>
                  </div>
               </Card>
            </form>
         </div>
      </div>
   )
}
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowLeft, ThumbsUp, Eye } from 'lucide-react'

export default function ReadArticle() {
   return (
      <div className="min-h-screen bg-gray-50 p-4">
         <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
               <Button variant="ghost" size="icon" className="text-blue-600">
                  <ArrowLeft className="h-6 w-6" />
               </Button>
               <h1 className="text-xl font-bold">Read</h1>
            </div>

            {/* Article Content */}
            <Card className="bg-blue-50/50 border-blue-100 p-4">
               <div className="space-y-4">
                  {/* Title and Stats */}
                  <div className="flex items-center justify-between">
                     <h2 className="text-2xl font-bold">Title</h2>
                     <div className="flex gap-4">
                        <div className="flex items-center gap-1 text-gray-600">
                           <ThumbsUp className="h-5 w-5" />
                           <span>42</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                           <Eye className="h-5 w-5" />
                           <span>123</span>
                        </div>
                     </div>
                  </div>

                  {/* Content */}
                  <div className="prose max-w-none">
                     <div className="bg-white rounded-lg p-4 min-h-[200px] border border-blue-100">
                        Content:
                     </div>
                  </div>

                  {/* Comments Section */}
                  <div className="space-y-4">
                     <h3 className="font-semibold">Comment</h3>
                     <div className="space-y-4 bg-white rounded-lg p-4 border border-blue-100">
                        {[1, 2, 3].map((index) => (
                           <div key={index} className="flex items-start gap-3">
                              <Avatar className="h-8 w-8">
                                 <AvatarFallback>N</AvatarFallback>
                              </Avatar>
                              <div>
                                 <p className="font-semibold">Nama</p>
                                 <p className="text-sm text-gray-600">Deskripsi</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </Card>
         </div>
      </div>
   )
}
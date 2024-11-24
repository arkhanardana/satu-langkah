import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ThumbsUp, Eye, MessageSquare, Tag, Send } from "lucide-react"

export default function CreateArticlePage() {
   // Sample data for recent articles
   const articles = Array(6).fill({
      title: "Judul",
      preview: "Preview...",
   })

   return (
      <div className="min-h-screen bg-gray-50">
         <div className="max-w-md mx-auto p-4">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
               <Link href="/">
                  <Button variant="ghost" size="icon" className="text-blue-600">
                     <ArrowLeft className="h-6 w-6" />
                  </Button>
               </Link>
               <h1 className="text-xl font-bold">Send to Investor</h1>
            </div>
            <Card className="bg-blue-50/50 border-blue-100 p-4">
               <div className="space-y-4">
                  {articles.map((article, index) => (
                     <div
                        key={index}
                        className="flex gap-3 bg-white p-3 rounded-lg border border-blue-100"
                     >
                        <div className="w-24 h-24 bg-gray-100 border-2 border-blue-200 rounded-lg shrink-0"></div>
                        <div className="flex-1">
                           <h3 className="font-semibold">{article.title}</h3>
                           <p className="text-sm text-gray-500 mb-2">{article.preview}</p>
                           <div className="flex gap-4">
                              <button className="text-gray-600 hover:text-blue-600">
                                 <ThumbsUp className="h-4 w-4" />
                              </button>
                              <button className="text-gray-600 hover:text-blue-600">
                                 <Eye className="h-4 w-4" />
                              </button>
                              <button className="text-gray-600 hover:text-blue-600">
                                 <MessageSquare className="h-4 w-4" />
                              </button>
                              <button className="text-gray-600 hover:text-blue-600">
                                 <Send className="h-4 w-4" />
                              </button>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </Card>
         </div>
      </div>
   )
}
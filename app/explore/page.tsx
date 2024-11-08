"use client"

import { useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, ThumbsUp, Eye, MessageSquare } from "lucide-react"
import Dock from "@/components/mobile-dock"

export default function ExplorePage() {
   const partnersRef = useRef<HTMLDivElement>(null)
   const investorsRef = useRef<HTMLDivElement>(null)

   const handleDrag = (ref: React.RefObject<HTMLDivElement>) => {
      let isDown = false
      let startX: number
      let scrollLeft: number

      const onMouseDown = (e: MouseEvent) => {
         isDown = true
         if (ref.current) {
            ref.current.style.cursor = 'grabbing'
            startX = e.pageX - ref.current.offsetLeft
            scrollLeft = ref.current.scrollLeft
         }
      }

      const onMouseLeave = () => {
         isDown = false
         if (ref.current) {
            ref.current.style.cursor = 'grab'
         }
      }

      const onMouseUp = () => {
         isDown = false
         if (ref.current) {
            ref.current.style.cursor = 'grab'
         }
      }

      const onMouseMove = (e: MouseEvent) => {
         if (!isDown) return
         e.preventDefault()
         if (ref.current) {
            const x = e.pageX - ref.current.offsetLeft
            const walk = (x - startX) * 2
            ref.current.scrollLeft = scrollLeft - walk
         }
      }

      ref.current?.addEventListener('mousedown', onMouseDown)
      ref.current?.addEventListener('mouseleave', onMouseLeave)
      ref.current?.addEventListener('mouseup', onMouseUp)
      ref.current?.addEventListener('mousemove', onMouseMove)

      return () => {
         ref.current?.removeEventListener('mousedown', onMouseDown)
         ref.current?.removeEventListener('mouseleave', onMouseLeave)
         ref.current?.removeEventListener('mouseup', onMouseUp)
         ref.current?.removeEventListener('mousemove', onMouseMove)
      }
   }

   useEffect(() => {
      handleDrag(partnersRef)
      handleDrag(investorsRef)
   }, [])

   // Sample data for partners and investors
   const partners = Array(6).fill("John Doe")
   const investors = Array(6).fill("John Doe")
   const articles = Array(4).fill({
      title: "Judul",
      preview: "Preview...",
   })

   return (
      <div className="min-h-screen bg-gray-50 p-4">
         <div className="max-w-md mx-auto space-y-4 pb-20">
            <h1 className="text-xl font-bold mb-4">Explore</h1>

            {/* Search Bar */}
            <div className="relative">
               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
               <Input
                  placeholder="Search Partner, Investor, Article or Project's"
                  className="pl-10 bg-white border-blue-100"
               />
            </div>

            {/* Partners Section */}
            <Card className="p-4 bg-blue-50/50 border-blue-100">
               <h2 className="font-semibold mb-3">Partner's For You:</h2>
               <div
                  ref={partnersRef}
                  className="flex gap-4 overflow-x-auto pb-4 cursor-grab scrollbar-hide"
               >
                  {partners.map((partner, index) => (
                     <div key={index} className="flex flex-col items-center gap-1 min-w-[80px]">
                        <Avatar className="w-16 h-16">
                           <AvatarImage src="/images/john.jpg" />
                           <AvatarFallback>{partner[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-center">{partner}</span>
                     </div>
                  ))}
               </div>
            </Card>

            {/* Investors Section */}
            <Card className="p-4 bg-blue-50/50 border-blue-100">
               <h2 className="font-semibold mb-3">Investor's For You:</h2>
               <div
                  ref={investorsRef}
                  className="flex gap-4 overflow-x-auto pb-4 cursor-grab scrollbar-hide"
               >
                  {investors.map((investor, index) => (
                     <div key={index} className="flex flex-col items-center gap-1 min-w-[80px]">
                        <Avatar className="w-16 h-16">
                           <AvatarImage src="/images/john.jpg" />
                           <AvatarFallback>{investor[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-center">{investor}</span>
                     </div>
                  ))}
               </div>
            </Card>

            {/* Articles and Projects Section */}
            <Card className="p-4 bg-blue-50/50 border-blue-100">
               <h2 className="font-semibold mb-3">Article and Project's For You:</h2>
               <div className="space-y-4">
                  {articles.map((article, index) => (
                     <div key={index} className="flex gap-3 bg-white p-3 rounded-lg">
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
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </Card>
         </div>

         <Dock />
      </div>
   )
}
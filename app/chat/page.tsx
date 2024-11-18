"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Users } from 'lucide-react'
import Dock from "@/components/mobile-dock"

interface ChatPartnerItemProps {
   id: string
   name: string
   lastChat: string
}

function ChatPartnerItem({ id, name, lastChat }: ChatPartnerItemProps) {
   return (
      <Link href={`/chat/${id}`} className="block">
         <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
            <Avatar className="h-10 w-10">
               <AvatarFallback>{name[0]}</AvatarFallback>
               <AvatarImage src="/images/john.jpg" alt="Profile" />
            </Avatar>
            <div className="flex-1 min-w-0">
               <h3 className="font-medium text-sm">{name}</h3>
               <p className="text-xs text-gray-600 truncate">{lastChat}</p>
            </div>
         </div>
      </Link>
   )
}

export default function ChatPartnersPage() {
   // Sample data - replace with your actual data
   const chatPartners = Array(12).fill(null).map((_, index) => ({
      id: `chat-${index + 1}`,
      name: `Nama ${index + 1}`,
      lastChat: "Chat Terakhir"
   }))

   return (
      <div className="min-h-screen bg-gray-50 mb-24">
         <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b px-2 py-2 z-50">
               <div className="flex items-center justify-between">
                  <div className="flex items-center">
                     <Link href="/">
                        <Button type="button" variant="ghost" size="icon">
                           <ArrowLeft className="h-6 w-6" color="blue" />
                        </Button>
                     </Link>
                     <div>
                        <Image
                           src="/images/logomain.png"
                           alt="Logo"
                           width={80}
                           height={80}
                        />
                     </div>
                     <h1 className="text-lg font-semibold">Chat Partner's</h1>
                  </div>
                  <Link href="/chat/group">
                     <Button
                        variant="default"
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700"
                     >
                        <Users className="h-4 w-4 mr-1" />
                        Group
                     </Button>
                  </Link>
               </div>
            </div>

            {/* Chat Partners List */}
            <Card className="m-4 border-2 border-blue-100">
               <div className="p-3 space-y-2">
                  {chatPartners.map(({ id, name, lastChat }) => (
                     <ChatPartnerItem
                        key={id}
                        id={id}
                        name={name}
                        lastChat={lastChat}
                     />
                  ))}
               </div>
            </Card>
         </div>

         <Dock />
      </div>
   )
}
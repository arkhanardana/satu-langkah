"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Users } from 'lucide-react'
import Dock from "@/components/mobile-dock"
import { AvatarImage } from "@radix-ui/react-avatar"

interface ChatPartnerItemProps {
   name: string
   lastChat: string
}

function ChatPartnerItem({ name, lastChat }: ChatPartnerItemProps) {
   return (
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
   )
}

export default function ChatPartnersPage() {
   // Sample data - replace with your actual data
   const chatPartners = Array(12).fill({
      name: "Nama",
      lastChat: "Chat Terakhir"
   })

   return (
      <div className="min-h-screen bg-gray-50 mb-24">
         <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b px-4 py-2 z-50">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
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
                  {chatPartners.map(({ name, lastChat }, index) => (
                     <ChatPartnerItem
                        key={index}
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
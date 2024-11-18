"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, MessageCircle } from 'lucide-react'
import Dock from "@/components/mobile-dock"

interface GroupChatItemProps {
   id: string
   name: string
   members: string[]
}

function GroupChatItem({ id, name, members }: GroupChatItemProps) {
   return (
      <Link href={`/chat/group/${id}`} className="block">
         <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
            <Avatar className="h-10 w-10">
               <AvatarFallback>G</AvatarFallback>
               <AvatarImage src="/images/john.jpg" alt="Group Profile" />
            </Avatar>
            <div className="flex-1 min-w-0">
               <h3 className="font-medium text-sm">{name}</h3>
               <div className="flex -space-x-1 overflow-hidden mt-1">
                  {members.slice(0, 5).map((member, index) => (
                     <Avatar key={index} className="h-4 w-4 border border-white">
                        <AvatarFallback className="text-[8px]">{member[0]}</AvatarFallback>
                        <AvatarImage src="/images/john.jpg" alt="Member Profile" />
                     </Avatar>
                  ))}
                  {members.length > 5 && (
                     <div className="flex items-center justify-center h-4 w-4 rounded-full bg-gray-200 text-[8px] font-medium">
                        +{members.length - 5}
                     </div>
                  )}
               </div>
            </div>
         </div>
      </Link>
   )
}

export default function GroupChatPage() {
   // Sample groups data with member names
   const groups = Array(12).fill(null).map((_, index) => ({
      id: `group-${index + 1}`,
      name: `Group ${index + 1}`,
      members: Array(Math.floor(Math.random() * 5) + 3)
         .fill(null)
         .map((_, i) => `Member ${i + 1}`)
   }))

   return (
      <div className="min-h-screen bg-gray-50 mb-24">
         <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b px-4 py-2 z-10">
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
                     <h1 className="text-lg font-semibold">Group Chat's</h1>
                  </div>
                  <Link href="/chat">
                     <Button
                        variant="default"
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700"
                     >
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Chat
                     </Button>
                  </Link>
               </div>
            </div>

            {/* Groups List */}
            <Card className="m-4 border-2 border-blue-100">
               <div className="p-3 space-y-2">
                  {groups.map((group, index) => (
                     <GroupChatItem
                        id={group.id}
                        key={index}
                        name={group.name}
                        members={group.members}
                     />
                  ))}
               </div>
            </Card>
         </div>

         <Dock />
      </div>
   )
}
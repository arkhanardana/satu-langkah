"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Send, ArrowLeft, Users } from 'lucide-react'
import Link from "next/link"

interface Message {
   id: string
   content: string
   isSender: boolean
   timestamp: string
   senderName: string
}

export default function GroupChatPage({ params }: { params: { groupId: string } }) {
   const [message, setMessage] = useState("")
   const messagesEndRef = useRef<HTMLDivElement>(null)

   // Sample messages - replace with actual data from WebSocket
   const messages: Message[] = [
      {
         id: "1",
         content: "Hello everyone!",
         isSender: false,
         timestamp: "10:00",
         senderName: "John"
      },
      {
         id: "2",
         content: "Hi! How are you all doing?",
         isSender: true,
         timestamp: "10:01",
         senderName: "You"
      },
   ]

   const handleSendMessage = (e: React.FormEvent) => {
      e.preventDefault()
      if (!message.trim()) return
      console.log(message)
      // Handle message sending
      setMessage("")
   }

   useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
   }, [messages])

   return (
      <div className="flex flex-col h-screen bg-blue-50">
         {/* Header */}
         <div className="fixed top-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-sm border-b px-4 py-2">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <Link href="/chat/group">
                     <Button type="button" variant="ghost" size="icon">
                        <ArrowLeft className="h-6 w-6" color="blue" />
                     </Button>
                  </Link>
                  <div className="flex items-center gap-2">
                     <Avatar className="h-10 w-10">
                        <AvatarFallback>G</AvatarFallback>
                        <AvatarImage src="/images/john.jpg" alt="Group" />
                     </Avatar>
                     <div>
                        <h1 className="font-semibold">{`Group ${params.groupId}`}</h1>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                           <Users className="h-3 w-3" />
                           <span>1 members</span>
                        </div>
                     </div>
                  </div>
               </div>
               <Image
                  src="/images/logomain.png"
                  alt="Logo"
                  width={64}
                  height={64}
               />
            </div>
         </div>

         {/* Chat Messages */}
         <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
               <div
                  key={msg.id}
                  className={`flex ${msg.isSender ? 'justify-end' : 'justify-start'}`}
               >
                  <div className="flex gap-2 max-w-[80%]">
                     {!msg.isSender && (
                        <Avatar className="h-6 w-6">
                           <AvatarFallback>{msg.senderName[0]}</AvatarFallback>
                           <AvatarImage src="/images/john.jpg" alt={msg.senderName} />
                        </Avatar>
                     )}
                     <div
                        className={`rounded-2xl p-3 ${msg.isSender
                           ? 'bg-blue-600 text-white rounded-br-none'
                           : 'bg-white rounded-bl-none'
                           }`}
                     >
                        {!msg.isSender && (
                           <p className="text-xs font-medium text-blue-600 mb-1">{msg.senderName}</p>
                        )}
                        <p className="text-sm">{msg.content}</p>
                        <span className="text-xs opacity-70 mt-1 block">
                           {msg.timestamp}
                        </span>
                     </div>
                  </div>
               </div>
            ))}
            <div ref={messagesEndRef} />
         </div>

         {/* Message Input */}
         <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t p-4">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
               <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-white"
               />
               <Button
                  type="submit"
                  size="icon"
                  className="bg-blue-600 hover:bg-blue-700"
               >
                  <Send className="h-5 w-5" />
               </Button>
            </form>
         </div>
      </div>
   )
}
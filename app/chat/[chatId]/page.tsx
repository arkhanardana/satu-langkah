"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Upload, Send, ArrowLeft } from 'lucide-react'
import Link from "next/link"

interface Message {
   id: string
   content: string
   isSender: boolean
   timestamp: string
}

export default function ChatPage({ params }: { params: { chatId: string } }) {
   const [message, setMessage] = useState("")
   const messagesEndRef = useRef<HTMLDivElement>(null)

   // Sample messages - replace with actual data from WebSocket
   const messages: Message[] = [
      {
         id: "1",
         content: "Hello there!",
         isSender: false,
         timestamp: "10:00"
      },
      {
         id: "2",
         content: "Hi! How are you?",
         isSender: true,
         timestamp: "10:01"
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
         {/* Fixed Header */}
         <div className="fixed top-0 left-0 right-0 z-10 bg-white border-b px-4 py-2">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <Link href="/chat">
                     <Button type="button" variant="ghost" size="icon">
                        <ArrowLeft className="h-6 w-6" color="blue" />
                     </Button>
                  </Link>
                  <Avatar className="h-10 w-10">
                     <AvatarFallback>N</AvatarFallback>
                     <AvatarImage src="/images/john.jpg" alt="Chat Partner" />
                  </Avatar>
                  <span className="font-semibold">{`Nama ${params.chatId}`}</span>
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
         <div className="flex-1 overflow-y-auto p-4 space-y-4 mt-20 mb-20">
            {messages.map((msg) => (
               <div
                  key={msg.id}
                  className={`flex ${msg.isSender ? 'justify-end' : 'justify-start'}`}
               >
                  <div
                     className={`max-w-[80%] rounded-lg p-3 ${msg.isSender
                        ? 'bg-blue-600 text-white'
                        : 'bg-white'
                        }`}
                  >
                     <p className="text-sm">{msg.content}</p>
                     <span className="text-xs opacity-70 mt-1 block">
                        {msg.timestamp}
                     </span>
                  </div>
               </div>
            ))}
            <div ref={messagesEndRef} />
         </div>

         {/* Message Input */}
         <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
               <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="text-blue-600"
               >
                  <Upload className="h-5 w-5" />
               </Button>
               <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1"
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
"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, Send, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Dock from "@/components/mobile-dock";

export default function ChatAIPage() {
   const [message, setMessage] = useState("");

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!message.trim()) return;
      console.log(message);
      setMessage("");
   };

   return (
      <div className="flex flex-col min-h-screen bg-gray-50">
         <div className="flex justify-between items-center bg-white shadow-">
            <Link href="/">
               <Button variant="ghost" size="icon" className="text-blue-600">
                  <ArrowLeft className="h-6 w-6" />
               </Button>
            </Link>
            <div className="flex-grow flex justify-center">
               <Image src="/images/logomain.png" alt="Logo" width={80} height={80} className="object-contain" />
            </div>
            <div className="w-10"></div>
         </div>

         <div className="flex-grow flex flex-col p-4 pb-20 overflow-hidden">
            <Card className="flex-grow flex flex-col border-2 border-blue-100 bg-blue-50/50 overflow-hidden">
               <CardHeader className="p-4 space-y-2">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                     <h2 className="font-semibold text-lg mb-2">Smart Contract AI</h2>
                     <p className="text-sm text-gray-600">
                        Buat kontrak bisnis anda dengan partner anda melalui Smart Contract AI. Anda hanya perlu mengetikkan apa yang anda mau di chat dibawah lalu AI yang akan mengerjakan kontrak tersebut.
                     </p>
                  </div>
               </CardHeader>
               <CardContent className="p-4 flex-grow flex flex-col">
                  <div className="flex-grow mb-4 rounded-lg bg-blue-50/80 overflow-y-auto">
                     {/* Chat messages will appear here */}
                  </div>

                  <form onSubmit={handleSubmit} className="flex gap-2">
                     <Input
                        placeholder="Type Prompt Here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="flex-grow"
                     />
                     <Button type="submit" size="icon" className="bg-blue-600 hover:bg-blue-700">
                        <Send className="h-4 w-4" />
                     </Button>
                  </form>
               </CardContent>
            </Card>
         </div>
         <Dock />
      </div>
   );
}

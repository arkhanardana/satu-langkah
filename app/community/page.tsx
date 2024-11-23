"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import Dock from "@/components/mobile-dock"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

interface CommunityItemProps {
   title: string
   description: string
   isVIP?: boolean
   id: string
}

function CommunityItem({ title, description, isVIP = false, id }: CommunityItemProps) {
   return (
      <Link href={`/community/${id}`} className="block">
         <div className={`flex items-center gap-4 p-4 rounded-xl ${isVIP ? 'bg-yellow-400' : 'bg-blue-50'}`}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-white border-2 border-gray-200 shrink-0"></div>
            <div>
               <h3 className="font-semibold text-sm sm:text-base">{title}</h3>
               <p className="text-xs sm:text-sm text-gray-600">{description}</p>
            </div>
         </div>
      </Link>
   )
}

export default function CommunityPage() {
   const communities = [
      { id: "1", title: "BackEnd VIP Community", description: "Exclusive community for VIP members", isVIP: true },
      { id: "2", title: "Frontend Masters", description: "For frontend developers" },
      { id: "3", title: "DevOps United", description: "DevOps enthusiasts gather here" },
      { id: "4", title: "AI & Machine Learning", description: "Explore the world of AI" },
      { id: "5", title: "Mobile App Developers", description: "For iOS and Android devs" },
      { id: "6", title: "Data Science Hub", description: "Big data and analytics discussions" },
      { id: "7", title: "Cybersecurity Experts", description: "Securing the digital world" },
   ]

   return (
      <div className="min-h-screen bg-gray-50 mb-20">
         <div className="max-w-md mx-auto p-4">
            <Link href="/">
               <Button type="button" variant="ghost" size="icon">
                  <ArrowLeft className="h-6 w-6" color="blue" />
               </Button>
            </Link>

            {/* Header */}
            <div className="flex flex-col items-center mb-6">
               <Image
                  src="/images/logomain.png"
                  alt="logo"
                  width={95}
                  height={95}
               />
               <h1 className="text-3xl font-bold">Community</h1>
            </div>

            {/* Communities List */}
            <Card className="border-2 border-blue-100 p-4">
               <div className="space-y-3">
                  {communities.map((community) => (
                     <CommunityItem
                        key={community.id}
                        id={community.id}
                        title={community.title}
                        description={community.description}
                        isVIP={community.isVIP}
                     />
                  ))}
               </div>
            </Card>
         </div>

         <Dock />
      </div>
   )
}
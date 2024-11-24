"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Check, X } from 'lucide-react'
import Image from "next/image"

interface InvitationCardProps {
   name: string
   role: string
   projectTitle: string
   projectPreview: string
   onAccept: () => void
   onReject: () => void
}

function InvitationCard({ name, role, projectTitle, projectPreview, onAccept, onReject }: InvitationCardProps) {
   return (
      <Card className="p-4 bg-blue-50 border-2 border-blue-100">
         <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
               <Avatar className="h-10 w-10 border-2 border-blue-200">
                  <AvatarFallback>{name[0]}</AvatarFallback>
                  <AvatarImage src="/images/john.jpg" alt={name} />
               </Avatar>
               <div>
                  <h3 className="font-medium text-gray-900">{name}</h3>
                  <p className="text-sm text-gray-500">{role}</p>
               </div>
            </div>
            <div className="flex gap-2">
               <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-green-600 hover:text-green-700 hover:bg-green-100"
                  onClick={onAccept}
               >
                  <Check className="h-5 w-5" />
               </Button>
               <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-100"
                  onClick={onReject}
               >
                  <X className="h-5 w-5" />
               </Button>
            </div>
         </div>

         <div className="mt-4">
            <p className="text-sm font-medium text-gray-700">Project:</p>
            <div className="mt-2 flex gap-3">
               <div className="h-16 w-16 rounded-lg bg-white border-2 border-blue-200 shrink-0"></div>
               <div>
                  <h4 className="font-medium text-gray-900">{projectTitle}</h4>
                  <p className="text-sm text-gray-500">{projectPreview}</p>
               </div>
            </div>
         </div>
      </Card>
   )
}

export default function InvitationPage() {
   // Sample data - replace with actual data
   const invitations = [
      {
         id: 1,
         name: "John Doe",
         role: "Lead Developer",
         projectTitle: "AI Platform",
         projectPreview: "A cutting-edge AI development platform..."
      },
      {
         id: 2,
         name: "Jane Smith",
         role: "UX Designer",
         projectTitle: "Mobile App",
         projectPreview: "Next-generation mobile application..."
      },
   ]

   const handleAccept = (id: number) => {
      console.log(`Accepted invitation ${id}`)
   }

   const handleReject = (id: number) => {
      console.log(`Rejected invitation ${id}`)
   }

   return (
      <div className="min-h-screen bg-gray-50 p-4">
         <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
               {/* Logo placeholder */}
               <Image src="/images/logomain.png" alt="Logo" width={68} height={68} />
               <h1 className="text-2xl font-bold text-gray-900">Invest Invitation</h1>
            </div>

            <div className="space-y-4">
               {invitations.map((invitation) => (
                  <InvitationCard
                     key={invitation.id}
                     name={invitation.name}
                     role={invitation.role}
                     projectTitle={invitation.projectTitle}
                     projectPreview={invitation.projectPreview}
                     onAccept={() => handleAccept(invitation.id)}
                     onReject={() => handleReject(invitation.id)}
                  />
               ))}
            </div>

            {invitations.length === 0 && (
               <div className="text-center py-8">
                  <p className="text-gray-500">No invitations right now</p>
               </div>
            )}
         </div>
      </div>
   )
}
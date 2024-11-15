"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
} from "@/components/ui/card"
import { Check, Zap, Users, BarChart, X } from 'lucide-react'
import { useRouter } from "next/navigation"

const FeatureItem = ({ children }: { children: React.ReactNode }) => (
   <li className="flex items-start gap-2">
      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
      <span className="text-xs sm:text-sm">{children}</span>
   </li>
)

export default function UpgradeToPremium() {
   const router = useRouter()
   return (
      <div className="flex items-center justify-center min-h-screen w-full p-4">
         <Card className="w-full max-w-md border-none shadow-lg overflow-hidden">
            <CardHeader className="bg-yellow-400 text-white p-4 rounded-none">
               <h2 className="text-xl sm:text-2xl font-bold text-center">
                  UPGRADE TO PREMIUM
               </h2>
            </CardHeader>
            <CardContent className="p-4 space-y-4 sm:space-y-6">
               <div className="space-y-4 sm:space-y-6">
                  <div className="space-y-2 sm:space-y-3">
                     <h3 className="font-semibold flex items-center gap-2 text-sm sm:text-base">
                        <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                        Individual & Business Premium
                     </h3>
                     <ul className="space-y-1 sm:space-y-2">
                        <FeatureItem>Smart Contract Tanpa Batas</FeatureItem>
                        <FeatureItem>Eksposur Prioritas</FeatureItem>
                        <FeatureItem>Akses Bebas Iklan</FeatureItem>
                        <FeatureItem>Insight Eksklusif</FeatureItem>
                        <FeatureItem>Event Eksklusif Tanpa Syarat</FeatureItem>
                     </ul>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                     <h3 className="font-semibold flex items-center gap-2 text-sm sm:text-base">
                        <BarChart className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                        Investor Premium
                     </h3>
                     <ul className="space-y-1 sm:space-y-2">
                        <FeatureItem>Smart Contract & Brand Exposure</FeatureItem>
                        <FeatureItem>Akses Tanpa Batas ke Semua Fitur</FeatureItem>
                        <FeatureItem>Analitik untuk Keputusan Investasi</FeatureItem>
                     </ul>
                  </div>
               </div>
               <div className="text-center space-y-2 bg-gray-100 p-3 rounded-lg">
                  <div className="flex items-center justify-center gap-4">
                     <span className="text-sm sm:text-base line-through text-gray-400">300K</span>
                     <Badge variant="secondary" className="text-lg sm:text-xl px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-600 text-white">
                        100K
                     </Badge>
                  </div>
               </div>
            </CardContent>
            <CardFooter className="p-4 flex flex-col gap-3 sm:gap-4">
               <Button
                  className="w-full text-sm sm:text-lg py-3 sm:py-6 bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                  size="lg"
               >
                  <Zap className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Purchase Now
               </Button>
               <Button
                  variant="outline"
                  className="w-full text-sm sm:text-lg py-3 sm:py-6 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300"
                  size="lg"
                  onClick={() => router.push("/")}
               >
                  <X className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Skip
               </Button>
            </CardFooter>
         </Card>
      </div>
   )
}
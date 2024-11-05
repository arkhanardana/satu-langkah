"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
} from "@/components/ui/card"
import { Check, Zap, Users, BarChart, X } from "lucide-react"
import { useRouter } from "next/navigation"

const FeatureItem = ({ children }: { children: React.ReactNode }) => (
   <li className="flex items-start gap-3">
      <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
      <span className="text-sm">{children}</span>
   </li>
)

export default function UpgradeToPremium() {
   const router = useRouter()
   return (
      <div className="flex items-center justify-center min-h-screen w-full container mx-auto">
         <Card className="w-full max-w-md border-none shadow-lg overflow-hidden">
            <CardHeader className="bg-yellow-400 text-white p-6 rounded-none">
               <h2 className="text-2xl font-bold text-center">
                  UPGRADE TO PREMIUM
               </h2>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
               <div className="text-center">
               </div>
               <div className="space-y-6">
                  <div className="space-y-3">
                     <h3 className="font-semibold flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-600" />
                        Individual & Business Premium
                     </h3>
                     <ul className="space-y-2">
                        <FeatureItem>Smart Contract Tanpa Batas</FeatureItem>
                        <FeatureItem>Eksposur Prioritas</FeatureItem>
                        <FeatureItem>Akses Bebas Iklan</FeatureItem>
                        <FeatureItem>Insight Eksklusif</FeatureItem>
                        <FeatureItem>Event Eksklusif Tanpa Syarat</FeatureItem>
                     </ul>
                  </div>
                  <div className="space-y-3">
                     <h3 className="font-semibold flex items-center gap-2">
                        <BarChart className="h-5 w-5 text-blue-600" />
                        Investor Premium
                     </h3>
                     <ul className="space-y-2">
                        <FeatureItem>Smart Contract & Brand Exposure</FeatureItem>
                        <FeatureItem>Akses Tanpa Batas ke Semua Fitur</FeatureItem>
                        <FeatureItem>Analitik untuk Keputusan Investasi</FeatureItem>
                     </ul>
                  </div>
               </div>
               <div className="text-center space-y-2 bg-gray-100 p-4 rounded-lg">
                  <div className="flex items-center justify-center gap-4">
                     <span className="text-base line-through text-gray-400">300K</span>
                     <Badge variant="secondary" className="text-xl px-3 py-1 bg-blue-600 text-white">
                        100K
                     </Badge>
                  </div>
               </div>
            </CardContent>
            <CardFooter className="p-6 flex flex-col gap-4">
               <Button
                  className="w-full text-lg py-6 bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                  size="lg"
               >
                  <Zap className="mr-2 h-5 w-5" /> Purchase Now
               </Button>
               <Button
                  variant="outline"
                  className="w-full text-lg py-6 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300"
                  size="lg"
                  onClick={() => router.push("/")}
               >
                  <X className="mr-2 h-5 w-5" /> Skip
               </Button>
            </CardFooter>
         </Card>
      </div>
   )
}
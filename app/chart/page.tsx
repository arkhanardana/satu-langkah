"use client"

import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
   { date: "Jan", views: 2400 },
   { date: "Feb", views: 1398 },
   { date: "Mar", views: 9800 },
   { date: "Apr", views: 3908 },
   { date: "May", views: 4800 },
   { date: "Jun", views: 3800 },
   { date: "Jul", views: 4300 },
]

export default function PremiumDashboard() {
   return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 sm:p-6 md:p-8">
         <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
               <Link href="/">
                  <Button variant="ghost" size="icon" className="text-blue-600 hover:bg-blue-100">
                     <ArrowLeft className="h-6 w-6" />
                  </Button>
               </Link>
               <h1 className="text-2xl font-bold text-gray-800 ml-4">Premium Dashboard</h1>
            </div>

            <Card className="mb-6 border-2 border-blue-200 shadow-lg">
               <CardHeader className="border-b border-blue-100">
                  <CardTitle className="text-lg text-gray-800">Analytics Chart's Insight</CardTitle>
               </CardHeader>
               <CardContent className="p-1">
                  <div className="w-full h-[200px] sm:h-[400px] md:h-[520px]">
                     <ChartContainer
                        config={{
                           views: {
                              label: "Views",
                              color: "hsl(217, 91%, 60%)",
                           },
                        }}
                     >
                        <ResponsiveContainer width="100%" height="100%">
                           <BarChart data={data}>
                              <XAxis
                                 dataKey="date"
                                 tickLine={false}
                                 axisLine={false}
                                 stroke="#94a3b8"
                                 fontSize={12}
                                 tickMargin={8}
                              />
                              <YAxis
                                 tickLine={false}
                                 axisLine={false}
                                 width={40}
                                 stroke="#94a3b8"
                                 fontSize={12}
                                 tickFormatter={(value) => `${value / 1000}k`}
                              />
                              <Bar
                                 dataKey="views"
                                 fill="hsl(217, 91%, 60%)"
                                 radius={[4, 4, 0, 0]}
                              />
                              <ChartTooltip content={<ChartTooltipContent />} />
                           </BarChart>
                        </ResponsiveContainer>
                     </ChartContainer>
                  </div>
                  <div className="flex justify-end my-4 mx-2">
                     <Button variant="outline" size="sm" className="text-gray-700 border-gray-300 hover:bg-blue-50">
                        Range: 7d
                     </Button>
                  </div>
               </CardContent>
            </Card>

            <Card className="mb-6 border-2 border-blue-200 shadow-md">
               <CardHeader className="border-b border-blue-100">
                  <CardTitle className="text-lg text-gray-800">Insight</CardTitle>
               </CardHeader>
               <CardContent className="p-4">
                  <p className="font-medium text-gray-800">Account Reach Out:</p>
                  <p className="text-gray-600">This Month: <span className="font-semibold text-gray-800">10,000</span></p>
                  <p className="text-gray-600">This Week: <span className="font-semibold text-gray-800">2,500</span></p>
                  <p className="text-gray-600">This Day: <span className="font-semibold text-gray-800">500</span></p>
               </CardContent>
            </Card>

            <Card className="mb-6 border-2 border-blue-200 shadow-md">
               <CardHeader className="border-b border-blue-100">
                  <CardTitle className="text-lg text-gray-800">Top Article / Project</CardTitle>
               </CardHeader>
               <CardContent className="p-4">
                  <div className="grid grid-cols-3 gap-4">
                     {['Article 1', 'Article 2', 'Article 3'].map((article, index) => (
                        <div key={index} className="flex flex-col items-center">
                           <div className="w-16 h-16 bg-blue-100 rounded-lg mb-2 flex items-center justify-center text-blue-500 font-bold text-xl">
                           </div>
                           <span className="text-sm text-center text-gray-600">{article}</span>
                        </div>
                     ))}
                  </div>
               </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 shadow-md">
               <CardHeader className="border-b border-blue-100">
                  <CardTitle className="text-lg text-gray-800">Most People Seen Your Account</CardTitle>
               </CardHeader>
               <CardContent className="p-4">
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                     {['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown', 'Eva Davis'].map((name, index) => (
                        <div key={index} className="flex flex-col items-center">
                           <Avatar className="h-16 w-16 mb-2 bg-blue-100 text-blue-600">
                              <AvatarImage src="/images/john.jpg" alt="My Profile" />
                              <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                           </Avatar>
                           <span className="text-sm text-center text-gray-600">{name}</span>
                        </div>
                     ))}
                  </div>
               </CardContent>
            </Card>
         </div>
      </div>
   )
}
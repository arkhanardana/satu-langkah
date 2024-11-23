import Link from "next/link"
import { ArrowLeft, ThumbsUp, Eye, MessageSquare, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ViewProfilePage() {
   const isInvestor = true;
   const isPremium = true;

   return (
      <div className="min-h-screen bg-white">
         <div className="max-w-2xl mx-auto p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
               <Link href="/">
                  <Button variant="ghost" size="icon">
                     <ArrowLeft size={20} color="blue" />
                  </Button>
               </Link>
               {isPremium ? (
                  <Link href={"/chart"}>
                     <Button variant="ghost" size="icon">
                        <Menu size={48} color="#eab308" />
                     </Button>
                  </Link>
               ) : (
                  <Link href="/premium">
                     <Button className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-full px-4 py-2">
                        Upgrade To Premium
                     </Button>
                  </Link>
               )}
            </div>

            {/* Profile Section */}
            <div className="flex flex-col items-center mb-6">
               <Avatar className={`h-24 w-24 my-2 border-2 ${isPremium ? "border-yellow-400" : "border-blue-600"}`}>
                  <AvatarFallback>G</AvatarFallback>
                  <AvatarImage src="/images/john.jpg" alt="My Profile" />
               </Avatar>
               <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1 flex justify-around">
                     <p>Partner:</p>
                     {isInvestor ? <p>Invest:</p> : <p>Investor:</p>}
                  </div>
                  <h1 className="text-xl font-semibold mb-1">Nama | Umur</h1>
                  <p className="text-gray-600 mb-1">Province</p>
                  <p className="text-blue-600">Main Skill (First Skill to Select)</p>
               </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-4">
               <Card className="p-4 bg-blue-50 border-none">
                  <h2 className="font-semibold mb-2">Description:</h2>
                  <div className="min-h-[100px] bg-white rounded-lg p-2"></div>
               </Card>

               <Card className="p-4 bg-blue-50 border-none">
                  <h2 className="font-semibold mb-2">Experiences:</h2>
                  <div className="min-h-[100px] bg-white rounded-lg p-2"></div>
               </Card>

               <Card className="p-4 bg-blue-50 border-none">
                  <h2 className="font-semibold mb-2">Project | Article :</h2>
                  <div className="space-y-4">
                     {[1, 2, 3].map((item) => (
                        <div key={item} className="flex gap-4 bg-white rounded-lg p-2">
                           <div className="w-20 h-20 border-2 border-blue-600 rounded-lg shrink-0"></div>
                           <div className="flex-1">
                              <h3 className="font-semibold">Judul</h3>
                              <p className="text-sm text-gray-500 mb-2">Preview...</p>
                              <div className="flex gap-4">
                                 <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
                                    <ThumbsUp className="h-4 w-4" />
                                 </button>
                                 <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
                                    <Eye className="h-4 w-4" />
                                 </button>
                                 <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
                                    <MessageSquare className="h-4 w-4" />
                                 </button>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </Card>
            </div>
         </div>
      </div>
   );
}

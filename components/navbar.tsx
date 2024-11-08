import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Home, Compass, MessageCircle, Plus, Circle } from "lucide-react"

export default function Navbar() {
   const [isScrolled, setIsScrolled] = useState(false)

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 0)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])

   return (
      <>
         <header className={`sticky top-0 z-50 w-full border-b bg-white backdrop-blur-xl transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
            <div className="container mx-auto px-4">
               <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center gap-4 md:flex-1">
                     <Avatar className="h-10 w-10">
                        <Link href={"/view-profile"}>
                           <AvatarImage src="/images/john.jpg" alt="Profile" />
                        </Link>
                        <AvatarFallback>P</AvatarFallback>
                     </Avatar>
                  </div>
                  <div className="absolute lg:hidden md:static left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-auto md:top-auto md:translate-x-0 md:translate-y-0">
                     <Image src="/images/logomain.png" alt="Logo" width={70} height={70} />
                  </div>
                  <div className="hidden lg:flex items-center space-x-4 flex-1 justify-center">
                     <NavButton href="/" icon={<Home className="h-4 w-4" />} label="Home" />
                     <NavButton href="/explore" icon={<Compass className="h-4 w-4" />} label="Explore" />
                     <NavButton href="/chat-ai" icon={<Plus className="h-4 w-4" />} label="Chat AI" />
                     <NavButton href="/community" icon={<Circle className="h-4 w-4" />} label="Community" />
                     <NavButton href="/chat" icon={<MessageCircle className="h-4 w-4" />} label="Chat" />
                  </div>
                  <div className="flex gap-2 md:flex-1 md:justify-end">
                     <Link href="/sign-in">
                        <Button variant="default" size="xs">
                           Sign in
                        </Button>
                     </Link>
                     <Link href="/sign-up">
                        <Button variant="outline" size="xs">
                           Sign Up
                        </Button>
                     </Link>
                  </div>
               </div>
            </div>
         </header>

         {/* Mobile Navigation */}
         <nav className="fixed bottom-0 left-0 right-0 border-t bg-white lg:hidden z-50">
            <div className="flex items-center justify-around p-4">
               <NavIconButton href="/" icon={<Home className="h-6 w-6" />} />
               <NavIconButton href="/explore" icon={<Compass className="h-6 w-6" />} />
               <NavIconButton href="/chat-ai" icon={<Plus className="h-6 w-6" />} />
               <NavIconButton href="/community" icon={<Circle className="h-6 w-6" />} />
               <NavIconButton href="/chat" icon={<MessageCircle className="h-6 w-6" />} />
            </div>
         </nav>
      </>
   )
}

export function NavButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
   return (
      <Link href={href}>
         <Button variant="ghost" size="sm" className="flex items-center">
            {icon}
            <span className="ml-2">{label}</span>
         </Button>
      </Link>
   )
}

export function NavIconButton({ href, icon }: { href: string; icon: React.ReactNode }) {
   return (
      <Link href={href}>
         <Button variant="ghost" size="icon">
            {icon}
         </Button>
      </Link>
   )
}
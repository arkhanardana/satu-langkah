import { NavIconButton } from "./navbar";
import { Home, Compass, MessageCircle, Plus, Circle } from "lucide-react";

export default function Dock() {
   return (
      <>
         <nav className="fixed bottom-0 left-0 right-0 border-t bg-white z-50 lg:hidden block">
            <div className="flex items-center justify-around p-4">
               <NavIconButton href="/" icon={<Home className="h-6 w-6" />} />
               <NavIconButton href="/explore" icon={<Compass className="h-6 w-6" />} />
               <NavIconButton href="/chat-ai" icon={<Plus className="h-6 w-6" />} />
               <NavIconButton href="/community" icon={<Circle className="h-6 w-6" />} />
               <NavIconButton href="/chat" icon={<MessageCircle className="h-6 w-6" />} />
            </div>
         </nav>
      </>
   );
}

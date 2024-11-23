"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search, Plus, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface User {
   id: string
   name: string
   avatar: string
}

export default function AddGroupChatPage() {
   const [title, setTitle] = useState("")
   const [description, setDescription] = useState("")
   const [searchQuery, setSearchQuery] = useState("")
   const [selectedUsers, setSelectedUsers] = useState<User[]>([])

   // Mock user data - replace with actual API call
   const allUsers: User[] = [
      { id: "1", name: "Alice Johnson", avatar: "/images/john.jpg" },
      { id: "2", name: "Bob Smith", avatar: "/images/john.jpg" },
      { id: "3", name: "Charlie Brown", avatar: "/images/john.jpg" },
      { id: "4", name: "Diana Prince", avatar: "/images/john.jpg" },
   ]

   const filteredUsers = allUsers.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !selectedUsers.some(selectedUser => selectedUser.id === user.id)
   )

   const addUser = (user: User) => {
      setSelectedUsers([...selectedUsers, user])
      setSearchQuery("")
   }

   const removeUser = (userId: string) => {
      setSelectedUsers(selectedUsers.filter(user => user.id !== userId))
   }

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      // Handle form submission
      console.log({ title, description, members: selectedUsers })
      // Reset form or navigate to the new group chat
   }

   return (
      <div className="min-h-screen bg-gray-50 p-4">
         <div className="max-w-md mx-auto">
            <div className="flex items-center mb-6">
               <Link href="/chat/group">
                  <Button variant="ghost" size="icon">
                     <ArrowLeft className="h-6 w-6 text-blue-600" />
                  </Button>
               </Link>
               <h1 className="text-2xl font-bold text-black ml-4">Add Group Chat</h1>
            </div>

            <form onSubmit={handleSubmit}>
               <Card className="mb-6">
                  <CardHeader>
                     <CardTitle>Group Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                           Title of group chat
                        </label>
                        <Input
                           id="title"
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                           placeholder="Enter group title"
                           required
                        />
                     </div>
                     <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                           Description
                        </label>
                        <Textarea
                           id="description"
                           value={description}
                           onChange={(e) => setDescription(e.target.value)}
                           placeholder="Enter group description"
                           rows={3}
                           className="resize-none"
                        />
                     </div>
                  </CardContent>
               </Card>

               <Card className="mb-6">
                  <CardHeader>
                     <CardTitle>Add Members</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                        <Input
                           value={searchQuery}
                           onChange={(e) => setSearchQuery(e.target.value)}
                           placeholder="Search users"
                           className="pl-8"
                        />
                     </div>
                     {filteredUsers.length > 0 && (
                        <ul className="mt-2 space-y-2">
                           {filteredUsers.map(user => (
                              <li key={user.id} className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
                                 <div className="flex items-center">
                                    <Avatar className="h-8 w-8 mr-2">
                                       <AvatarImage src={user.avatar} alt={user.name} />
                                       <AvatarFallback>{user.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <span>{user.name}</span>
                                 </div>
                                 <Button type="button" variant="ghost" size="sm" onClick={() => addUser(user)}>
                                    <Plus className="h-4 w-4" />
                                 </Button>
                              </li>
                           ))}
                        </ul>
                     )}
                     {selectedUsers.length > 0 && (
                        <div className="mt-4">
                           <h3 className="text-sm font-medium text-gray-700 mb-2">Selected Members:</h3>
                           <ul className="space-y-2">
                              {selectedUsers.map(user => (
                                 <li key={user.id} className="flex items-center justify-between p-2 bg-blue-100 rounded-md">
                                    <div className="flex items-center">
                                       <Avatar className="h-8 w-8 mr-2">
                                          <AvatarImage src={user.avatar} alt={user.name} />
                                          <AvatarFallback>{user.name[0]}</AvatarFallback>
                                       </Avatar>
                                       <span>{user.name}</span>
                                    </div>
                                    <Button type="button" variant="ghost" size="sm" onClick={() => removeUser(user.id)}>
                                       <X className="h-4 w-4" />
                                    </Button>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     )}
                  </CardContent>
               </Card>

               <CardFooter className="flex justify-end">
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                     Create Group
                  </Button>
               </CardFooter>
            </form>
         </div>
      </div>
   )
}
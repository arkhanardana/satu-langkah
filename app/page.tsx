'use client'

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function HomePage() {
  const partnerRef = useRef<HTMLDivElement>(null)
  const investorRef = useRef<HTMLDivElement>(null)

  const handleDrag = (ref: React.RefObject<HTMLDivElement>) => {
    let isDown = false
    let startX: number
    let scrollLeft: number

    const onMouseDown = (e: MouseEvent) => {
      isDown = true
      if (ref.current) {
        ref.current.style.cursor = 'grabbing'
        startX = e.pageX - ref.current.offsetLeft
        scrollLeft = ref.current.scrollLeft
      }
    }

    const onMouseLeave = () => {
      isDown = false
      if (ref.current) {
        ref.current.style.cursor = 'grab'
      }
    }

    const onMouseUp = () => {
      isDown = false
      if (ref.current) {
        ref.current.style.cursor = 'grab'
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      if (ref.current) {
        const x = e.pageX - ref.current.offsetLeft
        const walk = (x - startX) * 2
        ref.current.scrollLeft = scrollLeft - walk
      }
    }

    ref.current?.addEventListener('mousedown', onMouseDown)
    ref.current?.addEventListener('mouseleave', onMouseLeave)
    ref.current?.addEventListener('mouseup', onMouseUp)
    ref.current?.addEventListener('mousemove', onMouseMove)

    return () => {
      ref.current?.removeEventListener('mousedown', onMouseDown)
      ref.current?.removeEventListener('mouseleave', onMouseLeave)
      ref.current?.removeEventListener('mouseup', onMouseUp)
      ref.current?.removeEventListener('mousemove', onMouseMove)
    }
  }

  useEffect(() => {
    handleDrag(partnerRef)
    handleDrag(investorRef)
  }, [])

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col">
      {/* Header */}
      <Navbar />
      <main className="flex-grow w-full">
        <div className="container mx-auto px-4 py-6 md:py-8">
          {/* Recommendation Projects */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Recommendation Project</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="font-medium mb-2">Judul Artikel</h3>
                    <p className="text-sm text-muted-foreground">Isi Artikel / Projek</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          {/* Recommendation Partners */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Recommendation Partner's</h2>
            <div
              ref={partnerRef}
              className="flex gap-4 overflow-x-auto pb-4 cursor-grab scrollbar-hide"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="flex flex-col items-center gap-2 min-w-[80px]">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/images/john.jpg" alt={`Partner ${i}`} />
                    <AvatarFallback>P{i}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">John Doe</span>
                </div>
              ))}
            </div>
          </section>
          {/* Create Article */}
          <section className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/images/john.jpg" alt="Profile" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div>
                <Link href={'/article'}>
                  <h2 className="font-semibold hover:underline">Buat Artikel</h2>
                  <p className="text-sm text-muted-foreground">Isi Artikel / Projek</p>
                </Link>
              </div>
            </div>
            <div className="text-base mx-auto flex items-center justify-between">
              <div className="flex-col">
                <p>Satu langkah mulai</p>
                <p>Satu Langkah Berkembang</p>
              </div>
              <Image src="/images/logomain.png" alt="Logo" width={100} height={100} />
            </div>
          </section>
          {/* Event */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Event</h2>
            <Card className="h-40 flex items-center justify-center">
              <CardContent>
                <p className="text-muted-foreground text-center">No events yet</p>
              </CardContent>
            </Card>
          </section>
          {/* Investors */}
          <section className="mb-20 md:mb-8">
            <h2 className="text-lg font-semibold mb-4">Investor</h2>
            <div
              ref={investorRef}
              className="flex gap-4 overflow-x-auto pb-4 cursor-grab scrollbar-hide"
            >
              {Array(9).fill(0).map((_, i) => (
                <div key={i} className="flex flex-col items-center gap-2 min-w-[80px]">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/images/john.jpg" alt={`Investor ${i + 1}`} />
                    <AvatarFallback>I{i + 1}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">Investor {i + 1}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
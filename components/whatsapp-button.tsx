"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"

interface WhatsAppButtonProps {
  phoneNumber: string
}

export default function WhatsAppButton({ phoneNumber }: WhatsAppButtonProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isTooltipVisible && (
        <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg mb-2 w-64">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Chat with us on WhatsApp</h3>
            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsTooltipVisible(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-3">Click the button to start a conversation with our team.</p>
          <Button className="w-full" size="sm" onClick={handleWhatsAppClick}>
            Start Chat
          </Button>
        </div>
      )}
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
        onClick={() => setIsTooltipVisible(!isTooltipVisible)}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">WhatsApp Chat</span>
      </Button>
    </div>
  )
}

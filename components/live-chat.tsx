"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, X, Send, User } from "lucide-react"
import { cn } from "@/lib/utils"

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  })
  const [message, setMessage] = useState("")
  const [chatStarted, setChatStarted] = useState(false)
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "agent"; time: string }[]>([])
  const [hasNewMessage, setHasNewMessage] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Auto response after user sends a message
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].sender === "user") {
      const timer = setTimeout(() => {
        const autoResponses = [
          "Thanks for reaching out! Our team will get back to you shortly.",
          "Hello there! How can we help you today?",
          "Thank you for your message. We'll respond as soon as possible.",
          "We've received your inquiry and will contact you soon.",
        ]

        const randomResponse = autoResponses[Math.floor(Math.random() * autoResponses.length)]

        setMessages([
          ...messages,
          {
            text: randomResponse,
            sender: "agent",
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ])

        if (!isOpen) {
          setHasNewMessage(true)
        }
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [messages, isOpen])

  // Reset new message indicator when chat is opened
  useEffect(() => {
    if (isOpen) {
      setHasNewMessage(false)
    }
  }, [isOpen])

  const handleStartChat = (e: React.FormEvent) => {
    e.preventDefault()
    setChatStarted(true)
    setMessages([
      {
        text: `Hello ${userInfo.name}! Welcome to WebCraftStudio live chat. How can we help you today?`,
        sender: "agent",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ])
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    const newMessage = {
      text: message,
      sender: "user" as const,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages([...messages, newMessage])
    setMessage("")
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          className={cn(
            "relative h-16 w-16 rounded-full shadow-lg transition-all duration-300",
            isHovered ? "bg-primary/90 scale-110" : "bg-primary",
          )}
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Open Live Chat"
        >
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Animated chat icon */}
            <div
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                isHovered ? "opacity-0" : "opacity-100",
              )}
            >
              <MessageCircle className="h-7 w-7" />
            </div>

            {/* Hover state icon */}
            <div
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                isHovered ? "opacity-100" : "opacity-0",
              )}
            >
              <div className="flex flex-col items-center justify-center">
                <MessageCircle className="h-7 w-7" />
                <span className="text-xs font-medium mt-0.5">Chat</span>
              </div>
            </div>

            {/* Notification indicator */}
            {hasNewMessage && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 animate-bounce">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 items-center justify-center text-xs text-white">
                  1
                </span>
              </span>
            )}
          </div>

          {/* Pulsing effect */}
          <span className={cn("absolute inset-0 rounded-full opacity-0", hasNewMessage && "animate-pulse-ring")}></span>
        </Button>
      </div>
    )
  }

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 bg-background rounded-lg shadow-xl border w-80 transition-all duration-300 ${isMinimized ? "h-12" : "h-96"}`}
    >
      {/* Chat Header */}
      <div className="bg-primary text-primary-foreground p-3 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          <h3 className="font-medium">Live Chat</h3>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-primary-foreground hover:text-primary-foreground/80"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            {isMinimized ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-primary-foreground hover:text-primary-foreground/80"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Chat Body */}
          <div className="p-3 h-[calc(100%-120px)] overflow-y-auto">
            {!chatStarted ? (
              <form onSubmit={handleStartChat} className="space-y-3">
                <div>
                  <label htmlFor="chat-name" className="text-sm font-medium block mb-1">
                    Name
                  </label>
                  <Input
                    id="chat-name"
                    value={userInfo.name}
                    onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="chat-email" className="text-sm font-medium block mb-1">
                    Email
                  </label>
                  <Input
                    id="chat-email"
                    type="email"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                    placeholder="Your email"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Start Chat
                </Button>
              </form>
            ) : (
              <div className="space-y-3">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-2 ${
                        msg.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <div className="flex items-center gap-1 mb-1">
                        {msg.sender === "agent" ? (
                          <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                            <User className="h-3 w-3 text-primary-foreground" />
                          </div>
                        ) : null}
                        <span className="text-xs opacity-70">{msg.sender === "user" ? "You" : "Agent"}</span>
                        <span className="text-xs opacity-70 ml-auto">{msg.time}</span>
                      </div>
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Chat Input */}
          {chatStarted && (
            <div className="p-3 border-t">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="min-h-[40px] max-h-[80px] resize-none"
                />
                <Button type="submit" size="icon" disabled={!message.trim()}>
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  )
}

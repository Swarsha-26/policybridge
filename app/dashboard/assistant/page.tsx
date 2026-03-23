"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bot, Send, Sparkles, FileSearch, ShieldCheck, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: number
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

const suggestedQuestions = [
  {
    icon: FileSearch,
    title: "Find policies",
    description: "What is our data retention policy?",
  },
  {
    icon: ShieldCheck,
    title: "Compliance check",
    description: "Are we GDPR compliant?",
  },
  {
    icon: Sparkles,
    title: "Policy summary",
    description: "Summarize the employee handbook",
  },
  {
    icon: HelpCircle,
    title: "General help",
    description: "How do I upload a new policy?",
  },
]

const initialMessages: Message[] = [
  {
    id: 1,
    content: "Hello! I'm your AI Policy Assistant. I can help you with:\n\n• Finding and understanding policies\n• Compliance questions\n• Policy summaries and comparisons\n• General platform guidance\n\nHow can I assist you today?",
    sender: "bot",
    timestamp: new Date(),
  },
]

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = (message?: string) => {
    const content = message || input
    if (!content.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      content: content,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const responses: Record<string, string> = {
        "What is our data retention policy?": "Based on your company's Data Retention Policy (v2.1), personal data should be retained for a maximum of 7 years after the end of the business relationship, unless legal requirements specify otherwise. For marketing data, the retention period is 2 years from the last interaction. Would you like me to provide more details or find the full policy document?",
        "Are we GDPR compliant?": "According to your latest compliance scan, your organization is 95% GDPR compliant. There are 2 minor issues that need attention:\n\n1. Privacy policy update needed on the marketing website\n2. Data processing agreement pending for 1 vendor\n\nWould you like me to create tasks to address these issues?",
        "Summarize the employee handbook": "Here's a summary of your Employee Handbook (2024 Edition):\n\n**Key Sections:**\n• Work hours: Standard 40-hour week, flexible scheduling available\n• PTO: 20 days + 10 sick days annually\n• Remote work: Hybrid model, 3 days in office minimum\n• Code of conduct: Professional behavior, anti-harassment policies\n• Benefits: Health, dental, vision, 401k matching\n\nWould you like details on any specific section?",
        "How do I upload a new policy?": "To upload a new policy, follow these steps:\n\n1. Navigate to **Policy Management** from the sidebar\n2. Click the **Upload Policy** button\n3. Drag and drop your file or click to browse\n4. Fill in the metadata (category, tags, etc.)\n5. Submit for review or publish directly\n\nSupported formats: PDF, DOCX, DOC, TXT (max 25MB)\n\nWould you like me to guide you through the process?",
      }

      const botResponse: Message = {
        id: messages.length + 2,
        content: responses[content] || "I've searched through your policy database and here's what I found regarding your question. Would you like me to provide more specific information or search for related policies?",
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">AI Assistant</h1>
        <p className="text-muted-foreground">
          Ask questions about policies, compliance, and get instant help
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Chat Area */}
        <Card className="lg:col-span-2 flex flex-col h-[calc(100vh-220px)] min-h-[500px]">
          <CardContent className="flex flex-col flex-1 p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-3",
                    message.sender === "user" && "flex-row-reverse"
                  )}
                >
                  {message.sender === "bot" ? (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
                      <Bot className="h-4 w-4 text-primary-foreground" />
                    </div>
                  ) : (
                    <Avatar className="h-8 w-8 shrink-0">
                      <AvatarFallback className="bg-muted text-sm">JD</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg px-4 py-3 text-sm whitespace-pre-wrap",
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Bot className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="bg-muted rounded-lg px-4 py-3">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t p-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about policies, compliance, or anything else..."
                  className="flex-1"
                />
                <Button type="submit" disabled={!input.trim() || isTyping}>
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>

        {/* Suggested Questions */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Suggested Questions</CardTitle>
              <CardDescription>
                Click to ask common questions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(question.description)}
                  className="w-full text-left rounded-lg border p-3 hover:bg-muted transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <question.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{question.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {question.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">AI Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Policy search and retrieval
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Document summarization
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Compliance checking
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Policy comparison
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Platform guidance
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

"use client"

import { Sidebar } from "@/components/dashboard/sidebar"
import { TopNav } from "@/components/dashboard/top-nav"
import { ChatAssistant } from "@/components/dashboard/chat-assistant"
import { useState } from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className={`transition-all duration-300 ${sidebarCollapsed ? "ml-16" : "ml-64"}`}>
        <TopNav />
        <main className="p-6">{children}</main>
      </div>
      <ChatAssistant />
    </div>
  )
}

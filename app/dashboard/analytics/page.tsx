"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Download, TrendingUp, TrendingDown, FileText, Users, Clock, Eye } from "lucide-react"

const policyUsageData = [
  { name: "Jan", views: 4000, downloads: 2400 },
  { name: "Feb", views: 3000, downloads: 1398 },
  { name: "Mar", views: 2000, downloads: 9800 },
  { name: "Apr", views: 2780, downloads: 3908 },
  { name: "May", views: 1890, downloads: 4800 },
  { name: "Jun", views: 2390, downloads: 3800 },
  { name: "Jul", views: 3490, downloads: 4300 },
]

const complianceHistoryData = [
  { name: "Week 1", score: 75 },
  { name: "Week 2", score: 78 },
  { name: "Week 3", score: 82 },
  { name: "Week 4", score: 79 },
  { name: "Week 5", score: 85 },
  { name: "Week 6", score: 88 },
  { name: "Week 7", score: 92 },
  { name: "Week 8", score: 94 },
]

const policyCategoryData = [
  { name: "Privacy", value: 35 },
  { name: "HR", value: 28 },
  { name: "Security", value: 22 },
  { name: "Compliance", value: 10 },
  { name: "Operations", value: 5 },
]

const updateHistoryData = [
  {
    id: 1,
    policy: "Data Privacy Policy",
    action: "Updated",
    user: "John Doe",
    date: "2024-01-15 14:30",
  },
  {
    id: 2,
    policy: "Employee Handbook",
    action: "Created",
    user: "Jane Smith",
    date: "2024-01-14 09:15",
  },
  {
    id: 3,
    policy: "IT Security Guidelines",
    action: "Reviewed",
    user: "Mike Johnson",
    date: "2024-01-13 16:45",
  },
  {
    id: 4,
    policy: "Remote Work Policy",
    action: "Updated",
    user: "Sarah Wilson",
    date: "2024-01-12 11:20",
  },
  {
    id: 5,
    policy: "Anti-Harassment Policy",
    action: "Approved",
    user: "John Doe",
    date: "2024-01-11 08:00",
  },
]

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))", "hsl(var(--chart-5))"]

const actionColors: Record<string, string> = {
  Updated: "bg-primary/10 text-primary",
  Created: "bg-success/10 text-success",
  Reviewed: "bg-warning/10 text-warning",
  Approved: "bg-chart-2/10 text-chart-2",
}

const stats = [
  {
    title: "Total Views",
    value: "24,580",
    change: "+12.5%",
    trend: "up",
    icon: Eye,
  },
  {
    title: "Downloads",
    value: "8,342",
    change: "+8.2%",
    trend: "up",
    icon: Download,
  },
  {
    title: "Active Users",
    value: "1,245",
    change: "-2.4%",
    trend: "down",
    icon: Users,
  },
  {
    title: "Avg. Response Time",
    value: "2.4s",
    change: "-15.3%",
    trend: "up",
    icon: Clock,
  },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">
            Insights and statistics for your policy management system
          </p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <div className="mt-1 flex items-center gap-1 text-xs">
                    {stat.trend === "up" ? (
                      <TrendingUp className="h-3 w-3 text-success" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-destructive" />
                    )}
                    <span className={stat.trend === "up" ? "text-success" : "text-destructive"}>
                      {stat.change}
                    </span>
                    <span className="text-muted-foreground">vs last month</span>
                  </div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <stat.icon className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Policy Usage Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Policy Usage Over Time</CardTitle>
            <CardDescription>Views and downloads trend for the past 7 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={policyUsageData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="name" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="views" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="downloads" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-chart-1" />
                <span className="text-sm text-muted-foreground">Views</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-chart-2" />
                <span className="text-sm text-muted-foreground">Downloads</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compliance Score Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Compliance Score Trend</CardTitle>
            <CardDescription>8-week compliance score history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={complianceHistoryData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="name" className="text-xs" />
                  <YAxis domain={[60, 100]} className="text-xs" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="hsl(var(--chart-1))"
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--chart-1))" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Policy Categories */}
        <Card>
          <CardHeader>
            <CardTitle>Policies by Category</CardTitle>
            <CardDescription>Distribution of policies across categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={policyCategoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {policyCategoryData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              {policyCategoryData.map((item, index) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: COLORS[index] }}
                  />
                  <span className="text-sm text-muted-foreground">
                    {item.name} ({item.value}%)
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Update History */}
      <Card>
        <CardHeader>
          <CardTitle>Policy Update History</CardTitle>
          <CardDescription>Recent changes and updates to policies</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {updateHistoryData.map((update) => (
              <div
                key={update.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{update.policy}</p>
                    <p className="text-sm text-muted-foreground">
                      by {update.user} • {update.date}
                    </p>
                  </div>
                </div>
                <Badge className={actionColors[update.action]}>{update.action}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

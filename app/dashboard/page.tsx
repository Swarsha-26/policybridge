import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, ShieldCheck, Upload, AlertTriangle, TrendingUp, Clock } from "lucide-react"

const stats = [
  {
    title: "Total Policies",
    value: "156",
    change: "+12",
    changeLabel: "from last month",
    icon: FileText,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Compliance Score",
    value: "94%",
    change: "+2.5%",
    changeLabel: "improvement",
    icon: ShieldCheck,
    iconBg: "bg-success/10",
    iconColor: "text-success",
  },
  {
    title: "Recent Uploads",
    value: "23",
    change: "This week",
    changeLabel: "",
    icon: Upload,
    iconBg: "bg-chart-2/10",
    iconColor: "text-chart-2",
  },
  {
    title: "Pending Alerts",
    value: "7",
    change: "3 critical",
    changeLabel: "",
    icon: AlertTriangle,
    iconBg: "bg-warning/10",
    iconColor: "text-warning",
  },
]

const recentPolicies = [
  {
    name: "Data Privacy Policy v3.2",
    category: "Privacy",
    uploadDate: "2024-01-15",
    status: "Active",
  },
  {
    name: "Employee Handbook 2024",
    category: "HR",
    uploadDate: "2024-01-14",
    status: "Under Review",
  },
  {
    name: "IT Security Guidelines",
    category: "Security",
    uploadDate: "2024-01-13",
    status: "Active",
  },
  {
    name: "Remote Work Policy",
    category: "HR",
    uploadDate: "2024-01-12",
    status: "Draft",
  },
  {
    name: "Anti-Harassment Policy",
    category: "Compliance",
    uploadDate: "2024-01-11",
    status: "Active",
  },
]

const statusColors: Record<string, string> = {
  Active: "bg-success/10 text-success border-success/20",
  "Under Review": "bg-warning/10 text-warning border-warning/20",
  Draft: "bg-muted text-muted-foreground border-border",
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here&apos;s an overview of your policy management system.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <div className="flex items-center gap-1 text-xs">
                    <TrendingUp className="h-3 w-3 text-success" />
                    <span className="font-medium text-success">{stat.change}</span>
                    {stat.changeLabel && (
                      <span className="text-muted-foreground">{stat.changeLabel}</span>
                    )}
                  </div>
                </div>
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${stat.iconBg}`}>
                  <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Policies Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Policies</CardTitle>
              <CardDescription>Recently uploaded and updated policy documents</CardDescription>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              Updated just now
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left text-sm text-muted-foreground">
                  <th className="pb-3 font-medium">Policy Name</th>
                  <th className="pb-3 font-medium">Category</th>
                  <th className="pb-3 font-medium">Upload Date</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentPolicies.map((policy, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <span className="font-medium">{policy.name}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <Badge variant="secondary">{policy.category}</Badge>
                    </td>
                    <td className="py-4 text-muted-foreground">{policy.uploadDate}</td>
                    <td className="py-4">
                      <Badge variant="outline" className={statusColors[policy.status]}>
                        {policy.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Clock,
  FileText,
  ArrowRight,
} from "lucide-react"

const complianceItems = [
  {
    id: 1,
    name: "GDPR Compliance",
    status: "Compliant",
    score: 95,
    lastCheck: "2024-01-15",
    issues: 2,
  },
  {
    id: 2,
    name: "SOC 2 Type II",
    status: "Review Needed",
    score: 78,
    lastCheck: "2024-01-14",
    issues: 8,
  },
  {
    id: 3,
    name: "HIPAA",
    status: "Compliant",
    score: 92,
    lastCheck: "2024-01-13",
    issues: 3,
  },
  {
    id: 4,
    name: "ISO 27001",
    status: "Non-Compliant",
    score: 45,
    lastCheck: "2024-01-10",
    issues: 24,
  },
  {
    id: 5,
    name: "PCI DSS",
    status: "Pending",
    score: 0,
    lastCheck: "Not checked",
    issues: 0,
  },
]

const recentIssues = [
  {
    id: 1,
    title: "Missing data encryption policy",
    framework: "SOC 2",
    severity: "High",
    dueDate: "2024-01-20",
  },
  {
    id: 2,
    title: "Outdated access control documentation",
    framework: "ISO 27001",
    severity: "Critical",
    dueDate: "2024-01-18",
  },
  {
    id: 3,
    title: "Incomplete incident response plan",
    framework: "HIPAA",
    severity: "Medium",
    dueDate: "2024-01-25",
  },
  {
    id: 4,
    title: "Missing employee training records",
    framework: "GDPR",
    severity: "Low",
    dueDate: "2024-02-01",
  },
]

const statusConfig: Record<string, { color: string; icon: typeof CheckCircle2 }> = {
  Compliant: { color: "text-success", icon: CheckCircle2 },
  "Review Needed": { color: "text-warning", icon: AlertTriangle },
  "Non-Compliant": { color: "text-destructive", icon: XCircle },
  Pending: { color: "text-muted-foreground", icon: Clock },
}

const severityColors: Record<string, string> = {
  Critical: "bg-destructive/10 text-destructive border-destructive/20",
  High: "bg-warning/10 text-warning border-warning/20",
  Medium: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  Low: "bg-muted text-muted-foreground border-border",
}

export default function CompliancePage() {
  const overallScore = Math.round(
    complianceItems.filter((i) => i.score > 0).reduce((acc, item) => acc + item.score, 0) /
      complianceItems.filter((i) => i.score > 0).length
  )

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Compliance Checker</h1>
          <p className="text-muted-foreground">
            Monitor and manage your regulatory compliance status
          </p>
        </div>
        <Button>
          <ShieldCheck className="mr-2 h-4 w-4" />
          Run Full Scan
        </Button>
      </div>

      {/* Overall Score */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Overall Compliance Score</p>
                <p className="text-4xl font-bold">{overallScore}%</p>
              </div>
            </div>
            <div className="flex gap-8 text-center">
              <div>
                <p className="text-2xl font-bold text-success">3</p>
                <p className="text-sm text-muted-foreground">Compliant</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-warning">1</p>
                <p className="text-sm text-muted-foreground">Review Needed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-destructive">1</p>
                <p className="text-sm text-muted-foreground">Non-Compliant</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Compliance Frameworks */}
        <Card>
          <CardHeader>
            <CardTitle>Compliance Frameworks</CardTitle>
            <CardDescription>Status of all monitored compliance frameworks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {complianceItems.map((item) => {
              const StatusIcon = statusConfig[item.status].icon
              return (
                <div key={item.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <StatusIcon className={`h-4 w-4 ${statusConfig[item.status].color}`} />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {item.issues > 0 && (
                        <span className="text-sm text-muted-foreground">
                          {item.issues} issues
                        </span>
                      )}
                      <span className="text-sm font-medium">
                        {item.score > 0 ? `${item.score}%` : "—"}
                      </span>
                    </div>
                  </div>
                  {item.score > 0 && (
                    <Progress
                      value={item.score}
                      className="h-2"
                    />
                  )}
                </div>
              )
            })}
          </CardContent>
        </Card>

        {/* Recent Issues */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Issues</CardTitle>
                <CardDescription>Outstanding compliance issues requiring attention</CardDescription>
              </div>
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentIssues.map((issue) => (
                <div
                  key={issue.id}
                  className="flex items-start justify-between rounded-lg border p-4"
                >
                  <div className="flex gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">{issue.title}</p>
                      <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{issue.framework}</span>
                        <span>•</span>
                        <span>Due {issue.dueDate}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className={severityColors[issue.severity]}>
                    {issue.severity}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

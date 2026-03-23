"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Upload,
  Search,
  Filter,
  FileText,
  MoreHorizontal,
  Download,
  Eye,
  Trash2,
  Edit,
  CloudUpload,
} from "lucide-react"
import { cn } from "@/lib/utils"

const policies = [
  {
    id: 1,
    name: "Data Privacy Policy v3.2",
    category: "Privacy",
    uploadDate: "2024-01-15",
    size: "2.4 MB",
    status: "Active",
    lastModified: "2024-01-15",
  },
  {
    id: 2,
    name: "Employee Handbook 2024",
    category: "HR",
    uploadDate: "2024-01-14",
    size: "5.1 MB",
    status: "Under Review",
    lastModified: "2024-01-14",
  },
  {
    id: 3,
    name: "IT Security Guidelines",
    category: "Security",
    uploadDate: "2024-01-13",
    size: "1.8 MB",
    status: "Active",
    lastModified: "2024-01-13",
  },
  {
    id: 4,
    name: "Remote Work Policy",
    category: "HR",
    uploadDate: "2024-01-12",
    size: "890 KB",
    status: "Draft",
    lastModified: "2024-01-12",
  },
  {
    id: 5,
    name: "Anti-Harassment Policy",
    category: "Compliance",
    uploadDate: "2024-01-11",
    size: "1.2 MB",
    status: "Active",
    lastModified: "2024-01-11",
  },
  {
    id: 6,
    name: "Vendor Management Policy",
    category: "Operations",
    uploadDate: "2024-01-10",
    size: "3.4 MB",
    status: "Active",
    lastModified: "2024-01-10",
  },
  {
    id: 7,
    name: "Information Security Policy",
    category: "Security",
    uploadDate: "2024-01-09",
    size: "4.2 MB",
    status: "Under Review",
    lastModified: "2024-01-09",
  },
  {
    id: 8,
    name: "Code of Conduct",
    category: "Compliance",
    uploadDate: "2024-01-08",
    size: "1.5 MB",
    status: "Active",
    lastModified: "2024-01-08",
  },
]

const categories = ["All", "Privacy", "HR", "Security", "Compliance", "Operations"]

const statusColors: Record<string, string> = {
  Active: "bg-success/10 text-success border-success/20",
  "Under Review": "bg-warning/10 text-warning border-warning/20",
  Draft: "bg-muted text-muted-foreground border-border",
}

export default function PoliciesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isDragging, setIsDragging] = useState(false)

  const filteredPolicies = policies.filter((policy) => {
    const matchesSearch = policy.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || policy.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    // Handle file drop
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Policy Management</h1>
          <p className="text-muted-foreground">
            Upload, organize, and manage your corporate policies
          </p>
        </div>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload Policy
        </Button>
      </div>

      {/* Upload Area */}
      <Card
        className={cn(
          "border-2 border-dashed transition-colors",
          isDragging ? "border-primary bg-primary/5" : "border-border"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
            <CloudUpload className={cn(
              "h-7 w-7",
              isDragging ? "text-primary" : "text-muted-foreground"
            )} />
          </div>
          <h3 className="mt-4 text-lg font-semibold">
            {isDragging ? "Drop files here" : "Drag and drop files here"}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            or click to browse from your computer
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Supported formats: PDF, DOCX, DOC, TXT (Max 25MB)
          </p>
          <Button variant="outline" className="mt-4">
            Browse Files
          </Button>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search policies..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="h-8"
                  >
                    {category}
                  </Button>
                ))}
              </div>
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
                  <th className="pb-3 font-medium">Size</th>
                  <th className="pb-3 font-medium">Last Modified</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPolicies.map((policy) => (
                  <tr key={policy.id} className="border-b last:border-0 hover:bg-muted/50">
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
                    <td className="py-4 text-muted-foreground">{policy.size}</td>
                    <td className="py-4 text-muted-foreground">{policy.lastModified}</td>
                    <td className="py-4">
                      <Badge variant="outline" className={statusColors[policy.status]}>
                        {policy.status}
                      </Badge>
                    </td>
                    <td className="py-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredPolicies.length === 0 && (
            <div className="py-12 text-center">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <h3 className="mt-4 text-lg font-semibold">No policies found</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

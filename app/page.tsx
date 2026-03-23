import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ShieldCheck,
  FileText,
  BarChart3,
  Bot,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "Policy Management",
    description:
      "Upload, organize, and manage all your corporate policies in one centralized location.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Monitoring",
    description:
      "Automatically track compliance status across multiple regulatory frameworks.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Gain valuable insights into policy usage, compliance trends, and team engagement.",
  },
  {
    icon: Bot,
    title: "AI-Powered Assistant",
    description:
      "Ask questions and get instant answers about your policies with our AI assistant.",
  },
]

const benefits = [
  "Reduce policy management time by 70%",
  "Ensure regulatory compliance automatically",
  "Centralize all corporate policies",
  "AI-powered policy search and summaries",
  "Real-time compliance monitoring",
  "Detailed analytics and reporting",
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <ShieldCheck className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold">PolicyBridge</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Sign in</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            AI-Powered Policy Automation
          </div>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Simplify Corporate Policy Management with AI
          </h1>
          <p className="mt-6 text-pretty text-lg text-muted-foreground">
            PolicyBridge automates policy management, ensures compliance, and provides
            AI-powered insights. Streamline your corporate governance today.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/signup">
              <Button size="lg" className="gap-2">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Everything you need for policy management
          </h2>
          <p className="mt-4 text-muted-foreground">
            Powerful features to automate and streamline your corporate policies
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Transform your policy management
              </h2>
              <p className="mt-4 text-muted-foreground">
                Join hundreds of companies that have streamlined their corporate
                governance with PolicyBridge.
              </p>
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/signup">
                  <Button size="lg">Get Started Today</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">94%</p>
                      <p className="text-sm text-muted-foreground">
                        Average Compliance Score
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
                      <FileText className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">10,000+</p>
                      <p className="text-sm text-muted-foreground">
                        Policies Managed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-chart-2/10">
                      <Bot className="h-6 w-6 text-chart-2" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">50,000+</p>
                      <p className="text-sm text-muted-foreground">
                        AI Queries Answered
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to streamline your policy management?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Start your free trial today and experience the power of AI-driven policy
            automation.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/signup">
              <Button size="lg" className="gap-2">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary">
                <ShieldCheck className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium">PolicyBridge</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 PolicyBridge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

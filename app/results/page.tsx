"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Scale, ArrowLeft, TrendingUp, FileText, Star, MapPin, Phone, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface CaseData {
  category: string
  description: string
  location: string
  fileCount: number
}

const mockPrecedents = [
  {
    name: "Smith v. Johnson Corp",
    year: "2023",
    outcome: "Plaintiff Won",
    relevance: 94,
    summary: "Similar employment discrimination case with comparable circumstances. Resulted in $125,000 settlement.",
  },
  {
    name: "Williams v. Metro Industries",
    year: "2022",
    outcome: "Settlement",
    relevance: 87,
    summary: "Wrongful termination case with pattern of retaliation. Settled for $85,000 plus reinstatement.",
  },
  {
    name: "Davis v. TechStart LLC",
    year: "2024",
    outcome: "Plaintiff Won",
    relevance: 81,
    summary: "Hostile work environment claim with documented evidence. Jury awarded $200,000 in damages.",
  },
]

const mockLawyers = [
  {
    name: "Sarah Mitchell",
    firm: "Mitchell & Associates",
    specialization: "Employment Law",
    rating: 4.9,
    reviews: 127,
    location: "Los Angeles, CA",
    yearsExperience: 15,
  },
  {
    name: "David Chen",
    firm: "Chen Law Group",
    specialization: "Employment Law",
    rating: 4.8,
    reviews: 98,
    location: "Los Angeles, CA",
    yearsExperience: 12,
  },
  {
    name: "Jennifer Rodriguez",
    firm: "Rodriguez Legal Partners",
    specialization: "Employment Law",
    rating: 4.7,
    reviews: 84,
    location: "Los Angeles, CA",
    yearsExperience: 10,
  },
]

function getStrengthColor(score: number) {
  if (score >= 75) return "text-accent"
  if (score >= 50) return "text-chart-4"
  return "text-destructive"
}

function getStrengthLabel(score: number) {
  if (score >= 75) return "Strong"
  if (score >= 50) return "Moderate"
  return "Weak"
}

export default function ResultsPage() {
  const [caseData, setCaseData] = useState<CaseData | null>(null)
  const [caseStrength] = useState(78)

  useEffect(() => {
    const stored = sessionStorage.getItem("caseData")
    if (stored) {
      setCaseData(JSON.parse(stored))
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-foreground" />
            <span className="text-xl font-semibold tracking-tight">FairCase</span>
          </Link>
          <Link
            href="/analyze"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            New Analysis
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Your Case Analysis</h1>
          <p className="mt-2 text-muted-foreground">
            {caseData
              ? `${caseData.category} case in ${caseData.location}`
              : "Analysis results for your legal case"}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Case Strength Score */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Case Strength Score
              </CardTitle>
              <CardDescription>
                Based on AI analysis of your case details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center py-4">
                <div className="relative mb-4 flex h-32 w-32 items-center justify-center rounded-full border-4 border-secondary">
                  <span className={`text-4xl font-bold ${getStrengthColor(caseStrength)}`}>
                    {caseStrength}
                  </span>
                  <span className="absolute -bottom-1 text-sm text-muted-foreground">/100</span>
                </div>
                <Badge
                  variant="secondary"
                  className={`${getStrengthColor(caseStrength)} text-sm font-medium`}
                >
                  {getStrengthLabel(caseStrength)} Case
                </Badge>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Evidence Quality</span>
                  <span className="font-medium">Good</span>
                </div>
                <Progress value={72} className="h-2" />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Legal Precedent</span>
                  <span className="font-medium">Strong</span>
                </div>
                <Progress value={85} className="h-2" />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Jurisdiction Favorability</span>
                  <span className="font-medium">Moderate</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Similar Precedents */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Similar Precedents
              </CardTitle>
              <CardDescription>
                Relevant cases that may impact your situation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockPrecedents.map((precedent, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted/30"
                >
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold">{precedent.name}</h3>
                      <p className="text-sm text-muted-foreground">{precedent.year}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{precedent.outcome}</Badge>
                      <Badge variant="secondary">{precedent.relevance}% Match</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{precedent.summary}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recommended Lawyers */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Recommended Lawyers
              </CardTitle>
              <CardDescription>
                Top-rated attorneys specializing in your case type
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {mockLawyers.map((lawyer, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-border bg-card p-5 transition-shadow hover:shadow-md"
                  >
                    <div className="mb-3 flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{lawyer.name}</h3>
                        <p className="text-sm text-muted-foreground">{lawyer.firm}</p>
                      </div>
                      <div className="flex items-center gap-1 rounded-md bg-secondary px-2 py-1">
                        <Star className="h-3 w-3 fill-chart-4 text-chart-4" />
                        <span className="text-sm font-medium">{lawyer.rating}</span>
                      </div>
                    </div>
                    <div className="mb-4 space-y-1.5 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {lawyer.location}
                      </div>
                      <p>{lawyer.specialization} &bull; {lawyer.yearsExperience} years</p>
                      <p>{lawyer.reviews} reviews</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Phone className="mr-1.5 h-3 w-3" />
                        Call
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Mail className="mr-1.5 h-3 w-3" />
                        Email
                      </Button>
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="mr-1.5 h-3 w-3" />
                        Profile
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 rounded-lg border border-border bg-card p-8 text-center">
          <h2 className="text-xl font-semibold">Ready to take the next step?</h2>
          <p className="max-w-md text-muted-foreground">
            Connect with one of our recommended lawyers for a free consultation and discuss your case in detail.
          </p>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link href="/analyze">Analyze Another Case</Link>
            </Button>
            <Button>Schedule Consultation</Button>
          </div>
        </div>
      </main>
    </div>
  )
}

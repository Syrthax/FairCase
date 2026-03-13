import Link from "next/link"
import { ArrowLeft, Scale } from "lucide-react"
import { CaseAnalysisForm } from "@/components/case-analysis-form"

export default function AnalyzePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-foreground" />
            <span className="text-xl font-semibold tracking-tight">FairCase</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>
      <main className="px-4 py-12 sm:px-6 sm:py-16">
        <CaseAnalysisForm />
      </main>
    </div>
  )
}

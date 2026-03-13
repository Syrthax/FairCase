import { BarChart3, FileSearch, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: BarChart3,
    title: "Case Strength Analysis",
    description:
      "Our AI analyzes your case details and provides a comprehensive strength score based on legal precedents and outcomes.",
  },
  {
    icon: FileSearch,
    title: "Similar Precedents",
    description:
      "Discover relevant case precedents that could impact your situation, with detailed outcome analysis.",
  },
  {
    icon: Users,
    title: "Lawyer Matching",
    description:
      "Get matched with experienced lawyers who specialize in your case category and have a proven track record.",
  },
]

export function Features() {
  return (
    <section id="features" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to understand your case
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Powerful tools to help you make informed legal decisions
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border/50 bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                  <feature.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

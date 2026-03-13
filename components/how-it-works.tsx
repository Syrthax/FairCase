export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Submit Your Case",
      description: "Fill out our simple form with your case category, description, location, and any relevant documents.",
    },
    {
      number: "2",
      title: "AI Analysis",
      description: "Our advanced AI analyzes your case against thousands of legal precedents and outcomes.",
    },
    {
      number: "3",
      title: "Get Results",
      description: "Receive a detailed report with case strength score, similar precedents, and lawyer recommendations.",
    },
  ]

  return (
    <section id="how-it-works" className="bg-card px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three simple steps to understand your legal position
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-border bg-background">
                <span className="text-2xl font-bold">{step.number}</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

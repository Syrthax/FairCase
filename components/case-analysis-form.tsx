"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Upload, X, FileText, ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const caseCategories = [
  "Personal Injury",
  "Employment Law",
  "Family Law",
  "Criminal Defense",
  "Real Estate",
  "Business/Commercial",
  "Intellectual Property",
  "Immigration",
  "Bankruptcy",
  "Civil Rights",
  "Medical Malpractice",
  "Other",
]

export function CaseAnalysisForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [formData, setFormData] = useState({
    category: "",
    description: "",
    location: "",
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files || [])])
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    // Store form data in sessionStorage for the results page
    sessionStorage.setItem("caseData", JSON.stringify({
      ...formData,
      fileCount: files.length,
    }))
    
    router.push("/results")
  }

  return (
    <Card className="mx-auto w-full max-w-2xl border-border/50">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Analyze Your Case</CardTitle>
        <CardDescription>
          Provide details about your legal matter for a comprehensive analysis
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="category">Case Category</Label>
            <Select
              value={formData.category}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, category: value }))
              }
              required
            >
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {caseCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Case Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your legal situation in detail. Include relevant dates, parties involved, and any actions taken so far..."
              className="min-h-[150px] resize-none"
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, description: e.target.value }))
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              placeholder="City, State (e.g., Los Angeles, CA)"
              value={formData.location}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, location: e.target.value }))
              }
              required
            />
            <p className="text-sm text-muted-foreground">
              Laws vary by jurisdiction. This helps us provide accurate analysis.
            </p>
          </div>

          <div className="space-y-2">
            <Label>Document Upload</Label>
            <div className="rounded-lg border-2 border-dashed border-border bg-muted/30 p-6 text-center transition-colors hover:border-muted-foreground/50">
              <input
                type="file"
                id="documents"
                multiple
                accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                className="hidden"
                onChange={handleFileChange}
              />
              <label
                htmlFor="documents"
                className="flex cursor-pointer flex-col items-center"
              >
                <Upload className="mb-3 h-10 w-10 text-muted-foreground" />
                <span className="mb-1 font-medium">
                  Click to upload documents
                </span>
                <span className="text-sm text-muted-foreground">
                  PDF, DOC, DOCX, TXT, or images (max 10MB each)
                </span>
              </label>
            </div>

            {files.length > 0 && (
              <div className="mt-4 space-y-2">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border border-border bg-card p-3"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">{file.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {(file.size / 1024).toFixed(1)} KB
                        </p>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFile(index)}
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove file</span>
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting || !formData.category || !formData.description || !formData.location}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                Analyze My Case
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            Your information is encrypted and kept confidential. We never share your data with third parties.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}

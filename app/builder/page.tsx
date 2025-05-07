"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  BarChart2,
  Check,
  Download,
  Eye,
  FileText,
  HelpCircle,
  Layers,
  Settings,
  Share2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ResumePreview } from "@/components/resume-preview"
import { ThemeSelector } from "@/components/theme-selector"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ResumeAnalytics } from "@/components/resume-analytics"
import { ExportOptions } from "@/components/export-options"
import { LanguageSelector } from "@/components/language-selector"
import { exportAsPDF } from "@/lib/export-utils"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toast"

const defaultMarkdown = `# John Doe
**Senior Software Engineer** | [john@example.com](mailto:john@example.com) | (555) 123-4567 | [LinkedIn](https://linkedin.com/in/johndoe) | [GitHub](https://github.com/johndoe)

## Professional Summary
Results-driven software engineer with 8+ years of experience developing scalable web applications and microservices. Specialized in cloud architecture, performance optimization, and leading development teams. Passionate about creating elegant solutions to complex problems.

## Work Experience
### Senior Software Engineer | Tech Innovations Inc.
*January 2020 - Present*
- Led development of a microservices architecture that improved system reliability by 40% and reduced deployment time by 65%
- Architected and implemented a real-time data processing pipeline handling 50M+ daily events
- Mentored 5 junior developers, conducting regular code reviews and technical training sessions
- Reduced cloud infrastructure costs by 30% through optimization and implementation of serverless architecture

### Software Engineer | Digital Solutions LLC
*June 2017 - December 2019*
- Developed RESTful APIs and backend services supporting 100K+ daily active users
- Implemented automated testing strategies that increased code coverage from 65% to 92%
- Collaborated with UX designers to implement responsive UI components and improve user experience
- Optimized database queries resulting in 40% faster page load times

### Junior Developer | WebTech Startup
*August 2015 - May 2017*
- Contributed to frontend development using React and Redux
- Implemented responsive designs and ensured cross-browser compatibility
- Participated in agile development processes, including daily standups and sprint planning

## Education
### Master of Science in Computer Science
*University of Technology | 2013 - 2015*
- GPA: 3.8/4.0
- Thesis: "Efficient Algorithms for Distributed Systems"

### Bachelor of Science in Computer Engineering
*State University | 2009 - 2013*
- GPA: 3.7/4.0
- Dean's List: All semesters

## Technical Skills
- **Languages**: JavaScript/TypeScript, Python, Java, Go, SQL
- **Frontend**: React, Vue.js, Angular, HTML5, CSS3, SASS
- **Backend**: Node.js, Express, Django, Spring Boot
- **Database**: MongoDB, PostgreSQL, MySQL, Redis
- **Cloud & DevOps**: AWS, Azure, Docker, Kubernetes, CI/CD, Terraform
- **Tools & Methodologies**: Git, Agile/Scrum, TDD, Microservices Architecture

## Certifications
- AWS Certified Solutions Architect – Professional
- Google Cloud Professional Cloud Architect
- Certified Kubernetes Administrator (CKA)

## Projects
### Cloud-Native E-commerce Platform
- Designed and implemented a scalable e-commerce platform using microservices architecture
- Utilized Kubernetes for orchestration and implemented CI/CD pipelines for continuous deployment
- Integrated payment processing systems and inventory management solutions

### Real-time Analytics Dashboard
- Developed a real-time analytics dashboard processing millions of events daily
- Implemented data visualization components using D3.js and WebSocket for live updates
- Optimized for performance across desktop and mobile devices
`

export default function ResumeBuilder() {
  const [markdown, setMarkdown] = useState(defaultMarkdown)
  const [theme, setTheme] = useState("professional")
  const [activeTab, setActiveTab] = useState("editor")
  const [atsScore, setAtsScore] = useState(92)
  const [jobTitle, setJobTitle] = useState("Senior Software Engineer")
  const [previewHtml, setPreviewHtml] = useState("")
  const [isExporting, setIsExporting] = useState(false)
  const { toast } = useToast()

  const handleExport = async () => {
    setIsExporting(true)
    try {
      const success = await exportAsPDF("resume-preview", "resume.pdf")
      if (success) {
        toast({
          title: "Export successful",
          description: "Your resume has been exported as PDF",
          variant: "success",
        })
      } else {
        throw new Error("Export failed")
      }
    } catch (error) {
      console.error("Error exporting PDF:", error)
      toast({
        title: "Export failed",
        description: "There was an error exporting your resume",
        variant: "destructive",
      })
    } finally {
      setIsExporting(false)
    }
  }

  // Force preview tab when exporting
  useEffect(() => {
    if (isExporting && activeTab !== "preview") {
      setActiveTab("preview")
    }
  }, [isExporting, activeTab])

  return (
    <div className="flex min-h-screen flex-col">
      <Toaster />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <span className="font-semibold">Minu Resume Builder</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <HelpCircle className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Resume Help</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Badge variant="outline" className="gap-1">
              <span className="text-xs font-normal text-muted-foreground">Job Title:</span>
              <span className="text-xs">{jobTitle}</span>
            </Badge>
            <Badge variant="outline" className="gap-1">
              <span className="text-xs font-normal text-muted-foreground">ATS Score:</span>
              <span className="text-xs">{atsScore}%</span>
            </Badge>
            <ThemeSelector value={theme} onValueChange={setTheme} />
            <Button onClick={handleExport} className="gap-2" disabled={isExporting}>
              <Download className="h-4 w-4" />
              {isExporting ? "Exporting..." : "Export"}
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Professional Resume Builder</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Layers className="h-4 w-4" />
              Templates
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="editor" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Editor
                </TabsTrigger>
                <TabsTrigger value="preview" className="gap-2">
                  <Eye className="h-4 w-4" />
                  Preview
                </TabsTrigger>
              </TabsList>

              <TabsContent value="editor" className="mt-4">
                <Card>
                  <CardContent className="p-4">
                    <Textarea
                      value={markdown}
                      onChange={(e) => setMarkdown(e.target.value)}
                      className="min-h-[70vh] font-mono text-sm"
                      placeholder="Enter your resume in Markdown format..."
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preview" className="mt-4">
                <Card className="overflow-hidden">
                  <CardContent className="p-6 min-h-[70vh] bg-white">
                    <ResumePreview markdown={markdown} theme={theme} onHtmlChange={setPreviewHtml} />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">ATS Optimization</h3>
                    <Badge variant={atsScore >= 80 ? "success" : "warning"} className="text-xs">
                      {atsScore}%
                    </Badge>
                  </div>
                  <Progress value={atsScore} className="h-2" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Key skills present</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Professional summary</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Quantifiable achievements</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Contact information</span>
                    </div>
                  </div>
                  <Button size="sm" className="w-full">
                    Analyze for Job Match
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Export Options</h3>
                    <BarChart2 className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <ExportOptions markdown={markdown} previewId="resume-preview" previewHtml={previewHtml} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Resume Analytics</h3>
                    <BarChart2 className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <ResumeAnalytics />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="border-t py-4">
        <div className="container flex justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Minu</p>
          <p className="text-sm text-muted-foreground">Onur YERLİKAYA</p>
        </div>
      </footer>
    </div>
  )
}

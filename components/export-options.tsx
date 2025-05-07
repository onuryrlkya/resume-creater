"use client"

import { useState } from "react"
import { Download, FileText, FileImage, FileJson, FileCog } from "lucide-react"
import { Button } from "@/components/ui/button"
import { exportAsPDF, exportAsHTML, exportAsJSON, exportAsDOCX } from "@/lib/export-utils"
import { useToast } from "@/hooks/use-toast"

interface ExportOptionsProps {
  markdown: string
  previewId: string
  previewHtml: string
}

export function ExportOptions({ markdown, previewId, previewHtml }: ExportOptionsProps) {
  const { toast } = useToast()
  const [isExporting, setIsExporting] = useState<string | null>(null)

  const handleExport = async (format: string) => {
    setIsExporting(format)
    let success = false

    try {
      switch (format) {
        case "PDF":
          success = await exportAsPDF(previewId, "resume.pdf")
          break
        case "DOCX":
          success = exportAsDOCX(previewHtml, "resume.docx")
          break
        case "HTML":
          success = exportAsHTML(previewHtml, "resume.html")
          break
        case "JSON":
          success = exportAsJSON(markdown, "resume.json")
          break
        default:
          throw new Error("Unsupported format")
      }

      if (success) {
        toast({
          title: "Export successful",
          description: `Your resume has been exported as ${format}`,
          variant: "default",
        })
      } else {
        throw new Error("Export failed")
      }
    } catch (error) {
      console.error(`Error exporting as ${format}:`, error)
      toast({
        title: "Export failed",
        description: `There was an error exporting your resume as ${format}`,
        variant: "destructive",
      })
    } finally {
      setIsExporting(null)
    }
  }

  const handleExportAll = async () => {
    setIsExporting("ALL")
    try {
      await exportAsPDF(previewId, "resume.pdf")
      exportAsDOCX(previewHtml, "resume.docx")
      exportAsHTML(previewHtml, "resume.html")
      exportAsJSON(markdown, "resume.json")

      toast({
        title: "Export successful",
        description: "Your resume has been exported in all formats",
        variant: "default",
      })
    } catch (error) {
      console.error("Error exporting all formats:", error)
      toast({
        title: "Export failed",
        description: "There was an error exporting your resume in all formats",
        variant: "destructive",
      })
    } finally {
      setIsExporting(null)
    }
  }

  return (
    <div className="space-y-2">
      <Button
        variant="outline"
        size="sm"
        className="w-full justify-start gap-2"
        onClick={() => handleExport("PDF")}
        disabled={isExporting !== null}
      >
        <FileText className="h-4 w-4" />
        <span>PDF Document</span>
        {isExporting === "PDF" && <span className="ml-auto animate-spin">⏳</span>}
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="w-full justify-start gap-2"
        onClick={() => handleExport("DOCX")}
        disabled={isExporting !== null}
      >
        <FileCog className="h-4 w-4" />
        <span>Word Document (DOCX)</span>
        {isExporting === "DOCX" && <span className="ml-auto animate-spin">⏳</span>}
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="w-full justify-start gap-2"
        onClick={() => handleExport("HTML")}
        disabled={isExporting !== null}
      >
        <FileImage className="h-4 w-4" />
        <span>Web Page (HTML)</span>
        {isExporting === "HTML" && <span className="ml-auto animate-spin">⏳</span>}
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="w-full justify-start gap-2"
        onClick={() => handleExport("JSON")}
        disabled={isExporting !== null}
      >
        <FileJson className="h-4 w-4" />
        <span>JSON Data</span>
        {isExporting === "JSON" && <span className="ml-auto animate-spin">⏳</span>}
      </Button>
      <Button
        variant="default"
        size="sm"
        className="w-full gap-2 mt-4"
        onClick={handleExportAll}
        disabled={isExporting !== null}
      >
        <Download className="h-4 w-4" />
        <span>Export All Formats</span>
        {isExporting === "ALL" && <span className="ml-auto animate-spin">⏳</span>}
      </Button>
    </div>
  )
}

import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"
import FileSaver from "file-saver"

// Function to export resume as PDF
export async function exportAsPDF(elementId: string, filename = "resume.pdf") {
  try {
    const element = document.getElementById(elementId)
    if (!element) {
      throw new Error("Element not found")
    }

    // Create a clone of the element to avoid modifying the original
    const clone = element.cloneNode(true) as HTMLElement
    clone.style.width = "800px" // Set fixed width for better PDF quality
    clone.style.padding = "20px"
    clone.style.backgroundColor = "white"

    // Temporarily append to body but hide it
    clone.style.position = "absolute"
    clone.style.left = "-9999px"
    document.body.appendChild(clone)

    // Generate canvas from the element
    const canvas = await html2canvas(clone, {
      scale: 2, // Higher scale for better quality
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
    })

    // Remove the clone
    document.body.removeChild(clone)

    // Calculate PDF dimensions (A4 format)
    const imgData = canvas.toDataURL("image/png")
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    })

    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()
    const canvasRatio = canvas.height / canvas.width
    const imgWidth = pdfWidth
    const imgHeight = pdfWidth * canvasRatio

    // Add image to PDF
    let position = 0
    let heightLeft = imgHeight

    // First page
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
    heightLeft -= pdfHeight

    // Add more pages if needed
    while (heightLeft > 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
      heightLeft -= pdfHeight
    }

    // Save the PDF
    pdf.save(filename)
    return true
  } catch (error) {
    console.error("Error exporting PDF:", error)
    return false
  }
}

// Function to export resume as HTML
export function exportAsHTML(content: string, filename = "resume.html") {
  try {
    // Create basic HTML structure
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resume</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          h1, h2, h3 {
            color: #333;
          }
          a {
            color: #0066cc;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        ${content}
      </body>
      </html>
    `

    // Create blob and download
    const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8" })
    FileSaver.saveAs(blob, filename)
    return true
  } catch (error) {
    console.error("Error exporting HTML:", error)
    return false
  }
}

// Function to export resume as JSON
export function exportAsJSON(markdown: string, filename = "resume.json") {
  try {
    // Create a simple JSON structure with the markdown content
    const jsonData = {
      content: markdown,
      exportDate: new Date().toISOString(),
      format: "markdown",
    }

    // Create blob and download
    const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: "application/json;charset=utf-8" })
    FileSaver.saveAs(blob, filename)
    return true
  } catch (error) {
    console.error("Error exporting JSON:", error)
    return false
  }
}

// Function to export as plain text
export function exportAsText(markdown: string, filename = "resume.txt") {
  try {
    const blob = new Blob([markdown], { type: "text/plain;charset=utf-8" })
    FileSaver.saveAs(blob, filename)
    return true
  } catch (error) {
    console.error("Error exporting text:", error)
    return false
  }
}

// Function to simulate DOCX export (in a real app, you'd use a library like docx.js)
export function exportAsDOCX(content: string, filename = "resume.docx") {
  try {
    // For demonstration, we'll create a simple HTML file with MS Word metadata
    // In a real app, you would use a proper DOCX generation library
    const htmlContent = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office" 
            xmlns:w="urn:schemas-microsoft-com:office:word" 
            xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta charset="utf-8">
        <meta name=ProgId content=Word.Document>
        <meta name=Generator content="Microsoft Word 15">
        <meta name=Originator content="Microsoft Word 15">
        <!--[if gte mso 9]>
        <xml>
          <w:WordDocument>
            <w:View>Print</w:View>
            <w:Zoom>100</w:Zoom>
            <w:DoNotOptimizeForBrowser/>
          </w:WordDocument>
        </xml>
        <![endif]-->
        <style>
          body {
            font-family: Calibri, sans-serif;
            font-size: 11pt;
            line-height: 1.6;
          }
          h1, h2, h3 {
            font-family: Calibri, sans-serif;
          }
          p, li {
            font-size: 11pt;
          }
        </style>
      </head>
      <body>
        ${content}
      </body>
      </html>
    `

    // Create blob with MS Word mime type
    const blob = new Blob([htmlContent], { type: "application/vnd.ms-word;charset=utf-8" })
    FileSaver.saveAs(blob, filename)
    return true
  } catch (error) {
    console.error("Error exporting DOCX:", error)
    return false
  }
}

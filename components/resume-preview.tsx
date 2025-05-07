"use client"

import { useEffect, useState, useRef } from "react"
import ReactMarkdown from "react-markdown"

interface ResumePreviewProps {
  markdown: string
  theme: string
  onHtmlChange?: (html: string) => void
}

export function ResumePreview({ markdown, theme, onHtmlChange }: ResumePreviewProps) {
  const [mounted, setMounted] = useState(false)
  const previewRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && previewRef.current && onHtmlChange) {
      onHtmlChange(previewRef.current.innerHTML)
    }
  }, [markdown, theme, mounted, onHtmlChange])

  if (!mounted) {
    return null
  }

  const themeStyles = {
    professional: {
      container: "max-w-[800px] mx-auto font-serif p-8 bg-white",
      heading1: "text-2xl font-bold text-gray-800 border-b border-gray-200 pb-2 mb-4",
      heading2: "text-xl font-bold text-primary mt-6 mb-3",
      heading3: "text-lg font-semibold text-gray-700 mt-4 mb-2",
      paragraph: "text-gray-600 my-1.5 leading-relaxed",
      list: "list-disc ml-5 my-3",
      listItem: "text-gray-600 my-1.5 leading-relaxed",
    },
    modern: {
      container: "max-w-[800px] mx-auto font-sans p-8 bg-white",
      heading1: "text-3xl font-bold text-gray-900 mb-4",
      heading2: "text-xl font-bold text-primary mt-6 mb-3 uppercase tracking-wider",
      heading3: "text-lg font-semibold text-gray-800 mt-4 mb-2",
      paragraph: "text-gray-700 my-1.5 leading-relaxed",
      list: "list-disc ml-5 my-3",
      listItem: "text-gray-700 my-1.5 leading-relaxed",
    },
    creative: {
      container: "max-w-[800px] mx-auto font-sans p-8 bg-white",
      heading1: "text-3xl font-bold text-gray-900 mb-6 border-l-4 border-primary pl-3",
      heading2:
        "text-xl font-bold text-primary mt-8 mb-4 flex items-center before:content-[''] before:w-4 before:h-4 before:bg-primary before:mr-2 before:rounded-full",
      heading3: "text-lg font-semibold text-gray-800 mt-4 mb-2 italic",
      paragraph: "text-gray-700 my-2 leading-relaxed",
      list: "list-disc ml-5 my-4 marker:text-primary",
      listItem: "text-gray-700 my-2 leading-relaxed",
    },
    executive: {
      container: "max-w-[800px] mx-auto font-serif p-8 bg-white",
      heading1: "text-3xl font-bold text-gray-900 mb-6 text-center",
      heading2: "text-xl font-bold text-primary mt-8 mb-4 uppercase border-b border-gray-200 pb-1",
      heading3: "text-lg font-semibold text-gray-800 mt-4 mb-2",
      paragraph: "text-gray-700 my-2 leading-relaxed",
      list: "list-disc ml-5 my-3",
      listItem: "text-gray-700 my-1.5 leading-relaxed",
    },
    technical: {
      container: "max-w-[800px] mx-auto font-mono p-8 bg-white",
      heading1: "text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-primary",
      heading2: "text-xl font-bold text-primary mt-6 mb-3 flex items-center gap-2 before:content-['//']",
      heading3: "text-lg font-semibold text-gray-800 mt-4 mb-2",
      paragraph: "text-gray-700 my-1.5 leading-relaxed",
      list: "list-disc ml-5 my-3 marker:text-primary",
      listItem: "text-gray-700 my-1.5 leading-relaxed",
    },
    minimalist: {
      container: "max-w-[800px] mx-auto font-sans p-8 bg-white",
      heading1: "text-2xl font-bold text-gray-900 mb-6",
      heading2: "text-lg font-medium text-primary mt-6 mb-3",
      heading3: "text-base font-medium text-gray-800 mt-4 mb-2",
      paragraph: "text-gray-700 my-1.5 leading-relaxed",
      list: "list-disc ml-5 my-3",
      listItem: "text-gray-700 my-1.5 leading-relaxed",
    },
  }

  const styles = themeStyles[theme as keyof typeof themeStyles] || themeStyles.professional

  return (
    <div className={styles.container} ref={previewRef} id="resume-preview">
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => <h1 className={styles.heading1} {...props} />,
          h2: ({ node, ...props }) => <h2 className={styles.heading2} {...props} />,
          h3: ({ node, ...props }) => <h3 className={styles.heading3} {...props} />,
          p: ({ node, ...props }) => <p className={styles.paragraph} {...props} />,
          ul: ({ node, ...props }) => <ul className={styles.list} {...props} />,
          li: ({ node, ...props }) => <li className={styles.listItem} {...props} />,
          a: ({ node, ...props }) => (
            <a className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
          ),
          strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
          em: ({ node, ...props }) => <em className="italic" {...props} />,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

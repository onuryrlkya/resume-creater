"use client"

import { X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export function Toaster() {
  const { toasts, dismiss } = useToast()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="fixed top-0 right-0 z-50 flex flex-col items-end p-4 space-y-4 max-w-md w-full">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "w-full bg-white rounded-lg shadow-lg border overflow-hidden transition-all duration-300 transform",
            toast.visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
            toast.variant === "destructive" && "border-red-500",
            toast.variant === "success" && "border-green-500",
          )}
        >
          <div className="p-4 relative">
            <button
              onClick={() => dismiss(toast.id)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex items-start">
              <div>
                <h3 className="font-medium text-gray-900">{toast.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{toast.description}</p>
              </div>
            </div>
          </div>
          <div
            className={cn(
              "h-1 transition-all duration-300",
              toast.variant === "destructive" && "bg-red-500",
              toast.variant === "success" && "bg-green-500",
              toast.variant === "default" && "bg-blue-500",
            )}
            style={{
              width: "100%",
              animation: `shrink ${toast.duration}ms linear forwards`,
            }}
          />
        </div>
      ))}
      <style jsx global>{`
        @keyframes shrink {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>
    </div>
  )
}

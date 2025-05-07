"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  {
    name: "Skills",
    value: 18,
  },
  {
    name: "Experience",
    value: 12,
  },
  {
    name: "Education",
    value: 6,
  },
  {
    name: "Projects",
    value: 8,
  },
  {
    name: "Certifications",
    value: 3,
  },
]

export function ResumeAnalytics() {
  return (
    <div className="space-y-4">
      <div className="h-[160px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" fontSize={10} tickLine={false} axisLine={false} />
            <YAxis fontSize={10} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                fontSize: "12px",
                padding: "8px",
                border: "none",
                borderRadius: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
              }}
            />
            <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="text-xs text-muted-foreground">
        <p>Content distribution across resume sections</p>
      </div>
    </div>
  )
}

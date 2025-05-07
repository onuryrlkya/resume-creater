"use client"

import { Check, ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const themes = [
  { value: "professional", label: "Professional" },
  { value: "modern", label: "Modern" },
  { value: "creative", label: "Creative" },
  { value: "executive", label: "Executive" },
  { value: "technical", label: "Technical" },
  { value: "minimalist", label: "Minimalist" },
]

interface ThemeSelectorProps {
  value: string
  onValueChange: (value: string) => void
}

export function ThemeSelector({ value, onValueChange }: ThemeSelectorProps) {
  const selectedTheme = themes.find((theme) => theme.value === value)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" className="w-[180px] justify-between">
          {selectedTheme?.label || "Select theme..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[180px] p-0">
        <Command>
          <CommandInput placeholder="Search theme..." />
          <CommandList>
            <CommandEmpty>No theme found.</CommandEmpty>
            <CommandGroup>
              {themes.map((theme) => (
                <CommandItem key={theme.value} value={theme.value} onSelect={() => onValueChange(theme.value)}>
                  <Check className={cn("mr-2 h-4 w-4", value === theme.value ? "opacity-100" : "opacity-0")} />
                  {theme.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

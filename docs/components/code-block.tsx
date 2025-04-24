"use client"

import { useState } from "react"
import { Clipboard, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language: string
  filename?: string
}

export function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative rounded-lg border border-slate-200 dark:border-slate-800 my-4 overflow-hidden group">
      {filename && (
        <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 text-sm font-mono text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
          {filename}
        </div>
      )}
      <pre
        className={cn(
          "p-4 overflow-x-auto text-sm",
          language === "c" && "language-c",
          language === "asm" && "language-asm",
          language === "x86" && "language-x86",
          language === "arm" && "language-arm",
        )}
      >
        <code className="font-mono">{code}</code>
      </pre>
      <Button
        size="icon"
        variant="ghost"
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={copyToClipboard}
      >
        {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
      </Button>
    </div>
  )
}

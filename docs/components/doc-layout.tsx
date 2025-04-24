import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DocLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <header className="h-14 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800">
          <div></div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/your-username/low-level-programming"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </header>
        <main className="max-w-4xl mx-auto py-8 px-6">{children}</main>
      </div>
    </div>
  )
}

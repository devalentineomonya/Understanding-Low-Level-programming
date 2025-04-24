"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight, FileIcon, FolderIcon, BookOpen } from "lucide-react"

type FileTreeItem = {
  name: string
  path: string
  icon: React.ElementType
  color?: string
  children?: FileTreeItem[]
}

const fileTree: FileTreeItem[] = [
  {
    name: "Getting Started",
    path: "/",
    icon: BookOpen,
    color: "text-blue-500",
  },
  {
    name: "01-fundamentals",
    path: "/fundamentals",
    icon: FolderIcon,
    color: "text-blue-500",
    children: [
      {
        name: "Binary Representation",
        path: "/fundamentals/binary-representation",
        icon: FileIcon,
      },
      {
        name: "Number Systems",
        path: "/fundamentals/number-systems",
        icon: FileIcon,
      },
      {
        name: "Bitwise Operations",
        path: "/fundamentals/bitwise-operations",
        icon: FileIcon,
      },
    ],
  },
  {
    name: "02-memory-management",
    path: "/memory-management",
    icon: FolderIcon,
    color: "text-green-500",
    children: [
      {
        name: "Stack vs Heap",
        path: "/memory-management/stack-vs-heap",
        icon: FileIcon,
      },
      {
        name: "Pointers",
        path: "/memory-management/pointers",
        icon: FileIcon,
      },
      {
        name: "Memory Allocation",
        path: "/memory-management/memory-allocation",
        icon: FileIcon,
      },
    ],
  },
  {
    name: "03-assembly",
    path: "/assembly",
    icon: FolderIcon,
    color: "text-purple-500",
    children: [
      {
        name: "x86 Basics",
        path: "/assembly/x86-basics",
        icon: FileIcon,
      },
      {
        name: "ARM Basics",
        path: "/assembly/arm-basics",
        icon: FileIcon,
      },
      {
        name: "Inline Assembly",
        path: "/assembly/inline-assembly",
        icon: FileIcon,
      },
    ],
  },
  {
    name: "04-system-calls",
    path: "/system-calls",
    icon: FolderIcon,
    color: "text-yellow-500",
    children: [
      {
        name: "Linux Syscalls",
        path: "/system-calls/linux-syscalls",
        icon: FileIcon,
      },
      {
        name: "Windows API",
        path: "/system-calls/windows-api",
        icon: FileIcon,
      },
    ],
  },
  {
    name: "05-hardware-interaction",
    path: "/hardware-interaction",
    icon: FolderIcon,
    color: "text-red-500",
    children: [
      {
        name: "I/O Ports",
        path: "/hardware-interaction/io-ports",
        icon: FileIcon,
      },
      {
        name: "Memory-Mapped I/O",
        path: "/hardware-interaction/memory-mapped-io",
        icon: FileIcon,
      },
      {
        name: "Device Drivers",
        path: "/hardware-interaction/device-drivers",
        icon: FileIcon,
      },
    ],
  },
  {
    name: "06-optimization",
    path: "/optimization",
    icon: FolderIcon,
    color: "text-indigo-500",
    children: [
      {
        name: "Cache Optimization",
        path: "/optimization/cache-optimization",
        icon: FileIcon,
      },
      {
        name: "SIMD Instructions",
        path: "/optimization/simd-instructions",
        icon: FileIcon,
      },
      {
        name: "Compiler Optimizations",
        path: "/optimization/compiler-optimizations",
        icon: FileIcon,
      },
    ],
  },
  {
    name: "07-projects",
    path: "/projects",
    icon: FolderIcon,
    color: "text-pink-500",
    children: [
      {
        name: "Bootloader",
        path: "/projects/bootloader",
        icon: FileIcon,
      },
      {
        name: "Custom Allocator",
        path: "/projects/custom-allocator",
        icon: FileIcon,
      },
      {
        name: "Mini OS",
        path: "/projects/mini-os",
        icon: FileIcon,
      },
    ],
  },
  {
    name: "Resources",
    path: "/resources",
    icon: BookOpen,
    color: "text-gray-500",
    children: [
      {
        name: "Books",
        path: "/resources/books",
        icon: FileIcon,
      },
      {
        name: "Tools",
        path: "/resources/tools",
        icon: FileIcon,
      },
      {
        name: "Online Courses",
        path: "/resources/online-courses",
        icon: FileIcon,
      },
    ],
  },
]

interface TreeNodeProps {
  item: FileTreeItem
  level?: number
  expanded?: boolean
}

const TreeNode = ({ item, level = 0, expanded = false }: TreeNodeProps) => {
  const [isOpen, setIsOpen] = useState(expanded)
  const pathname = usePathname()
  const isActive = pathname === item.path
  const hasChildren = item.children && item.children.length > 0
  const Icon = item.icon

  return (
    <div className="select-none">
      <div
        className={cn(
          "flex items-center py-1 px-2 rounded-md",
          isActive ? "bg-slate-100 dark:bg-slate-800 font-medium" : "hover:bg-slate-50 dark:hover:bg-slate-800/50",
          item.color,
        )}
      >
        <Button
          variant="ghost"
          size="icon"
          className={cn("h-6 w-6", !hasChildren && "opacity-0 pointer-events-none")}
          onClick={() => hasChildren && setIsOpen(!isOpen)}
        >
          {hasChildren && (isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />)}
        </Button>

        <Icon className={cn("h-4 w-4 mr-2", item.color || "text-slate-500")} />

        <Link
          href={item.path}
          className={cn(
            "flex-1 truncate text-sm",
            isActive ? "text-slate-900 dark:text-slate-50" : "text-slate-700 dark:text-slate-400",
          )}
        >
          {item.name}
        </Link>
      </div>

      {hasChildren && isOpen && (
        <div className="ml-4 pl-2 border-l border-slate-200 dark:border-slate-700">
          {item.children?.map((child) => (
            <TreeNode key={child.path} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export function Sidebar() {
  return (
    <div className="w-full min-w-[240px] max-w-[320px] h-screen overflow-y-auto border-r border-slate-200 dark:border-slate-800 py-6 px-2">
      <div className="px-4 mb-6">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Low-Level Programming</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Comprehensive Documentation</p>
      </div>

      <div className="space-y-1">
        {fileTree.map((item) => (
          <TreeNode key={item.path} item={item} expanded={item.path === "/"} />
        ))}
      </div>
    </div>
  )
}

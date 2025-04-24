import { Folder, File, Code, Terminal, BookOpen, GitBranch } from "lucide-react"

export default function RepositoryStructure() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Low-Level Programming Repository Structure
      </h1>

      <div className="space-y-6">
        {/* Root level */}
        <div className="border rounded-lg p-4 dark:border-gray-700">
          <div className="flex items-center gap-2 font-semibold mb-4">
            <Folder className="h-5 w-5 text-blue-500" />
            <span>Repository Root</span>
          </div>

          <div className="ml-6 space-y-3">
            <div className="flex items-center gap-2">
              <File className="h-4 w-4 text-gray-500" />
              <span>README.md</span>
            </div>
            <div className="flex items-center gap-2">
              <File className="h-4 w-4 text-gray-500" />
              <span>LICENSE</span>
            </div>
            <div className="flex items-center gap-2">
              <File className="h-4 w-4 text-gray-500" />
              <span>CONTRIBUTING.md</span>
            </div>
            <div className="flex items-center gap-2">
              <File className="h-4 w-4 text-gray-500" />
              <span>.gitignore</span>
            </div>

            {/* Main content folders */}
            <div className="space-y-4 mt-4">
              {/* 01-fundamentals */}
              <div className="border-l-2 pl-4 border-blue-500">
                <div className="flex items-center gap-2 font-medium">
                  <Folder className="h-4 w-4 text-blue-500" />
                  <span>01-fundamentals</span>
                </div>
                <div className="ml-6 space-y-2 mt-2">
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-blue-500" />
                    <span>binary-representation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-blue-500" />
                    <span>number-systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-blue-500" />
                    <span>bitwise-operations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <File className="h-4 w-4 text-gray-500" />
                    <span>README.md</span>
                  </div>
                </div>
              </div>

              {/* 02-memory-management */}
              <div className="border-l-2 pl-4 border-green-500">
                <div className="flex items-center gap-2 font-medium">
                  <Folder className="h-4 w-4 text-green-500" />
                  <span>02-memory-management</span>
                </div>
                <div className="ml-6 space-y-2 mt-2">
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-green-500" />
                    <span>stack-vs-heap</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-green-500" />
                    <span>pointers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-green-500" />
                    <span>memory-allocation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <File className="h-4 w-4 text-gray-500" />
                    <span>README.md</span>
                  </div>
                </div>
              </div>

              {/* 03-assembly */}
              <div className="border-l-2 pl-4 border-purple-500">
                <div className="flex items-center gap-2 font-medium">
                  <Folder className="h-4 w-4 text-purple-500" />
                  <span>03-assembly</span>
                </div>
                <div className="ml-6 space-y-2 mt-2">
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-purple-500" />
                    <span>x86-basics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-purple-500" />
                    <span>arm-basics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-purple-500" />
                    <span>inline-assembly</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <File className="h-4 w-4 text-gray-500" />
                    <span>README.md</span>
                  </div>
                </div>
              </div>

              {/* 04-system-calls */}
              <div className="border-l-2 pl-4 border-yellow-500">
                <div className="flex items-center gap-2 font-medium">
                  <Folder className="h-4 w-4 text-yellow-500" />
                  <span>04-system-calls</span>
                </div>
                <div className="ml-6 space-y-2 mt-2">
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-yellow-500" />
                    <span>linux-syscalls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-yellow-500" />
                    <span>windows-api</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <File className="h-4 w-4 text-gray-500" />
                    <span>README.md</span>
                  </div>
                </div>
              </div>

              {/* 05-hardware-interaction */}
              <div className="border-l-2 pl-4 border-red-500">
                <div className="flex items-center gap-2 font-medium">
                  <Folder className="h-4 w-4 text-red-500" />
                  <span>05-hardware-interaction</span>
                </div>
                <div className="ml-6 space-y-2 mt-2">
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-red-500" />
                    <span>io-ports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-red-500" />
                    <span>memory-mapped-io</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-red-500" />
                    <span>device-drivers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <File className="h-4 w-4 text-gray-500" />
                    <span>README.md</span>
                  </div>
                </div>
              </div>

              {/* 06-optimization */}
              <div className="border-l-2 pl-4 border-indigo-500">
                <div className="flex items-center gap-2 font-medium">
                  <Folder className="h-4 w-4 text-indigo-500" />
                  <span>06-optimization</span>
                </div>
                <div className="ml-6 space-y-2 mt-2">
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-indigo-500" />
                    <span>cache-optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-indigo-500" />
                    <span>simd-instructions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-indigo-500" />
                    <span>compiler-optimizations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <File className="h-4 w-4 text-gray-500" />
                    <span>README.md</span>
                  </div>
                </div>
              </div>

              {/* 07-projects */}
              <div className="border-l-2 pl-4 border-pink-500">
                <div className="flex items-center gap-2 font-medium">
                  <Folder className="h-4 w-4 text-pink-500" />
                  <span>07-projects</span>
                </div>
                <div className="ml-6 space-y-2 mt-2">
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-pink-500" />
                    <span>bootloader</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-pink-500" />
                    <span>custom-allocator</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-pink-500" />
                    <span>mini-os</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <File className="h-4 w-4 text-gray-500" />
                    <span>README.md</span>
                  </div>
                </div>
              </div>

              {/* resources */}
              <div className="border-l-2 pl-4 border-gray-500">
                <div className="flex items-center gap-2 font-medium">
                  <Folder className="h-4 w-4 text-gray-500" />
                  <span>resources</span>
                </div>
                <div className="ml-6 space-y-2 mt-2">
                  <div className="flex items-center gap-2">
                    <File className="h-4 w-4 text-gray-500" />
                    <span>books.md</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <File className="h-4 w-4 text-gray-500" />
                    <span>tools.md</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <File className="h-4 w-4 text-gray-500" />
                    <span>online-courses.md</span>
                  </div>
                </div>
              </div>

              {/* challenges */}
              <div className="border-l-2 pl-4 border-orange-500">
                <div className="flex items-center gap-2 font-medium">
                  <Folder className="h-4 w-4 text-orange-500" />
                  <span>challenges</span>
                </div>
                <div className="ml-6 space-y-2 mt-2">
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-orange-500" />
                    <span>beginner</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-orange-500" />
                    <span>intermediate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-orange-500" />
                    <span>advanced</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <File className="h-4 w-4 text-gray-500" />
                    <span>README.md</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 flex-wrap">
          <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-100">
            <Code className="h-4 w-4" />
            <span>Code Examples</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full dark:bg-green-900 dark:text-green-100">
            <Terminal className="h-4 w-4" />
            <span>Exercises</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full dark:bg-purple-900 dark:text-purple-100">
            <BookOpen className="h-4 w-4" />
            <span>Documentation</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full dark:bg-yellow-900 dark:text-yellow-100">
            <GitBranch className="h-4 w-4" />
            <span>Projects</span>
          </div>
        </div>
      </div>
    </div>
  )
}

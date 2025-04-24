import DocLayout from "@/components/doc-layout"
import { CodeBlock } from "@/components/code-block"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <DocLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Understanding Low-Level Programming</h1>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            A comprehensive guide to the foundations of computer systems, from binary to operating systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg hover:shadow-md transition-shadow dark:border-slate-800">
            <h2 className="text-xl font-semibold mb-2">Start with Fundamentals</h2>
            <p className="mb-4 text-slate-600 dark:text-slate-400">
              Master binary representation, number systems, and bitwise operations.
            </p>
            <Button asChild>
              <Link href="/fundamentals">Explore Fundamentals</Link>
            </Button>
          </div>

          <div className="p-6 border rounded-lg hover:shadow-md transition-shadow dark:border-slate-800">
            <h2 className="text-xl font-semibold mb-2">Memory Management</h2>
            <p className="mb-4 text-slate-600 dark:text-slate-400">
              Learn how memory works, from stack and heap to dynamic allocation.
            </p>
            <Button asChild>
              <Link href="/memory-management">Explore Memory</Link>
            </Button>
          </div>

          <div className="p-6 border rounded-lg hover:shadow-md transition-shadow dark:border-slate-800">
            <h2 className="text-xl font-semibold mb-2">Assembly Language</h2>
            <p className="mb-4 text-slate-600 dark:text-slate-400">
              Get closer to the metal with x86 and ARM assembly programming.
            </p>
            <Button asChild>
              <Link href="/assembly">Explore Assembly</Link>
            </Button>
          </div>

          <div className="p-6 border rounded-lg hover:shadow-md transition-shadow dark:border-slate-800">
            <h2 className="text-xl font-semibold mb-2">System Calls</h2>
            <p className="mb-4 text-slate-600 dark:text-slate-400">
              Understand how programs interact with operating systems.
            </p>
            <Button asChild>
              <Link href="/system-calls">Explore System Calls</Link>
            </Button>
          </div>
        </div>

        <div className="py-6">
          <h2 className="text-2xl font-bold mb-4">Featured Code Sample</h2>
          <p className="mb-4">A simple example of bitwise operations in C:</p>
          <CodeBlock
            language="c"
            filename="bitwise_operations.c"
            code={`#include <stdio.h>

/* Demonstrating basic bitwise operations */
int main() {
    unsigned int a = 60;    /* 60 = 0011 1100 */
    unsigned int b = 13;    /* 13 = 0000 1101 */
    int result = 0;

    result = a & b;       /* 12 = 0000 1100 */
    printf("a & b = %d\\n", result);

    result = a | b;       /* 61 = 0011 1101 */
    printf("a | b = %d\\n", result);

    result = a ^ b;       /* 49 = 0011 0001 */
    printf("a ^ b = %d\\n", result);

    result = ~a;          /* -61 = 1100 0011 (2's complement) */
    printf("~a = %d\\n", result);

    result = a << 2;      /* 240 = 1111 0000 */
    printf("a << 2 = %d\\n", result);

    result = a >> 2;      /* 15 = 0000 1111 */
    printf("a >> 2 = %d\\n", result);

    return 0;
}`}
          />
        </div>

        <div className="py-4 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-2xl font-bold mb-4">Learning Path</h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mt-0.5 mr-3">
                1
              </div>
              <div>
                <h3 className="text-lg font-medium">Fundamentals</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Master the basics of binary, hexadecimal, and bitwise operations
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mt-0.5 mr-3">
                2
              </div>
              <div>
                <h3 className="text-lg font-medium">Memory Management</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Understand pointers, stack vs heap, and memory allocation
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center mt-0.5 mr-3">
                3
              </div>
              <div>
                <h3 className="text-lg font-medium">Assembly Language</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Learn the basics of x86 and ARM assembly and instruction formats
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center mt-0.5 mr-3">
                4
              </div>
              <div>
                <h3 className="text-lg font-medium">System Calls</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Explore how programs interact with operating systems
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mt-0.5 mr-3">
                5
              </div>
              <div>
                <h3 className="text-lg font-medium">Hardware Interaction</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Learn about I/O ports, memory-mapped I/O, and device drivers
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center mt-0.5 mr-3">
                6
              </div>
              <div>
                <h3 className="text-lg font-medium">Optimization</h3>
                <p className="text-slate-600 dark:text-slate-400">Master performance optimization techniques</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center mt-0.5 mr-3">
                7
              </div>
              <div>
                <h3 className="text-lg font-medium">Projects</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Apply your knowledge by building your own bootloader, allocator, or mini OS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocLayout>
  )
}

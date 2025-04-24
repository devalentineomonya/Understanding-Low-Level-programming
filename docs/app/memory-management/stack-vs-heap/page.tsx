import DocLayout from "@/components/doc-layout"
import { CodeBlock } from "@/components/code-block"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function StackVsHeap() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Stack vs Heap Memory</h1>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
            <span>Memory Management</span>
            <span className="mx-2">•</span>
            <span>Stack vs Heap</span>
          </div>
          <p className="text-slate-700 dark:text-slate-300">
            Understanding the difference between stack and heap memory allocation is crucial for effective memory
            management in low-level programming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg dark:border-slate-700">
            <h2 className="text-xl font-semibold mb-3">Stack Memory</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">•</span>
                <span>Static memory allocation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">•</span>
                <span>LIFO (Last In, First Out) data structure</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">•</span>
                <span>Limited in size (typically a few MB)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">•</span>
                <span>Very fast access - CPU manages directly</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">•</span>
                <span>Automatic memory management</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">•</span>
                <span>Stores local variables, function parameters, return addresses</span>
              </li>
            </ul>
          </div>

          <div className="p-6 border rounded-lg dark:border-slate-700">
            <h2 className="text-xl font-semibold mb-3">Heap Memory</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-2">•</span>
                <span>Dynamic memory allocation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-2">•</span>
                <span>Free floating region of memory</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-2">•</span>
                <span>Much larger in size (limited by system RAM)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-2">•</span>
                <span>Slower access than stack</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-2">•</span>
                <span>Manual memory management in low-level languages</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-2">•</span>
                <span>Stores objects and variables allocated at runtime</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Memory Layout</h2>
          <p className="mb-4">A typical process memory layout in a modern operating system:</p>

          <div className="p-4 border rounded-lg dark:border-slate-700 overflow-x-auto">
            <pre className="text-sm">
              <code>{`High Address  +------------------------+
               |                        |
               |       Kernel Space     |  (Reserved for OS)
               |                        |
               +------------------------+
               |         Stack          |  Grows downward
               |           ↓            |  (local variables, function parameters)
               +------------------------+
               |           ↑            |
               |          ↓↑            |  Free memory
               |           ↑            |
               +------------------------+
               |           ↓            |  Grows upward
               |          Heap          |  (dynamically allocated memory)
               +------------------------+
               |     Uninitialized      |
               |      Data (BSS)        |  (uninitialized static variables)
               +------------------------+
               |    Initialized Data    |  (initialized static variables)
               +------------------------+
               |         Text           |  (program code/instructions)
Low Address    +------------------------+`}</code>
            </pre>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Stack Memory Example</h2>

          <CodeBlock
            language="c"
            filename="stack_example.c"
            code={`#include <stdio.h>

void function_b(int param) {
    // These are all allocated on the stack
    int local_variable = 5;
    int array[10];
    
    // Stack variables have automatic lifetime
    array[0] = local_variable + param;
    
    printf("Value: %d\\n", array[0]);
    
    // When this function returns, all stack variables are automatically deallocated
}

void function_a() {
    int x = 10;
    function_b(x);
    // x is still valid here
    printf("x is still valid: %d\\n", x);
}

int main() {
    function_a();
    // All stack variables from function_a and function_b are gone
    return 0;
}`}
          />

          <p className="mt-4">
            In this example, all variables (<code>param</code>, <code>local_variable</code>, <code>array</code>,{" "}
            <code>x</code>) are allocated on the stack. When each function returns, its stack frame is deallocated
            automatically.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Heap Memory Example</h2>

          <CodeBlock
            language="c"
            filename="heap_example.c"
            code={`#include <stdio.h>
#include <stdlib.h>

int* create_array(int size) {
    // Allocate memory on the heap
    int* array = (int*)malloc(size * sizeof(int));
    
    if (array == NULL) {
        fprintf(stderr, "Memory allocation failed\\n");
        exit(1);
    }
    
    // Initialize the array
    for (int i = 0; i < size; i++) {
        array[i] = i * 10;
    }
    
    // Return a pointer to the allocated memory
    // This memory persists even after the function returns
    return array;
}

int main() {
    // Get a pointer to heap-allocated memory
    int* my_array = create_array(5);
    
    // Use the heap-allocated memory
    for (int i = 0; i < 5; i++) {
        printf("my_array[%d] = %d\\n", i, my_array[i]);
    }
    
    // IMPORTANT: When we're done, we must free the memory
    // to avoid memory leaks
    free(my_array);
    
    // After free(), my_array is a dangling pointer
    // Using it would be undefined behavior
    // my_array = NULL; // Good practice to avoid dangling pointers
    
    return 0;
}`}
          />

          <p className="mt-4">
            In this example, memory is allocated on the heap using <code>malloc()</code>. This memory persists even
            after the function returns, unlike stack memory. However, it must be manually freed using{" "}
            <code>free()</code> to avoid memory leaks.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Stack vs Heap: When to Use Which</h2>

          <div className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800">
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Characteristic</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Stack</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Heap</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Size determined</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">At compile time</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">At runtime</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Allocation/Deallocation</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Automatic</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Manual (in C/C++)</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Speed</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Fast</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Slower</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Fragmentation</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">No fragmentation</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Can become fragmented</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Best for</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Small, fixed-size data with local scope
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Large data, dynamic size, or data that outlives its scope
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2">Use the Stack when:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>You know the exact size at compile time</li>
            <li>Data is relatively small</li>
            <li>You need fast allocation/deallocation</li>
            <li>You only need the variable within a specific scope</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Use the Heap when:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>You don't know the size at compile time</li>
            <li>You need to allocate a large block of data</li>
            <li>You need the data to persist beyond its scope</li>
            <li>You need to resize the memory block dynamically</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Common Issues</h2>

          <div className="space-y-4">
            <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950/50">
              <h3 className="text-lg font-semibold mb-1">Stack Overflow</h3>
              <p>
                Occurs when a program uses more stack memory than allocated, typically due to infinite recursion or
                allocating too much memory on the stack.
              </p>
              <CodeBlock
                language="c"
                filename="stack_overflow.c"
                code={`// Dangerous: recursive function with no base case
void recursive_function() {
    int large_array[1000000]; // Allocating a large array on stack
    recursive_function(); // No base case, will cause stack overflow
}

int main() {
    recursive_function();
    return 0;
}`}
              />
            </div>

            <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950/50">
              <h3 className="text-lg font-semibold mb-1">Memory Leak</h3>
              <p>
                Occurs when memory allocated on the heap is never freed, causing the program to consume increasingly
                more memory.
              </p>
              <CodeBlock
                language="c"
                filename="memory_leak.c"
                code={`#include <stdlib.h>

void leaky_function() {
    int* array = (int*)malloc(10 * sizeof(int));
    // Do something with array
    
    // Oops! Forgot to free(array)
    // Memory leak occurs here
}

int main() {
    while(1) {
        leaky_function(); // Each call leaks memory
    }
    return 0;
}`}
              />
            </div>

            <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950/50">
              <h3 className="text-lg font-semibold mb-1">Dangling Pointer</h3>
              <p>A pointer that references memory that has been freed or is out of scope.</p>
              <CodeBlock
                language="c"
                filename="dangling_pointer.c"
                code={`#include <stdlib.h>
#include <stdio.h>

int main() {
    int* ptr = (int*)malloc(sizeof(int));
    *ptr = 10;
    
    printf("Value: %d\\n", *ptr);
    
    free(ptr);
    
    // ptr is now a dangling pointer
    // Using it leads to undefined behavior
    *ptr = 20; // BAD: writing to freed memory
    printf("Value: %d\\n", *ptr); // BAD: reading from freed memory
    
    return 0;
}`}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Practice Exercises</h2>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 1: Identifying Memory Types</h3>
            <p>For each of the following, determine whether memory would be allocated on the stack or heap:</p>
            <ol className="list-decimal list-inside ml-4 mt-2">
              <li>An integer variable declared inside a function</li>
              <li>An array created using malloc()</li>
              <li>A struct declared as a local variable</li>
              <li>A global variable</li>
              <li>Memory allocated with new in C++</li>
            </ol>
          </div>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 2: Memory Management</h3>
            <p>
              Implement a function that allocates an array of integers on the heap, fills it with the first n Fibonacci
              numbers, and then properly releases the memory before returning the sum of the Fibonacci numbers.
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
          <h2 className="text-xl font-bold mb-3">Additional Resources</h2>

          <ul className="space-y-2">
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Stack-based_memory_allocation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                Wikipedia: Stack-based Memory Allocation
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Memory_management"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                Wikipedia: Memory Management
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/stack-vs-heap-memory-allocation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                GeeksforGeeks: Stack vs Heap Memory Allocation
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Button asChild variant="outline">
            <Link href="/memory-management">← Back to Memory Management</Link>
          </Button>
          <Button asChild>
            <Link href="/memory-management/pointers">Next: Pointers →</Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  )
}

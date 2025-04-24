import DocLayout from "@/components/doc-layout"
import { CodeBlock } from "@/components/code-block"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NumberSystems() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Number Systems</h1>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
            <span>Fundamentals</span>
            <span className="mx-2">•</span>
            <span>Number Systems</span>
          </div>
          <p className="text-slate-700 dark:text-slate-300">
            Number systems are different ways to represent numerical values. In computing, we commonly work with binary,
            decimal, octal, and hexadecimal number systems. Understanding these systems is essential for low-level
            programming.
          </p>
        </div>

        <div className="p-4 bg-blue-50 dark:bg-blue-950/50 rounded-lg border border-blue-100 dark:border-blue-900">
          <h2 className="text-lg font-semibold mb-2 text-blue-800 dark:text-blue-300">Key Concepts</h2>
          <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-300">
            <li>Decimal (Base-10)</li>
            <li>Binary (Base-2)</li>
            <li>Octal (Base-8)</li>
            <li>Hexadecimal (Base-16)</li>
            <li>Conversion between number systems</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Common Number Systems</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Decimal (Base-10)</h3>
              <p className="mb-2">The standard number system we use in everyday life.</p>
              <p className="mb-2">
                <strong>Digits:</strong> 0-9
              </p>
              <p>
                <strong>Example:</strong> 42₁₀ = 4×10¹ + 2×10⁰ = 40 + 2 = 42
              </p>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Binary (Base-2)</h3>
              <p className="mb-2">The native language of computers, using only 0s and 1s.</p>
              <p className="mb-2">
                <strong>Digits:</strong> 0-1
              </p>
              <p>
                <strong>Example:</strong> 101010₂ = 1×2⁵ + 0×2⁴ + 1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 32 + 0 + 8 + 0 + 2 + 0 =
                42₁₀
              </p>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Octal (Base-8)</h3>
              <p className="mb-2">Used in some Unix file permissions and older systems.</p>
              <p className="mb-2">
                <strong>Digits:</strong> 0-7
              </p>
              <p>
                <strong>Example:</strong> 52₈ = 5×8¹ + 2×8⁰ = 40 + 2 = 42₁₀
              </p>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Hexadecimal (Base-16)</h3>
              <p className="mb-2">Commonly used in programming to represent binary data more compactly.</p>
              <p className="mb-2">
                <strong>Digits:</strong> 0-9, A-F (where A=10, B=11, ..., F=15)
              </p>
              <p>
                <strong>Example:</strong> 2A₁₆ = 2×16¹ + 10×16⁰ = 32 + 10 = 42₁₀
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Number System Conversions</h2>

          <h3 className="text-xl font-semibold mb-2">Decimal to Binary Conversion</h3>
          <p className="mb-4">
            To convert a decimal number to binary, divide the number by 2 repeatedly and record the remainders in
            reverse order.
          </p>

          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg mb-6">
            <p className="font-semibold mb-2">Example: Convert 42₁₀ to binary</p>
            <pre className="text-sm">
              <code>{`42 ÷ 2 = 21 remainder 0
21 ÷ 2 = 10 remainder 1
10 ÷ 2 = 5  remainder 0
5  ÷ 2 = 2  remainder 1
2  ÷ 2 = 1  remainder 0
1  ÷ 2 = 0  remainder 1

Reading remainders from bottom to top: 101010`}</code>
            </pre>
            <p className="mt-2">Therefore, 42₁₀ = 101010₂</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Binary to Decimal Conversion</h3>
          <p className="mb-4">
            To convert a binary number to decimal, multiply each digit by its corresponding power of 2 and sum the
            results.
          </p>

          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg mb-6">
            <p className="font-semibold mb-2">Example: Convert 101010₂ to decimal</p>
            <pre className="text-sm">
              <code>{`1 × 2⁵ = 1 × 32 = 32
0 × 2⁴ = 0 × 16 = 0
1 × 2³ = 1 × 8  = 8
0 × 2² = 0 × 4  = 0
1 × 2¹ = 1 × 2  = 2
0 × 2⁰ = 0 × 1  = 0

Sum: 32 + 0 + 8 + 0 + 2 + 0 = 42`}</code>
            </pre>
            <p className="mt-2">Therefore, 101010₂ = 42₁₀</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Hexadecimal Conversions</h3>
          <p className="mb-4">
            Hexadecimal is particularly useful because each hex digit represents exactly 4 binary digits (a nibble).
          </p>

          <div className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800">
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Hex</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Decimal</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Binary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0000</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">1</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">1</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0001</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">2</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">2</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0010</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">...</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">...</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">...</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">9</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">9</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">1001</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">A</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">10</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">1010</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">B</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">11</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">1011</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">C</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">12</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">1100</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">D</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">13</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">1101</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">E</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">14</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">1110</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">F</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">15</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">1111</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg mb-6">
            <p className="font-semibold mb-2">Example: Convert 2A₁₆ to binary</p>
            <pre className="text-sm">
              <code>{`2 = 0010 in binary
A = 1010 in binary

Concatenate: 00101010`}</code>
            </pre>
            <p className="mt-2">Therefore, 2A₁₆ = 00101010₂ = 42₁₀</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Number Systems in Programming</h2>

          <CodeBlock
            language="c"
            filename="number_systems.c"
            code={`#include <stdio.h>

int main() {
    // Different ways to represent the same number (42) in C
    int decimal = 42;       // Decimal (base 10)
    int binary = 0b101010;  // Binary (base 2) with 0b prefix (C99)
    int octal = 052;        // Octal (base 8) with 0 prefix
    int hex = 0x2A;         // Hexadecimal (base 16) with 0x prefix
    
    printf("Decimal: %d\\n", decimal);
    printf("Binary: %d\\n", binary);
    printf("Octal: %d\\n", octal);
    printf("Hexadecimal: %d\\n", hex);
    
    // Printing in different formats
    printf("Decimal as hex: 0x%X\\n", decimal);
    printf("Hex as octal: 0%o\\n", hex);
    
    return 0;
}

/* Output:
Decimal: 42
Binary: 42
Octal: 42
Hexadecimal: 42
Decimal as hex: 0x2A
Hex as octal: 052
*/`}
          />

          <p className="mt-4">In programming languages, different prefixes are used to denote number systems:</p>

          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              No prefix for decimal (e.g., <code>42</code>)
            </li>
            <li>
              <code>0b</code> or <code>0B</code> prefix for binary (e.g., <code>0b101010</code>) in C99, Java, Python
            </li>
            <li>
              <code>0</code> prefix for octal (e.g., <code>052</code>)
            </li>
            <li>
              <code>0x</code> or <code>0X</code> prefix for hexadecimal (e.g., <code>0x2A</code>)
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Practical Applications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Memory Addresses</h3>
              <p>
                Memory addresses are typically displayed in hexadecimal because each byte can be represented by two hex
                digits, making them more compact and readable.
              </p>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Color Codes</h3>
              <p>
                HTML/CSS color codes use hexadecimal to represent RGB values (e.g., <code>#FF5733</code> where FF=red,
                57=green, 33=blue).
              </p>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">File Permissions</h3>
              <p>
                Unix/Linux file permissions are often represented in octal (e.g., <code>chmod 755 file.txt</code>).
              </p>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Bit Manipulation</h3>
              <p>Binary is essential for bit manipulation operations in low-level programming and embedded systems.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Practice Exercises</h2>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 1: Number System Conversions</h3>
            <p>Convert the following numbers:</p>
            <ol className="list-decimal list-inside ml-4 mt-2">
              <li>110101₂ to decimal</li>
              <li>255₁₀ to binary and hexadecimal</li>
              <li>0xABCD to binary</li>
              <li>0377₈ to decimal and hexadecimal</li>
            </ol>
          </div>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 2: Programming with Number Systems</h3>
            <p>Write a C program that:</p>
            <ol className="list-decimal list-inside ml-4 mt-2">
              <li>Takes a decimal number as input</li>
              <li>Converts it to binary, octal, and hexadecimal</li>
              <li>Prints all representations</li>
            </ol>
          </div>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 3: Practical Application</h3>
            <p>
              Write a function that takes an RGB color (three integers from 0-255) and returns the corresponding
              hexadecimal color code as a string.
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
          <h2 className="text-xl font-bold mb-3">Additional Resources</h2>

          <ul className="space-y-2">
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Numeral_system"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                Wikipedia: Numeral Systems
              </a>
            </li>
            <li>
              <a
                href="https://www.cs.cornell.edu/~tomf/notes/cps104/twoscomp.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                Cornell CS: Two's Complement
              </a>
            </li>
            <li>
              <a
                href="https://www.tutorialspoint.com/computer_logical_organization/number_system_conversion.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                Tutorials Point: Number System Conversion
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Button asChild variant="outline">
            <Link href="/fundamentals/binary-representation">← Binary Representation</Link>
          </Button>
          <Button asChild>
            <Link href="/fundamentals/bitwise-operations">Next: Bitwise Operations →</Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  )
}

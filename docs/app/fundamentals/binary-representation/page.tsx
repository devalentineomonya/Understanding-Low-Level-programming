import DocLayout from "@/components/doc-layout"
import { CodeBlock } from "@/components/code-block"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BinaryRepresentation() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Binary Representation</h1>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
            <span>Fundamentals</span>
            <span className="mx-2">•</span>
            <span>Binary Representation</span>
          </div>
          <p className="text-slate-700 dark:text-slate-300">
            At the lowest level, computers store and process data as a series of binary digits (bits) — 0s and 1s. Understanding binary representation is fundamental to low-level programming.
          </p>
        </div>

        <div className="p-4 bg-blue-50 dark:bg-blue-950/50 rounded-lg border border-blue-100 dark:border-blue-900">
          <h2 className="text-lg font-semibold mb-2 text-blue-800 dark:text-blue-300">Key Concepts</h2>
          <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-300">
            <li>Bits, Bytes, and Words</li>
            <li>Encoding of integers, floating-point numbers, and characters</li>
            <li>Endianness</li>
            <li>Signed vs. Unsigned numbers</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Bits, Bytes, and Words</h2>
          <p className="mb-4">
            <strong>Bit</strong>: The smallest unit of data, representing a single binary value (0 or 1).
          </p>
          <p className="mb-4">
            <strong>Byte</strong>: A group of 8 bits, capable of representing 256 different values (2<sup>8</sup>).
          </p>
          <p className="mb-4">
            <strong>Word</strong>: Typically refers to the natural data size for a processor (16, 32, or 64 bits).
          </p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800">
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Unit</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Size</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Range (Unsigned)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Bit</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">1 bit</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0 to 1 (2 values)</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Nibble</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">4 bits</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0 to 15 (16 values)</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Byte</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">8 bits</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0 to 255 (256 values)</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Word (16-bit)</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">16 bits</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0 to 65,535 (65,536 values)</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Double Word</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">32 bits</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0 to 4,294,967,295 (2<sup>32</sup> values)</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Quad Word</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">64 bits</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0 to 18,446,744,073,709,551,615 (2<sup>64</sup> values)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Signed vs. Unsigned Integers</h2>
          
          <p className="mb-4">
            <strong>Unsigned integers</strong> only represent non-negative values (0 and positive).
          </p>
          <p className="mb-4">
            <strong>Signed integers</strong> can represent both positive and negative values.
          </p>

          <h3 className="text-xl font-semibold mb-2">Two's Complement</h3>
          <p className="mb-4">
            Most modern computers use two's complement to represent signed integers. This allows for efficient hardware implementations of arithmetic operations. In two's complement:

- The most significant bit (MSB) is the sign bit.
- Positive numbers are represented normally.
- Negative numbers are represented by flipping all bits and adding 1.

<CodeBlock 
  language="c" 
  filename="twos_complement.c" 
  code={`#include <stdio.h>

/* Demonstrating two's complement representation */
int main() {
    signed char a = 5;    /* 0000 0101 in binary */
    signed char b = -5;   /* 1111 1011 in binary (two's complement) */
    
    printf("a = %d (0x%02X)\\n", a, (unsigned char)a);
    printf("b = %d (0x%02X)\\n", b, (unsigned char)b);
    
    /* Verify that a + b = 0 */
    printf("a + b = %d\\n", a + b);
    
    return 0;
}`} 
/>

<div>
  <h2 className="text-2xl font-bold mb-3">Endianness</h2>
  <p className="mb-4">
    Endianness refers to the order in which bytes are stored in memory for multi-byte data types.
  </p>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
    <div className="p-4 border rounded-lg dark:border-slate-700">
      <h3 className="text-lg font-semibold mb-2">Little Endian</h3>
      <p>The least significant byte is stored at the lowest memory address.</p>
      <p className="mt-2"><strong>Example:</strong> x86 processors</p>
    </div>
    
    <div className="p-4 border rounded-lg dark:border-slate-700">
      <h3 className="text-lg font-semibold mb-2">Big Endian</h3>
      <p>The most significant byte is stored at the lowest memory address.</p>
      <p className="mt-2"><strong>Example:</strong> Traditional network protocols</p>
    </div>
  </div>
  
  <CodeBlock 
    language="c" 
    filename="endianness.c" 
    code={`#include <stdio.h>

/* Function to check endianness */
int is_little_endian() {
    unsigned int x = 1;
    char *c = (char*) &x;
    return (int)*c;
}

int main() {
    unsigned int value = 0x12345678;
    unsigned char *ptr = (unsigned char*) &value;
    
    printf("The value 0x%X is stored as: \\n", value);
    for (int i = 0; i < sizeof(int); i++) {
        printf("Byte %d: 0x%02X at address %p\\n", i, ptr[i], &ptr[i]);
    }
    
    if (is_little_endian()) {
        printf("This system is little-endian.\\n");
    } else {
        printf("This system is big-endian.\\n");
    }
    
    return 0;
}`} 
  />
</div>

<div>
  <h2 className="text-2xl font-bold mb-3">Floating-Point Representation</h2>
  <p className="mb-4">
    Floating-point numbers follow the IEEE 754 standard, which represents real numbers using:
  </p>
  
  <ul className="list-disc list-inside mb-4 space-y-1">
    <li>Sign bit (1 bit)</li>
    <li>Exponent (8 bits for single-precision, 11 bits for double-precision)</li>
    <li>Mantissa/Significand (23 bits for single-precision, 52 bits for double-precision)</li>
  </ul>
  
  <div className="overflow-x-auto my-4">
    <table className="min-w-full border-collapse">
      <thead>
        <tr className="bg-slate-50 dark:bg-slate-800">
          <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Format</th>
          <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Size</th>
          <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Sign</th>
          <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Exponent</th>
          <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Mantissa</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Single Precision (float)</td>
          <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">32 bits</td>
          <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">1 bit</td>
          <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">8 bits</td>
          <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">23 bits</td>
        </tr>
        <tr className="bg-slate-50 dark:bg-slate-800/50">
          <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Double Precision (double)</td>
          <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">64 bits</td>
          <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">1 bit</td>
          <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">11 bits</td>
          <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">52 bits</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div>
  <h2 className="text-2xl font-bold mb-3">Character Encoding</h2>
  <p className="mb-4">
    Characters are represented as numbers in binary according to encoding schemes:
  </p>
  
  <ul className="list-disc list-inside mb-4 space-y-1">
    <li><strong>ASCII</strong>: 7-bit encoding for basic Latin alphabet (0-127)</li>
    <li><strong>Extended ASCII</strong>: 8-bit encoding (0-255)</li>
    <li><strong>UTF-8</strong>: Variable-length encoding that can represent all Unicode characters</li>
  </ul>
  
  <CodeBlock 
    language="c" 
    filename="character_encoding.c" 
    code={`#include <stdio.h>
#include <string.h>

int main() {
    char ascii_str[] = "Hello";
    
    printf("String: %s\\n", ascii_str);
    printf("ASCII values: ");
    
    for (int i = 0; i < strlen(ascii_str); i++) {
        printf("0x%02X ", ascii_str[i]);
    }
    printf("\\n");
    
    /* UTF-8 example with non-ASCII character */
    char utf8_str[] = "Hello, 世界!";
    printf("UTF-8 string: %s\\n", utf8_str);
    printf("UTF-8 bytes: ");
    
    for (int i = 0; i < strlen(utf8_str); i++) {
        printf("0x%02X ", (unsigned char)utf8_str[i]);
    }
    printf("\\n");
    
    return 0;
}`} 
  />
</div>

<div className="mt-8 space-y-4">
  <h2 className="text-2xl font-bold">Practice Exercises</h2>
  
  <div className="p-4 border rounded-lg dark:border-slate-700">
    <h3 className="text-lg font-semibold mb-2">Exercise 1: Binary to Decimal Conversion</h3>
    <p>Convert the following binary numbers to decimal:</p>
    <ol className="list-decimal list-inside ml-4 mt-2">
      <li>1010 1101</li>
      <li>0011 0010</li>
      <li>1111 1111</li>
    </ol>
  </div>
  
  <div className="p-4 border rounded-lg dark:border-slate-700">
    <h3 className="text-lg font-semibold mb-2">Exercise 2: Two's Complement</h3>
    <p>Find the two's complement representation of the following numbers in 8-bit format:</p>
    <ol className="list-decimal list-inside ml-4 mt-2">
      <li>-42</li>
      <li>-128</li>
      <li>-1</li>
    </ol>
  </div>
  
  <div className="p-4 border rounded-lg dark:border-slate-700">
    <h3 className="text-lg font-semibold mb-2">Exercise 3: Endianness</h3>
    <p>Write a program to detect the endianness of your system and display the byte-by-byte representation of an integer.</p>
  </div>
</div>

<div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
  <h2 className="text-xl font-bold mb-3">Additional Resources</h2>
  
  <ul className="space-y-2">
    <li>
      <a href="https://en.wikipedia.org/wiki/Binary_number" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
        Wikipedia: Binary Numbers
      </a>
    </li>
    <li>
      <a href="https://en.wikipedia.org/wiki/Two%27s_complement" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
        Wikipedia: Two's Complement
      </a>
    </li>
    <li>
      <a href="https://en.wikipedia.org/wiki/IEEE_754" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
        IEEE 754 Floating-Point Standard
      </a>
    </li>
    <li>
      <a href="https://www.tutorialspoint.com/cprogramming/c_data_types.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
        C Programming: Data Types
      </a>
    </li>
  </ul>
</div>

<div className="mt-8 flex justify-between items-center">
  <div></div>
  <Button asChild>
    <Link href="/fundamentals/number-systems">
      Next: Number Systems →
    </Link>
  </Button>
</div>
      </div>
    </DocLayout>
  )
}

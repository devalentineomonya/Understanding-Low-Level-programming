import DocLayout from "@/components/doc-layout"
import { CodeBlock } from "@/components/code-block"

export default function BitwiseOperations() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Bitwise Operations</h1>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
            <span>Fundamentals</span>
            <span className="mx-2">•</span>
            <span>Bitwise Operations</span>
          </div>
          <p className="text-slate-700 dark:text-slate-300">
            Bitwise operations manipulate individual bits in binary data. These operations are fundamental to low-level programming,
            enabling efficient algorithms, hardware control, and data manipulation at the bit level.
          </p>
        </div>

        <div className="p-4 bg-blue-50 dark:bg-blue-950/50 rounded-lg border border-blue-100 dark:border-blue-900">
          <h2 className="text-lg font-semibold mb-2 text-blue-800 dark:text-blue-300">Key Concepts</h2>
          <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-300">
            <li>Basic bitwise operators (AND, OR, XOR, NOT)</li>
            <li>Shift operations</li>
            <li>Bit manipulation techniques</li>
            <li>Common applications</li>
            <li>Bit flags and masks</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Basic Bitwise Operators</h2>
          
          <div className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800">
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Operator</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Symbol</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Description</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Bitwise AND</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><code>&</code></td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Sets each bit to 1 if both bits are 1</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>5 & 3 = 1</code><br />
                    <code>0101 & 0011 = 0001</code>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Bitwise OR</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><code>|</code></td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Sets each bit to 1 if at least one bit is 1</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>5 | 3 = 7</code><br />
                    <code>0101 | 0011 = 0111</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Bitwise XOR</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><code>^</code></td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Sets each bit to 1 if only one bit is 1</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>5 ^ 3 = 6</code><br />
                    <code>0101 ^ 0011 = 0110</code>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Bitwise NOT</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><code>~</code></td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Inverts all bits</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>~5 = -6</code> (in 32-bit two's complement)<br />
                    <code>~0101 = 1010</code> (simplified)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBlock 
            language="c" 
            filename="basic_bitwise.c" 
            code={`#include <stdio.h>

int main() {
    unsigned char a = 5;    // 00000101 in binary
    unsigned char b = 3;    // 00000011 in binary
    
    printf("a = %d (binary: %08b)\\n", a, a);
    printf("b = %d (binary: %08b)\\n", b, b);
    
    // Bitwise AND
    printf("a & b = %d (binary: %08b)\\n", a & b, a & b);
    
    // Bitwise OR
    printf("a | b = %d (binary: %08b)\\n", a | b, a | b);
    
    // Bitwise XOR
    printf("a ^ b = %d (binary: %08b)\\n", a ^ b, a ^ b);
    
    // Bitwise NOT (showing only 8 bits for clarity)
    printf("~a = %d (binary: %08b)\\n", (unsigned char)~a, (unsigned char)~a);
    
    return 0;
}`} 
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Shift Operations</h2>
          
          <div className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800">
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Operator</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Symbol</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Description</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Left Shift</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><code>&lt;&lt;</code></td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Shifts bits left, filling with 0s</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>5 &lt;&lt; 1 = 10</code><br />
                    <code>0101 &lt;&lt; 1 = 1010</code>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Logical Right Shift</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><code>&gt;&gt;</code></td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Shifts bits right, filling with 0s (for unsigned types)</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>5 &gt;&gt; 1 = 2</code><br />
                    <code>0101 &gt;&gt; 1 = 0010</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Arithmetic Right Shift</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><code>&gt;&gt;</code></td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Shifts bits right, preserving sign bit (for signed types)</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>-8 &gt;&gt; 1 = -4</code><br />
                    <code>1000 &gt;&gt; 1 = 1100</code> (simplified)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4">
            Left shifting by n is equivalent to multiplying by 2<sup>n</sup>, while right shifting by n is equivalent to dividing by 2<sup>n</sup> (for unsigned numbers).
          </p>

          <CodeBlock 
            language="c" 
            filename="shift_operations.c" 
            code={`#include <stdio.h>

int main() {
    unsigned char a = 5;    // 00000101 in binary
    signed char b = -8;     // 11111000 in binary (two's complement)
    
    printf("a = %d (binary: %08b)\\n", a, a);
    
    // Left shift
    printf("a << 1 = %d (binary: %08b)\\n", a << 1, a << 1);
    printf("a << 2 = %d (binary: %08b)\\n", a << 2, a << 2);
    
    // Right shift (unsigned)
    printf("a >> 1 = %d (binary: %08b)\\n", a >> 1, a >> 1);
    
    // Arithmetic right shift (signed)
    printf("b = %d (binary: %08b)\\n", b, (unsigned char)b);
    printf("b >> 1 = %d (binary: %08b)\\n", b >> 1, (unsigned char)(b >> 1));
    
    // Demonstrating multiplication/division by powers of 2
    printf("5 * 2 = %d, 5 << 1 = %d\\n", 5 * 2, 5 << 1);
    printf("5 * 4 = %d, 5 << 2 = %d\\n", 5 * 4, 5 << 2);
    printf("16 / 2 = %d, 16 >> 1 = %d\\n", 16 / 2, 16 >> 1);
    printf("16 / 4 = %d, 16 >> 2 = %d\\n", 16 / 4, 16 >> 2);
    
    return 0;
}`} 
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Bit Manipulation Techniques</h2>
          
          <h3 className="text-xl font-semibold mb-2">1. Setting a Bit</h3>
          <p className="mb-4">
            To set the nth bit of a number to 1, use the OR operation with a number that has only the nth bit set.
          </p>
          <CodeBlock 
            language="c" 
            filename="set_bit.c" 
            code={`// Set the nth bit of x to 1
x = x | (1 << n);

// Shorter form
x |= (1 << n);`} 
          />

          <h3 className="text-xl font-semibold mt-6 mb-2">2. Clearing a Bit</h3>
          <p className="mb-4">
            To clear the nth bit of a number (set it to 0), use the AND operation with a number that has all bits set to 1 except the nth bit.
          </p>
          <CodeBlock 
            language="c" 
            filename="clear_bit.c" 
            code={`// Clear the nth bit of x
x = x & ~(1 << n);

// Shorter form
x &= ~(1 << n);`} 
          />

          <h3 className="text-xl font-semibold mt-6 mb-2">3. Toggling a Bit</h3>
          <p className="mb-4">
            To toggle the nth bit of a number (flip 0 to 1 or 1 to 0), use the XOR operation with a number that has only the nth bit set.
          </p>
          <CodeBlock 
            language="c" 
            filename="toggle_bit.c" 
            code={`// Toggle the nth bit of x
x = x ^ (1 << n);

// Shorter form
x ^= (1 << n);`} 
          />

          <h3 className="text-xl font-semibold mt-6 mb-2">4. Checking a Bit</h3>
          <p className="mb-4">
            To check if the nth bit of a number is set (is 1), use the AND operation and check if the result is non-zero.
          </p>
          <CodeBlock 
            language="c" 
            filename="check_bit.c" 
            code={`// Check if the nth bit of x is set
if ((x & (1 << n)) != 0) {
    // The nth bit is set
} else {
    // The nth bit is not set
}`} 
          />

          <h3 className="text-xl font-semibold mt-6 mb-2">5. Extracting Bits</h3>
          <p className="mb-4">
            To extract a sequence of bits from a number, use a combination of shift and mask operations.
          </p>
          <CodeBlock 
            language="c" 
            filename="extract_bits.c" 
            code={`// Extract bits from position 'start' to 'end' (inclusive) from x
unsigned extract_bits(unsigned x, int start, int end) {
    // Create a mask with 1s in the positions we want to extract
    unsigned mask = ((1 << (end - start + 1)) - 1) << start;
    
    // Extract the bits and shift them to the right
    return (x & mask) >> start;
}`} 
          />

          <h3 className="text-xl font-semibold mt-6 mb-2">6. Practical Example</h3>
          <CodeBlock 
            language="c" 
            filename="bit_manipulation.c" 
            code={`#include <stdio.h>

// Function to print binary representation of a number
void print_binary(unsigned int n) {
    if (n > 1) {
        print_binary(n >> 1);
    }
    printf("%d", n & 1);
}

int main() {
    unsigned char flags = 0;  // 00000000
    
    // Define bit positions for different flags
    const int READ_PERMISSION = 0;    // 1st bit
    const int WRITE_PERMISSION = 1;   // 2nd bit
    const int EXECUTE_PERMISSION = 2; // 3rd bit
    
    printf("Initial flags: ");
    print_binary(flags);
    printf("\\n");
    
    // Set read and write permissions
    flags |= (1 << READ_PERMISSION);
    flags |= (1 << WRITE_PERMISSION);
    
    printf("After setting read and write: ");
    print_binary(flags);
    printf("\\n");
    
    // Check if execute permission is set
    if ((flags & (1 << EXECUTE_PERMISSION)) != 0) {
        printf("Execute permission is set\\n");
    } else {
        printf("Execute permission is not set\\n");
    }
    
    // Toggle execute permission
    flags ^= (1 << EXECUTE_PERMISSION);
    
    printf("After toggling execute: ");
    print_binary(flags);
    printf("\\n");
    
    // Clear write permission
    flags &= ~(1 << WRITE_PERMISSION);
    
    printf("After clearing write: ");
    print_binary(flags);
    printf("\\n");
    
    return 0;
}`} 
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Bit Flags and Masks</h2>
          
          <p className="mb-4">
            Bit flags are a memory-efficient way to store multiple boolean values in a single integer. Each bit represents a different flag or option.
          </p>

          <h3 className="text-xl font-semibold mb-2">Common Uses of Bit Flags</h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>File permissions in operating systems</li>
            <li>Configuration options in software</li>
            <li>State tracking in games and applications</li>
            <li>Hardware register manipulation</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Example: File Permissions in Unix</h3>
          <CodeBlock 
            language="c" 
            filename="file_permissions.c" 
            code={`#include <stdio.h>

int main() {
    // Unix-style file permissions
    const unsigned int READ = 4;    // 100 in binary
    const unsigned int WRITE = 2;   // 010 in binary
    const unsigned int EXECUTE = 1; // 001 in binary
    
    // Create permissions for different user types
    unsigned int owner_perm = READ | WRITE | EXECUTE; // 7 (111)
    unsigned int group_perm = READ | EXECUTE;         // 5 (101)
    unsigned int others_perm = READ;                  // 4 (100)
    
    // Combine into a single permission value (like chmod)
    unsigned int file_mode = (owner_perm << 6) | (group_perm << 3) | others_perm;
    
    printf("File permission in octal: %03o\\n", file_mode);
    printf("This is equivalent to chmod 754 in Unix\\n");
    
    // Check if owner has write permission
    if (file_mode & (WRITE << 6)) {
        printf("Owner has write permission\\n");
    }
    
    // Check if others have execute permission
    if (file_mode & EXECUTE) {
        printf("Others have execute permission\\n");
    } else {
        printf("Others do not have execute permission\\n");
    }
    
    return 0;
}`} 
          />

          <h3 className="text-xl font-semibold mt-6 mb-2">Bitmasks in Graphics Programming</h3>
          <CodeBlock 
            language="c" 
            filename="color_manipulation.c" 
            code={`#include <stdio.h>

// RGB color manipulation using bit operations
int main() {
    // A 32-bit RGBA color (8 bits per channel)
    // Format: 0xAARRGGBB (alpha, red, green, blue)
    unsigned int color = 0xFF5A1FC6; // Purple with full opacity
    
    // Extract individual color channels
    unsigned char alpha = (color >> 24) & 0xFF;
    unsigned char red = (color >> 16) & 0xFF;
    unsigned char green = (color >> 8) & 0xFF;
    unsigned char blue = color & 0xFF;
    
    printf("Original color: 0x%08X\\n", color);
    printf("Alpha: %u (0x%02X)\\n", alpha, alpha);
    printf("Red: %u (0x%02X)\\n", red, red);
    printf("Green: %u (0x%02X)\\n", green, green);
    printf("Blue: %u (0x%02X)\\n", blue, blue);
    
    // Modify the color: increase red, zero out green
    red = 255;  // Max red
    green = 0;  // No green
    
    // Reconstruct the color
    color = ((unsigned int)alpha << 24) |
            ((unsigned int)red << 16) |
            ((unsigned int)green << 8) |
            blue;
    
    printf("Modified color: 0x%08X\\n", color);
    
    return 0;
}`} 
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Common Applications of Bitwise Operations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Hardware Control</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Manipulating hardware registers</li>
                <li>Setting/clearing control bits</li>
                <li>Reading status flags</li>
                <li>I/O port operations</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Optimization</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Fast multiplication/division by powers of 2</li>
                <li>Efficient modulo operations (for powers of 2)</li>
                <li>Compact data storage</li>
                <li>Bit-parallel algorithms</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Data Structures</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Bit vectors and bitsets</li>
                <li>Bloom filters</li>
                <li>Hash functions</li>
                <li>Compact representations</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Algorithms</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Cryptography</li>
                <li>Error detection/correction</li>
                <li>Compression algorithms</li>
                <li>Counting bits (population count)</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2">Example: Fast Modulo for Powers of 2</h3>
          <p className="mb-4">
            For any power of 2 (2<sup>n</sup>), the modulo operation can be performed using a bitwise AND:
          </p>
          <CodeBlock 
            language="c" 
            filename="fast_modulo.c" 
            code={`#include <stdio.h>
#include <time.h>

int main() {
    int num = 123456789;
    int mod = 16; // 2^4
    int mask = mod - 1; // 15 (1111 in binary)
    
    // Regular modulo
    int result1 = num % mod;
    
    // Bitwise modulo (only works for powers of 2)
    int result2 = num & mask;
    
    printf("%d %% %d = %d\\n", num, mod, result1);
    printf("%d & %d = %d\\n", num, mask, result2);
    
    // Performance comparison
    clock_t start, end;
    double cpu_time_used;
    long long sum1 = 0, sum2 = 0;
    int iterations = 100000000;
    
    // Time the regular modulo
    start = clock();
    for (int i = 0; i < iterations; i++) {
        sum1 += (i % mod);
    }
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("Regular modulo time: %f seconds\\n", cpu_time_used);
    
    // Time the bitwise modulo
    start = clock();
    for (int i = 0; i < iterations; i++) {
        sum2 += (i & mask);
    }
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("Bitwise modulo time: %f seconds\\n", cpu_time_used);
    
    return 0;
}`} 
          />

          <h3 className="text-xl font-semibold mt-6 mb-2">Example: Counting Set Bits (Population Count)</h3>
          <CodeBlock 
            language="c" 
            filename="popcount.c" 
            code={`#include <stdio.h>

// Naive approach: check each bit
int count_bits_naive(unsigned int n) {
    int count = 0;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    return count;
}

// Brian Kernighan's algorithm: clear the least significant set bit
int count_bits_kernighan(unsigned int n) {
    int count = 0;
    while (n) {
        n &= (n - 1);
        count++;
    }
    return count;
}

// Lookup table approach for 8-bit chunks
int count_bits_lookup(unsigned int n) {
    // Precomputed lookup table for 8-bit values
    static const unsigned char bit_count_table[256] = {
        0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4,
        /* ... rest of the table omitted for brevity ... */
    };
    
    // Count bits in each byte
    return bit_count_table[n & 0xff] +
           bit_count_table[(n >> 8) & 0xff] +
           bit_count_table[(n >> 16) & 0xff] +
           bit_count_table[n >> 24];
}

int main() {
    unsigned int x = 0x12345678; // Example number
    
    printf("Number: 0x%08X\\n", x);
    printf("Bit count (naive): %d\\n", count_bits_naive(x));
    printf("Bit count (Kernighan): %d\\n", count_bits_kernighan(x));
    printf("Bit count (lookup): %d\\n", count_bits_lookup(x));
    
    return 0;
}`} 
          />
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Practice Exercises</h2>
          
          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 1: Bit Manipulation</h3>
            <p>Implement functions to:</p>
            <ol className="list-decimal list-inside ml-4 mt-2">
              <li>Set the nth bit of a number</li>
              <li>Clear the nth bit of a number</li>
              <li>Toggle the nth bit of a number</li>
              <li>Check if the nth bit of a number is set</li>
            </ol>
          </div>
          
          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 2: Swap Without Temporary Variable</h3>
            <p>Implement a function that swaps two integers without using a temporary variable, using only bitwise XOR operations.</p>
          </div>
          
          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 3: Power of Two Check</h3>
            <p>Write a function that determines if an integer is a power of 2 using bitwise operations.</p>
          </div>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 4: Bit Reversal</h3>
            <p>Implement a function that reverses the bits in an unsigned integer.</p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
          <h2 className="text-xl font-bold mb-3">Additional Resources</h2>
          
          <ul className="space-y-2">
            <li>
              <a 
                href="https://graphics.stanford.edu/~seander/bithacks.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                Bit Twiddling Hacks by Sean Eron Anderson
              </a>
            </li>
            <li>
              <a 
                href="https://en.wikipedia.org/wiki/Bitwise_operations_in_C" 
                target="_\

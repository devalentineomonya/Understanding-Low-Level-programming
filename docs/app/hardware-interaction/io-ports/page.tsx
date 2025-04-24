import DocLayout from "@/components/doc-layout"
import { CodeBlock } from "@/components/code-block"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function IOPorts() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">I/O Ports</h1>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
            <span>Hardware Interaction</span>
            <span className="mx-2">•</span>
            <span>I/O Ports</span>
          </div>
          <p className="text-slate-700 dark:text-slate-300">
            I/O ports provide a way for the CPU to communicate with hardware devices. They are a fundamental mechanism
            for hardware interaction in low-level programming, especially in embedded systems and operating system
            development.
          </p>
        </div>

        <div className="p-4 bg-red-50 dark:bg-red-950/50 rounded-lg border border-red-100 dark:border-red-900">
          <h2 className="text-lg font-semibold mb-2 text-red-800 dark:text-red-300">Key Concepts</h2>
          <ul className="list-disc list-inside space-y-1 text-red-700 dark:text-red-300">
            <li>Port-mapped I/O vs Memory-mapped I/O</li>
            <li>I/O port addressing</li>
            <li>Port I/O instructions</li>
            <li>Device communication protocols</li>
            <li>Privilege levels and port access</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Port-Mapped I/O</h2>
          <p className="mb-4">
            Port-mapped I/O (PMIO), also known as isolated I/O, uses a separate address space for I/O devices, distinct
            from the memory address space. This approach requires special CPU instructions to access I/O ports.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Advantages</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Separate address spaces for memory and I/O</li>
                <li>Simplified hardware design</li>
                <li>Explicit I/O operations in code</li>
                <li>Can simplify protection mechanisms</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Disadvantages</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Requires special instructions</li>
                <li>Limited addressing range (typically 16-bit)</li>
                <li>Cannot use memory-oriented instructions</li>
                <li>May be slower than memory-mapped I/O</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">I/O Port Instructions (x86)</h2>
          <p className="mb-4">The x86 architecture provides specific instructions for port I/O:</p>

          <div className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800">
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Instruction</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Description</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>IN</code>
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Read from an I/O port</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>IN AL, DX</code> (read byte from port DX into AL)
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>OUT</code>
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Write to an I/O port</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>OUT DX, AL</code> (write byte in AL to port DX)
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>INS</code>
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Input string from port</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>INSB</code> (input byte string)
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>OUTS</code>
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Output string to port</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>OUTSB</code> (output byte string)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">These instructions can operate on different data sizes:</p>

          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <code>IN AL, port</code> / <code>OUT port, AL</code> - 8-bit (byte) operations
            </li>
            <li>
              <code>IN AX, port</code> / <code>OUT port, AX</code> - 16-bit (word) operations
            </li>
            <li>
              <code>IN EAX, port</code> / <code>OUT port, EAX</code> - 32-bit (double word) operations
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Port I/O in Assembly</h2>

          <CodeBlock
            language="asm"
            filename="port_io.asm"
            code={`; x86 assembly example of port I/O
section .text
    global _start

_start:
    ; Read a byte from port 0x60 (keyboard controller)
    mov dx, 0x60        ; Port number in DX
    in al, dx           ; Read byte from port DX into AL
    
    ; Write a byte to port 0x43 (PIT command register)
    mov dx, 0x43        ; Port number in DX
    mov al, 0x36        ; Command value
    out dx, al          ; Write byte in AL to port DX
    
    ; Read multiple bytes using string operations
    mov dx, 0x60        ; Port number in DX
    mov edi, buffer     ; Destination buffer
    mov ecx, 10         ; Number of bytes to read
    rep insb            ; Repeat: Input byte from port DX to [EDI], increment EDI
    
    ; Exit
    mov eax, 1          ; syscall number for exit
    xor ebx, ebx        ; exit code 0
    int 0x80            ; call kernel

section .bss
    buffer resb 10      ; Buffer for data`}
          />

          <p className="mt-4">
            Note: Direct port I/O typically requires kernel privileges. In modern operating systems, user-space programs
            cannot directly access I/O ports without special permissions or kernel modules.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Port I/O in C (Linux)</h2>
          <p className="mb-4">
            In Linux, you can access I/O ports from C using the <code>ioperm()</code> or <code>iopl()</code> system
            calls to gain permission, and then use the <code>inb()</code>, <code>outb()</code>, etc. functions from{" "}
            <code>&lt;sys/io.h&gt;</code>:
          </p>

          <CodeBlock
            language="c"
            filename="port_io.c"
            code={`#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/io.h>

int main() {
    // Get permission to access ports 0x60 to 0x64 (keyboard controller)
    if (ioperm(0x60, 5, 1)) {
        perror("ioperm");
        exit(1);
    }
    
    // Read a byte from port 0x60 (keyboard data port)
    unsigned char value = inb(0x60);
    printf("Value read from port 0x60: 0x%02x\\n", value);
    
    // Write a byte to port 0x61 (system control port)
    outb(0x61, inb(0x61) | 0x80);  // Toggle bit 7
    
    // Read a word (16 bits) from port 0x62
    unsigned short word_value = inw(0x62);
    printf("Value read from port 0x62: 0x%04x\\n", word_value);
    
    // Write a double word (32 bits) to port 0x64
    outl(0x12345678, 0x64);
    
    // Release port access
    ioperm(0x60, 5, 0);
    
    return 0;
}

/* 
 * Compile with:
 * gcc -o port_io port_io.c
 * 
 * Run with root privileges:
 * sudo ./port_io
 */`}
          />

          <p className="mt-4">
            The <code>&lt;sys/io.h&gt;</code> header provides these functions:
          </p>

          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <code>inb(port)</code> - Read a byte from port
            </li>
            <li>
              <code>outb(value, port)</code> - Write a byte to port
            </li>
            <li>
              <code>inw(port)</code> - Read a word (16 bits) from port
            </li>
            <li>
              <code>outw(value, port)</code> - Write a word to port
            </li>
            <li>
              <code>inl(port)</code> - Read a double word (32 bits) from port
            </li>
            <li>
              <code>outl(value, port)</code> - Write a double word to port
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Common I/O Port Ranges</h2>
          <p className="mb-4">
            On x86 systems, I/O ports are typically 16-bit addresses (0x0000 to 0xFFFF). Some common port ranges
            include:
          </p>

          <div className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800">
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Port Range</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Device/Function</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0x00-0x1F</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">DMA controller 1</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Direct Memory Access controller
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0x20-0x3F</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Interrupt controller</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Programmable Interrupt Controller (PIC)
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0x40-0x5F</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Timer</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Programmable Interval Timer (PIT)
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0x60-0x6F</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Keyboard controller</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Keyboard and PS/2 mouse</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0x70-0x7F</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">CMOS/RTC</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Real-time clock and CMOS memory
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0x80-0x8F</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">DMA page registers</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Page registers for DMA controller
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0x170-0x177, 0x1F0-0x1F7</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">IDE controller</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Hard disk controller</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0x3F8-0x3FF</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Serial port (COM1)</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    First serial communication port
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0x378-0x37F</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Parallel port (LPT1)</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    First parallel printer port
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">
            Note: Modern systems often virtualize these ports, and the actual hardware may be accessed through different
            mechanisms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Example: Controlling the PC Speaker</h2>
          <p className="mb-4">
            A classic example of port I/O is controlling the PC speaker. This example shows how to generate a simple
            tone:
          </p>

          <CodeBlock
            language="c"
            filename="speaker.c"
            code={`#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/io.h>

// Function to play a tone of specified frequency (in Hz) for a duration (in ms)
void play_tone(int frequency, int duration) {
    int counter = 1193180 / frequency;  // Calculate PIT counter value
    
    // Get permission to access ports
    if (ioperm(0x40, 4, 1) || ioperm(0x61, 1, 1)) {
        perror("ioperm");
        exit(1);
    }
    
    // Set up the PIT to generate a square wave
    outb(0xB6, 0x43);                  // Command: channel 2, mode 3, binary
    outb(counter & 0xFF, 0x42);        // Low byte of counter
    outb((counter >> 8) & 0xFF, 0x42); // High byte of counter
    
    // Connect the PIT to the speaker
    unsigned char tmp = inb(0x61);     // Read current value
    outb(tmp | 3, 0x61);               // Set bits 0 and 1 to enable speaker
    
    // Wait for the specified duration
    usleep(duration * 1000);
    
    // Disconnect the speaker
    outb(tmp, 0x61);                   // Restore original value
    
    // Release port access
    ioperm(0x40, 4, 0);
    ioperm(0x61, 1, 0);
}

int main() {
    printf("Playing a tone...\n");
    
    // Play a 440 Hz tone (A4) for 500 ms
    play_tone(440, 500);
    
    // Wait a bit
    usleep(200000);
    
    // Play a higher tone
    play_tone(880, 500);
    
    return 0;
}

/* 
 * Compile with:
 * gcc -o speaker speaker.c
 * 
 * Run with root privileges:
 * sudo ./speaker
 */`}
          />

          <p className="mt-4">This example demonstrates several key concepts:</p>

          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Accessing multiple I/O ports</li>
            <li>Reading from and writing to ports</li>
            <li>Bit manipulation for control registers</li>
            <li>Configuring hardware (the Programmable Interval Timer)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Port I/O vs Memory-Mapped I/O</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Port I/O</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Separate address space for I/O</li>
                <li>Uses special CPU instructions (IN, OUT)</li>
                <li>Limited address range (typically 16-bit)</li>
                <li>Explicit I/O operations</li>
                <li>Common in older x86 hardware</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Memory-Mapped I/O</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Devices mapped to memory address space</li>
                <li>Uses regular memory instructions (MOV, etc.)</li>
                <li>Full address range available</li>
                <li>Can use all memory-oriented instructions</li>
                <li>Common in modern architectures (ARM, RISC-V)</li>
              </ul>
            </div>
          </div>

          <p className="mt-4">
            Many modern systems use a combination of both approaches, with port I/O for legacy devices and memory-mapped
            I/O for newer hardware.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Practice Exercises</h2>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 1: Serial Port Communication</h3>
            <p>
              Write a program that sends data through a serial port (COM1) using direct port I/O. Implement both reading
              and writing functions.
            </p>
          </div>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 2: Reading Keyboard Status</h3>
            <p>
              Write a program that reads the status of the keyboard controller and detects key presses using port I/O.
            </p>
          </div>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 3: Musical Tones</h3>
            <p>
              Extend the PC speaker example to play a simple melody by generating a sequence of tones with different
              frequencies and durations.
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
          <h2 className="text-xl font-bold mb-3">Additional Resources</h2>

          <ul className="space-y-2">
            <li>
              <a
                href="https://wiki.osdev.org/I/O_Ports"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                OSDev Wiki: I/O Ports
              </a>
            </li>
            <li>
              <a
                href="https://www.win.tue.nl/~aeb/linux/kbd/scancodes.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                PC Keyboard Scancodes
              </a>
            </li>
            <li>
              <a
                href="https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                Intel® 64 and IA-32 Architectures Software Developer Manuals
              </a>
            </li>
            <li>
              <a
                href="https://man7.org/linux/man-pages/man2/ioperm.2.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                Linux Programmer's Manual: ioperm(2)
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Button asChild variant="outline">
            <Link href="/hardware-interaction">← Back to Hardware Interaction</Link>
          </Button>
          <Button asChild>
            <Link href="/hardware-interaction/memory-mapped-io">Next: Memory-Mapped I/O →</Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  )
}

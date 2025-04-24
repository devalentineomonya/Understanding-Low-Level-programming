import DocLayout from "@/components/doc-layout"
import { CodeBlock } from "@/components/code-block"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function X86Basics() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">x86 Assembly Basics</h1>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
            <span>Assembly</span>
            <span className="mx-2">•</span>
            <span>x86 Basics</span>
          </div>
          <p className="text-slate-700 dark:text-slate-300">
            x86 assembly language is a low-level programming language used to directly control the CPU. Understanding
            x86 assembly is crucial for systems programming, reverse engineering, and performance optimization.
          </p>
        </div>

        <div className="p-4 bg-purple-50 dark:bg-purple-950/50 rounded-lg border border-purple-100 dark:border-purple-900">
          <h2 className="text-lg font-semibold mb-2 text-purple-800 dark:text-purple-300">Key Concepts</h2>
          <ul className="list-disc list-inside space-y-1 text-purple-700 dark:text-purple-300">
            <li>Registers and memory</li>
            <li>Instruction set architecture</li>
            <li>Addressing modes</li>
            <li>Common instructions</li>
            <li>Calling conventions</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">x86 Architecture Overview</h2>
          <p className="mb-4">
            The x86 architecture refers to the family of instruction set architectures that began with Intel's 8086 CPU.
            It has evolved over decades to include 32-bit (IA-32/x86) and 64-bit (x86-64/AMD64) variants.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">32-bit x86</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>8 general-purpose registers (EAX, EBX, ECX, EDX, ESI, EDI, EBP, ESP)</li>
                <li>32-bit register width</li>
                <li>Up to 4GB of addressable memory</li>
                <li>Backward compatible with 16-bit code</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">64-bit x86-64</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>16 general-purpose registers (RAX, RBX, RCX, RDX, RSI, RDI, RBP, RSP, R8-R15)</li>
                <li>64-bit register width</li>
                <li>Vastly increased addressable memory</li>
                <li>Additional instruction set extensions</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Registers</h2>
          <p className="mb-4">
            Registers are small, high-speed storage locations directly inside the CPU. They are the primary working
            space for the processor.
          </p>

          <div className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800">
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">64-bit Register</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">32-bit Register</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">16-bit Register</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">8-bit Register</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Primary Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">RAX</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">EAX</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">AX</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">AH/AL</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Accumulator, function return value
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">RBX</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">EBX</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">BX</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">BH/BL</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Base register (for memory access)
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">RCX</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">ECX</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">CX</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">CH/CL</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Counter for loops and string operations
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">RDX</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">EDX</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">DX</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">DH/DL</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Data register, I/O operations
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">RSI</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">ESI</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">SI</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">SIL</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Source index for string operations
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">RDI</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">EDI</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">DI</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">DIL</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Destination index for string operations
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">RBP</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">EBP</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">BP</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">BPL</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Base pointer for stack frames
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">RSP</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">ESP</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">SP</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">SPL</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Stack pointer</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">R8-R15</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">R8D-R15D</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">R8W-R15W</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">R8B-R15B</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Additional general-purpose registers (x86-64 only)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">In addition to general-purpose registers, x86 also has special-purpose registers:</p>

          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>RIP/EIP</strong>: Instruction pointer - points to the next instruction to be executed
            </li>
            <li>
              <strong>RFLAGS/EFLAGS</strong>: Status and control flags
            </li>
            <li>
              <strong>Segment registers</strong>: CS, DS, SS, ES, FS, GS
            </li>
            <li>
              <strong>Control registers</strong>: CR0-CR4
            </li>
            <li>
              <strong>Debug registers</strong>: DR0-DR7
            </li>
            <li>
              <strong>SIMD registers</strong>: XMM0-XMM15, YMM0-YMM15, ZMM0-ZMM31
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Common x86 Instructions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Data Movement</h3>
              <ul className="space-y-1">
                <li>
                  <code>MOV dest, src</code> - Move data from source to destination
                </li>
                <li>
                  <code>PUSH src</code> - Push value onto stack
                </li>
                <li>
                  <code>POP dest</code> - Pop value from stack
                </li>
                <li>
                  <code>LEA dest, src</code> - Load effective address
                </li>
                <li>
                  <code>XCHG a, b</code> - Exchange values
                </li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Arithmetic</h3>
              <ul className="space-y-1">
                <li>
                  <code>ADD dest, src</code> - Add source to destination
                </li>
                <li>
                  <code>SUB dest, src</code> - Subtract source from destination
                </li>
                <li>
                  <code>MUL src</code> - Unsigned multiply
                </li>
                <li>
                  <code>DIV src</code> - Unsigned divide
                </li>
                <li>
                  <code>INC dest</code> - Increment by 1
                </li>
                <li>
                  <code>DEC dest</code> - Decrement by 1
                </li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Logical</h3>
              <ul className="space-y-1">
                <li>
                  <code>AND dest, src</code> - Bitwise AND
                </li>
                <li>
                  <code>OR dest, src</code> - Bitwise OR
                </li>
                <li>
                  <code>XOR dest, src</code> - Bitwise XOR
                </li>
                <li>
                  <code>NOT dest</code> - Bitwise NOT
                </li>
                <li>
                  <code>SHL/SAL dest, count</code> - Shift left
                </li>
                <li>
                  <code>SHR dest, count</code> - Shift right (logical)
                </li>
                <li>
                  <code>SAR dest, count</code> - Shift right (arithmetic)
                </li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Control Flow</h3>
              <ul className="space-y-1">
                <li>
                  <code>JMP label</code> - Unconditional jump
                </li>
                <li>
                  <code>JE/JZ label</code> - Jump if equal/zero
                </li>
                <li>
                  <code>JNE/JNZ label</code> - Jump if not equal/not zero
                </li>
                <li>
                  <code>JG/JNLE label</code> - Jump if greater
                </li>
                <li>
                  <code>JL/JNGE label</code> - Jump if less
                </li>
                <li>
                  <code>CALL label</code> - Call procedure
                </li>
                <li>
                  <code>RET</code> - Return from procedure
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Addressing Modes</h2>
          <p className="mb-4">
            Addressing modes determine how the processor calculates the effective memory address for operands.
          </p>

          <div className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800">
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Addressing Mode</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Syntax Example</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Immediate</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>MOV EAX, 42</code>
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    The operand is a constant value
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Register</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>MOV EAX, EBX</code>
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    The operand is in a register
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Direct</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>MOV EAX, [0x1000]</code>
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    The operand is at the memory location specified
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Register Indirect</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>MOV EAX, [EBX]</code>
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    The operand is at the memory location pointed to by the register
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Base + Displacement</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>MOV EAX, [EBX+8]</code>
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    The operand is at the memory location pointed to by the register plus an offset
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Base + Index</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>MOV EAX, [EBX+ESI]</code>
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    The operand is at the memory location pointed to by the sum of two registers
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Base + Index + Displacement
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>MOV EAX, [EBX+ESI+8]</code>
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    The operand is at the memory location pointed to by the sum of two registers plus an offset
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Scaled Index</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>MOV EAX, [EBX+ESI*4]</code>
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    The operand is at the memory location pointed to by a base register plus an index register
                    multiplied by a scale factor (1, 2, 4, or 8)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Assembly Example: Hello World</h2>

          <CodeBlock
            language="asm"
            filename="hello_world.asm"
            code={`; Hello World program (Linux, x86-64, NASM syntax)
section .data
    msg db 'Hello, World!', 0Ah    ; Message with newline (0Ah)
    len equ $ - msg                ; Length of message

section .text
    global _start

_start:
    ; Write the message to stdout (file descriptor 1)
    mov rax, 1                     ; syscall number for sys_write
    mov rdi, 1                     ; file descriptor 1 (stdout)
    mov rsi, msg                   ; pointer to message
    mov rdx, len                   ; message length
    syscall                        ; call kernel

    ; Exit the program
    mov rax, 60                    ; syscall number for sys_exit
    xor rdi, rdi                   ; exit code 0
    syscall                        ; call kernel`}
          />

          <p className="mt-4">To assemble and run this program on a Linux system:</p>

          <CodeBlock
            language="bash"
            filename="terminal_commands.sh"
            code={`# Assemble
nasm -f elf64 hello_world.asm -o hello_world.o

# Link
ld hello_world.o -o hello_world

# Run
./hello_world`}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Assembly Example: Function Call</h2>

          <CodeBlock
            language="asm"
            filename="function_call.asm"
            code={`; Function call example (Linux, x86-64, NASM syntax)
section .data
    format db 'Sum: %d', 0Ah, 0    ; C-style format string with newline

section .text
    global main
    extern printf                  ; External C function

main:
    ; Function prologue
    push rbp                       ; Save old base pointer
    mov rbp, rsp                   ; Set new base pointer
    sub rsp, 16                    ; Allocate stack space (16 bytes for alignment)

    ; Call our add function
    mov edi, 40                    ; First parameter
    mov esi, 2                     ; Second parameter
    call add_numbers               ; Call the function
    
    ; Call printf with the result
    mov edi, format                ; Format string
    mov esi, eax                   ; The sum (result from add_numbers)
    xor eax, eax                   ; Clear AL (no floating point args)
    call printf                    ; Call printf

    ; Function epilogue
    mov rsp, rbp                   ; Restore stack pointer
    pop rbp                        ; Restore base pointer
    
    ; Return from main
    xor eax, eax                   ; Return 0
    ret

; Function to add two numbers
; Parameters: edi = first number, esi = second number
; Returns: eax = sum
add_numbers:
    mov eax, edi                   ; Move first parameter to eax
    add eax, esi                   ; Add second parameter
    ret                            ; Return with sum in eax`}
          />

          <p className="mt-4">To assemble and run this program on a Linux system:</p>

          <CodeBlock
            language="bash"
            filename="terminal_commands.sh"
            code={`# Assemble
nasm -f elf64 function_call.asm -o function_call.o

# Link with C library
gcc function_call.o -o function_call -no-pie

# Run
./function_call`}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Calling Conventions</h2>
          <p className="mb-4">
            Calling conventions define how functions receive parameters and return results. They specify which registers
            are used for what purpose and who is responsible for preserving register values.
          </p>

          <h3 className="text-xl font-semibold mb-2">x86-64 System V AMD64 ABI (Linux, macOS, BSD)</h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>First 6 integer/pointer arguments: RDI, RSI, RDX, RCX, R8, R9</li>
            <li>First 8 floating-point arguments: XMM0-XMM7</li>
            <li>Additional arguments are passed on the stack</li>
            <li>Return value: RAX (integer/pointer), XMM0 (floating-point)</li>
            <li>Caller-saved registers: RAX, RCX, RDX, RSI, RDI, R8-R11</li>
            <li>Callee-saved registers: RBX, RBP, RSP, R12-R15</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">x86-64 Microsoft x64 ABI (Windows)</h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>First 4 arguments: RCX, RDX, R8, R9</li>
            <li>First 4 floating-point arguments: XMM0-XMM3</li>
            <li>Additional arguments are passed on the stack</li>
            <li>Return value: RAX (integer/pointer), XMM0 (floating-point)</li>
            <li>Caller-saved registers: RAX, RCX, RDX, R8-R11, XMM0-XMM5</li>
            <li>Callee-saved registers: RBX, RBP, RDI, RSI, RSP, R12-R15, XMM6-XMM15</li>
            <li>Requires 32-byte shadow space on stack</li>
          </ul>
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Practice Exercises</h2>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 1: Register Operations</h3>
            <p>Write an assembly program that:</p>
            <ol className="list-decimal list-inside ml-4 mt-2">
              <li>Initializes RAX with 10 and RBX with 20</li>
              <li>Adds them and stores the result in RCX</li>
              <li>Multiplies RCX by 2 and stores the result in RDX</li>
              <li>Exits with the value in RDX as the exit code</li>
            </ol>
          </div>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 2: Array Sum</h3>
            <p>Write an assembly program that calculates the sum of an array of integers.</p>
          </div>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 3: Function Implementation</h3>
            <p>Implement a function in assembly that calculates the factorial of a number.</p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
          <h2 className="text-xl font-bold mb-3">Additional Resources</h2>

          <ul className="space-y-2">
            <li>
              <a
                href="https://www.cs.virginia.edu/~evans/cs216/guides/x86.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                x86 Assembly Guide (University of Virginia)
              </a>
            </li>
            <li>
              <a
                href="https://software.intel.com/content/www/us/en/develop/articles/intel-sdm.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                Intel® 64 and IA-32 Architectures Software Developer Manuals
              </a>
            </li>
            <li>
              <a
                href="https://www.felixcloutier.com/x86/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                x86 and amd64 Instruction Reference
              </a>
            </li>
            <li>
              <a
                href="https://godbolt.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                Compiler Explorer - See how C/C++ code compiles to assembly
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Button asChild variant="outline">
            <Link href="/assembly">← Back to Assembly</Link>
          </Button>
          <Button asChild>
            <Link href="/assembly/arm-basics">Next: ARM Assembly Basics →</Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  )
}

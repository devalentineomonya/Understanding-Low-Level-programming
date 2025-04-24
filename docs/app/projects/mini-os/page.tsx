import DocLayout from "@/components/doc-layout"
import { CodeBlock } from "@/components/code-block"

export default function MiniOS() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Building a Mini Operating System</h1>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
            <span>Projects</span>
            <span className="mx-2">•</span>
            <span>Mini OS</span>
          </div>
          <p className="text-slate-700 dark:text-slate-300">
            Building a minimal operating system is an excellent way to apply low-level programming concepts. This guide walks through creating a simple OS kernel that boots, initializes hardware, and provides basic functionality.
          </p>
        </div>

        <div className="p-4 bg-pink-50 dark:bg-pink-950/50 rounded-lg border border-pink-100 dark:border-pink-900">
          <h2 className="text-lg font-semibold mb-2 text-pink-800 dark:text-pink-300">Key Concepts</h2>
          <ul className="list-disc list-inside space-y-1 text-pink-700 dark:text-pink-300">
            <li>Kernel architecture and design</li>
            <li>Memory management and paging</li>
            <li>Interrupt handling</li>
            <li>Device drivers</li>
            <li>Process management</li>
            <li>System calls</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Project Overview</h2>
          <p className="mb-4">
            Our mini OS will include the following components:
          </p>

          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>A bootloader to load the kernel</li>
            <li>A kernel entry point that sets up the environment</li>
            <li>Basic hardware initialization</li>
            <li>Memory management with paging</li>
            <li>Interrupt handling</li>
            <li>A simple terminal for input/output</li>
            <li>Basic device drivers (keyboard, timer)</li>
          </ol>

          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-2">Project Structure</h3>
            <pre className="text-sm">
              <code>{`mini-os/
├── boot/
│   ├── boot.asm       # Bootloader
│   └── kernel_entry.asm # Assembly entry point
├── kernel/
│   ├── kernel.c       # Main kernel code
│   ├── memory.c       # Memory management
│   ├── memory.h
│   ├── interrupts.c   # Interrupt handling
│   ├── interrupts.h
│   ├── io.c           # I/O functions
│   ├── io.h
│   ├── terminal.c     # Terminal driver
│   └── terminal.h
├── drivers/
│   ├── keyboard.c     # Keyboard driver
│   ├── keyboard.h
│   ├── timer.c        # Programmable Interval Timer
│   └── timer.h
├── libc/
│   ├── string.c       # Basic string functions
│   └── string.h
├── Makefile           # Build system
└── linker.ld          # Linker script`}</code>
            </pre>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Bootloader</h2>
          <p className="mb-4">
            We'll use a simple bootloader that loads our kernel and switches to 32-bit protected mode. This is similar to the bootloader we created in the previous section, but with some modifications to load our kernel:
          </p>

          <CodeBlock
            language="asm"
            filename="boot/boot.asm"
            code={`; Mini OS Bootloader
[BITS 16]           ; Start in 16-bit real mode
[ORG 0x7C00]        ; Code is loaded at address 0x7C00

KERNEL_OFFSET equ 0x1000   ; Memory offset to load the kernel

; Initialize segment registers
mov ax, 0           ; Can't set ds/es directly
mov ds, ax          ; Set DS to 0
mov es, ax          ; Set ES to 0
mov ss, ax          ; Set SS to 0
mov sp, 0x7C00      ; Set stack pointer just below the bootloader

; Print a welcome message
mov si, MSG_REAL_MODE
call print_string

; Load the kernel from disk
call load_kernel

; Enable A20 line
call enable_a20

; Switch to protected mode
call switch_to_pm

; Function to load the kernel from disk
load_kernel:
    pusha

    mov si, MSG_LOAD_KERNEL
    call print_string

    mov ah, 0x02        ; BIOS read sector function
    mov al, 32          ; Number of sectors to read (16KB)
    mov ch, 0           ; Cylinder number
    mov cl, 2           ; Sector number (1 is the boot sector)
    mov dh, 0           ; Head number
    mov dl, 0           ; Drive number (0 = floppy A:)

    ; Set up memory location to read to
    mov bx, KERNEL_OFFSET

    int 0x13            ; BIOS interrupt for disk functions
    jc disk_error       ; Jump if carry flag set (error)

    cmp al, 32          ; Check if we read all sectors
    jne disk_error      ; Jump if not all sectors were read

    mov si, MSG_KERNEL_LOADED
    call print_string

    popa
    ret

; Handle disk error
disk_error:
    mov si, MSG_DISK_ERROR
    call print_string
    jmp $               ; Hang

; Function to enable the A20 line
enable_a20:
    pusha

    ; Try using the BIOS
    mov ax, 0x2401
    int 0x15
    jnc .done        ; If carry flag is clear, A20 is enabled

    ; Try using the keyboard controller
    call .wait_input
    mov al, 0xD1  ; Command to write to the keyboard controller
    out 0x64, al  ; Send the command

    call .wait_input
    mov al, 0xDF  ; Value to enable A20
    out 0x60, al  ; Send the value

    call .wait_output

    .done:
    popa
    ret

.wait_input:
    ; Wait for the input buffer to be empty
    ; (bit 1 of status port 0x64 is clear)
    in al, 0x64
    test al, 0x02
    jnz .wait_input
    ret

.wait_output:
    ; Wait for the output buffer to be full
    ; (bit 0 of status port 0x64 is set)
    in al, 0x64
    test al, 0x01
    jz .wait_output
    ret

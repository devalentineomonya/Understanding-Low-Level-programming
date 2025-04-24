import DocLayout from "@/components/doc-layout"
import { CodeBlock } from "@/components/code-block"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Bootloader() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Building a Simple Bootloader</h1>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
            <span>Projects</span>
            <span className="mx-2">•</span>
            <span>Bootloader</span>
          </div>
          <p className="text-slate-700 dark:text-slate-300">
            A bootloader is a small program that runs when a computer starts up, before the operating system loads. It's
            responsible for initializing hardware, setting up the environment, and loading the kernel. In this guide,
            we'll build a simple bootloader for x86 systems.
          </p>
        </div>

        <div className="p-4 bg-pink-50 dark:bg-pink-950/50 rounded-lg border border-pink-100 dark:border-pink-900">
          <h2 className="text-lg font-semibold mb-2 text-pink-800 dark:text-pink-300">Key Concepts</h2>
          <ul className="list-disc list-inside space-y-1 text-pink-700 dark:text-pink-300">
            <li>Boot process and BIOS</li>
            <li>Real mode vs. Protected mode</li>
            <li>Memory layout during boot</li>
            <li>Assembly programming for bootloaders</li>
            <li>Loading the kernel from disk</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">The Boot Process</h2>
          <p className="mb-4">
            When a computer powers on, it follows a specific sequence to load the operating system:
          </p>

          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>The CPU starts executing code from a predefined memory address (0xFFFF0 on x86)</li>
            <li>This address points to the BIOS (Basic Input/Output System)</li>
            <li>The BIOS performs a Power-On Self-Test (POST) and initializes hardware</li>
            <li>The BIOS looks for bootable devices according to the boot order</li>
            <li>When found, it loads the first sector (512 bytes) from the device into memory at address 0x7C00</li>
            <li>The BIOS checks for a boot signature (0xAA55) at the end of the sector</li>
            <li>If valid, the BIOS jumps to 0x7C00, transferring control to the bootloader</li>
          </ol>

          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-2">Boot Sector Requirements</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Must be exactly 512 bytes in size</li>
              <li>Must end with the boot signature 0xAA55 (stored as 0x55, 0xAA due to little-endian)</li>
              <li>Loaded at memory address 0x7C00</li>
              <li>CPU starts in 16-bit real mode</li>
              <li>Limited space for code (only 510 bytes, excluding the signature)</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Real Mode vs. Protected Mode</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Real Mode</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>16-bit mode that the CPU starts in</li>
                <li>Direct access to I/O and memory</li>
                <li>No memory protection or virtual memory</li>
                <li>Limited to 1MB of addressable memory</li>
                <li>Segmented memory model (segment:offset)</li>
                <li>Compatible with BIOS services</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Protected Mode</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>32-bit mode with advanced features</li>
                <li>Memory protection and virtual memory</li>
                <li>Up to 4GB of addressable memory</li>
                <li>Privilege levels (rings 0-3)</li>
                <li>No direct BIOS access</li>
                <li>Required for modern operating systems</li>
              </ul>
            </div>
          </div>

          <p className="mb-4">
            Most bootloaders start in real mode, perform necessary initialization, and then switch to protected mode
            before loading the kernel. The transition to protected mode involves setting up a Global Descriptor Table
            (GDT) and enabling the protected mode bit in the CR0 control register.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Memory Layout During Boot</h2>

          <div className="p-4 border rounded-lg dark:border-slate-700 overflow-x-auto">
            <pre className="text-sm">
              <code>{`Memory Address    | Description
------------------+------------------------------------------
0x00000 - 0x003FF | Interrupt Vector Table (IVT)
0x00400 - 0x004FF | BIOS Data Area (BDA)
0x00500 - 0x07BFF | Free memory (usable)
0x07C00 - 0x07DFF | Boot sector (loaded by BIOS)
0x07E00 - 0x9FFFF | Free memory (usable for kernel/stack)
0xA0000 - 0xBFFFF | Video memory
0xC0000 - 0xFFFFF | BIOS ROM and hardware mappings
`}</code>
            </pre>
          </div>

          <p className="mt-4">
            When designing a bootloader, it's important to be aware of this memory layout to avoid overwriting critical
            areas. The bootloader typically sets up a stack in the free memory region and loads the kernel into
            available memory.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">A Simple Bootloader</h2>
          <p className="mb-4">
            Let's create a minimal bootloader that prints a message and halts. This example uses NASM assembly syntax:
          </p>

          <CodeBlock
            language="asm"
            filename="bootloader.asm"
            code={`; Simple bootloader that prints a message and halts
[BITS 16]           ; Specify 16-bit code (real mode)
[ORG 0x7C00]        ; Code is loaded at address 0x7C00

; Initialize segment registers
mov ax, 0           ; Can't set ds/es directly
mov ds, ax          ; Set DS to 0
mov es, ax          ; Set ES to 0
mov ss, ax          ; Set SS to 0
mov sp, 0x7C00      ; Set stack pointer just below the bootloader

; Print a message using BIOS teletype function
mov si, message     ; SI points to the message
call print_string   ; Call the print routine

; Halt the system
halt:
    hlt             ; Halt the CPU
    jmp halt        ; Jump back to halt if interrupted

; Function to print a null-terminated string
; Input: SI points to the string
print_string:
    pusha           ; Save all registers
    mov ah, 0x0E    ; BIOS teletype function
.loop:
    lodsb           ; Load byte at SI into AL and increment SI
    test al, al     ; Check if AL is 0 (end of string)
    jz .done        ; If AL is 0, we're done
    int 0x10        ; Call BIOS interrupt to print the character
    jmp .loop       ; Repeat for next character
.done:
    popa            ; Restore all registers
    ret             ; Return from function

; Data section
message: db 'Hello from our bootloader!', 0x0D, 0x0A, 0

; Padding and boot signature
times 510-($-$$) db 0   ; Pad with zeros up to 510 bytes
dw 0xAA55               ; Boot signature (last two bytes)`}
          />

          <p className="mt-4">To assemble and create a bootable disk image:</p>

          <CodeBlock
            language="bash"
            filename="terminal_commands.sh"
            code={`# Assemble the bootloader
nasm -f bin bootloader.asm -o bootloader.bin

# Create a disk image (for use with QEMU or similar)
dd if=/dev/zero of=bootdisk.img bs=512 count=2880
dd if=bootloader.bin of=bootdisk.img conv=notrunc

# Run in QEMU
qemu-system-i386 -fda bootdisk.img`}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Loading a Kernel</h2>
          <p className="mb-4">
            A more practical bootloader needs to load a kernel from disk. Here's an example that loads additional
            sectors:
          </p>

          <CodeBlock
            language="asm"
            filename="kernel_loader.asm"
            code={`; Bootloader that loads a kernel from disk
[BITS 16]           ; Specify 16-bit code (real mode)
[ORG 0x7C00]        ; Code is loaded at address 0x7C00

KERNEL_OFFSET equ 0x1000   ; Memory offset to load the kernel

; Initialize segment registers
mov ax, 0           ; Can't set ds/es directly
mov ds, ax          ; Set DS to 0
mov es, ax          ; Set ES to 0
mov ss, ax          ; Set SS to 0
mov sp, 0x7C00      ; Set stack pointer just below the bootloader

; Print a welcome message
mov si, msg_welcome
call print_string

; Load the kernel from disk
call load_kernel

; Print a message indicating kernel is loaded
mov si, msg_kernel_loaded
call print_string

; Jump to the kernel
jmp KERNEL_OFFSET

; Function to load the kernel from disk
load_kernel:
    pusha               ; Save all registers
    
    mov si, msg_loading
    call print_string
    
    mov ah, 0x02        ; BIOS read sector function
    mov al, 15          ; Number of sectors to read
    mov ch, 0           ; Cylinder number
    mov cl, 2           ; Sector number (1 is the boot sector)
    mov dh, 0           ; Head number
    mov dl, 0           ; Drive number (0 = floppy A:)
    
    ; Set up memory location to read to
    mov bx, KERNEL_OFFSET
    
    int 0x13            ; BIOS interrupt for disk functions
    jc disk_error       ; Jump if carry flag set (error)
    
    cmp al, 15          ; Check if we read all 15 sectors
    jne disk_error      ; Jump if not all sectors were read
    
    popa                ; Restore all registers
    ret                 ; Return from function

; Handle disk error
disk_error:
    mov si, msg_disk_error
    call print_string
    jmp $               ; Hang

; Function to print a null-terminated string
; Input: SI points to the string
print_string:
    pusha               ; Save all registers
    mov ah, 0x0E        ; BIOS teletype function
.loop:
    lodsb               ; Load byte at SI into AL and increment SI
    test al, al         ; Check if AL is 0 (end of string)
    jz .done            ; If AL is 0, we're done
    int 0x10            ; Call BIOS interrupt to print the character
    jmp .loop           ; Repeat for next character
.done:
    popa                ; Restore all registers
    ret                 ; Return from function

; Data section
msg_welcome:      db 'Bootloader started...', 0x0D, 0x0A, 0
msg_loading:      db 'Loading kernel...', 0x0D, 0x0A, 0
msg_kernel_loaded: db 'Kernel loaded successfully!', 0x0D, 0x0A, 0
msg_disk_error:   db 'Error loading kernel from disk!', 0x0D, 0x0A, 0

; Padding and boot signature
times 510-($-$$) db 0   ; Pad with zeros up to 510 bytes
dw 0xAA55               ; Boot signature (last two bytes)`}
          />

          <p className="mt-4">
            This bootloader loads 15 sectors (7.5 KB) from the disk into memory at address 0x1000, then jumps to that
            address to execute the kernel.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Switching to Protected Mode</h2>
          <p className="mb-4">
            To use the full capabilities of the CPU, we need to switch from real mode to protected mode. This involves:
          </p>

          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>Disabling interrupts</li>
            <li>Loading a Global Descriptor Table (GDT)</li>
            <li>Setting the PE (Protection Enable) bit in CR0</li>
            <li>Far jumping to flush the pipeline and load CS with the new selector</li>
            <li>Setting up segment registers with appropriate selectors</li>
          </ol>

          <CodeBlock
            language="asm"
            filename="protected_mode.asm"
            code={`; Bootloader that switches to 32-bit protected mode
[BITS 16]           ; Start in 16-bit real mode
[ORG 0x7C00]        ; Code is loaded at address 0x7C00

; Initialize segment registers
mov ax, 0           ; Can't set ds/es directly
mov ds, ax          ; Set DS to 0
mov es, ax          ; Set ES to 0
mov ss, ax          ; Set SS to 0
mov sp, 0x7C00      ; Set stack pointer just below the bootloader

; Print a message in real mode
mov si, msg_real_mode
call print_string_rm

; Switch to protected mode
call switch_to_pm

; Function to print a string in real mode
; Input: SI points to the string
print_string_rm:
    pusha
    mov ah, 0x0E    ; BIOS teletype function
.loop:
    lodsb           ; Load byte at SI into AL and increment SI
    test al, al     ; Check if AL is 0 (end of string)
    jz .done        ; If AL is 0, we're done
    int 0x10        ; Call BIOS interrupt to print the character
    jmp .loop       ; Repeat for next character
.done:
    popa
    ret

; Function to switch to protected mode
switch_to_pm:
    cli             ; Disable interrupts
    
    ; Load the GDT
    lgdt [gdt_descriptor]
    
    ; Set the PE bit in CR0
    mov eax, cr0
    or eax, 0x1
    mov cr0, eax
    
    ; Far jump to flush the pipeline and load CS
    jmp CODE_SEG:init_pm

[BITS 32]           ; Following code is 32-bit

; Initialize protected mode
init_pm:
    ; Set up segment registers
    mov ax, DATA_SEG
    mov ds, ax
    mov ss, ax
    mov es, ax
    mov fs, ax
    mov gs, ax
    
    ; Set up the stack
    mov ebp, 0x90000
    mov esp, ebp
    
    ; Call the main protected mode code
    call begin_pm

; Main protected mode code
begin_pm:
    ; Print a message in protected mode
    mov esi, msg_protected_mode
    call print_string_pm
    
    ; Halt the CPU
    jmp $

; Function to print a string in protected mode
; Input: ESI points to the string
print_string_pm:
    pusha
    mov edx, 0xB8000    ; Video memory address
.loop:
    mov al, [esi]       ; Load character
    mov ah, 0x0F        ; White on black attribute
    test al, al         ; Check if character is 0 (end of string)
    jz .done            ; If 0, we're done
    mov [edx], ax       ; Write character and attribute to video memory
    add edx, 2          ; Move to next character position
    inc esi             ; Move to next character in string
    jmp .loop
.done:
    popa
    ret

; Global Descriptor Table (GDT)
gdt_start:

gdt_null:               ; Null descriptor (required)
    dd 0x0              ; 4 bytes of zeros
    dd 0x0              ; 4 bytes of zeros

gdt_code:               ; Code segment descriptor
    ; Base=0, Limit=0xFFFFF, Present=1, DPL=0, Type=Code, Read/Execute, Granularity=1
    dw 0xFFFF           ; Limit (bits 0-15)
    dw 0x0              ; Base (bits 0-15)
    db 0x0              ; Base (bits 16-23)
    db 10011010b        ; Access byte
    db 11001111b        ; Flags + Limit (bits 16-19)
    db 0x0              ; Base (bits 24-31)

gdt_data:               ; Data segment descriptor
    ; Base=0, Limit=0xFFFFF, Present=1, DPL=0, Type=Data, Read/Write, Granularity=1
    dw 0xFFFF           ; Limit (bits 0-15)
    dw 0x0              ; Base (bits 0-15)
    db 0x0              ; Base (bits 16-23)
    db 10010010b        ; Access byte
    db 11001111b        ; Flags + Limit (bits 16-19)
    db 0x0              ; Base (bits 24-31)

gdt_end:                ; Used to calculate GDT size

; GDT descriptor
gdt_descriptor:
    dw gdt_end - gdt_start - 1    ; Size of GDT minus 1
    dd gdt_start                  ; Address of GDT

; Define segment selectors
CODE_SEG equ gdt_code - gdt_start
DATA_SEG equ gdt_data - gdt_start

; Data
msg_real_mode db 'Started in 16-bit Real Mode', 0
msg_protected_mode db 'Successfully switched to 32-bit Protected Mode', 0

; Padding and boot signature
times 510-($-$$) db 0   ; Pad with zeros up to 510 bytes
dw 0xAA55               ; Boot signature (last two bytes)`}
          />

          <p className="mt-4">
            This bootloader switches to 32-bit protected mode and prints a message directly to video memory (since BIOS
            services are no longer available in protected mode).
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">A20 Line</h2>
          <p className="mb-4">
            The A20 line is a legacy feature that needs to be enabled to access memory above 1MB. In early PCs, the 20th
            address line was masked to maintain compatibility with the 8086 processor's memory wrap-around behavior.
            Modern bootloaders need to enable the A20 line:
          </p>

          <CodeBlock
            language="asm"
            filename="enable_a20.asm"
            code={`; Function to enable the A20 line
enable_a20:
    pusha
    
    ; Try using the BIOS
    mov ax, 0x2401
    int 0x15
    jnc .done        ; If carry flag is clear, A20 is enabled
    
    ; Try using the keyboard controller
    call .wait_input
    mov al, 0xD1     ; Command: Write to output port
    out 0x64, al
    
    call .wait_input
    mov al, 0xDF     ; Enable A20
    out 0x60, al
    
    call .wait_input
    
.done:
    popa
    ret
    
.wait_input:
    in al, 0x64
    test al, 2
    jnz .wait_input
    ret`}
          />

          <p className="mt-4">
            This function tries to enable the A20 line first using a BIOS service, and if that fails, it uses the
            keyboard controller method.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Practice Exercises</h2>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 1: Hello World Bootloader</h3>
            <p>
              Write a simple bootloader that prints "Hello, World!" to the screen using BIOS services. Make sure it
              includes the proper boot signature and can be loaded by QEMU.
            </p>
          </div>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 2: Reading from Disk</h3>
            <p>
              Extend your bootloader to read additional sectors from disk and display their contents. This will help you
              understand how to load larger programs.
            </p>
          </div>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 3: Protected Mode Transition</h3>
            <p>
              Implement a bootloader that switches to protected mode and displays a message by writing directly to video
              memory. Include a simple GDT setup.
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
          <h2 className="text-xl font-bold mb-3">Additional Resources</h2>

          <ul className="space-y-2">
            <li>
              <a
                href="https://wiki.osdev.org/Bootloader"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                OSDev Wiki: Bootloader
              </a>
            </li>
            <li>
              <a
                href="https://www.cs.bham.ac.uk/~exr/lectures/opsys/10_11/lectures/os-dev.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                Writing a Simple Operating System from Scratch
              </a>
            </li>
            <li>
              <a
                href="https://github.com/cfenollosa/os-tutorial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                GitHub: OS Tutorial
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
          </ul>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Button asChild variant="outline">
            <Link href="/projects">← Back to Projects</Link>
          </Button>
          <Button asChild>
            <Link href="/projects/custom-allocator">Next: Custom Allocator →</Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  )
}

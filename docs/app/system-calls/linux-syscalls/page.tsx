import DocLayout from "@/components/doc-layout"
import { CodeBlock } from "@/components/code-block"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LinuxSyscalls() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Linux System Calls</h1>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
            <span>System Calls</span>
            <span className="mx-2">•</span>
            <span>Linux Syscalls</span>
          </div>
          <p className="text-slate-700 dark:text-slate-300">
            System calls are the interface between user applications and the Linux kernel. They allow programs to
            request services from the operating system, such as file operations, process management, and network
            communication.
          </p>
        </div>

        <div className="p-4 bg-yellow-50 dark:bg-yellow-950/50 rounded-lg border border-yellow-100 dark:border-yellow-900">
          <h2 className="text-lg font-semibold mb-2 text-yellow-800 dark:text-yellow-300">Key Concepts</h2>
          <ul className="list-disc list-inside space-y-1 text-yellow-700 dark:text-yellow-300">
            <li>System call mechanism</li>
            <li>Common Linux syscalls</li>
            <li>Syscall tables and numbers</li>
            <li>Direct syscall invocation</li>
            <li>C library wrappers</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">System Call Mechanism</h2>
          <p className="mb-4">
            System calls provide a controlled entry point into the kernel, allowing user-space programs to request
            privileged operations. The process involves:
          </p>

          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>Loading syscall number and arguments into registers</li>
            <li>
              Executing a special instruction to switch to kernel mode (e.g., <code>syscall</code> on x86-64)
            </li>
            <li>Kernel validates the request and performs the operation</li>
            <li>Kernel returns result to user space</li>
            <li>Execution continues in user mode</li>
          </ol>

          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-2">x86-64 System Call Convention</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>System call number: RAX register</li>
              <li>Arguments (in order): RDI, RSI, RDX, R10, R8, R9</li>
              <li>Return value: RAX register</li>
              <li>
                Instruction: <code>syscall</code>
              </li>
              <li>Registers clobbered: RCX, R11, and possibly others</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Common Linux System Calls</h2>

          <div className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800">
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Syscall</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Number (x86-64)</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Description</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">
                    C Library Wrapper
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">read</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Read from a file descriptor
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>read()</code>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">write</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">1</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Write to a file descriptor
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>write()</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">open</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">2</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Open a file</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>open()</code>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">close</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">3</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Close a file descriptor</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>close()</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">stat</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">4</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Get file status</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>stat()</code>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">mmap</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">9</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Map files or devices into memory
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>mmap()</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">fork</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">57</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Create a new process</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>fork()</code>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">execve</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">59</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Execute program</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>execve()</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">exit</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">60</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Terminate the calling process
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>exit()</code>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">wait4</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">61</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Wait for process to change state
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>wait4()</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">kill</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">62</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Send signal to a process</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>kill()</code>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">socket</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">41</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Create an endpoint for communication
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <code>socket()</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">
            Note: System call numbers can vary between architectures and kernel versions. The numbers above are for
            x86-64 on recent Linux kernels.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Direct System Call Example</h2>
          <p className="mb-4">This example shows how to make a direct system call using inline assembly in C:</p>

          <CodeBlock
            language="c"
            filename="direct_syscall.c"
            code={`#include <stdio.h>
#include <unistd.h>
#include <string.h>

// Direct system call to write using inline assembly
long syscall_write(int fd, const char *buf, size_t count) {
    long ret;
    
    __asm__ volatile(
        "syscall"                  // System call instruction
        : "=a" (ret)               // Output: RAX -> ret
        : "a" (1),                 // Input: RAX = 1 (write syscall number)
          "D" (fd),                // Input: RDI = fd (first argument)
          "S" (buf),               // Input: RSI = buf (second argument)
          "d" (count)              // Input: RDX = count (third argument)
        : "rcx", "r11", "memory"   // Clobbered registers
    );
    
    return ret;
}

int main() {
    const char *message = "Hello from a direct system call!\\n";
    size_t len = strlen(message);
    
    // Using the direct syscall
    long result = syscall_write(STDOUT_FILENO, message, len);
    
    printf("Syscall returned: %ld\\n", result);
    
    // Using the C library wrapper for comparison
    ssize_t libc_result = write(STDOUT_FILENO, message, len);
    
    printf("Libc write returned: %zd\\n", libc_result);
    
    return 0;
}`}
          />

          <p className="mt-4">Compile and run this program with:</p>

          <CodeBlock
            language="bash"
            filename="terminal_commands.sh"
            code={`gcc -o direct_syscall direct_syscall.c
./direct_syscall`}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">System Call in Assembly</h2>
          <p className="mb-4">Here's an example of making system calls directly in assembly:</p>

          <CodeBlock
            language="asm"
            filename="syscall_example.asm"
            code={`; Linux x86-64 assembly example of system calls
section .data
    message db "Hello from assembly syscall!", 10, 0  ; Message with newline
    message_len equ $ - message                       ; Length of message

section .text
    global _start

_start:
    ; write(1, message, message_len)
    mov rax, 1                  ; syscall number for sys_write
    mov rdi, 1                  ; file descriptor 1 (stdout)
    mov rsi, message            ; pointer to message
    mov rdx, message_len        ; message length
    syscall                     ; invoke the syscall

    ; exit(0)
    mov rax, 60                 ; syscall number for sys_exit
    xor rdi, rdi                ; exit code 0
    syscall                     ; invoke the syscall`}
          />

          <p className="mt-4">Assemble, link, and run this program with:</p>

          <CodeBlock
            language="bash"
            filename="terminal_commands.sh"
            code={`nasm -f elf64 syscall_example.asm -o syscall_example.o
ld syscall_example.o -o syscall_example
./syscall_example`}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">C Library Wrappers</h2>
          <p className="mb-4">
            Most programs don't make system calls directly but use C library wrappers that handle the details:
          </p>

          <CodeBlock
            language="c"
            filename="libc_wrappers.c"
            code={`#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/stat.h>
#include <sys/types.h>

int main() {
    // File operations using C library wrappers
    int fd = open("example.txt", O_CREAT | O_WRONLY | O_TRUNC, 0644);
    if (fd == -1) {
        perror("open");
        exit(EXIT_FAILURE);
    }
    
    const char *data = "This is an example file.\\n";
    ssize_t bytes_written = write(fd, data, strlen(data));
    if (bytes_written == -1) {
        perror("write");
        close(fd);
        exit(EXIT_FAILURE);
    }
    
    if (close(fd) == -1) {
        perror("close");
        exit(EXIT_FAILURE);
    }
    
    // Process management
    pid_t pid = fork();
    if (pid == -1) {
        perror("fork");
        exit(EXIT_FAILURE);
    }
    
    if (pid == 0) {
        // Child process
        printf("Child process (PID: %d)\\n", getpid());
        exit(EXIT_SUCCESS);
    } else {
        // Parent process
        printf("Parent process (PID: %d), child PID: %d\\n", getpid(), pid);
        
        int status;
        if (wait(&status) == -1) {
            perror("wait");
            exit(EXIT_FAILURE);
        }
        
        if (WIFEXITED(status)) {
            printf("Child exited with status: %d\\n", WEXITSTATUS(status));
        }
    }
    
    return 0;
}`}
          />

          <p className="mt-4">The C library provides several advantages over direct system calls:</p>

          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Portability across different operating systems and architectures</li>
            <li>
              Error handling and setting of <code>errno</code>
            </li>
            <li>Additional functionality and optimizations</li>
            <li>Simplified interfaces for complex operations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Finding System Call Numbers</h2>
          <p className="mb-4">
            System call numbers are defined in the kernel headers. On Linux systems, you can find them in:
          </p>

          <CodeBlock
            language="bash"
            filename="terminal_commands.sh"
            code={`# For x86-64
cat /usr/include/x86_64-linux-gnu/asm/unistd_64.h

# For x86 (32-bit)
cat /usr/include/x86_64-linux-gnu/asm/unistd_32.h

# For ARM
cat /usr/include/arm-linux-gnueabihf/asm/unistd.h`}
          />

          <p className="mt-4">
            You can also use the <code>syscall</code> function from the C library to make system calls by number:
          </p>

          <CodeBlock
            language="c"
            filename="syscall_function.c"
            code={`#include <stdio.h>
#include <unistd.h>
#include <sys/syscall.h>

int main() {
    // Using syscall() function to make a system call
    long result = syscall(SYS_getpid);
    printf("Current PID: %ld\\n", result);
    
    // Compare with the C library wrapper
    pid_t pid = getpid();
    printf("getpid() returns: %d\\n", pid);
    
    return 0;
}`}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">System Call Tracing</h2>
          <p className="mb-4">
            The <code>strace</code> utility is invaluable for debugging and understanding system calls made by a
            program:
          </p>

          <CodeBlock
            language="bash"
            filename="terminal_commands.sh"
            code={`# Trace system calls made by a command
strace ls -l

# Trace a specific process
strace -p <PID>

# Trace only specific system calls
strace -e open,read,write ls -l

# Show timestamps for each system call
strace -t ls -l

# Summarize system call statistics
strace -c ls -l`}
          />

          <p className="mt-4">
            Example output from <code>strace</code>:
          </p>

          <pre className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg overflow-x-auto text-sm">
            <code>{`execve("/bin/ls", ["ls", "-l"], 0x7ffc449a8b60 /* 66 vars */) = 0
brk(NULL)                               = 0x55c3cf7ae000
access("/etc/ld.so.nohwcap", F_OK)      = -1 ENOENT
access("/etc/ld.so.preload", R_OK)      = -1 ENOENT
openat(AT_FDCWD, "/etc/ld.so.cache", O_RDONLY|O_CLOEXEC) = 3
fstat(3, {st_mode=S_IFREG|0644, st_size=159662, ...}) = 0
mmap(NULL, 159662, PROT_READ, MAP_PRIVATE, 3, 0) = 0x7f7d0c7b7000
close(3)                                = 0
...
write(1, "total 32\\n", 9)               = 9
write(1, "-rw-r--r-- 1 user user  8980 Apr 13 14:22 file1.txt\\n", 53) = 53
...
exit_group(0)                           = ?
+++ exited with 0 +++`}</code>
          </pre>
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Practice Exercises</h2>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 1: File Copy</h3>
            <p>
              Write a program that copies a file using only system calls (no C library file functions). Implement it in
              both C with inline assembly and pure assembly.
            </p>
          </div>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 2: Process Creation</h3>
            <p>
              Write a program that creates a child process using the <code>fork</code> system call, and has the child
              execute a different program using <code>execve</code>.
            </p>
          </div>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 3: System Call Wrapper</h3>
            <p>
              Implement your own wrapper functions for 3 system calls of your choice, similar to the{" "}
              <code>syscall_write</code> example above.
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
          <h2 className="text-xl font-bold mb-3">Additional Resources</h2>

          <ul className="space-y-2">
            <li>
              <a
                href="https://man7.org/linux/man-pages/man2/syscalls.2.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                Linux Programmer's Manual: syscalls(2)
              </a>
            </li>
            <li>
              <a
                href="https://man7.org/linux/man-pages/man2/syscall.2.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                Linux Programmer's Manual: syscall(2)
              </a>
            </li>
            <li>
              <a
                href="https://blog.rchapman.org/posts/Linux_System_Call_Table_for_x86_64/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                Linux System Call Table for x86-64
              </a>
            </li>
            <li>
              <a
                href="https://www.kernel.org/doc/html/latest/process/adding-syscalls.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                Adding a New System Call (Linux Kernel Documentation)
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Button asChild variant="outline">
            <Link href="/system-calls">← Back to System Calls</Link>
          </Button>
          <Button asChild>
            <Link href="/system-calls/windows-api">Next: Windows API →</Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  )
}

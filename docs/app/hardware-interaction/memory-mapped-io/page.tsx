import DocLayout from "@/components/doc-layout"
import { CodeBlock } from "@/components/code-block"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MemoryMappedIO() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Memory-Mapped I/O</h1>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
            <span>Hardware Interaction</span>
            <span className="mx-2">•</span>
            <span>Memory-Mapped I/O</span>
          </div>
          <p className="text-slate-700 dark:text-slate-300">
            Memory-Mapped I/O (MMIO) is a method of performing input/output operations between the CPU and peripheral
            devices by mapping device registers to memory addresses. This allows the CPU to interact with hardware
            devices using the same instructions used for normal memory access.
          </p>
        </div>

        <div className="p-4 bg-red-50 dark:bg-red-950/50 rounded-lg border border-red-100 dark:border-red-900">
          <h2 className="text-lg font-semibold mb-2 text-red-800 dark:text-red-300">Key Concepts</h2>
          <ul className="list-disc list-inside space-y-1 text-red-700 dark:text-red-300">
            <li>Memory-mapped I/O vs Port-mapped I/O</li>
            <li>Memory mapping techniques</li>
            <li>Device registers and memory regions</li>
            <li>Volatile memory access</li>
            <li>Memory barriers and cache coherence</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Memory-Mapped I/O vs Port-Mapped I/O</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Memory-Mapped I/O (MMIO)</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Device registers appear as memory locations</li>
                <li>Uses standard memory access instructions (e.g., MOV, LDR, STR)</li>
                <li>Shares the same address space as regular memory</li>
                <li>Full processor addressing modes available</li>
                <li>Common in modern architectures (ARM, RISC-V, etc.)</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Port-Mapped I/O (PMIO)</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Separate I/O address space</li>
                <li>Uses special I/O instructions (e.g., IN, OUT)</li>
                <li>Limited addressing range (typically 16-bit on x86)</li>
                <li>Limited addressing modes</li>
                <li>Traditional in x86 architecture</li>
              </ul>
            </div>
          </div>

          <p className="mb-4">
            Many modern systems use a combination of both approaches, with memory-mapped I/O being the predominant
            method for most devices, while port-mapped I/O is used for legacy hardware.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">How Memory-Mapped I/O Works</h2>

          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-2">Basic Principle</h3>
            <p className="mb-4">
              In memory-mapped I/O, specific ranges of memory addresses are reserved for I/O devices rather than actual
              RAM. When the CPU reads from or writes to these addresses:
            </p>
            <ol className="list-decimal list-inside space-y-1">
              <li>The memory controller recognizes the address as belonging to an I/O device</li>
              <li>The request is routed to the appropriate device controller</li>
              <li>The device controller performs the requested operation</li>
              <li>For reads, the device returns data to the CPU</li>
              <li>For writes, the device accepts and processes the data</li>
            </ol>
          </div>

          <div className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800">
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Memory Region</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">
                    Address Range (Example)
                  </th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Usage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">RAM</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0x00000000 - 0x7FFFFFFF</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Normal program memory</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">GPU</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0x80000000 - 0x8FFFFFFF</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Graphics memory and registers
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">USB Controller</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0x90000000 - 0x9000FFFF</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    USB device control registers
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Network Interface</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0x91000000 - 0x9100FFFF</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Network controller registers
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">ROM/Flash</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">0xF0000000 - 0xFFFFFFFF</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">BIOS/firmware storage</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">
            This is a simplified example. Actual memory maps vary by architecture and system design. Operating systems
            and hardware documentation provide the specific memory map for a given platform.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Memory-Mapped Registers</h2>
          <p className="mb-4">
            Devices typically expose a set of registers through memory-mapped I/O. These registers serve different
            purposes:
          </p>

          <div className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800">
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Register Type</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Description</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Control Registers</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Configure device operation
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Enable/disable features, set operating modes
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Status Registers</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Report device state</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Error flags, ready/busy indicators
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Data Registers</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Transfer data to/from device
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Input/output buffers, FIFO queues
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Command Registers</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Trigger specific actions</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Start conversion, reset device, initiate transfer
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Interrupt Registers</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Manage interrupt behavior</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Enable/disable interrupts, clear interrupt flags
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Accessing Memory-Mapped I/O in C</h2>
          <p className="mb-4">
            In C, memory-mapped I/O is typically accessed using pointers to specific memory addresses. The{" "}
            <code>volatile</code> keyword is crucial when working with memory-mapped I/O to prevent compiler
            optimizations that could affect the timing or occurrence of reads and writes.
          </p>

          <CodeBlock
            language="c"
            filename="mmio_access.c"
            code={`#include <stdint.h>

// Define memory-mapped register addresses (example for a hypothetical device)
#define DEVICE_BASE_ADDR 0x40000000
#define CONTROL_REG      (*(volatile uint32_t*)(DEVICE_BASE_ADDR + 0x00))
#define STATUS_REG       (*(volatile uint32_t*)(DEVICE_BASE_ADDR + 0x04))
#define DATA_REG         (*(volatile uint32_t*)(DEVICE_BASE_ADDR + 0x08))
#define INT_ENABLE_REG   (*(volatile uint32_t*)(DEVICE_BASE_ADDR + 0x0C))

// Define bit masks for the control register
#define CTRL_ENABLE      (1 << 0)
#define CTRL_RESET       (1 << 1)
#define CTRL_MODE_MASK   (3 << 2)
#define CTRL_MODE_0      (0 << 2)
#define CTRL_MODE_1      (1 << 2)
#define CTRL_MODE_2      (2 << 2)
#define CTRL_MODE_3      (3 << 2)

// Define bit masks for the status register
#define STATUS_READY     (1 << 0)
#define STATUS_BUSY      (1 << 1)
#define STATUS_ERROR     (1 << 2)
#define STATUS_OVERFLOW  (1 << 3)

// Initialize the device
void device_init(void) {
    // Reset the device
    CONTROL_REG = CTRL_RESET;
    
    // Wait for reset to complete
    while (STATUS_REG & STATUS_BUSY) {
        // Busy wait
    }
    
    // Configure the device
    CONTROL_REG = CTRL_MODE_1;  // Set mode 1
    
    // Enable interrupts
    INT_ENABLE_REG = 0x1;  // Enable basic interrupts
}

// Write data to the device
void device_write(uint32_t data) {
    // Wait until the device is ready
    while (!(STATUS_REG & STATUS_READY)) {
        // Busy wait
    }
    
    // Write data to the data register
    DATA_REG = data;
    
    // Start the operation
    CONTROL_REG |= CTRL_ENABLE;
}

// Read data from the device
uint32_t device_read(void) {
    // Wait until the device is ready
    while (!(STATUS_REG & STATUS_READY)) {
        // Busy wait
    }
    
    // Read data from the data register
    return DATA_REG;
}

// Check if the device has an error
int device_has_error(void) {
    return (STATUS_REG & STATUS_ERROR) != 0;
}

// Clear device errors
void device_clear_errors(void) {
    // Writing 1 to the error bit clears it (device-specific behavior)
    STATUS_REG = STATUS_ERROR;
}`}
          />

          <div className="p-4 bg-yellow-50 dark:bg-yellow-950/50 rounded-lg border border-yellow-100 dark:border-yellow-900 mt-4">
            <h3 className="text-lg font-semibold mb-2 text-yellow-800 dark:text-yellow-300">Important Notes</h3>
            <ul className="list-disc list-inside space-y-1 text-yellow-700 dark:text-yellow-300">
              <li>
                The <code>volatile</code> keyword is essential when accessing memory-mapped I/O to prevent compiler
                optimizations
              </li>
              <li>
                Actual register addresses and bit definitions are hardware-specific and should be obtained from the
                device documentation
              </li>
              <li>Direct memory access like this typically requires kernel privileges in modern operating systems</li>
              <li>
                Memory barriers may be needed on some architectures to ensure proper ordering of memory operations
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Memory-Mapped I/O in Embedded Systems</h2>
          <p className="mb-4">
            Memory-mapped I/O is particularly common in embedded systems, where direct hardware control is essential.
            Here's an example for an ARM Cortex-M microcontroller:
          </p>

          <CodeBlock
            language="c"
            filename="stm32_gpio.c"
            code={`#include <stdint.h>

// STM32F4 GPIO port A registers (memory-mapped)
#define GPIOA_BASE      0x40020000
#define GPIOA_MODER     (*(volatile uint32_t*)(GPIOA_BASE + 0x00)) // Mode register
#define GPIOA_OTYPER    (*(volatile uint32_t*)(GPIOA_BASE + 0x04)) // Output type register
#define GPIOA_OSPEEDR   (*(volatile uint32_t*)(GPIOA_BASE + 0x08)) // Output speed register
#define GPIOA_PUPDR     (*(volatile uint32_t*)(GPIOA_BASE + 0x0C)) // Pull-up/pull-down register
#define GPIOA_IDR       (*(volatile uint32_t*)(GPIOA_BASE + 0x10)) // Input data register
#define GPIOA_ODR       (*(volatile uint32_t*)(GPIOA_BASE + 0x14)) // Output data register
#define GPIOA_BSRR      (*(volatile uint32_t*)(GPIOA_BASE + 0x18)) // Bit set/reset register
#define GPIOA_LCKR      (*(volatile uint32_t*)(GPIOA_BASE + 0x1C)) // Configuration lock register
#define GPIOA_AFRL      (*(volatile uint32_t*)(GPIOA_BASE + 0x20)) // Alternate function low register
#define GPIOA_AFRH      (*(volatile uint32_t*)(GPIOA_BASE + 0x24)) // Alternate function high register

// RCC (Reset and Clock Control) registers
#define RCC_BASE        0x40023800
#define RCC_AHB1ENR     (*(volatile uint32_t*)(RCC_BASE + 0x30)) // AHB1 peripheral clock enable register

// Bit definitions
#define RCC_AHB1ENR_GPIOAEN (1 << 0) // GPIOA clock enable bit

// GPIO pin modes
#define GPIO_MODE_INPUT  0x00
#define GPIO_MODE_OUTPUT 0x01
#define GPIO_MODE_AF     0x02
#define GPIO_MODE_ANALOG 0x03

// Configure GPIO pin as output
void gpio_pin_output_init(uint8_t pin) {
    // Enable GPIOA clock
    RCC_AHB1ENR |= RCC_AHB1ENR_GPIOAEN;
    
    // Set pin mode to output (each pin uses 2 bits in MODER)
    uint32_t mode_mask = 0x3 << (pin * 2);
    GPIOA_MODER = (GPIOA_MODER & ~mode_mask) | (GPIO_MODE_OUTPUT << (pin * 2));
    
    // Set output type to push-pull (0)
    GPIOA_OTYPER &= ~(1 << pin);
    
    // Set output speed to high (0x2)
    uint32_t speed_mask = 0x3 << (pin * 2);
    GPIOA_OSPEEDR = (GPIOA_OSPEEDR & ~speed_mask) | (0x2 << (pin * 2));
    
    // No pull-up or pull-down
    uint32_t pupd_mask = 0x3 << (pin * 2);
    GPIOA_PUPDR &= ~pupd_mask;
}

// Configure GPIO pin as input
void gpio_pin_input_init(uint8_t pin) {
    // Enable GPIOA clock
    RCC_AHB1ENR |= RCC_AHB1ENR_GPIOAEN;
    
    // Set pin mode to input
    uint32_t mode_mask = 0x3 << (pin * 2);
    GPIOA_MODER &= ~mode_mask;
    
    // Enable pull-up
    uint32_t pupd_mask = 0x3 << (pin * 2);
    GPIOA_PUPDR = (GPIOA_PUPDR & ~pupd_mask) | (0x1 << (pin * 2));
}

// Set GPIO pin high
void gpio_pin_set(uint8_t pin) {
    // Set bit in BSRR (Bit Set/Reset Register)
    // Writing 1 to lower 16 bits sets the corresponding ODR bit
    GPIOA_BSRR = 1 << pin;
}

// Set GPIO pin low
void gpio_pin_reset(uint8_t pin) {
    // Set bit in BSRR (Bit Set/Reset Register)
    // Writing 1 to upper 16 bits resets the corresponding ODR bit
    GPIOA_BSRR = 1 << (pin + 16);
}

// Read GPIO pin state
uint8_t gpio_pin_read(uint8_t pin) {
    // Read the Input Data Register (IDR)
    return (GPIOA_IDR & (1 << pin)) ? 1 : 0;
}

// Toggle GPIO pin
void gpio_pin_toggle(uint8_t pin) {
    // Read current state and toggle
    if (GPIOA_ODR & (1 << pin)) {
        gpio_pin_reset(pin);
    } else {
        gpio_pin_set(pin);
    }
}

// Example usage: Blink an LED connected to PA5
void main(void) {
    // Initialize PA5 as output (LED on many STM32 boards)
    gpio_pin_output_init(5);
    
    // Main loop
    while (1) {
        // Toggle LED
        gpio_pin_toggle(5);
        
        // Simple delay
        for (volatile uint32_t i = 0; i &lt; 1000000; i++) {
            // Busy wait
        }
    }
}`}
          />

          <p className="mt-4">
            This example demonstrates direct manipulation of GPIO (General Purpose Input/Output) pins on an STM32F4
            microcontroller using memory-mapped registers. Each register controls different aspects of the GPIO
            functionality, and specific bits within each register correspond to individual pins.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Memory-Mapped I/O in Linux Kernel</h2>
          <p className="mb-4">
            In the Linux kernel, memory-mapped I/O is typically accessed using functions that safely map physical
            addresses to virtual addresses:
          </p>

          <CodeBlock
            language="c"
            filename="linux_mmio.c"
            code={`#include <linux/module.h>
#include <linux/kernel.h>
#include <linux/init.h>
#include <linux/io.h>
#include <linux/ioport.h>

#define DEVICE_BASE_ADDR 0x40000000
#define DEVICE_REGION_SIZE 0x1000

// Pointer to the mapped I/O region
static void __iomem *device_base;

static int __init mmio_init(void)
{
    // Request memory region to prevent conflicts
    if (!request_mem_region(DEVICE_BASE_ADDR, DEVICE_REGION_SIZE, "example_device")) {
        pr_err("Failed to request I/O memory region\\n");
        return -EBUSY;
    }

    // Map the physical address to kernel virtual address space
    device_base = ioremap(DEVICE_BASE_ADDR, DEVICE_REGION_SIZE);
    if (!device_base) {
        pr_err("Failed to map I/O memory\\n");
        release_mem_region(DEVICE_BASE_ADDR, DEVICE_REGION_SIZE);
        return -ENOMEM;
    }

    pr_info("Device mapped at virtual address %p\\n", device_base);

    // Read from device registers
    u32 status = readl(device_base + 0x04); // Read status register
    pr_info("Device status: 0x%08x\\n", status);

    // Write to device registers
    writel(0x1, device_base); // Write to control register
    pr_info("Wrote 0x1 to control register\\n");

    return 0;
}

static void __exit mmio_exit(void)
{
    // Unmap the I/O region
    if (device_base) {
        iounmap(device_base);
        device_base = NULL;
    }

    // Release the memory region
    release_mem_region(DEVICE_BASE_ADDR, DEVICE_REGION_SIZE);

    pr_info("Device unmapped and released\\n");
}

module_init(mmio_init);
module_exit(mmio_exit);

MODULE_LICENSE("GPL");
MODULE_AUTHOR("Example Author");
MODULE_DESCRIPTION("Memory-Mapped I/O Example");`}
          />

          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg mt-4">
            <h3 className="text-lg font-semibold mb-2">Linux Kernel MMIO Functions</h3>
            <p className="mb-4">The Linux kernel provides several functions for safely accessing memory-mapped I/O:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <code>ioremap()</code>: Maps physical addresses to virtual addresses
              </li>
              <li>
                <code>iounmap()</code>: Unmaps previously mapped I/O memory
              </li>
              <li>
                <code>readb()/readw()/readl()/readq()</code>: Read 8/16/32/64 bits from I/O memory
              </li>
              <li>
                <code>writeb()/writew()/writel()/writeq()</code>: Write 8/16/32/64 bits to I/O memory
              </li>
              <li>
                <code>memcpy_fromio()/memcpy_toio()</code>: Copy data from/to I/O memory
              </li>
              <li>
                <code>request_mem_region()/release_mem_region()</code>: Reserve/release I/O memory regions
              </li>
            </ul>
            <p className="mt-4">
              These functions handle architecture-specific details like memory barriers and byte ordering, making the
              code more portable across different platforms.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Memory-Mapped I/O in User Space</h2>
          <p className="mb-4">
            In user space applications, memory-mapped I/O can be accessed using the <code>mmap()</code> system call to
            map device memory into the process's address space. This is commonly used for accessing hardware like
            graphics cards or custom devices.
          </p>

          <CodeBlock
            language="c"
            filename="userspace_mmio.c"
            code={`#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/mman.h>
#include <errno.h>
#include <string.h>

#define DEVICE_PATH "/dev/mem"
#define DEVICE_BASE_ADDR 0x40000000
#define DEVICE_REGION_SIZE 4096

int main() {
    int fd;
    void *map_base;
    volatile uint32_t *device_regs;
    
    // Open /dev/mem to access physical memory
    fd = open(DEVICE_PATH, O_RDWR | O_SYNC);
    if (fd &lt; 0) {
        fprintf(stderr, "Error opening %s: %s\\n", DEVICE_PATH, strerror(errno));
        return 1;
    }
    
    // Map the device memory region into our address space
    map_base = mmap(NULL, DEVICE_REGION_SIZE, PROT_READ | PROT_WRITE, MAP_SHARED, fd, DEVICE_BASE_ADDR);
    if (map_base == MAP_FAILED) {
        fprintf(stderr, "Error mapping memory: %s\\n", strerror(errno));
        close(fd);
        return 1;
    }
    
    // Get a pointer to the mapped region
    device_regs = (volatile uint32_t *)map_base;
    
    printf("Device registers mapped at virtual address: %p\\n", device_regs);
    
    // Read from device registers
    uint32_t control_reg = device_regs[0];  // Control register (offset 0)
    uint32_t status_reg = device_regs[1];   // Status register (offset 4)
    
    printf("Control register: 0x%08X\\n", control_reg);
    printf("Status register: 0x%08X\\n", status_reg);
    
    // Write to device registers
    printf("Writing 0x00000001 to control register...\\n");
    device_regs[0] = 0x00000001;
    
    // Read back to verify
    control_reg = device_regs[0];
    printf("Control register after write: 0x%08X\\n", control_reg);
    
    // Unmap the memory region
    if (munmap(map_base, DEVICE_REGION_SIZE) != 0) {
        fprintf(stderr, "Error unmapping memory: %s\\n", strerror(errno));
    }
    
    // Close the file
    close(fd);
    
    return 0;
}

/* 
 * Compile with:
 * gcc -o userspace_mmio userspace_mmio.c
 * 
 * Run with root privileges:
 * sudo ./userspace_mmio
 */`}
          />

          <div className="p-4 bg-red-50 dark:bg-red-950/50 rounded-lg border border-red-100 dark:border-red-900 mt-4">
            <h3 className="text-lg font-semibold mb-2 text-red-800 dark:text-red-300">Security Warning</h3>
            <p className="text-red-700 dark:text-red-300">
              Direct access to physical memory from user space is a significant security risk and should be used with
              extreme caution:
            </p>
            <ul className="list-disc list-inside space-y-1 text-red-700 dark:text-red-300 mt-2">
              <li>It requires root privileges</li>
              <li>It bypasses the operating system's memory protection</li>
              <li>Incorrect access can crash the system or damage hardware</li>
              <li>
                Modern systems often restrict direct hardware access, even for root users (e.g., IOMMU, secure boot)
              </li>
            </ul>
            <p className="text-red-700 dark:text-red-300 mt-2">
              For production systems, it's better to use a proper device driver or a hardware abstraction layer provided
              by the operating system.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Memory Barriers and Cache Coherence</h2>
          <p className="mb-4">
            When working with memory-mapped I/O, it's important to understand memory barriers and cache coherence
            issues. Modern processors use caches and may reorder memory operations for performance, which can cause
            problems when interacting with hardware.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Memory Barriers</h3>
              <p className="mb-2">Memory barriers enforce ordering constraints on memory operations:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Read barriers ensure all reads before the barrier complete before any reads after it</li>
                <li>Write barriers ensure all writes before the barrier complete before any writes after it</li>
                <li>Full barriers ensure all memory operations before the barrier complete before any after it</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Cache Issues</h3>
              <p className="mb-2">Cache-related challenges with memory-mapped I/O:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Device registers should not be cached (they represent hardware state, not memory)</li>
                <li>Writes to device registers must reach the hardware, not just the cache</li>
                <li>Reads must fetch the current hardware state, not a cached value</li>
                <li>Some architectures require explicit cache management for device memory</li>
              </ul>
            </div>
          </div>

          <CodeBlock
            language="c"
            filename="memory_barriers.c"
            code={`#include <stdint.h>

// Example of memory barriers in different contexts

// ARM memory barrier instructions
static inline void arm_dmb(void) {
    __asm__ volatile ("dmb" : : : "memory");
}

static inline void arm_dsb(void) {
    __asm__ volatile ("dsb" : : : "memory");
}

static inline void arm_isb(void) {
    __asm__ volatile ("isb" : : : "memory");
}

// x86 memory barrier instructions
static inline void x86_mfence(void) {
    __asm__ volatile ("mfence" : : : "memory");
}

static inline void x86_sfence(void) {
    __asm__ volatile ("sfence" : : : "memory");
}

static inline void x86_lfence(void) {
    __asm__ volatile ("lfence" : : : "memory");
}

// Generic memory barriers (architecture-independent)
#define read_barrier()      __sync_synchronize()
#define write_barrier()     __sync_synchronize()
#define memory_barrier()    __sync_synchronize()

// Example device registers
#define DEVICE_BASE 0x40000000
#define CONTROL_REG (*(volatile uint32_t*)(DEVICE_BASE + 0x00))
#define STATUS_REG  (*(volatile uint32_t*)(DEVICE_BASE + 0x04))
#define DATA_REG    (*(volatile uint32_t*)(DEVICE_BASE + 0x08))

// Example of using memory barriers with device access
void device_write_data(uint32_t data) {
    // Ensure any previous writes are completed
    write_barrier();
    
    // Write data to the device
    DATA_REG = data;
    
    // Ensure the write completes before continuing
    write_barrier();
    
    // Signal the device to process the data
    CONTROL_REG |= 0x1;
    
    // Ensure the control write completes
    memory_barrier();
}

uint32_t device_read_data(void) {
    uint32_t data;
    
    // Signal the device to prepare data
    CONTROL_REG |= 0x2;
    
    // Ensure the control write completes
    write_barrier();
    
    // Wait for data to be ready
    while (!(STATUS_REG & 0x1)) {
        // Add a read barrier inside the loop to ensure we get fresh status
        read_barrier();
    }
    
    // Ensure we see the latest status before reading data
    read_barrier();
    
    // Read the data
    data = DATA_REG;
    
    // Ensure the read completes before continuing
    read_barrier();
    
    return data;
}`}
          />

          <p className="mt-4">
            Different architectures and operating systems provide different mechanisms for handling memory barriers and
            cache coherence. In practice, it's best to use the provided abstractions (like Linux's{" "}
            <code>readl/writel</code> functions) rather than implementing these mechanisms directly.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Practice Exercises</h2>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 1: GPIO Control</h3>
            <p>
              Write a program for an embedded system that uses memory-mapped I/O to control multiple GPIO pins.
              Implement functions to configure pins as inputs or outputs, read input values, and set output values.
            </p>
          </div>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 2: Register Bit Manipulation</h3>
            <p>
              Create a set of macros or inline functions for safely manipulating individual bits in memory-mapped
              registers without affecting other bits. Include functions for setting, clearing, toggling, and checking
              bits.
            </p>
          </div>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 3: Memory-Mapped Frame Buffer</h3>
            <p>
              Implement a simple graphics library that uses a memory-mapped frame buffer to draw basic shapes (points,
              lines, rectangles) directly to a display. Consider issues like pixel format and buffer synchronization.
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
          <h2 className="text-xl font-bold mb-3">Additional Resources</h2>

          <ul className="space-y-2">
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Memory-mapped_I/O"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                Wikipedia: Memory-mapped I/O
              </a>
            </li>
            <li>
              <a
                href="https://www.kernel.org/doc/html/latest/core-api/memory-barriers.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                Linux Kernel Documentation: Memory Barriers
              </a>
            </li>
            <li>
              <a
                href="https://www.st.com/resource/en/reference_manual/dm00031020-stm32f405-415-stm32f407-417-stm32f427-437-and-stm32f429-439-advanced-arm-based-32-bit-mcus-stmicroelectronics.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                STM32F4 Reference Manual (Example of Memory-Mapped Peripheral Documentation)
              </a>
            </li>
            <li>
              <a
                href="https://www.embedded.com/introduction-to-memory-mapped-io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                Embedded.com: Introduction to Memory-Mapped I/O
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Button asChild variant="outline">
            <Link href="/hardware-interaction/io-ports">← I/O Ports</Link>
          </Button>
          <Button asChild>
            <Link href="/hardware-interaction/device-drivers">Next: Device Drivers →</Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  )
}

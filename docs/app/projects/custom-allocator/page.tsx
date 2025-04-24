import DocLayout from "@/components/doc-layout"
import { CodeBlock } from "@/components/code-block"

export default function CustomAllocator() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Custom Memory Allocator</h1>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
            <span>Projects</span>
            <span className="mx-2">•</span>
            <span>Custom Allocator</span>
          </div>
          <p className="text-slate-700 dark:text-slate-300">
            Building a custom memory allocator is an excellent way to understand memory management at a deep level.
            This project will guide you through implementing your own memory allocation system, similar to{" "}
            <code>malloc()</code> and <code>free()</code> in C.
          </p>
        </div>

        <div className="p-4 bg-pink-50 dark:bg-pink-950/50 rounded-lg border border-pink-100 dark:border-pink-900">
          <h2 className="text-lg font-semibold mb-2 text-pink-800 dark:text-pink-300">Project Overview</h2>
          <ul className="list-disc list-inside space-y-1 text-pink-700 dark:text-pink-300">
            <li>Implement a custom memory allocator from scratch</li>
            <li>Understand memory block management and fragmentation</li>
            <li>Learn about allocation strategies and optimizations</li>
            <li>Create a drop-in replacement for standard allocation functions</li>
            <li>Measure and improve performance</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Memory Allocator Basics</h2>
          <p className="mb-4">
            A memory allocator manages a pool of memory and handles requests to allocate and free portions of that
            memory. The key components of a memory allocator include:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Memory Pool</h3>
              <p>
                A large block of memory that the allocator manages, typically obtained from the operating system using
                system calls like <code>sbrk()</code> or <code>mmap()</code>.
              </p>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Block Management</h3>
              <p>
                Tracking which portions of the memory pool are in use and which are free, often using linked lists,
                bitmaps, or other data structures.
              </p>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Allocation Strategy</h3>
              <p>
                Algorithms for deciding which free block to use when an allocation request is made (e.g., first-fit,
                best-fit, worst-fit).
              </p>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Fragmentation Handling</h3>
              <p>
                Techniques to minimize and manage both internal fragmentation (wasted space within allocated blocks) and
                external fragmentation (wasted space between allocated blocks).
              </p>
            </div>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-2">Memory Block Structure</h3>
            <p className="mb-4">
              Most allocators store metadata alongside each memory block. A common approach is to use a header structure
              like this:
            </p>
            <pre className="bg-white dark:bg-slate-900 p-4 rounded-md overflow-x-auto text-sm">
              <code>{`Memory Block Layout:

+----------------+------------------+
| Block Header   | User Data        |
| (Metadata)     | (Returned to     |
|                | the user)        |
+----------------+------------------+

Block Header typically contains:
- Block size
- Whether the block is free or in use
- Pointers to adjacent blocks (for linked list implementations)
- Alignment padding
- Magic numbers or checksums for debugging`}</code>
            </pre>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Allocation Strategies</h2>
          <p className="mb-4">
            Different allocation strategies have different performance characteristics and trade-offs:
          </p>

          <div className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800">
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Strategy</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Description</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Pros</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Cons</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">First-fit</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Use the first free block that's large enough
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Fast allocation, simple implementation
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Can lead to fragmentation at the beginning of the heap
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Best-fit</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Use the smallest free block that's large enough
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Minimizes wasted space within blocks
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Slower allocation, can lead to small unusable fragments
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Worst-fit</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Use the largest free block available
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Leaves larger remaining fragments that are more usable
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Slower allocation, can exhaust large blocks quickly
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Next-fit</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Like first-fit, but starts searching from the last allocated block
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Fast allocation, distributes fragmentation more evenly
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Can still lead to significant fragmentation
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Segregated-fit</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Maintain separate free lists for different size classes
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Fast allocation, good for common size requests
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    More complex implementation, potential for wasted space
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Buddy system</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Recursively split memory into halves until a suitable size is found
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Fast coalescing of free blocks, minimal fragmentation
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Internal fragmentation due to power-of-2 sizing
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Project Implementation</h2>
          <p className="mb-4">
            Let's implement a simple but functional memory allocator using a free list approach with a first-fit
            allocation strategy. This implementation will:
          </p>

          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Request a large memory block from the operating system</li>
            <li>Maintain a linked list of free blocks</li>
            <li>Split blocks when necessary to satisfy allocation requests</li>
            <li>Merge adjacent free blocks when memory is freed</li>
            <li>Provide functions similar to <code>malloc()</code>, <code>free()</code>, and <code>realloc()</code></li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">1. Header Files</h3>

          <CodeBlock
            language="c"
            filename="allocator.h"
            code={`#ifndef ALLOCATOR_H
#define ALLOCATOR_H

#include <stddef.h>

// Initialize the memory allocator
void allocator_init(void);

// Clean up the memory allocator
void allocator_cleanup(void);

// Allocate memory
void* allocator_malloc(size_t size);

// Free memory
void allocator_free(


``\`c file="allocator.h" (continued)
void* ptr);

// Reallocate memory
void* allocator_realloc(void* ptr, size_t size);

// Get allocator statistics
typedef struct {
    size_t total_memory;      // Total memory managed by allocator
    size_t used_memory;       // Memory currently in use
    size_t free_memory;       // Memory currently free
    size_t total_blocks;      // Total number of blocks (free and used)
    size_t free_blocks;       // Number of free blocks
    size_t used_blocks;       // Number of used blocks
    size_t smallest_block;    // Size of smallest free block
    size_t largest_block;     // Size of largest free block
    double fragmentation;     // Fragmentation metric (0.0 to 1.0)
} allocator_stats_t;

// Get current allocator statistics
void allocator_get_stats(allocator_stats_t* stats);

// Print allocator statistics
void allocator_print_stats(void);

// Debugging: Check allocator integrity
int allocator_check_integrity(void);

// Debugging: Dump allocator state
void allocator_dump_state(void);

#endif /* ALLOCATOR_H */`}
          />

          <h3 className="text-xl font-semibold mt-6 mb-2">2. Implementation</h3>

          <CodeBlock
            language="c"
            filename="allocator.c"
            code={`#include "allocator.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>
#include <stdbool.h>

// Configuration
#define MEMORY_SIZE (1024 * 1024)  // 1 MB pool
#define MIN_BLOCK_SIZE (sizeof(block_header_t) + 8)  // Minimum block size
#define ALIGNMENT 8  // Align blocks to 8-byte boundaries
#define MAGIC_NUMBER 0xDEADBEEF  // For integrity checking

// Block header structure
typedef struct block_header {
    size_t size;                  // Size of the block (including header)
    unsigned int is_free : 1;     // 1 if block is free, 0 if in use
    unsigned int magic : 31;      // Magic number for integrity checking
    struct block_header* next;    // Pointer to next block in the list
    struct block_header* prev;    // Pointer to previous block in the list
} block_header_t;

// Global variables
static void* memory_pool = NULL;  // The memory pool we're managing
static block_header_t* free_list = NULL;  // List of free blocks
static size_t total_memory = 0;  // Total memory in the pool

// Statistics
static allocator_stats_t current_stats = {0};

// Helper functions
static void* align_pointer(void* ptr, size_t alignment) {
    return (void*)(((uintptr_t)ptr + (alignment - 1)) & ~(alignment - 1));
}

static size_t align_size(size_t size, size_t alignment) {
    return (size + (alignment - 1)) & ~(alignment - 1);
}

// Initialize the memory allocator
void allocator_init(void) {
    // Allocate the memory pool
    memory_pool = malloc(MEMORY_SIZE);
    if (!memory_pool) {
        fprintf(stderr, "Failed to allocate memory pool\\n");
        exit(1);
    }
    
    // Initialize the free list with a single block
    free_list = (block_header_t*)memory_pool;
    free_list->size = MEMORY_SIZE;
    free_list->is_free = 1;
    free_list->magic = MAGIC_NUMBER;
    free_list->next = NULL;
    free_list->prev = NULL;
    
    total_memory = MEMORY_SIZE;
    
    // Initialize statistics
    current_stats.total_memory = MEMORY_SIZE;
    current_stats.used_memory = 0;
    current_stats.free_memory = MEMORY_SIZE;
    current_stats.total_blocks = 1;
    current_stats.free_blocks = 1;
    current_stats.used_blocks = 0;
    current_stats.smallest_block = MEMORY_SIZE;
    current_stats.largest_block = MEMORY_SIZE;
    current_stats.fragmentation = 0.0;
    
    printf("Memory allocator initialized with %zu bytes\\n", MEMORY_SIZE);
}

// Clean up the memory allocator
void allocator_cleanup(void) {
    if (memory_pool) {
        free(memory_pool);
        memory_pool = NULL;
        free_list = NULL;
        total_memory = 0;
        
        // Reset statistics
        memset(&current_stats, 0, sizeof(current_stats));
        
        printf("Memory allocator cleaned up\\n");
    }
}

// Find a free block using first-fit strategy
static block_header_t* find_free_block(size_t size) {
    block_header_t* current = free_list;
    
    while (current) {
        if (current->is_free && current->size >= size) {
            return current;
        }
        current = current->next;
    }
    
    return NULL;  // No suitable block found
}

// Split a block if it's too large
static void split_block(block_header_t* block, size_t size) {
    // Only split if the remaining size is large enough for a new block
    if (block->size >= size + MIN_BLOCK_SIZE) {
        // Calculate the address of the new block
        block_header_t* new_block = (block_header_t*)((char*)block + size);
        
        // Initialize the new block
        new_block->size = block->size - size;
        new_block->is_free = 1;
        new_block->magic = MAGIC_NUMBER;
        
        // Update the linked list
        new_block->next = block->next;
        new_block->prev = block;
        
        if (block->next) {
            block->next->prev = new_block;
        }
        
        block->next = new_block;
        
        // Update the original block's size
        block->size = size;
        
        // Update statistics
        current_stats.total_blocks++;
        current_stats.free_blocks++;
    }
}

// Merge adjacent free blocks
static void merge_blocks(block_header_t* block) {
    // Check if we can merge with the next block
    if (block->next && block->next->is_free) {
        block->size += block->next->size;
        
        // Update the linked list
        if (block->next->next) {
            block->next->next->prev = block;
        }
        
        block->next = block->next->next;
        
        // Update statistics
        current_stats.total_blocks--;
        current_stats.free_blocks--;
    }
    
    // We don't merge with the previous block here because
    // we would need to traverse the list to update pointers.
    // A more sophisticated allocator would handle this.
}

// Allocate memory
void* allocator_malloc(size_t size) {
    if (size == 0) {
        return NULL;
    }
    
    // Adjust size to include header and maintain alignment
    size_t aligned_size = align_size(size + sizeof(block_header_t), ALIGNMENT);
    
    // Make sure the block is at least the minimum size
    if (aligned_size &lt; MIN_BLOCK_SIZE) {
        aligned_size = MIN_BLOCK_SIZE;
    }
    
    // Find a suitable free block
    block_header_t* block = find_free_block(aligned_size);
    
    if (!block) {
        // No suitable block found
        return NULL;
    }
    
    // Split the block if it's much larger than needed
    split_block(block, aligned_size);
    
    // Mark the block as in use
    block->is_free = 0;
    
    // Update statistics
    current_stats.used_memory += block->size;
    current_stats.free_memory -= block->size;
    current_stats.free_blocks--;
    current_stats.used_blocks++;
    
    // Calculate fragmentation
    if (current_stats.free_memory > 0) {
        current_stats.fragmentation = 1.0 - ((double)current_stats.largest_block / current_stats.free_memory);
    } else {
        current_stats.fragmentation = 0.0;
    }
    
    // Return a pointer to the user data area (just past the header)
    return (void*)((char*)block + sizeof(block_header_t));
}

// Free memory
void allocator_free(void* ptr) {
    if (!ptr) {
        return;  // Ignore NULL pointer
    }
    
    // Get the block header
    block_header_t* block = (block_header_t*)((char*)ptr - sizeof(block_header_t));
    
    // Validate the block
    if (block->magic != MAGIC_NUMBER) {
        fprintf(stderr, "Invalid free: corrupted block header\\n");
        return;
    }
    
    if (block->is_free) {
        fprintf(stderr, "Invalid free: block already free\\n");
        return;
    }
    
    // Mark the block as free
    block->is_free = 1;
    
    // Update statistics
    current_stats.used_memory -= block->size;
    current_stats.free_memory += block->size;
    current_stats.free_blocks++;
    current_stats.used_blocks--;
    
    // Update smallest/largest free block statistics
    if (block->size &lt; current_stats.smallest_block) {
        current_stats.smallest_block = block->size;
    }
    if (block->size > current_stats.largest_block) {
        current_stats.largest_block = block->size;
    }
    
    // Try to merge with adjacent blocks
    merge_blocks(block);
    
    // Calculate fragmentation
    if (current_stats.free_memory > 0) {
        current_stats.fragmentation = 1.0 - ((double)current_stats.largest_block / current_stats.free_memory);
    } else {
        current_stats.fragmentation = 0.0;
    }
}

// Reallocate memory
void* allocator_realloc(void* ptr, size_t size) {
    if (!ptr) {
        // If ptr is NULL, behave like malloc
        return allocator_malloc(size);
    }
    
    if (size == 0) {
        // If size is 0, behave like free
        allocator_free(ptr);
        return NULL;
    }
    
    // Get the block header
    block_header_t* block = (block_header_t*)((char*)ptr - sizeof(block_header_t));
    
    // Validate the block
    if (block->magic != MAGIC_NUMBER) {
        fprintf(stderr, "Invalid realloc: corrupted block header\\n");
        return NULL;
    }
    
    // Calculate the current data size
    size_t current_data_size = block->size - sizeof(block_header_t);
    
    // If the new size is smaller, we can just shrink the block
    if (size &lt;= current_data_size) {
        // We could split the block here, but for simplicity, we'll just return the same block
        return ptr;
    }
    
    // Otherwise, we need to allocate a new block
    void* new_ptr = allocator_malloc(size);
    if (!new_ptr) {
        return NULL;  // Allocation failed
    }
    
    // Copy the data from the old block to the new block
    memcpy(new_ptr, ptr, current_data_size);
    
    // Free the old block
    allocator_free(ptr);
    
    return new_ptr;
}

// Get current allocator statistics
void allocator_get_stats(allocator_stats_t* stats) {
    if (stats) {
        *stats = current_stats;
    }
}

// Print allocator statistics
void allocator_print_stats(void) {
    printf("===== Allocator Statistics =====\\n");
    printf("Total memory: %zu bytes\\n", current_stats.total_memory);
    printf("Used memory: %zu bytes (%.2f%%)\\n", 
           current_stats.used_memory, 
           (double)current_stats.used_memory / current_stats.total_memory * 100);
    printf("Free memory: %zu bytes (%.2f%%)\\n", 
           current_stats.free_memory, 
           (double)current_stats.free_memory / current_stats.total_memory * 100);
    printf("Total blocks: %zu\\n", current_stats.total_blocks);
    printf("Used blocks: %zu\\n", current_stats.used_blocks);
    printf("Free blocks: %zu\\n", current_stats.free_blocks);
    printf("Smallest free block: %zu bytes\\n", current_stats.smallest_block);
    printf("Largest free block: %zu bytes\\n", current_stats.largest_block);
    printf("Fragmentation: %.2f%%\\n", current_stats.fragmentation * 100);
    printf("===============================\\n");
}

// Check allocator integrity
int allocator_check_integrity(void) {
    block_header_t* current = (block_header_t*)memory_pool;
    size_t block_count = 0;
    size_t free_count = 0;
    size_t used_count = 0;
    size_t free_memory = 0;
    size_t used_memory = 0;
    
    while (current) {
        // Check magic number
        if (current->magic != MAGIC_NUMBER) {
            fprintf(stderr, "Integrity check failed: corrupted block header at %p\\n", (void*)current);
            return 0;
        }
        
        // Count blocks
        block_count++;
        
        if (current->is_free) {
            free_count++;
            free_memory += current->size;
        } else {
            used_count++;
            used_memory += current->size;
        }
        
        // Check for invalid next/prev pointers
        if (current->next && (current->next &lt;= current || 
                             (char*)current->next >= (char*)memory_pool + MEMORY_SIZE)) {
            fprintf(stderr, "Integrity check failed: invalid next pointer at %p\\n", (void*)current);
            return 0;
        }
        
        if (current->prev && (current->prev >= current || 
                             (char*)current->prev &lt; (char*)memory_pool)) {
            fprintf(stderr, "Integrity check failed: invalid prev pointer at %p\\n", (void*)current);
            return 0;
        }
        
        // Move to next block
        current = current->next;
    }
    
    // Verify statistics
    if (block_count != current_stats.total_blocks ||
        free_count != current_stats.free_blocks ||
        used_count != current_stats.used_blocks ||
        free_memory != current_stats.free_memory ||
        used_memory != current_stats.used_memory) {
        fprintf(stderr, "Integrity check failed: statistics mismatch\\n");
        return 0;
    }
    
    return 1;  // Integrity check passed
}

// Dump allocator state
void allocator_dump_state(void) {
    block_header_t* current = (block_header_t*)memory_pool;
    int block_index = 0;
    
    printf("===== Allocator Memory Dump =====\\n");
    printf("Memory pool starts at: %p\\n", memory_pool);
    
    while (current) {
        printf("Block %d: address=%p, size=%zu, %s\\n",
               block_index++,
               (void*)current,
               current->size,
               current->is_free ? "FREE" : "USED");
        
        current = current->next;
    }
    
    printf("=================================\\n");
}`}
          />

          <h3 className="text-xl font-semibold mt-6 mb-2">3. Test Program</h3>

          <CodeBlock
            language="c"
            filename="test_allocator.c"
            code={`#include "allocator.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

// Test basic allocation and deallocation
void test_basic() {
    printf("\\n=== Basic Allocation Test ===\\n");
    
    // Allocate a small block
    int* p1 = (int*)allocator_malloc(sizeof(int));
    if (p1) {
        *p1 = 42;
        printf("Allocated int, value: %d\\n", *p1);
    } else {
        printf("Failed to allocate int\\n");
    }
    
    // Allocate a larger block
    int* p2 = (int*)allocator_malloc(10 * sizeof(int));
    if (p2) {
        for (int i = 0; i &lt; 10; i++) {
            p2[i] = i;
        }
        printf("Allocated int array, first few values: %d %d %d...\\n", p2[0], p2[1], p2[2]);
    } else {
        printf("Failed to allocate int array\\n");
    }
    
    // Print statistics
    allocator_print_stats();
    
    // Free the memory
    allocator_free(p1);
    allocator_free(p2);
    
    printf("After freeing all blocks:\\n");
    allocator_print_stats();
    
    // Check integrity
    if (allocator_check_integrity()) {
        printf("Integrity check passed\\n");
    } else {
        printf("Integrity check failed\\n");
    }
}

// Test reallocation
void test_realloc() {
    printf("\\n=== Reallocation Test ===\\n");
    
    // Allocate a small block
    char* str = (char*)allocator_malloc(10);
    if (str) {
        strcpy(str, "Hello");
        printf("Original string: %s (size: 10)\\n", str);
    } else {
        printf("Failed to allocate string\\n");
        return;
    }
    
    // Reallocate to a larger size
    str = (char*)allocator_realloc(str, 20);
    if (str) {
        strcat(str, " World");
        printf("Reallocated string: %s (size: 20)\\n", str);
    } else {
        printf("Failed to reallocate string\\n");
        return;
    }
    
    // Reallocate to a smaller size
    str = (char*)allocator_realloc(str, 5);
    if (str) {
        printf("Reallocated string (truncated): %s (size: 5)\\n", str);
    } else {
        printf("Failed to reallocate string\\n");
        return;
    }
    
    // Free the memory
    allocator_free(str);
    
    // Print statistics
    allocator_print_stats();
}

// Test fragmentation
void test_fragmentation() {
    printf("\\n=== Fragmentation Test ===\\n");
    
    // Allocate many small blocks
    #define NUM_BLOCKS 100
    void* blocks[NUM_BLOCKS];
    
    printf("Allocating %d blocks...\\n", NUM_BLOCKS);
    for (int i = 0; i &lt; NUM_BLOCKS; i++) {
        // Allocate blocks of varying sizes
        size_t size = 16 + (rand() % 100);
        blocks[i] = allocator_malloc(size);
        if (!blocks[i]) {
            printf("Failed to allocate block %d\\n", i);
            break;
        }
    }
    
    printf("After allocating all blocks:\\n");
    allocator_print_stats();
    
    // Free every other block to create fragmentation
    printf("Freeing every other block...\\n");
    for (int i = 0; i &lt; NUM_BLOCKS; i += 2) {
        allocator_free(blocks[i]);
        blocks[i] = NULL;
    }
    
    printf("After freeing every other block:\\n");
    allocator_print_stats();
    
    // Try to allocate a large block
    printf("Trying to allocate a large block...\\n");
    void* large_block = allocator_malloc(5000);
    if (large_block) {
        printf("Successfully allocated large block\\n");
        allocator_free(large_block);
    } else {
        printf("Failed to allocate large block due to fragmentation\\n");
    }
    
    // Free remaining blocks
    printf("Freeing remaining blocks...\\n");
    for (int i = 1; i &lt; NUM_BLOCKS; i += 2) {
        if (blocks[i]) {
            allocator_free(blocks[i]);
            blocks[i] = NULL;
        }
    }
    
    printf("After freeing all blocks:\\n");
    allocator_print_stats();
    
    // Try to allocate a large block again
    printf("Trying to allocate a large block again...\\n");
    large_block = allocator_malloc(5000);
    if (large_block) {
        printf("Successfully allocated large block\\n");
        allocator_free(large_block);
    } else {
        printf("Failed to allocate large block\\n");
    }
}

// Test stress with many allocations and deallocations
void test_stress() {
    printf("\\n=== Stress Test ===\\n");
    
    #define STRESS_ITERATIONS 1000
    #define MAX_BLOCKS 500
    
    void* blocks[MAX_BLOCKS] = {NULL};
    int block_count = 0;
    
    srand(time(NULL));
    
    printf("Performing %d random allocations/deallocations...\\n", STRESS_ITERATIONS);
    
    for (int i = 0; i &lt; STRESS_ITERATIONS; i++) {
        if (rand() % 2 == 0 && block_count &lt; MAX_BLOCKS) {
            // Allocate a new block
            size_t size = 8 + (rand() % 200);
            void* block = allocator_malloc(size);
            if (block) {
                // Find an empty slot
                for (int j = 0; j &lt; MAX_BLOCKS; j++) {
                    if (blocks[j] == NULL) {
                        blocks[j] = block;
                        block_count++;
                        break;
                    }
                }
            }
        } else if (block_count > 0) {
            // Free a random existing block
            int index;
            do {
                index = rand() % MAX_BLOCKS;
            } while (blocks[index] == NULL);
            
            allocator_free(blocks[index]);
            blocks[index] = NULL;
            block_count--;
        }
        
        // Periodically check integrity
        if (i % 100 == 0) {
            if (!allocator_check_integrity()) {
                printf("Integrity check failed at iteration %d\\n", i);
                break;
            }
        }
    }
    
    // Free any remaining blocks
    for (int i = 0; i &lt; MAX_BLOCKS; i++) {
        if (blocks[i]) {
            allocator_free(blocks[i]);
            blocks[i] = NULL;
        }
    }
    
    printf("After stress test:\\n");
    allocator_print_stats();
    
    // Final integrity check
    if (allocator_check_integrity()) {
        printf("Final integrity check passed\\n");
    } else {
        printf("Final integrity check failed\\n");
    }
}

int main() {
    // Initialize the allocator
    allocator_init();
    
    // Run tests
    test_basic();
    test_realloc();
    test_fragmentation();
    test_stress();
    
    // Dump final state
    allocator_dump_state();
    
    // Clean up
    allocator_cleanup();
    
    return 0;
}`}
          />

          <h3 className="text-xl font-semibold mt-6 mb-2">4. Makefile</h3>

          <CodeBlock
            language="makefile"
            filename="Makefile"
            code={`CC = gcc
CFLAGS = -Wall -Wextra -g
LDFLAGS =

SOURCES = allocator.c test_allocator.c
OBJECTS = $(SOURCES:.c=.o)
TARGET = test_allocator

.PHONY: all clean

all: $(TARGET)

$(TARGET): $(OBJECTS)
	$(CC) $(LDFLAGS) -o $@ $^

%.o: %.c
	$(CC) $(CFLAGS) -c -o $@ $<

clean:
	rm -f $(OBJECTS) $(TARGET)`}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Advanced Topics</h2>
          <p className="mb-4">
            The implementation above is a good starting point, but there are many ways to improve and extend it:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Thread Safety</h3>
              <p>
                Add mutexes or other synchronization mechanisms to make the allocator safe for use in multi-threaded
                applications.
              </p>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Better Allocation Strategies</h3>
              <p>
                Implement best-fit, segregated-fit, or buddy system allocation strategies for improved performance and
                reduced fragmentation.
              </p>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Memory Pools</h3>
              <p>
                Create specialized pools for common object sizes to reduce fragmentation and improve allocation speed.
              </p>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Garbage Collection</h3>
              <p>
                Implement simple reference counting or mark-and-sweep garbage collection to automatically free unused
                memory.
              </p>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Memory Mapping</h3>
              <p>
                Use <code>mmap()</code> instead of <code>malloc()</code> for the initial memory pool, and implement
                dynamic expansion when more memory is needed.
              </p>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Debugging Features</h3>
              <p>
                Add features like memory leak detection, buffer overflow detection, and detailed allocation tracking.
              </p>
            </div>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-2">Real-World Memory Allocators</h3>
            <p className="mb-4">
              Many production-quality memory allocators exist that you can study for inspiration:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>dlmalloc</strong>: Doug Lea's malloc, a widely used general-purpose allocator
              </li>
              <li>
                <strong>jemalloc</strong>: A high-performance allocator focused on fragmentation avoidance
              </li>
              <li>
                <strong>tcmalloc</strong>: Google's Thread-Caching malloc, optimized for multi-threaded applications
              </li>
              <li>
                <strong>Hoard</strong>: A memory allocator that emphasizes scalability in multi-threaded environments
              </li>
              <li>
                <strong>mimalloc</strong>: Microsoft's memory allocator, designed for high performance and security
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Performance Considerations</h2>
          <p className="mb-4">
            When designing and optimizing a memory allocator, consider these performance factors:
          </p>

          <div className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800">
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Factor</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Description</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Optimization Techniques</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Allocation Speed</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    How quickly memory can be allocated
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <ul className="list-disc list-inside">
                      <li>Free lists for common sizes</li>
                      <li>Thread-local caches</li>
                      <li>Fast-path for small allocations</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Deallocation Speed</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    How quickly memory can be freed
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <ul className="list-disc list-inside">
                      <li>Deferred coalescing</li>
                      <li>Segregated free lists</li>
                      <li>Bitmap-based tracking</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Memory Utilization</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    How efficiently memory is used
                  </td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    <ul className="list-disc list-inside">
                      <li>Best-fit allocation</li>
                      <li>Coalescing free blocks</li>
                      <li>Size classes with minimal waste</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:

\

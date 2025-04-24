import DocLayout from "@/components/doc-layout"
import { CodeBlock } from "@/components/code-block"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CacheOptimization() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Cache Optimization</h1>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
            <span>Optimization</span>
            <span className="mx-2">•</span>
            <span>Cache Optimization</span>
          </div>
          <p className="text-slate-700 dark:text-slate-300">
            Cache optimization is a critical aspect of performance tuning in low-level programming. Understanding how
            CPU caches work and how to optimize code for better cache utilization can lead to significant performance
            improvements.
          </p>
        </div>

        <div className="p-4 bg-indigo-50 dark:bg-indigo-950/50 rounded-lg border border-indigo-100 dark:border-indigo-900">
          <h2 className="text-lg font-semibold mb-2 text-indigo-800 dark:text-indigo-300">Key Concepts</h2>
          <ul className="list-disc list-inside space-y-1 text-indigo-700 dark:text-indigo-300">
            <li>CPU cache hierarchy</li>
            <li>Cache lines and cache coherence</li>
            <li>Spatial and temporal locality</li>
            <li>Cache-friendly data structures</li>
            <li>Techniques to avoid cache misses</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">CPU Cache Hierarchy</h2>
          <p className="mb-4">
            Modern CPUs have a hierarchy of caches to bridge the speed gap between the processor and main memory:
          </p>

          <div className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800">
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Cache Level</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Typical Size</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Latency</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">Characteristics</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">L1 Cache</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">32-64 KB per core</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">~1-3 cycles</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Split into instruction (L1i) and data (L1d) caches
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">L2 Cache</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">256 KB - 1 MB per core</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">~10-20 cycles</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    Unified cache (instructions and data)
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">L3 Cache</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">4-50 MB shared</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">~40-75 cycles</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Shared among all cores</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">Main Memory (RAM)</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">8-128 GB or more</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">~100-300 cycles</td>
                  <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                    DRAM, much slower than cache
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">The cache hierarchy operates on the principle of locality:</p>

          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Temporal locality</strong>: Recently accessed data is likely to be accessed again soon
            </li>
            <li>
              <strong>Spatial locality</strong>: Data near recently accessed locations is likely to be accessed soon
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Cache Lines and Cache Coherence</h2>

          <p className="mb-4">
            <strong>Cache lines</strong> are the basic unit of data transfer between memory and cache. Typical cache
            line sizes are 64 or 128 bytes.
          </p>

          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-2">Key Cache Line Concepts</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>When a byte is accessed, the entire cache line containing it is loaded</li>
              <li>
                Cache lines are aligned to their size (e.g., 64-byte cache lines are aligned to 64-byte boundaries)
              </li>
              <li>Multiple cores may have copies of the same cache line</li>
              <li>
                <strong>Cache coherence protocols</strong> (like MESI) ensure consistency between caches
              </li>
              <li>
                <strong>False sharing</strong> occurs when different cores modify different variables in the same cache
                line
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Cache Hits and Misses</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Cache hit</strong>: Data found in cache
                </li>
                <li>
                  <strong>Cache miss</strong>: Data not found in cache, must be fetched from a lower level
                </li>
                <li>
                  <strong>Compulsory miss</strong>: First access to a cache line
                </li>
                <li>
                  <strong>Capacity miss</strong>: Cache is full, line was evicted
                </li>
                <li>
                  <strong>Conflict miss</strong>: Cache set is full (in set-associative caches)
                </li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Cache Associativity</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Direct-mapped</strong>: Each memory location maps to exactly one cache line
                </li>
                <li>
                  <strong>Fully associative</strong>: Memory can map to any cache line
                </li>
                <li>
                  <strong>N-way set associative</strong>: Memory maps to one of N possible cache lines
                </li>
                <li>Higher associativity reduces conflict misses but increases lookup time</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Cache-Friendly Data Access Patterns</h2>

          <h3 className="text-xl font-semibold mb-2">1. Sequential Access</h3>
          <p className="mb-4">
            Accessing memory sequentially is the most cache-friendly pattern because it maximizes spatial locality.
          </p>

          <CodeBlock
            language="c"
            filename="sequential_vs_random.c"
            code={`#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define SIZE 10000
#define ITERATIONS 1000

void sequential_access(int* array, int size) {
    for (int iter = 0; iter < ITERATIONS; iter++) {
        // Sequential access pattern - cache friendly
        for (int i = 0; i < size; i++) {
            array[i] += 1;
        }
    }
}

void random_access(int* array, int size) {
    // Pre-generate random indices
    int* indices = (int*)malloc(size * sizeof(int));
    for (int i = 0; i < size; i++) {
        indices[i] = rand() % size;
    }
    
    for (int iter = 0; iter < ITERATIONS; iter++) {
        // Random access pattern - cache unfriendly
        for (int i = 0; i < size; i++) {
            array[indices[i]] += 1;
        }
    }
    
    free(indices);
}

int main() {
    int* array = (int*)malloc(SIZE * sizeof(int));
    for (int i = 0; i < SIZE; i++) {
        array[i] = i;
    }
    
    clock_t start, end;
    double cpu_time_used;
    
    // Test sequential access
    start = clock();
    sequential_access(array, SIZE);
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("Sequential access time: %f seconds\\n", cpu_time_used);
    
    // Reset array
    for (int i = 0; i < SIZE; i++) {
        array[i] = i;
    }
    
    // Test random access
    start = clock();
    random_access(array, SIZE);
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("Random access time: %f seconds\\n", cpu_time_used);
    
    free(array);
    return 0;
}`}
          />

          <h3 className="text-xl font-semibold mt-6 mb-2">2. Row-Major vs. Column-Major Access</h3>
          <p className="mb-4">
            For multi-dimensional arrays, accessing elements in the same order they are stored in memory is more
            efficient.
          </p>

          <CodeBlock
            language="c"
            filename="matrix_traversal.c"
            code={`#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define SIZE 2000

void row_major_traversal(int matrix[SIZE][SIZE]) {
    // Row-major traversal (cache friendly in C)
    for (int i = 0; i < SIZE; i++) {
        for (int j = 0; j < SIZE; j++) {
            matrix[i][j] += 1;
        }
    }
}

void column_major_traversal(int matrix[SIZE][SIZE]) {
    // Column-major traversal (cache unfriendly in C)
    for (int j = 0; j < SIZE; j++) {
        for (int i = 0; i < SIZE; i++) {
            matrix[i][j] += 1;
        }
    }
}

int main() {
    // Allocate matrix
    int (*matrix)[SIZE] = malloc(SIZE * SIZE * sizeof(int));
    
    // Initialize matrix
    for (int i = 0; i < SIZE; i++) {
        for (int j = 0; j < SIZE; j++) {
            matrix[i][j] = i * SIZE + j;
        }
    }
    
    clock_t start, end;
    double cpu_time_used;
    
    // Test row-major traversal
    start = clock();
    row_major_traversal(matrix);
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("Row-major traversal time: %f seconds\\n", cpu_time_used);
    
    // Test column-major traversal
    start = clock();
    column_major_traversal(matrix);
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("Column-major traversal time: %f seconds\\n", cpu_time_used);
    
    free(matrix);
    return 0;
}`}
          />

          <p className="mt-4">
            In C, arrays are stored in row-major order, so row-major traversal is more cache-friendly. In Fortran,
            arrays are stored in column-major order, so column-major traversal would be more efficient.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Cache-Friendly Data Structures</h2>

          <h3 className="text-xl font-semibold mb-2">1. Arrays vs. Linked Lists</h3>
          <p className="mb-4">
            Arrays have better cache locality than linked lists because array elements are stored contiguously in
            memory.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Arrays</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Contiguous memory allocation</li>
                <li>Excellent spatial locality</li>
                <li>Predictable memory access patterns</li>
                <li>Better for sequential access</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Linked Lists</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Nodes scattered throughout memory</li>
                <li>Poor spatial locality</li>
                <li>Each node access may cause a cache miss</li>
                <li>Better for frequent insertions/deletions</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2">2. Structure of Arrays vs. Array of Structures</h3>
          <p className="mb-4">
            When processing only certain fields of a structure, a "structure of arrays" (SoA) layout can be more
            cache-efficient than an "array of structures" (AoS).
          </p>

          <CodeBlock
            language="c"
            filename="soa_vs_aos.c"
            code={`#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define SIZE 10000000
#define ITERATIONS 10

// Array of Structures (AoS)
typedef struct {
    float x, y, z;    // Position
    float r, g, b, a; // Color
    float u, v;       // Texture coordinates
} Vertex_AoS;

// Structure of Arrays (SoA)
typedef struct {
    float* x; float* y; float* z;    // Positions
    float* r; float* g; float* b; float* a; // Colors
    float* u; float* v;              // Texture coordinates
} Vertices_SoA;

void process_vertices_aos(Vertex_AoS* vertices, int size) {
    // Process only position data (x, y, z)
    for (int iter = 0; iter < ITERATIONS; iter++) {
        for (int i = 0; i < size; i++) {
            vertices[i].x *= 1.01f;
            vertices[i].y *= 1.01f;
            vertices[i].z *= 1.01f;
        }
    }
}

void process_vertices_soa(Vertices_SoA* vertices, int size) {
    // Process only position data (x, y, z)
    for (int iter = 0; iter < ITERATIONS; iter++) {
        for (int i = 0; i < size; i++) {
            vertices->x[i] *= 1.01f;
            vertices->y[i] *= 1.01f;
            vertices->z[i] *= 1.01f;
        }
    }
}

int main() {
    // Allocate and initialize AoS
    Vertex_AoS* vertices_aos = (Vertex_AoS*)malloc(SIZE * sizeof(Vertex_AoS));
    for (int i = 0; i < SIZE; i++) {
        vertices_aos[i].x = (float)rand() / RAND_MAX;
        vertices_aos[i].y = (float)rand() / RAND_MAX;
        vertices_aos[i].z = (float)rand() / RAND_MAX;
        // Initialize other fields...
    }
    
    // Allocate and initialize SoA
    Vertices_SoA vertices_soa;
    vertices_soa.x = (float*)malloc(SIZE * sizeof(float));
    vertices_soa.y = (float*)malloc(SIZE * sizeof(float));
    vertices_soa.z = (float*)malloc(SIZE * sizeof(float));
    // Allocate other fields...
    vertices_soa.r = (float*)malloc(SIZE * sizeof(float));
    vertices_soa.g = (float*)malloc(SIZE * sizeof(float));
    vertices_soa.b = (float*)malloc(SIZE * sizeof(float));
    vertices_soa.a = (float*)malloc(SIZE * sizeof(float));
    vertices_soa.u = (float*)malloc(SIZE * sizeof(float));
    vertices_soa.v = (float*)malloc(SIZE * sizeof(float));
    
    // Initialize SoA with same values as AoS
    for (int i = 0; i < SIZE; i++) {
        vertices_soa.x[i] = vertices_aos[i].x;
        vertices_soa.y[i] = vertices_aos[i].y;
        vertices_soa.z[i] = vertices_aos[i].z;
        // Initialize other fields...
    }
    
    clock_t start, end;
    double cpu_time_used;
    
    // Test AoS
    start = clock();
    process_vertices_aos(vertices_aos, SIZE);
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("Array of Structures time: %f seconds\\n", cpu_time_used);
    
    // Test SoA
    start = clock();
    process_vertices_soa(&vertices_soa, SIZE);
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("Structure of Arrays time: %f seconds\\n", cpu_time_used);
    
    // Free memory
    free(vertices_aos);
    free(vertices_soa.x);
    free(vertices_soa.y);
    free(vertices_soa.z);
    free(vertices_soa.r);
    free(vertices_soa.g);
    free(vertices_soa.b);
    free(vertices_soa.a);
    free(vertices_soa.u);
    free(vertices_soa.v);
    
    return 0;
}`}
          />

          <p className="mt-4">
            The SoA approach is more cache-efficient when only accessing a subset of fields because:
          </p>

          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>It avoids loading unused data into cache</li>
            <li>More useful data fits in each cache line</li>
            <li>Prefetching is more effective with sequential access patterns</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Techniques to Avoid Cache Misses</h2>

          <h3 className="text-xl font-semibold mb-2">1. Data Alignment and Padding</h3>
          <p className="mb-4">
            Aligning data structures to cache line boundaries can improve performance by reducing the number of cache
            lines needed to access a structure.
          </p>

          <CodeBlock
            language="c"
            filename="alignment.c"
            code={`#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

// Unaligned structure - may cross cache line boundaries
typedef struct {
    char a;       // 1 byte
    double b;     // 8 bytes
    int c;        // 4 bytes
    char d;       // 1 byte
} Unaligned;      // Likely 24 bytes with padding

// Aligned structure - fields ordered by size to minimize padding
typedef struct {
    double b;     // 8 bytes
    int c;        // 4 bytes
    char a;       // 1 byte
    char d;       // 1 byte
    // Padding     // 2 bytes (compiler adds this)
} Aligned;        // 16 bytes total

// Cache line aligned structure
typedef struct {
    // Ensure the structure starts at a cache line boundary
    __attribute__((aligned(64))) double b;
    int c;
    char a;
    char d;
} CacheAligned;

int main() {
    printf("Size of Unaligned: %zu bytes\\n", sizeof(Unaligned));
    printf("Size of Aligned: %zu bytes\\n", sizeof(Aligned));
    printf("Size of CacheAligned: %zu bytes\\n", sizeof(CacheAligned));
    
    // Check alignment
    Unaligned* u = (Unaligned*)malloc(sizeof(Unaligned));
    Aligned* a = (Aligned*)malloc(sizeof(Aligned));
    CacheAligned* ca = (CacheAligned*)malloc(sizeof(CacheAligned));
    
    printf("Unaligned address: %p\\n", (void*)u);
    printf("Aligned address: %p\\n", (void*)a);
    printf("CacheAligned address: %p\\n", (void*)ca);
    printf("CacheAligned.b address: %p\\n", (void*)&ca->b);
    
    free(u);
    free(a);
    free(ca);
    
    return 0;
}`}
          />

          <h3 className="text-xl font-semibold mt-6 mb-2">2. Prefetching</h3>
          <p className="mb-4">Prefetching loads data into cache before it's needed, reducing cache miss penalties.</p>

          <CodeBlock
            language="c"
            filename="prefetching.c"
            code={`#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#ifdef __GNUC__
#include <emmintrin.h> // For _mm_prefetch
#endif

#define SIZE 100000000
#define PREFETCH_DISTANCE 16 // Prefetch 16 elements ahead

void process_array_no_prefetch(int* array, int size) {
    for (int i = 0; i < size; i++) {
        array[i] += 1;
    }
}

void process_array_with_prefetch(int* array, int size) {
    for (int i = 0; i < size; i++) {
        // Prefetch data that will be used soon
        #ifdef __GNUC__
        if (i + PREFETCH_DISTANCE < size) {
            _mm_prefetch((const char*)&array[i + PREFETCH_DISTANCE], _MM_HINT_T0);
        }
        #endif
        
        array[i] += 1;
    }
}

int main() {
    // Allocate a large array
    int* array = (int*)malloc(SIZE * sizeof(int));
    for (int i = 0; i < SIZE; i++) {
        array[i] = i;
    }
    
    clock_t start, end;
    double cpu_time_used;
    
    // Test without prefetching
    start = clock();
    process_array_no_prefetch(array, SIZE);
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("Without prefetching: %f seconds\\n", cpu_time_used);
    
    // Reset array
    for (int i = 0; i < SIZE; i++) {
        array[i] = i;
    }
    
    // Test with prefetching
    start = clock();
    process_array_with_prefetch(array, SIZE);
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("With prefetching: %f seconds\\n", cpu_time_used);
    
    free(array);
    return 0;
}`}
          />

          <h3 className="text-xl font-semibold mt-6 mb-2">3. Loop Tiling/Blocking</h3>
          <p className="mb-4">
            Loop tiling (or blocking) improves cache utilization by breaking large computations into smaller blocks that
            fit in cache.
          </p>

          <CodeBlock
            language="c"
            filename="matrix_multiply.c"
            code={`#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define N 1024
#define BLOCK_SIZE 32

// Standard matrix multiplication
void matrix_multiply_standard(float A[N][N], float B[N][N], float C[N][N]) {
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            float sum = 0.0f;
            for (int k = 0; k < N; k++) {
                sum += A[i][k] * B[k][j];
            }
            C[i][j] = sum;
        }
    }
}

// Blocked/tiled matrix multiplication
void matrix_multiply_blocked(float A[N][N], float B[N][N], float C[N][N]) {
    // Initialize C to zero
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            C[i][j] = 0.0f;
        }
    }
    
    // Blocked multiplication
    for (int ii = 0; ii < N; ii += BLOCK_SIZE) {
        for (int jj = 0; jj < N; jj += BLOCK_SIZE) {
            for (int kk = 0; kk < N; kk += BLOCK_SIZE) {
                // Process a block
                for (int i = ii; i < ii + BLOCK_SIZE && i < N; i++) {
                    for (int j = jj; j < jj + BLOCK_SIZE && j < N; j++) {
                        float sum = C[i][j];
                        for (int k = kk; k < kk + BLOCK_SIZE && k < N; k++) {
                            sum += A[i][k] * B[k][j];
                        }
                        C[i][j] = sum;
                    }
                }
            }
        }
    }
}

int main() {
    // Allocate matrices
    float (*A)[N] = malloc(N * N * sizeof(float));
    float (*B)[N] = malloc(N * N * sizeof(float));
    float (*C1)[N] = malloc(N * N * sizeof(float));
    float (*C2)[N] = malloc(N * N * sizeof(float));
    
    // Initialize matrices
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            A[i][j] = (float)rand() / RAND_MAX;
            B[i][j] = (float)rand() / RAND_MAX;
            C1[i][j] = 0.0f;
            C2[i][j] = 0.0f;
        }
    }
    
    clock_t start, end;
    double cpu_time_used;
    
    // Test standard multiplication
    start = clock();
    matrix_multiply_standard(A, B, C1);
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("Standard matrix multiplication: %f seconds\\n", cpu_time_used);
    
    // Test blocked multiplication
    start = clock();
    matrix_multiply_blocked(A, B, C2);
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("Blocked matrix multiplication: %f seconds\\n", cpu_time_used);
    
    // Verify results
    int correct = 1;
    for (int i = 0; i < N && correct; i++) {
        for (int j = 0; j < N && correct; j++) {
            if (fabsf(C1[i][j] - C2[i][j]) > 1e-5) {
                correct = 0;
                printf("Error at [%d][%d]: %f vs %f\\n", i, j, C1[i][j], C2[i][j]);
            }
        }
    }
    
    if (correct) {
        printf("Results match!\\n");
    }
    
    free(A);
    free(B);
    free(C1);
    free(C2);
    
    return 0;
}`}
          />

          <h3 className="text-xl font-semibold mt-6 mb-2">4. Avoiding False Sharing</h3>
          <p className="mb-4">
            False sharing occurs when multiple threads modify variables that reside on the same cache line, causing
            unnecessary cache invalidations.
          </p>

          <CodeBlock
            language="c"
            filename="false_sharing.c"
            code={`#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <time.h>

#define NUM_THREADS 4
#define ITERATIONS 100000000

// Structure with false sharing
typedef struct {
    int counter[NUM_THREADS]; // Counters for each thread
} CounterWithFalseSharing;

// Structure that avoids false sharing
typedef struct {
    // Each counter is padded to occupy its own cache line
    struct {
        int value;
        char padding[60]; // Assuming 64-byte cache lines
    } counter[NUM_THREADS];
} CounterWithoutFalseSharing;

CounterWithFalseSharing counterWithFS;
CounterWithoutFalseSharing counterWithoutFS;

void* increment_with_false_sharing(void* arg) {
    int thread_id = *(int*)arg;
    
    for (int i = 0; i < ITERATIONS; i++) {
        counterWithFS.counter[thread_id]++;
    }
    
    return NULL;
}

void* increment_without_false_sharing(void* arg) {
    int thread_id = *(int*)arg;
    
    for (int i = 0; i < ITERATIONS; i++) {
        counterWithoutFS.counter[thread_id].value++;
    }
    
    return NULL;
}

int main() {
    pthread_t threads[NUM_THREADS];
    int thread_ids[NUM_THREADS];
    
    clock_t start, end;
    double cpu_time_used;
    
    // Initialize counters
    for (int i = 0; i < NUM_THREADS; i++) {
        counterWithFS.counter[i] = 0;
        counterWithoutFS.counter[i].value = 0;
        thread_ids[i] = i;
    }
    
    // Test with false sharing
    start = clock();
    
    for (int i = 0; i < NUM_THREADS; i++) {
        pthread_create(&threads[i], NULL, increment_with_false_sharing, &thread_ids[i]);
    }
    
    for (int i = 0; i < NUM_THREADS; i++) {
        pthread_join(threads[i], NULL);
    }
    
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("With false sharing: %f seconds\\n", cpu_time_used);
    
    // Test without false sharing
    start = clock();
    
    for (int i = 0; i < NUM_THREADS; i++) {
        pthread_create(&threads[i], NULL, increment_without_false_sharing, &thread_ids[i]);
    }
    
    for (int i = 0; i < NUM_THREADS; i++) {
        pthread_join(threads[i], NULL);
    }
    
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("Without false sharing: %f seconds\\n", cpu_time_used);
    
    return 0;
}`}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Measuring Cache Performance</h2>
          <p className="mb-4">Several tools can help you analyze and optimize cache performance:</p>

          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>perf</strong>: Linux performance analysis tool that can measure cache misses
            </li>
            <li>
              <strong>Valgrind/cachegrind</strong>: Detailed cache simulation and analysis
            </li>
            <li>
              <strong>Intel VTune Profiler</strong>: Advanced performance analysis for Intel processors
            </li>
            <li>
              <strong>AMD μProf</strong>: Performance analysis tool for AMD processors
            </li>
          </ul>

          <CodeBlock
            language="bash"
            filename="perf_commands.sh"
            code={`# Measure cache-related events with perf
perf stat -e L1-dcache-loads,L1-dcache-load-misses,LLC-loads,LLC-load-misses ./your_program

# Run cachegrind for detailed cache analysis
valgrind --tool=cachegrind ./your_program

# View cachegrind results
cg_annotate cachegrind.out.12345`}
          />
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Practice Exercises</h2>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 1: Cache Line Size Detection</h3>
            <p>
              Write a program that experimentally determines the cache line size of your CPU by measuring access times
              to memory at different strides.
            </p>
          </div>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 2: Matrix Transposition</h3>
            <p>
              Implement and compare the performance of different algorithms for transposing a large matrix, focusing on
              cache efficiency.
            </p>
          </div>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 3: Cache-Friendly Linked List</h3>
            <p>
              Design and implement a cache-friendly linked list that stores multiple elements per node to improve
              spatial locality.
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
          <h2 className="text-xl font-bold mb-3">Additional Resources</h2>

          <ul className="space-y-2">
            <li>
              <a
                href="https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                Intel® 64 and IA-32 Architectures Optimization Reference Manual
              </a>
            </li>
            <li>
              <a
                href="https://people.freebsd.org/~lstewart/articles/cpumemory.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                What Every Programmer Should Know About Memory by Ulrich Drepper
              </a>
            </li>
            <li>
              <a
                href="https://www.agner.org/optimize/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                Agner Fog's Optimization Manuals
              </a>
            </li>
            <li>
              <a
                href="https://valgrind.org/docs/manual/cg-manual.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                Cachegrind: a cache and branch-prediction profiler
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Button asChild variant="outline">
            <Link href="/optimization">← Back to Optimization</Link>
          </Button>
          <Button asChild>
            <Link href="/optimization/simd-instructions">Next: SIMD Instructions →</Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  )
}

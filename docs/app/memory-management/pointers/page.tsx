import DocLayout from "@/components/doc-layout"
import { CodeBlock } from "@/components/code-block"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Pointers() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Pointers</h1>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
            <span>Memory Management</span>
            <span className="mx-2">•</span>
            <span>Pointers</span>
          </div>
          <p className="text-slate-700 dark:text-slate-300">
            Pointers are variables that store memory addresses. They are a fundamental concept in low-level programming,
            enabling direct memory manipulation, efficient data structures, and powerful programming techniques.
          </p>
        </div>

        <div className="p-4 bg-green-50 dark:bg-green-950/50 rounded-lg border border-green-100 dark:border-green-900">
          <h2 className="text-lg font-semibold mb-2 text-green-800 dark:text-green-300">Key Concepts</h2>
          <ul className="list-disc list-inside space-y-1 text-green-700 dark:text-green-300">
            <li>Pointer basics and declaration</li>
            <li>Dereferencing and address-of operators</li>
            <li>Pointer arithmetic</li>
            <li>Pointers to different data types</li>
            <li>Common pointer operations and patterns</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Pointer Basics</h2>
          <p className="mb-4">
            A pointer is a variable that contains the memory address of another variable. Pointers allow direct access
            to memory and enable more efficient manipulation of data.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Declaring Pointers</h3>
              <p className="mb-2">
                Pointers are declared using the <code>*</code> symbol:
              </p>
              <pre className="bg-slate-100 dark:bg-slate-800 p-2 rounded-md overflow-x-auto">
                <code>
                  int *ptr; // Pointer to an integer
                  <br />
                  char *str; // Pointer to a character
                  <br />
                  float *fptr; // Pointer to a float
                  <br />
                  void *vptr; // Void pointer (generic)
                </code>
              </pre>
            </div>

            <div className="p-4 border rounded-lg dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Key Operators</h3>
              <ul className="space-y-1">
                <li>
                  <code>&</code> (Address-of): Gets the memory address of a variable
                </li>
                <li>
                  <code>*</code> (Dereference): Accesses the value at the memory address
                </li>
              </ul>
              <pre className="bg-slate-100 dark:bg-slate-800 p-2 rounded-md overflow-x-auto mt-2">
                <code>
                  int x = 10;
                  <br />
                  int *ptr = &x; // ptr holds the address of x
                  <br />
                  int y = *ptr; // y gets the value at the address in ptr (10)
                </code>
              </pre>
            </div>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-2">Memory Visualization</h3>
            <p className="mb-4">
              Understanding how pointers relate to memory is crucial. Here's a simplified visualization:
            </p>
            <pre className="bg-white dark:bg-slate-900 p-4 rounded-md overflow-x-auto text-sm">
              <code>{`Memory Address    Variable    Value
-------------    --------    -----
0x1000           x           10
0x1004           ptr         0x1000
0x1008           y           10

When we declare: int x = 10;
- The value 10 is stored at memory address 0x1000

When we declare: int *ptr = &x;
- ptr stores the address of x (0x1000)

When we declare: int y = *ptr;
- We dereference ptr to get the value at address 0x1000 (which is 10)
- This value is stored in y`}</code>
            </pre>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Basic Pointer Operations</h2>

          <CodeBlock
            language="c"
            filename="pointer_basics.c"
            code={`#include <stdio.h>

int main() {
    // Declare and initialize a variable
    int number = 42;
    printf("number: value = %d, address = %p\\n", number, (void*)&number);
    
    // Declare and initialize a pointer
    int *ptr = &number;
    printf("ptr: value = %p, points to value = %d\\n", (void*)ptr, *ptr);
    
    // Modify the value through the pointer
    *ptr = 100;
    printf("After modification through pointer:\\n");
    printf("number: value = %d\\n", number);
    printf("ptr: points to value = %d\\n", *ptr);
    
    // Declare another pointer that points to the first pointer
    int **ptr_to_ptr = &ptr;
    printf("\\nptr_to_ptr: value = %p, points to = %p, points to value = %d\\n", 
           (void*)ptr_to_ptr, (void*)*ptr_to_ptr, **ptr_to_ptr);
    
    // Modify the value through the pointer to pointer
    **ptr_to_ptr = 200;
    printf("After modification through pointer to pointer:\\n");
    printf("number: value = %d\\n", number);
    printf("ptr: points to value = %d\\n", *ptr);
    printf("ptr_to_ptr: points to value = %d\\n", **ptr_to_ptr);
    
    return 0;
}`}
          />

          <p className="mt-4">
            This example demonstrates basic pointer operations: declaration, initialization, dereferencing, and
            modification of values through pointers.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Pointer Arithmetic</h2>
          <p className="mb-4">
            Pointer arithmetic allows you to navigate through memory by adding or subtracting values from pointers. The
            increment/decrement value is automatically scaled by the size of the data type.
          </p>

          <CodeBlock
            language="c"
            filename="pointer_arithmetic.c"
            code={`#include <stdio.h>

int main() {
    // Array declaration
    int numbers[5] = {10, 20, 30, 40, 50};
    
    // Pointer to the first element
    int *ptr = numbers; // Equivalent to: int *ptr = &numbers[0];
    
    printf("Array address: %p\\n", (void*)numbers);
    printf("Pointer value: %p\\n\\n", (void*)ptr);
    
    // Accessing array elements using pointer arithmetic
    printf("Array traversal using pointer arithmetic:\\n");
    for (int i = 0; i &lt; 5; i++) {
        printf("numbers[%d] = %d, address = %p\\n", 
               i, *(ptr + i), (void*)(ptr + i));
    }
    
    printf("\\nPointer increment demonstration:\\n");
    printf("Initial ptr value: %p, points to %d\\n", (void*)ptr, *ptr);
    
    // Increment pointer
    ptr++;
    printf("After ptr++: ptr = %p, points to %d\\n", (void*)ptr, *ptr);
    
    // Add 2 to pointer
    ptr += 2;
    printf("After ptr += 2: ptr = %p, points to %d\\n", (void*)ptr, *ptr);
    
    // Decrement pointer
    ptr--;
    printf("After ptr--: ptr = %p, points to %d\\n", (void*)ptr, *ptr);
    
    // Pointer difference
    int *start = numbers;
    int *end = &numbers[4];
    printf("\\nPointer difference: end - start = %ld elements\\n", end - start);
    
    return 0;
}`}
          />

          <div className="p-4 bg-yellow-50 dark:bg-yellow-950/50 rounded-lg border border-yellow-100 dark:border-yellow-900 mt-4">
            <h3 className="text-lg font-semibold mb-2 text-yellow-800 dark:text-yellow-300">Important Notes</h3>
            <ul className="list-disc list-inside space-y-1 text-yellow-700 dark:text-yellow-300">
              <li>
                When you add 1 to a pointer, it advances by the size of the data type (e.g., 4 bytes for an int on most
                systems)
              </li>
              <li>Pointer arithmetic is only valid within the bounds of an array or allocated memory block</li>
              <li>
                Accessing memory outside the bounds of an array or allocated block is undefined behavior and can cause
                crashes or security vulnerabilities
              </li>
              <li>
                Pointer subtraction gives you the number of elements between two pointers, not the byte difference
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Pointers and Arrays</h2>
          <p className="mb-4">
            In C, arrays and pointers are closely related. An array name can be used as a pointer to its first element,
            and pointer arithmetic can be used to access array elements.
          </p>

          <CodeBlock
            language="c"
            filename="pointers_and_arrays.c"
            code={`#include <stdio.h>

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    
    // Array name as a pointer
    printf("numbers = %p\\n", (void*)numbers);
    printf("&numbers[0] = %p\\n\\n", (void*)&numbers[0]);
    
    // Different ways to access array elements
    printf("Different ways to access array elements:\\n");
    for (int i = 0; i &lt; 5; i++) {
        printf("Element %d: %d (array notation)\\n", i, numbers[i]);
        printf("Element %d: %d (pointer notation with array name)\\n", i, *(numbers + i));
    }
    
    // Using a pointer to traverse the array
    printf("\\nTraversing array with pointer:\\n");
    int *ptr = numbers;
    for (int i = 0; i &lt; 5; i++) {
        printf("Element %d: %d (using ptr[i])\\n", i, ptr[i]);
        printf("Element %d: %d (using *(ptr + i))\\n", i, *(ptr + i));
    }
    
    // Pointer increment to traverse the array
    printf("\\nTraversing array with pointer increment:\\n");
    ptr = numbers; // Reset pointer to start of array
    for (int i = 0; i &lt; 5; i++) {
        printf("Element %d: %d\\n", i, *ptr);
        ptr++; // Move to next element
    }
    
    // Differences between arrays and pointers
    printf("\\nDifferences between arrays and pointers:\\n");
    printf("sizeof(numbers) = %zu bytes (size of entire array)\\n", sizeof(numbers));
    
    ptr = numbers;
    printf("sizeof(ptr) = %zu bytes (size of pointer)\\n", sizeof(ptr));
    
    // Arrays are not assignable
    // numbers = ptr; // This would cause a compilation error
    
    // But pointers can be reassigned
    int another_number = 100;
    ptr = &another_number; // Valid
    printf("ptr now points to: %d\\n", *ptr);
    
    return 0;
}`}
          />

          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg mt-4">
            <h3 className="text-lg font-semibold mb-2">Key Differences Between Arrays and Pointers</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                An array name represents the address of the first element, but it's not a variable (it's a constant
                pointer)
              </li>
              <li>
                <code>sizeof(array)</code> returns the size of the entire array in bytes, while{" "}
                <code>sizeof(pointer)</code> returns the size of the pointer itself
              </li>
              <li>
                Arrays cannot be reassigned (<code>array = something</code> is invalid), but pointers can be
              </li>
              <li>
                Arrays are automatically allocated on the stack (unless declared with <code>static</code> or globally),
                while pointers need to point to allocated memory
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Pointers and Strings</h2>
          <p className="mb-4">
            In C, strings are represented as arrays of characters terminated by a null character (<code>'\0'</code>).
            Pointers are commonly used to manipulate strings.
          </p>

          <CodeBlock
            language="c"
            filename="pointers_and_strings.c"
            code={`#include <stdio.h>
#include <string.h>

int main() {
    // String declaration using array
    char str1[20] = "Hello";
    
    // String declaration using pointer
    char *str2 = "World"; // Points to string literal (read-only)
    
    printf("str1 = \"%s\", address = %p\\n", str1, (void*)str1);
    printf("str2 = \"%s\", address = %p\\n\\n", str2, (void*)str2);
    
    // String manipulation with array
    strcat(str1, ", "); // Append to str1
    printf("After strcat: str1 = \"%s\"\\n", str1);
    
    // CAUTION: Cannot modify string literals
    // str2[0] = 'w'; // This would cause undefined behavior (likely a crash)
    
    // Proper way to modify strings with pointers
    char buffer[20] = "New ";
    char *str3 = buffer; // Points to modifiable memory
    
    printf("str3 = \"%s\", address = %p\\n", str3, (void*)str3);
    
    // Modify through pointer
    strcat(str3, "String");
    printf("After strcat: str3 = \"%s\"\\n\\n", str3);
    
    // String traversal with pointers
    printf("Character-by-character traversal of str1:\\n");
    char *ptr = str1;
    while (*ptr != '\\0') {
        printf("Character: %c, ASCII: %d\\n", *ptr, *ptr);
        ptr++;
    }
    
    // String copy using pointers
    char dest[20];
    char *src = str1;
    char *d = dest;
    
    // Manual string copy
    while (*src != '\\0') {
        *d = *src;
        d++;
        src++;
    }
    *d = '\\0'; // Add null terminator
    
    printf("\\nCopied string: \"%s\"\\n", dest);
    
    return 0;
}`}
          />

          <div className="p-4 bg-red-50 dark:bg-red-950/50 rounded-lg border border-red-100 dark:border-red-900 mt-4">
            <h3 className="text-lg font-semibold mb-2 text-red-800 dark:text-red-300">Warning</h3>
            <p className="text-red-700 dark:text-red-300">
              String literals (like <code>"World"</code> in <code>char *str2 = "World"</code>) are stored in read-only
              memory in modern C/C++ implementations. Attempting to modify them (e.g., <code>str2[0] = 'w'</code>) will
              cause undefined behavior, typically resulting in a program crash.
            </p>
            <p className="text-red-700 dark:text-red-300 mt-2">To create a modifiable string with a pointer, either:</p>
            <ul className="list-disc list-inside space-y-1 text-red-700 dark:text-red-300 mt-1">
              <li>
                Point to a character array: <code>char buffer[20] = "Hello"; char *ptr = buffer;</code>
              </li>
              <li>
                Allocate memory dynamically: <code>char *ptr = malloc(20); strcpy(ptr, "Hello");</code>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Pointers to Functions</h2>
          <p className="mb-4">
            Function pointers allow you to store and invoke functions dynamically. They're useful for callbacks,
            function tables, and implementing polymorphism in C.
          </p>

          <CodeBlock
            language="c"
            filename="function_pointers.c"
            code={`#include <stdio.h>

// Function declarations
int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}

int multiply(int a, int b) {
    return a * b;
}

int divide(int a, int b) {
    if (b == 0) return 0; // Simple error handling
    return a / b;
}

// Function that takes a function pointer as an argument
int calculate(int a, int b, int (*operation)(int, int)) {
    return operation(a, b);
}

int main() {
    // Declare a function pointer
    int (*operation)(int, int);
    
    // Assign function addresses to the pointer
    operation = add;
    printf("Result of add: %d\\n", operation(5, 3));
    
    operation = subtract;
    printf("Result of subtract: %d\\n", operation(5, 3));
    
    operation = multiply;
    printf("Result of multiply: %d\\n", operation(5, 3));
    
    operation = divide;
    printf("Result of divide: %d\\n", operation(6, 3));
    
    // Using the calculate function with different operations
    printf("\\nUsing calculate function:\\n");
    printf("Add: %d\\n", calculate(10, 5, add));
    printf("Subtract: %d\\n", calculate(10, 5, subtract));
    printf("Multiply: %d\\n", calculate(10, 5, multiply));
    printf("Divide: %d\\n", calculate(10, 5, divide));
    
    // Array of function pointers
    int (*operations[4])(int, int) = {add, subtract, multiply, divide};
    char *op_names[4] = {"Add", "Subtract", "Multiply", "Divide"};
    
    printf("\\nUsing array of function pointers:\\n");
    for (int i = 0; i &lt; 4; i++) {
        printf("%s: %d\\n", op_names[i], operations[i](10, 5));
    }
    
    return 0;
}`}
          />

          <p className="mt-4">
            Function pointers have a syntax that can be confusing at first. The declaration{" "}
            <code>int (*operation)(int, int)</code> means:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <code>operation</code> is a pointer (<code>*operation</code>)
            </li>
            <li>
              It points to a function that takes two <code>int</code> parameters (<code>(int, int)</code>)
            </li>
            <li>
              The function returns an <code>int</code> (the leading <code>int</code>)
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Void Pointers</h2>
          <p className="mb-4">
            A void pointer (<code>void*</code>) is a generic pointer that can point to any data type. It's useful for
            creating flexible functions and data structures that can work with different types.
          </p>

          <CodeBlock
            language="c"
            filename="void_pointers.c"
            code={`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Generic swap function using void pointers
void swap(void *a, void *b, size_t size) {
    // Temporary buffer to hold data during swap
    void *temp = malloc(size);
    
    if (temp == NULL) {
        printf("Memory allocation failed\\n");
        return;
    }
    
    // Copy data from a to temp
    memcpy(temp, a, size);
    // Copy data from b to a
    memcpy(a, b, size);
    // Copy data from temp to b
    memcpy(b, temp, size);
    
    // Free temporary buffer
    free(temp);
}

// Generic print array function
void print_array(void *array, size_t element_size, size_t count, 
                 void (*print_element)(void*)) {
    // Cast to char* for byte-wise pointer arithmetic
    char *ptr = (char*)array;
    
    for (size_t i = 0; i &lt; count; i++) {
        // Calculate pointer to current element
        void *element = (void*)(ptr + i * element_size);
        // Call the provided print function
        print_element(element);
        
        if (i &lt; count - 1) {
            printf(", ");
        }
    }
    printf("\\n");
}

// Print functions for different types
void print_int(void *element) {
    printf("%d", *(int*)element);
}

void print_double(void *element) {
    printf("%.2f", *(double*)element);
}

void print_string(void *element) {
    printf("\"%s\"", *(char**)element);
}

int main() {
    // Example with integers
    int a = 5, b = 10;
    printf("Before swap: a = %d, b = %d\\n", a, b);
    swap(&a, &b, sizeof(int));
    printf("After swap: a = %d, b = %d\\n\\n", a, b);
    
    // Example with doubles
    double x = 3.14, y = 2.71;
    printf("Before swap: x = %.2f, y = %.2f\\n", x, y);
    swap(&x, &y, sizeof(double));
    printf("After swap: x = %.2f, y = %.2f\\n\\n", x, y);
    
    // Example with strings
    char *str1 = "Hello";
    char *str2 = "World";
    printf("Before swap: str1 = %s, str2 = %s\\n", str1, str2);
    swap(&str1, &str2, sizeof(char*));
    printf("After swap: str1 = %s, str2 = %s\\n\\n", str1, str2);
    
    // Example with arrays
    int int_array[] = {1, 2, 3, 4, 5};
    double double_array[] = {1.1, 2.2, 3.3, 4.4, 5.5};
    char *string_array[] = {"One", "Two", "Three", "Four", "Five"};
    
    printf("Integer array: ");
    print_array(int_array, sizeof(int), 5, print_int);
    
    printf("Double array: ");
    print_array(double_array, sizeof(double), 5, print_double);
    
    printf("String array: ");
    print_array(string_array, sizeof(char*), 5, print_string);
    
    return 0;
}`}
          />

          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg mt-4">
            <h3 className="text-lg font-semibold mb-2">Void Pointer Characteristics</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                A void pointer can point to any data type: <code>void *ptr;</code>
              </li>
              <li>
                You must cast a void pointer before dereferencing it: <code>*(int*)vptr</code>
              </li>
              <li>Void pointers cannot be directly used for pointer arithmetic (must be cast first)</li>
              <li>
                Functions like <code>memcpy</code>, <code>memset</code>, and <code>malloc</code> use void pointers for
                flexibility
              </li>
              <li>Void pointers are commonly used in C to implement generic data structures and algorithms</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Common Pointer Pitfalls</h2>

          <div className="space-y-4">
            <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950/50">
              <h3 className="text-lg font-semibold mb-1">Null Pointer Dereferencing</h3>
              <p>Dereferencing a null pointer causes a program crash.</p>
              <CodeBlock
                language="c"
                filename="null_pointer.c"
                code={`int *ptr = NULL;
*ptr = 42;  // CRASH! Dereferencing a null pointer

// Correct approach
if (ptr != NULL) {
    *ptr = 42;
}`}
              />
            </div>

            <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950/50">
              <h3 className="text-lg font-semibold mb-1">Dangling Pointers</h3>
              <p>A pointer that references memory that has been freed or is out of scope.</p>
              <CodeBlock
                language="c"
                filename="dangling_pointer.c"
                code={`int *create_and_return() {
    int local_var = 42;
    return &local_var;  // WRONG! Returning address of local variable
}

// Correct approach
int *create_and_return() {
    int *ptr = (int*)malloc(sizeof(int));
    *ptr = 42;
    return ptr;  // Caller must free this memory
}`}
              />
            </div>

            <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950/50">
              <h3 className="text-lg font-semibold mb-1">Memory Leaks</h3>
              <p>Allocated memory that is never freed.</p>
              <CodeBlock
                language="c"
                filename="memory_leak.c"
                code={`void memory_leak() {
    int *ptr = (int*)malloc(sizeof(int));
    *ptr = 42;
    // Missing free(ptr) - memory leak
}

// Correct approach
void no_memory_leak() {
    int *ptr = (int*)malloc(sizeof(int));
    *ptr = 42;
    // Use ptr...
    free(ptr);  // Free memory when done
    ptr = NULL; // Optional: Set to NULL to prevent use after free
}`}
              />
            </div>

            <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950/50">
              <h3 className="text-lg font-semibold mb-1">Buffer Overflows</h3>
              <p>Writing beyond the bounds of allocated memory.</p>
              <CodeBlock
                language="c"
                filename="buffer_overflow.c"
                code={`void buffer_overflow() {
    int buffer[5];
    for (int i = 0; i &lt;= 5; i++) {  // WRONG! Buffer index out of bounds
        buffer[i] = i;  // Writes beyond the end of the array when i=5
    }
}

// Correct approach
void no_buffer_overflow() {
    int buffer[5];
    for (int i = 0; i &lt; 5; i++) {  // Correct loop condition
        buffer[i] = i;
    }
}`}
              />
            </div>

            <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950/50">
              <h3 className="text-lg font-semibold mb-1">Use After Free</h3>
              <p>Using memory after it has been freed.</p>
              <CodeBlock
                language="c"
                filename="use_after_free.c"
                code={`void use_after_free() {
    int *ptr = (int*)malloc(sizeof(int));
    *ptr = 42;
    free(ptr);
    *ptr = 100;  // WRONG! Using memory after it's been freed
}

// Correct approach
void no_use_after_free() {
    int *ptr = (int*)malloc(sizeof(int));
    *ptr = 42;
    free(ptr);
    ptr = NULL;  // Set to NULL after freeing
    
    // Check before using
    if (ptr != NULL) {
        *ptr = 100;
    }
}`}
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Pointer Best Practices</h2>

          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Initialize pointers</strong>: Always initialize pointers, either to a valid address or to NULL.
            </li>
            <li>
              <strong>Check for NULL</strong>: Always check if a pointer is NULL before dereferencing it.
            </li>
            <li>
              <strong>Free allocated memory</strong>: Always free memory that was dynamically allocated when it's no
              longer needed.
            </li>
            <li>
              <strong>Set pointers to NULL after freeing</strong>: This helps prevent use-after-free errors.
            </li>
            <li>
              <strong>Be careful with pointer arithmetic</strong>: Ensure that pointer arithmetic stays within the
              bounds of allocated memory.
            </li>
            <li>
              <strong>Use const for read-only pointers</strong>: Use <code>const</code> to indicate that the data
              pointed to should not be modified.
            </li>
            <li>
              <strong>Avoid unnecessary pointer complexity</strong>: Multiple levels of indirection (pointers to
              pointers) can make code harder to understand and maintain.
            </li>
            <li>
              <strong>Document pointer ownership</strong>: Clearly document who is responsible for allocating and
              freeing memory.
            </li>
          </ul>

          <CodeBlock
            language="c"
            filename="pointer_best_practices.c"
            code={`#include <stdio.h>
#include <stdlib.h>

// Function that takes a pointer to read-only data
void print_data(const int *data, size_t size) {
    if (data == NULL) {
        printf("Error: NULL pointer provided\\n");
        return;
    }
    
    for (size_t i = 0; i &lt; size; i++) {
        printf("%d ", data[i]);
    }
    printf("\\n");
}

// Function that allocates memory and returns a pointer
// Caller is responsible for freeing the memory
int *create_array(size_t size, int initial_value) {
    // Check for valid size
    if (size == 0) {
        return NULL;
    }
    
    // Allocate memory
    int *array = (int*)malloc(size * sizeof(int));
    
    // Check if allocation succeeded
    if (array == NULL) {
        printf("Memory allocation failed\\n");
        return NULL;
    }
    
    // Initialize array
    for (size_t i = 0; i &lt; size; i++) {
        array[i] = initial_value;
    }
    
    return array;
}

int main() {
    // Initialize pointer to NULL
    int *data = NULL;
    
    // Allocate memory
    data = create_array(5, 42);
    
    // Check if allocation succeeded
    if (data == NULL) {
        printf("Failed to create array\\n");
        return 1;
    }
    
    // Use the allocated memory
    print_data(data, 5);
    
    // Modify the data
    for (int i = 0; i &lt; 5; i++) {
        data[i] = i * 10;
    }
    
    // Print modified data
    print_data(data, 5);
    
    // Free memory when done
    free(data);
    data = NULL;  // Set to NULL after freeing
    
    // This would cause an error, but we check for NULL
    print_data(data, 5);
    
    return 0;
}`}
          />
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Practice Exercises</h2>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 1: Pointer Basics</h3>
            <p>
              Write a program that declares an integer, a float, and a character. Create pointers to each of these
              variables, modify the values through the pointers, and print both the direct values and the values
              accessed through pointers.
            </p>
          </div>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 2: Array Manipulation</h3>
            <p>
              Write a function that takes an array of integers and its size as parameters, and reverses the array in
              place using pointer arithmetic (without using a temporary array).
            </p>
          </div>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 3: String Operations</h3>
            <p>Implement your own versions of the following string functions using pointers:</p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>
                <code>strlen</code>: Calculate the length of a string
              </li>
              <li>
                <code>strcpy</code>: Copy one string to another
              </li>
              <li>
                <code>strcat</code>: Concatenate two strings
              </li>
            </ul>
          </div>

          <div className="p-4 border rounded-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Exercise 4: Function Pointers</h3>
            <p>
              Create a simple calculator program that uses function pointers to perform different operations (addition,
              subtraction, multiplication, division) based on user input.
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
          <h2 className="text-xl font-bold mb-3">Additional Resources</h2>

          <ul className="space-y-2">
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Pointer_(computer_programming)"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                Wikipedia: Pointer (Computer Programming)
              </a>
            </li>
            <li>
              <a
                href="https://www.cprogramming.com/tutorial/c/lesson6.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                C Programming: Pointers and Memory
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/c-pointers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                GeeksforGeeks: C Pointers
              </a>
            </li>
            <li>
              <a
                href="https://www.tutorialspoint.com/cprogramming/c_pointers.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                TutorialsPoint: C Pointers
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Button asChild variant="outline">
            <Link href="/memory-management/stack-vs-heap">← Stack vs Heap</Link>
          </Button>
          <Button asChild>
            <Link href="/memory-management/memory-allocation">Next: Memory Allocation →</Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  )
}

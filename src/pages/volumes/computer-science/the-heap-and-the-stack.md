# The Heap and the Stack

The word "heap" is a commonly used term in Computer Science, but its meaning depends on the context. In this chapter, we will explore the heap that is a part of every program running in an everyday operating system, such as UNIX-based ones.

However, the concept of the heap is incomplete without its counterpart, the "stack," which is another heavily used term not just in Computer Science but in the software industry at large. Fortunately, early Computer Science pioneers used appropriate names, even in hindsight.

So, what is a heap? It is a pile, somewhat disorganized. In contrast, a stack is somewhat organized.

All computer programs work by storing data in computer memory, usually the RAM (Random Access Memory). There are two parts of the memory that a program can access, courtesy of the operating system. The first is the stack, which is an organized, static layout of memory filled with immutable data. These are things that do not change over the course of program execution.

For example, consider the following code in C:

```c
char *helloWorld = "Hello World"
```

When the C compiler compiles this code, it creates a place on the stack where the value `"Hello World"` resides. And it keeps a reference to that memory.

However, computer programs are usually dynamic and have different outputs based on input or other circumstances. This means that we need to be able to allocate memory that is dynamic, i.e., values of different types and sizes that are unknown to us until the program actually runs. A web server is a good example of this. It does not know which requests to expect, yet it has to be able to parse an HTTP request, which can come in many shapes and forms, and it must be able to form a dynamic response based on that input. This is where the heap comes in.

Let's take a look at an example in C:

```c
int n;

scanf("%d", &n);

int *elements = (int*) malloc(n * sizeof(int));

if (elements == NULL) {
	exit(0);
}

for (int i = 0; i < n; i++) {
	elements[i] = i + 1;
}
```

In this program, we are using both the stack and the heap. To use the heap, we are using a function called `malloc`, short for memory allocation.

What this program does is accept a prompt from the user for a number of elements to fill into an array. Then, we allocate a dynamic amount of memory based on that input using `malloc`. We specifically ask for `n` times the size of an integer in terms of memory. Under the hood, the operating system locates a piece of contiguous memory of that total size, returns a pointer to the beginning of that memory, and then we can fill up that memory with numbers using a for loop.

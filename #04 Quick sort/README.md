# Chapter 4:

In this chapter you will learn about:

- Divide and conquer strategy which is a technic uses to break problem into sub problems.
- Quicksort is an elegant sorting algorithm

## Divide and conquer:

- Figure out hte base case: this should be the simplest possible case.
- Divide or decrease your problem until it becomes the base case.

## Quicksort:

- A sub-array of all the numbers less than the pivot.
- The pivot.
- A sub-array of all the numbers greater than the pivot.
- Recursively, run the quicksort again in case of the sub arrays aren't sorted.

## Big O notation:

| Algorithm      | Average case | Worst case |
| :------------- | :----------: | ---------: |
| Quicksort      |  O(n log n)  |      O(n2) |
| Selection sort |  O(n log n)  |      O(n2) |

**Quicksort is a tricky case. In worst case, it takes O(n2) time. It's as slow as selection sort! But in average case, it takes O(n log n) time**

Sometime operation time is matter (constant), and some other time is not. If two algorithms have different Big O times, the constant doesn't matter. Take binary search and linear search for example.

- **Linear Search:** 10ms (per operation) _ n => 10ms _ 4 billion = 463 days.
- **Binary Search:** 1sec (per operation) _ log n => 1sec _ 32 = 32 seconds.

## Average case vs. Worst cast:

The performance of quicksort heavily depends on the pivot you choose. Suppose you always choose the first element as the pivot. And you call quicksort with an array that is already sorted. Quicksort doesn't check to see whether the input array is already sorted, so, it's better pack the middle element as the pivot.

## Recap:

- D&C works by breaking problem down into smaller and smaller problems.
- If you're implementing quicksort. choose random element as the pivot. The average runtime of quicksort is O(n log n).
- the constant in Big O notation can matter sometimes that's way quicksort is faster than merge sort.

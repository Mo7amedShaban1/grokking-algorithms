# Chapter 1:

You'll learn your first algorithm: binary search, and you will also will learn how to analyze the speed of an algorithm using Big O notation.

## What is Algorithm:

An algorithm is a set of instructions for solving a problem or accomplishing a task.

**Note:** You can implement any algorithm in your favorite language but most importantly to understand the trade-offs between different algorithms.

## Binary Search:

Binary search is an algorithm it's input is a sorted list of elements. If an element you're looking for is in that list, binary search returns the position where it's located. Otherwise, it returns null.

### Binary Search Pseudo Code:

    Procedure binary_search
    A ← sorted array
    x ← value to be searched

    Set lowerBound = 0
    Set upperBound = size of array

    while lowerBound <= upperBound
        set midPoint = lowerBound + ( upperBound - lowerBound ) / 2

        if A[midPoint] = x
            EXIT: x found at location midPoint

        if A[midPoint] < x
            set lowerBound = midPoint + 1

        if A[midPoint] > x
            set upperBound = midPoint - 1

    end while

    end procedure`

**Note:** binary search only works when your list is in sorted order.

## Logarithms:

log10 100 is like asking "How many 10s we multiply together to get 100?"

## Big O notation:

Big O notation is special notation that tells you how fast an algorithm is. Big O notation is about worse-case scenario.

## Some common Big O run times:

- O(log n), known as log time. Example: Binary search
- O(n), known as linear time. Example: Simple search
- O(n \* log n)
- o(n!)

## Recap:

- Binary Search is a lot faster than simple search.
- O(log n) is faster than O(n) but it gets lot faster once the list of items you're searching through grows.
- Algorithm speed isn't measured in seconds.
- Algorithm times are written in Big O notation.

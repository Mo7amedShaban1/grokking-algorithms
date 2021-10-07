# Chapter 2:

In this chapter you will learn about arrays and linked lists two of the most basic data structures and your first sorting algorithm selection sort.

## How memory works:

Each time you want to store an item in memory, you ask the computer for some space, and it gives you an address where you can store your item. it's like a chest of drawers.

## Arrays and linked lists:

Both of them are data structures for storing multiple items but they work different.

### Arrays:

- Items stored contiguously (right next to each other) in memory which makes inserting or deleting items slower than linked list.
- It has random access to memory slots which makes reading items faster than linked list.
- Reading speed: O(1) constant time.
- Deleting and insertion speed: o(n) linear time.

### Linked lists:

- Items stored anywhere in memory and each item stores the address of the next item in the list.
- Reading speed: O(n) linear time.
- Insertion and deleting speed: O(1) constant time.

| Syntax                     |  Linked lists  | Arrays |
| :------------------------- | :------------: | -----: |
| Indexing                   |      O(n)      |   O(1) |
| Insert/delete at beginning |      O(1)      |   O(n) |
| Insert/delete at end       |      O(1)      |   O(1) |
| Insert/delete at middle    | Searching time |   O(n) |

## Selection sort:

Selection sort is a neat algorithm but it's not very fast O(n2);

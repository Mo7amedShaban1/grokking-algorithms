# Chapter 5:

## Hash table:

Hash table is a data structure that uses a hash function to map elements(keys) to an index. It offers O(1) amortized time in searching, inserting and deleting.

## Us cases:

- Fast lookups (phone book, db indexes, server caching).
- Preventing duplicate entries.

## How does it work?

Hash table uses a mapper knows as hash function which maps names (keys) to it's own indexes, because at the end of the day hash table uses an array to store data.

But how does hash table store and retrieve data? credits goes to has function, has function responsible for finding the proper index to store the value and retrieve it. Hash table doesn't store data at a random index instead, it calculate the key value like this:

- Let's assume we have an array of 11 items and we want to store Max it will calculate it like the following => Max => 77 + 97 + 120 = 294 / 11(size of the array).

## Collisions:

<!-- In ideal world every item will be stored in the hash table according to its calculated index in the best case se -->

Two or multiple keys have been assigned the same slot.

### How can we deal with collisions?

- The simplest one is this: if multiple keys map to the same slot, start a linked list at that slot. it's still quick but when you're linked list gets bigger it will slow down your searching time.
- In ideal world every item will be stored in the hash table according to its calculated index in case of the index is occupied, it will go to the next empty slot.

Hash function resizes the size of the array when the load factor reach a certain number.

![alt text](https://miro.medium.com/max/1400/1*ONlsW4t4hS-6ZjiJzLZVRA.png)

## Resources:

- [Hash table and hash function](https://www.youtube.com/watch?v=KyUTuwz_b7Q)
- [Hash table index calculator](http://users.csc.calpoly.edu/~jdalbey/103/Lectures/HashtableCalc.html)

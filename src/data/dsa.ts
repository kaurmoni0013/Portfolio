export const dsaPath = [
  { id: 'cpp', label: 'C++', note: 'The language I reach for first' },
  { id: 'dsa', label: 'Data Structures', note: 'Picking the right container' },
  { id: 'algo', label: 'Algorithms', note: 'Turning structure into a method' },
  { id: 'solve', label: 'Problem Solving', note: 'Read, reduce, then write it' },
] as const

export const dsaTopics = [
  { label: 'Arrays', files: 2, blurb: 'Pivot search, string degree reversal, two-pointer passes.' },
  { label: 'Linked Lists', files: 33, blurb: 'Reversal in groups, cycle detection, recursive inserts and deletes.' },
  { label: 'Stacks', files: 8, blurb: 'Next greater element, balanced parentheses, STL and hand-rolled stacks.' },
  { label: 'Recursion', files: 11, blurb: 'Permutations, subsets, maze, Josephus, Tower of Hanoi.' },
  { label: 'Dynamic Programming', files: 6, blurb: 'House robber, climbing stairs, Fibonacci, min-cost paths.' },
  { label: 'Graphs', files: 2, blurb: 'BFS traversal and adjacency representation.' },
  { label: 'Sorting', files: 2, blurb: 'Merge sort and quick sort written out longhand.' },
  { label: 'Math & Bitwise', files: 2, blurb: 'Binary manipulation, integer square roots, add-binary.' },
] as const

export const dsaFacts = [
  { value: '63', label: 'C++ solutions in dsa-cpp' },
  { value: '8', label: 'topics covered, arrays to graphs' },
  { value: 'Daily', label: 'the practice rhythm I keep' },
] as const

export const dsaLinks = [
  { label: 'dsa-cpp repository', href: 'https://github.com/kaurmoni0013/dsa-cpp' },
  { label: 'LeetCode profile', href: 'https://leetcode.com/u/kaurmoni0013' },
  { label: 'GeeksforGeeks profile', href: 'https://www.geeksforgeeks.org/user/kaurmoni0013' },
] as const

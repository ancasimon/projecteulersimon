const problems = [
  {
    id: 'problem1',
    name: 'Problem 1: Multiples of 3 and 5',
    description: 'If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.',
    isResolved: true,
    answer: 'If you pass in 1000 as the parameter in this function, then the sum of all the multiples of 3 and 5 below 1000 is 233168.',
    solution: 'https://github.com/ancasimon/projecteulersimon/blob/problem1Solution/src/components/Solutions/Problem1Solution.js',
  },
  {
    id: 'problem2',
    name: 'Problem 2: Even Fibonacci Numbers',
    description: 'Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.',
    isResolved: false,
  },
  {
    id: 'problem3',
    name: 'Problem 3: Largest Prime Factor',
    description: 'The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143 ?',
    isResolved: false,
  },
  {
    id: 'problem4',
    name: 'Problem 4: Largest Palindrome Product',
    description: 'A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99. Find the largest palindrome made from the product of two 3-digit numbers.',
    isResolved: false,
  },
  {
    id: 'problem5',
    name: 'Problem 5: Smallest Multiple',
    description: '2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?',
    isResolved: false,
  },
  {
    id: 'problem6',
    name: 'Problem 6: Sum Square Difference',
    description: 'The sum of the squares of the first ten natural numbers is: 1 ..... The square of the sum of the first ten natural numbers is 1.... Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .....Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.',
    isResolved: false,
  },
  {
    id: 'problem7',
    name: 'Problem 7: 10001st Prime',
    description: 'By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13. What is the 10 001st prime number?',
    isResolved: false,
  },
  {
    id: 'problem8',
    name: 'Problem 8: Largest Product in a Series',
    description: 'The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832. Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?',
    isResolved: false,
  },
  {
    id: 'problem9',
    name: 'Problem 9: Special Pythagorean Triplet',
    description: 'A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a2 + b2 = c2. For example, 32 + 42 = 9 + 16 = 25 = 52. There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.',
    isResolved: false,
  },
  {
    id: 'problem10',
    name: 'Problem 10: Summation of Primes',
    description: 'The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17. Find the sum of all the primes below two million.',
    isResolved: false,
  },
];

const getProblems = () => problems;

export default {
  getProblems,
};

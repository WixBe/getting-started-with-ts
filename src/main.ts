// Type infernece
let userName: string = 'user'
console.log(typeof userName) // string

// Error
// username = 10


let age: number = 10
let isStudent: boolean = true
let hobbies: string[] = ['reading', 'coding']

// Create a type
type Gender = 'male' | 'female'

let gender: Gender = 'male'

enum Month {
    JAN = 1,
    FEB,
    MAR,
    APR,
    MAY,
    JUN,
    JUL,
    AUG,
    SEP,
    OCT,
    NOV,
    DEC,
}

let x: any = 'any type'
x = 10
x = true 
x = ['a', 'b']

const sum = (n1: number, n2: number): number => {
    return n1 + n2;
}

function greet(name: string): void {
    console.log(`Hello ${name}`)
}

// Declare a Book type
type Book = {
    title: string
    author: string
    genre: string
}


// Declare a type course
interface Course {
    title: string
    duration: number
    price?: number //optional
}

const book: Book = {
    title : 'Alchemist',
    author : 'Paolo Cohelo',
    genre : 'fiction'
}

const course: Course = {
    title: 'React',
    duration: 40
}

/**
 * type vs interface
 * - type is more flexible
 * - interface is more strict
 * - use interface for objects
 * - use type for union types, tuples, and any other types
 */

// Union types
let mixed: number | string
mixed = 10
mixed = 'hello'

let mixedArray: (number | string)[]
mixedArray = [10, 'hello']

// Tuple
let person: [string, number, Gender, boolean]
person = ['user', 30, 'female', true]

// Type assertion
let message: any = 'Hello'
let messageLength = (message as string).length
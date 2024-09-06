let userName: string = 'user'
console.log(typeof userName)


let age: number = 10
let isStudent: boolean = true
let hobbies: string[] = ['reading', 'coding']

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

}

type Book = {
    title: string
    author: string
    genre: string
}

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


let mixedArray: (number | string)[]
mixedArray = [10, 'hello']

let person: [string, number, Gender, boolean]
person = ['user', 30, 'female', true]

let message: any = 'Hello'
let messageLength = (message as string).length

let userAge: any = 'Hello'

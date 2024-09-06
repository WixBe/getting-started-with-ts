# Getting Started

## Introduction to TypeScript

### What is TypeScript?

TypeScript is a superset of JavaScript that has a static type system. It is developed and maintained by Microsoft. TypeScript is designed for the development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.

### Why TypeScript?

TypeScript is designed for the development of large applications and can be used to develop JavaScript applications for both client-side and server-side execution. TypeScript can be used with any web browser and any host. TypeScript is open source and has good community support. TypeScript is a statically typed language, which means that it is possible to catch errors and bugs at compile time. TypeScript has a rich set of features, including classes, interfaces, modules, and generics. TypeScript is a modern language that is actively developed and maintained by Microsoft.

### Features of TypeScript

TypeScript has a number of features that make it a powerful language for developing large applications. Some of the key features of TypeScript are:

- Static Typing: TypeScript is a statically typed language, which means that it is possible to catch errors and bugs at compile time. This can help to reduce the number of bugs in the code and make it easier to maintain and refactor the code.

- Classes: TypeScript supports classes, which are a fundamental building block of object-oriented programming. Classes can be used to create objects that have properties and methods.

- Interfaces: TypeScript supports interfaces, which are used to define the structure of objects. Interfaces can be used to define the properties and methods that an object must have.

- Modules: TypeScript supports modules, which are used to organize code into reusable units. Modules can be used to define classes, interfaces, and functions that can be exported and imported in other modules.

- Generics: TypeScript supports generics, which are used to create reusable components that can work with a variety of data types. Generics can be used to create classes, interfaces, and functions that can work with any data type.

- Decorators: TypeScript supports decorators, which are used to add metadata to classes, methods, and properties. Decorators can be used to add functionality to classes, methods, and properties at runtime.

### Getting Started with TypeScript

To get started with TypeScript, you will need to install the TypeScript compiler. You can install the TypeScript compiler using npm, which is the package manager for Node.js. To install the TypeScript compiler, run the following command:

```
npm install typescript
```

Once you have installed the TypeScript compiler, you can create a TypeScript file with a .ts extension. You can then compile the TypeScript file to JavaScript using the tsc command. For example, to compile a TypeScript file named app.ts, run the following command:

```
tsc app.ts
```

### Compiler Options

The TypeScript compiler has a number of options that can be used to customize the compilation process. Some of the key compiler options are:

- --target: This option is used to specify the ECMAScript target version. The possible values are "ES3", "ES5", "ES6", "ES2015", "ES2016", "ES2017", "ES2018", "ES2019

- --module: This option is used to specify the module code generation. The possible values are "none", "commonjs", "amd", "system", "umd", "es6", "es2015", "esnext"

- --outFile: This option is used to specify the output file. The output file will contain all the compiled JavaScript code.

- --watch: This option is used to watch input files and recompile whenever they change.

- --sourceMap: This option is used to generate source map files.

- --strict: This option is used to enable all strict type checking options.

### Example

Here is an example of a simple TypeScript program that defines a class named Greeter:

```typescript
class Greeter {
  greeting: string

  constructor(message: string) {
    this.greeting = message
  }

  greet() {
    return 'Hello, ' + this.greeting
  }
}
```

This will compile the TypeScript file to JavaScript and create a JavaScript file named app.js. You can then run the JavaScript file using Node.js or in a web browser.

### Conclusion

TypeScript is a powerful language that is designed for the development of large applications. TypeScript has a number of features that make it a modern and powerful language, including static typing, classes, interfaces, modules, generics, and decorators. TypeScript is actively developed and maintained by Microsoft and has good community support. TypeScript can be used to develop JavaScript applications for both client-side and server-side execution. TypeScript is a modern language that is easy to learn and use, and it can help to reduce the number of bugs in the code and make it easier to maintain and refactor the code.

```

```

## type-script init

    npm init -y
    npm install

    npm i -D tsc 

    npm uninstall tsc
    npm i --save-dev typescript
    npm run init

## package.json

 ```watch``` 
 
    tsc -w

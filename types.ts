let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

// another way to declare and set a variable
let myVoid: void = null;

// has to match an array with a string and a number
// has to be in the order specified
// can add whatever elements after the specified types
let strNumTuple: [string, number];

// this has to be an array of strings
let strArr: string[];
// different syntax:
//let stringArr: Array<string>;

// an array of numbers 
let numArr: number[];
// let NumberArr: Array<number>;

// array of booleans
let booArr: boolean[];
//let booleanArr: Array<boolean>;

// strings can be concatenated
// function return:
// myString = 'Hello'.slice(0, 3)
myString = "Hello World";

// numbers can be positive or negative integers
// expressions (5 + 5)
// decimals and hexidecimals (0xf00d)
myNum = 22;

myBool = true;

myVar = 5; 

strArr = ["Hello", "World"];

numArr = [1, 2, 3];

booArr = [true, false, false];

strNumTuple = ["Hello", 4];

console.log(myString, myNum);
// Basic Types
// 1.boolean, number, string
// 2. [] array, tuples
// 3. enums

let a : string 
a = "TypeScript"

let b = "JavaScript"


// tuples
let tuplesArr : [boolean, number, string]  = [true, 1, "typescript"]

// enum

enum coding {
    language = "typescript",
    editor = "vs code",
    date = 6,
    day = "sunday",
    month = "july",
    year = 2025
}

console.log(coding.language ,'front language');


//////
// type inference //  its sets the type base on the value 

let c  = "ts";
let d = 1;
let e  = true;
let f = [];


// union 

let g : string | number
g = "abc";
g = 1;
// g = true; //  this will not work because we have said that g will be string or number

const unionInferencer  = (val : string|number) =>{
console.log(val,'front val');

    if (typeof val === "string"){
       return val.toUpperCase()
    }else if (typeof val === "number"){
       return val.toFixed(3)
    }
}

console.log(unionInferencer("typescript"),'front unionInferencer()');
console.log(unionInferencer(25.45345435345345),'front unionInferencer()');


///// intersection types

type code = {
    langName: string
}
type editor = {
    editor :string
    yes:boolean
}
type dayDate ={
    day : string;
    date: number
}

type learning = code & editor & dayDate
let values1 : learning = {
    langName:"TypeScript",
    editor:"vs code",
    yes:true,
    date:6,
    day:"sunday"
}
let values2 : learning = {
    langName:"javaScript",
    editor:"vs code",
    yes:true,
    date:6,
    day:"sunday"
}

console.log(values1,'front values1');
console.log(values2,'front values1');

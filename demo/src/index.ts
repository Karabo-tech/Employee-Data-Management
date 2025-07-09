
const greet = (name : string):string =>{
    return `hello, ${name}, welcome to codetribe!`;
}

console.log(greet("Savage"))

let person : {name:string, age:number} = {name: "Karabo",age: 22};

const showObject = (name: {name:string, age:number}): {name:string, age:number}=> {
    return name;
}

console.log(showObject(person));
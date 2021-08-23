let greet = (num1 : number, num2 : number,num3? : number|string) =>{
    console.log(num1 + num2);
    console.log(num3);
}
greet(5,7);

//the number 3 is an optional parameter

const minus = (a:number, b:number) =>{
    return a + b;
}

let result = minus(10,7);
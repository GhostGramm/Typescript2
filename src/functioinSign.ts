let calc = (num1 : number,num2 : number,operation : string)=>{
    if(operation === 'add'){
        return num1 + num2;
    }
    else if(operation === 'sub'){
        return num1 - num2;
    }
}

console.log(calc(5,5,'sub'))
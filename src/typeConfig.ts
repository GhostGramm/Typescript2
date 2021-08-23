type stringOrNum = string|number;
type objWithName = {name : string, uid : stringOrNum}

let register = (uid : stringOrNum, item : string) =>{
    console.log(item +' has a uid of '+uid);
}

let registerAgain = (user : objWithName) =>{
    console.log(user.name + " is "+ user.uid + " years old");
}

register(5,'Gind of dell')
// var userData:{
//  name:string,
//  age:number,
//  company:string
// }={
//     name:"Rishav",
//     age:21,
//     company:'Oracle'
// }

var userData:{
    [key:string]:string|number|undefined
}={
    name:"Rishav",
    age:21,
    company:undefined
}

userData.company="NOKIA"
console.log(userData)
// var userData:{
//  name:string,
//  age:number,
//  company:string
// }={
//     name:"Rishav",
//     age:21,
//     company:'Oracle'
// }

// var userData:{
//     [key:string]:string|number|undefined
// }={
//     name:"Rishav",
//     age:21,
//     company:undefined
// }

// userData.company="NOKIA"
// console.log(userData)




var userData: {
    name: string,
    age: number,
    company: string,
    address: {
        colony: string,
        house: number,
        jattnumber: number,
        buildingnumber: number,
        pardhannumber: number,
        shirtnumber: number
    }
} = {
    name: "Rishav",
    age: 21,
    company: "RB MNC's",
    address: {
        colony: "jatt colony",
        house: 1,
        jattnumber: 1,
        buildingnumber: 1,
        pardhannumber: 1,
        shirtnumber: 1
    }
}



userData.company = "NOKIA"
console.log(userData)

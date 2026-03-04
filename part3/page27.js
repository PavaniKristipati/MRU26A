// let employees=["John","Cathy","Amy","Mike"]
// // employees=[...employees,"Brian"]
// // employees.push("Brian")

// employees.push("Brain")
// console.log(employees)


let employees=new Array("John","Cathy","Amy","Mike")
console.log(employees[0])
// for(let i=0;i<employees.length;i++){
//     console.log(employees[i])
// }

for(let e of employees){
console.log(e)
}
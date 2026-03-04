// const obj={
//     name:"Geethika",
//     skill:"Java"
// }
// console.log(obj)


const obj=new Object()
obj.name="Harshi"
obj.skill="Java"
console.log(obj)
obj.score=97
console.log(obj)
obj["rank"]=1
console.log(obj)

let key="city"
let value="Hyderabad"
obj[key]=value
console.log(obj)
delete obj.skill
console.log(obj)
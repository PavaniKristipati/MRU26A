// const stock={
//     name:"Wipro",
//     lastprice:200,
//     currentprice:250,
//     growth:function(){
//         return this.currentprice-this.lastprice
//     },
//     growthpercent:function(){
// return (this.growth()/this.lastprice)*100
//     }

// }
// console.log(stock.growthpercent())


// Arrow function
const stock={
    name:"Wipro",
    lastprice:200,
    currentprice:250,
    growth:()=>
        thiscurrentprice-lastprice,
    growthpercent:()=>
        (growth()/this.lastprice)*100
} 
console.log(stock.growthpercent)
const obj={
    name:"Wipro",
    lastprice:200,
    currentprice:250,
};
function calc(obj){
console.log(obj.lastprice)
obj.growth=obj.currentprice-obj.lastprice
obj.growthper=(obj.growth*100)/obj.lastprice
console.log(obj)
}
calc(obj)
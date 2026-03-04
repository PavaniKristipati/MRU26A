const stack=[
    {
        name:"Wipro",
        lastprice:200,
        currentprice:250
    },
    {
        name:"Deloite",
        lastprice:100,
        currentprice:150
    }
];
function calc(obj){
    console.log(obj.lastprice)
    obj.growth=obj.currentprice-obj.lastprice
    obj.growthper=(obj.growth*100)/obj.lastprice
    console.log(obj)
}
calc(stack[0])
calc(stack[1])


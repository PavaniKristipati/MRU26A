const stockprice=[
{
    name:"Wipro",
    lastprice:200,
    currentprice:210
},
{
    name:"Deloitte",
    lastprice:250,
    currentprice:270
},
{
    name:"HDFC",
    lastprice:200,
    currentprice:290
}
]
function bestprice(companies){
    const a=[]
    for(let i=0;i<=2;i++){
        a[i]=companies[i].currentprice-companies[i].lastprice
    }
    const max=Math.max(...a)
    console.log(max)
    const j=a.indexOf(max)
    console.log(companies[j].name)
}
bestprice(stockprice)
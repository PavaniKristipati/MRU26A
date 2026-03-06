// setTimeout(()=>,3000)
// console.log("Beginning")
// setTimeout(()=>{
//     console.log("Hello World")
// },3000);
// console.log("Ending")



function f1(){
    console.log("Beginning")
}
function f2(){
    return new Promise((resolve,reject)=> {
    setTimeout(()=>{
    console.log("Hello World")
    // resolve("Everthing is soo good")
    reject("Something went wrong")
},3000);
});
}
function f3(){
    console.log("Ending")
}
 async function main(){
    try{
    f1()
await f2()
// const result=await f2()
// console.log(result)
    f3()
    }
    catch(err){
        console.log(err)
    }
}
main()
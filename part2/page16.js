function greet(name,callback){
callback();
console.log(`Welcome,${name}`)
}
greet("Harshi",()=>{
    console.log("Hello")
})
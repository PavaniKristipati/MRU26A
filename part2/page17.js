// CLOSURE FUNCTION

// function outer(){
//     let n=1
//     function inner(){
//         return n++
//     }
//     return inner
// }
// const f=outer()
// console.log(f())
// console.log(f())
// console.log(f())



function outer(){
    let password="1234"
    function inner(pwd){
        if(pwd===password){
            return "Access granted"
        }
        else{
            return "Access Denied"
        }
    }
    return inner

}
const chkpassword=outer()
console.log(chkpassword("1234"))
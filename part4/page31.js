// function placeOrder(){
//     console.log("Order is placed")
// }
// function makePayment(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("Payment has  been processed")
//             resolve()
//         },5000)
//     })
// }
// function sendConfirmation(){
//     console.log("Confirmation has been sent")
// }

// async function main(){
//     placeOrder()
//     await makePayment()
//     sendConfirmation()
// }
// main()








function placeOrder(){
    console.log("Order is placed")
}
function makePayment(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("Payment is success")
            reject("Payment failed")
        },5000)
    })
}
function sendConfirmation(){
    console.log("Confirmation has been sent")
}

async function main(){
    try{
    placeOrder()
     const result=await makePayment()
     console.log(result)
    sendConfirmation()
    }
    catch(err){
        console.log(err)
    }
}
main()
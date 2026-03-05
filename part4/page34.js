// ejs: embedded java script we have to install -it creates server
           
import express from "express" // In express package they used default
const app = express() 
app.set("view engine", "ejs")
app.set("views","views")
app.listen(8080,()=> console.log("Server Started"))
app.get("/",(req,res)=>{
    res.render("login");
});
app.get("/register",(req,res)=>{
    res.render("register");
});



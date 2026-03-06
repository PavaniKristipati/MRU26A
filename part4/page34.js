// ejs: embedded java script we have to install -it creates server
// npm i ejs

import express from "express" // In express package they used default
import session from "express-session"
import expresslayouts from "express-ejs-layouts";
const app = express()
app.use(expresslayouts)
app.use(express.static("public"))
app.set("layout","layout")
app.set("view engine", "ejs")
app.set("views", "views")
app.listen(5000, () => console.log("Server Started"))

app.use(express.urlencoded({extended: true}));

app.use(
    session({
        secret:"mySecretKey",
        resave: false,
        saveUninitialized:false,
    })
)

let users = [
    { name: "Poojitha", email: "poojitha@gmail.com", password: "1234" },
    { name: "Harshi", email: "harshitha@gmail.com", password: "2345" },
    { name: "Komal", email: "komal@gmail.com", password: "3456" }
]
app.get("/login", (req, res) => {
    res.render("login",{error:null});
});
app.post("/login", (req, res) => {
   
 const { email, password } = req.body; // we are sure about this because in login page we have given name as email and password
 
 const user= users.find((user)=>user.email===email);
 if(user){
    if(user.password ===password){
        req.session.user=user // session id gets created,check in browser,inspect -application -cookies
        res.redirect("/")
    }
    else{
        res.render("login",{error:"Invalid password"})
    }
 }
 else{
    res.render("login",{error:"User not found"})
 }

})


app.get("/register", (req, res) => {
    res.render("register");
});
app.post("/register",(req,res)=>{
    users=[...users,req.body]
    res.redirect("/")
})

app.get("/", (req, res) => {
    if(req.session.user){
res.render("dashboard", { users })
    }
    else{
        res.redirect("/login")
    }
});





//page34.js & login.ejs or register.ejs
//after server is created
//go to browser and enter http://localhost:8080
//will get the page
//ctrl+c to stop the server
//after stopping the server if we refresh the page in the browser
//we will get The site can't be reached
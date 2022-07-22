const express=require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello Srikanth Reddy")
});

app.listen(8080);
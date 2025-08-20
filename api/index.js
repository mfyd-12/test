const express=require("express");
const cors=require("cors")

const app=express()
app.use(cors())

const arr=[1,2,3,4]
const products=[{
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    },]
app.get("/products",(req,res)=>{
    res.send(products)
})

app.get("/",(req,res)=>{
    res.send(arr)
})

const port=3000
app.listen(port,()=>{
    console.log("server is running")
})

const express = require("express")
const mongoose = require("mongoose")
const userRoutes = require("./Routes/userRoute")


const app = express()

mongoose.connect("mongodb://localhost:27017/ecommerce")
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.log("Error connecting with DB", err))

app.use(express.json())

app.use("/api/user", userRoutes)

app.listen(15000, () => console.log("Server is up and running on port 15000"))
import express from "express"
import loginRoute from "./routes/index.js"

const app = express()

app.use("/", loginRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})
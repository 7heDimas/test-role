import "dotenv/config"

import express from 'express'
const app = express()
const port = process.env.port || 4200

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get("/", (req,res)=> {
    return res.send("HI")
})

// * Routes chapter
import routes from "./routes/index.js"
app.use(routes)

// register
import ApiRoutes from "./routes/api.js"
app.use("/api", ApiRoutes)

app.listen(port, () => console.log(`Server is running on port ${port}`))
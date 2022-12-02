import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

const app = express()

app.use(cors())
app.use(express.json())

// http://localhost:5000/api/v1/restaurants to see the databases
app.use("/api/v1/restaurants", restaurants)

// This error appears when accessing at invalid url localhost:5000/.. 
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app
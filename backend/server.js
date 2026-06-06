import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import contactRoutes from "./routes/contactRoutes.js"

dotenv.config()

const app = express()
app.use(express.json())   
app.use(express.urlencoded({ extended: true }))

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  credentials: true
}))

app.use("/api/contact", contactRoutes)

app.get("/", (req, res) => {
  res.send("API is running ")
})

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

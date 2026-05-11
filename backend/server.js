import express from "express"
import cors from "cors"
import connectDB from "./config/db.js"
import contactRoutes from "./routes/contactRoutes.js"

const app = express()

// 🔥 REQUIRED MIDDLEWARE
app.use(express.json())   // <-- THIS WAS MISSING
app.use(express.urlencoded({ extended: true }))

connectDB()

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  credentials: true
}))

app.use("/api/contact", contactRoutes)

app.get("/", (req, res) => {
  res.send("API is running 🚀")
})

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

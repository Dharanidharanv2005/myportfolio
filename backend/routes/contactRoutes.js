import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import Contact from "../models/Contact.js"

const router = express.Router()

router.post("/submit", async (req, res) => {
  try {
    const { email, password, message } = req.body

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // create token
    const token = jwt.sign(
      { email },
      "SECRET_KEY_SRI",
      { expiresIn: "7d" }
    )

    const newContact = new Contact({
      email,
      password: hashedPassword,
      message,
      token
    })

    await newContact.save()

    res.status(201).json({
      success: true,
      message: "Data saved successfully",
      token
    })

  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

export default router

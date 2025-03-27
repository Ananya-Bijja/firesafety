import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import User from "./models/User.js"; // Import User model
import userProgressRoutes from "./routes/userProgress.js"; // Import the user progress routes

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://aishu:aishwarya@cluster0.3vxah.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("🔥 MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Signup route
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: "Signup successful!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // ✅ Include username in response
  res.status(200).json({
    message: "Login successful!",
    username: user.name, // ✅ Send username
  });
});

// Use the user progress routes
app.use("/api/userProgress", userProgressRoutes);

app.listen(5000, () => console.log("🔥 Server running on http://localhost:5000"));

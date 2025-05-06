import User from "../models/user.model.js"; // Adjust the path as necessary
import bcrypt from "bcryptjs";

// Signup Controller
export const signupController = async (req, res) => {
  const { name, email, password, phone } = req.body;

  // Basic validation for required fields
  if (!name || !email || !password || !phone) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Email already in use!" });
  }

  try {
    // Hash the password before saving to DB
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ name, email, password: hashedPassword, phone });
    await newUser.save();

    res.status(201).json({ message: "Signup successful!" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

// Login Controller
export const loginController = async (req, res) => {
  const { email, password } = req.body;

  // Basic validation for required fields
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required!" });
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    // Compare the entered password with the hashed password in the DB
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    // If login is successful, return a success message or generate a token
    // For now, we'll return a success message
    res.status(200).json({ message: "Login successful!" });

  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};


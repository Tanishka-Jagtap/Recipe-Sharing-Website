const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Registration route
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    console.log(`Registering user with email: ${email}`);  
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    console.log(`User registered successfully with email: ${email}`);  
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(`Registration failed for email: ${email}, Error: ${err.message}`);  
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log(`Login attempt for email: ${email}`); 
    const user = await User.findOne({ email });
    if (!user) {
      console.log(`Login failed for email: ${email}, User not found`); 
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log(`Login failed for email: ${email}, Incorrect password`); 
      return res.status(400).json({ message: "Invalid credentials" });
    }

    console.log(`Login successful for user: ${user.username} (email: ${email})`); 
    res.json({ message: "Login successful", username: user.username });
  } catch (err) {
    console.error(`Login failed for email: ${email}, Error: ${err.message}`); 
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});

module.exports = router;
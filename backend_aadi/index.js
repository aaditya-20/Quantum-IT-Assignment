// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Create an Express app
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/volopayDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Define the User schema
const userSchema = new mongoose.Schema({
  name: String,
  dateOfBirth: Date,
  email: String,
  password: String,
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Define the registration route
app.post('/api/v1/register', async (req, res) => {
  try {
    const { name, dateOfBirth, email, password } = req.body;

    // Check if the email is already taken
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ name, dateOfBirth, email, password: hashedPassword });
    await newUser.save();

    // Generate a JSON Web Token (JWT)
    const token = jwt.sign({ userId: newUser._id }, 'secretKey');

    return res.status(201).json({ token, user: newUser });
  } catch (error) {
    console.error('Error during registration', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Define the authentication/login route
app.post('/api/v1/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Generate a JSON Web Token (JWT)
    const token = jwt.sign({ userId: user._id }, 'secretKey');

    return res.status(200).json({ token, user });
  } catch (error) {
    console.error('Error during authentication', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(4000, () => {
  console.log('Server started on port 4000');
});

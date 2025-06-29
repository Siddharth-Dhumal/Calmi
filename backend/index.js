const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON

// GET test route
app.get('/', (req, res) => {
  res.send('Hello from Calmi backend!');
});

// POST route to receive user messages
app.post('/chat', (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ error: 'Message is required' });
  }

  // Placeholder supportive response (later will be AI)
  const supportiveReply = "I'm here for you. You’re not alone — let's take a deep breath together.";

  res.json({
    userMessage,
    botReply: supportiveReply
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Calmi backend is running at http://localhost:${PORT}`);
});
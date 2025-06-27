const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Calmi backend!');
});

app.listen(PORT, () => {
  console.log(`✅ Calmi backend is running at http://localhost:${PORT}`);
});
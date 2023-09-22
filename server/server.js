const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const db = require('./models');

app.get('/api', async (req, res) => {
  const query = await db.query(`SELECT * FROM tickets`);
  res.status(200).json(query.rows);
});

app.post('/api', async (req, res) => {
  const { name, email, subject, message } = req.body;
  const timestamp = new Date().toLocaleString();

  await db.query(`
  INSERT INTO tickets (name, email, subject, message, timestamp)
  VALUES ('${name}', '${email}', '${subject}', '${message}', '${timestamp}')`);

  res.status(200).json('post');
});

app.patch('/api', (req, res) => {
  res.status(200).json('patch');
});

app.get('/', (req, res) => {
  res.send('Express JS on Vercel');
});

app.use((req, res) => res.sendStatus(404));

const PORT = parseInt(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

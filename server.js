const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
}));


app.use(express.json());


app.post('/contact', (req, res) => {
  const { name, email, msg } = req.body;


  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${msg}`);


  res.send(`Thank you for your interest, ${name}.`);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

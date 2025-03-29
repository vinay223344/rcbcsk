const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.get('/login', (req, res) => {
  res.send(`
<center><h1>Login</h1>
    <form method="POST" action="/login">
<br><label>Name:</label><input type="text" name="username" placeholder="Username" required /><br>
<br><label>Password:</label><input type="password" name="password" placeholder="Password" required /><br>
<br><label>Regd.No:</label><input type="text" name="regd" placeholder="Regd.No" required /><br>
      <button type="submit">Login</button>
    </form></center>
  `);
});
app.post('/login', (req, res) => {
  const { username, password,regd } = req.body;
  if (username === 'rama' && password === 'satya') {
    res.send('Login successful'+regd);
  } else {
    res.send('Invalid username or password');
  }
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
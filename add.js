const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.get('/', function (req, res) {
  res.send(`
    <center>
      <h1>Welcome to the Calculator App</h1>
      <a href="/calc">Go to Calculator</a>
    </center>
  `);
});
app.get('/calc', function(req, res){
  res.send(`
<center>
<h1>Calculator</h1>
 <form method="POST" action="/add">
  <br><label>Number1:</label><input type="text" name="number1"/><br>
  <br><label>Number2</label><input type="text" name="number2"/><br>
  <button type="submit">ADD</button>
</form>
</center>
 `);
});
app.post('/add', function(req, res) {
  const { number1, number2} = req.body;
  res.send("Sumation: " + (Number(number1) + Number(number2)));
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
})
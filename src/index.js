const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/users", (req, res) => {
  const { name, age, email } = req.body;
  const user = { name, age, email }
  const result = `My name is ${user.name} and I am ${user.age} years old. My email is ${user.email}`;
  res.send(result);
});

app.listen(3000, () => console.log("Server is running on port 3000"));

import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());

app.post("/register", (req, res) => {
  const { email, password } = req.body;

  // Read users data
  fs.readFile("users.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Error reading user data." });
    }

    const users = JSON.parse(data || "[]");

    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      return res.json({ success: false, message: "Email already exists." });
    }

    users.push({ email, password });

    fs.writeFile("users.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Error saving user data." });
      }

      res.json({ success: true, message: "User registered successfully." });
    });
  });
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Read users data
  fs.readFile("users.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Error reading user data." });
    }

    const users = JSON.parse(data || "[]");

    // Check if the user exists and password matches
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      return res.json({ success: true, message: "Login successful." });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password." });
    }
  });
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

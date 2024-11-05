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

app.get("/products", (req, res) => {
  fs.readFile("Product.json", "utf8", (err, data) => {
    if (err)
      return res.status(500).json({ message: "Error reading products." });
    res.json(JSON.parse(data));
  });
});
app.get("/product", (req, res) => {
  const productId = req.query.id; // Get the ID from the query parameter

  fs.readFile("Product.json", "utf8", (err, data) => {
    if (err)
      return res.status(500).json({ message: "Error reading products." });

    const products = JSON.parse(data);
    const product = products.find((p) => p.id === parseInt(productId)); // Find product by ID

    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.json(product); // Return the found product
  });
});
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

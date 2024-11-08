import express from "express";
import fs from "fs";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
const SECRET_KEY = "LKKNJJANNAHHHWBBHHHBSH8980211250OPIH"; // Replace with a strong secret key
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  // Hash password with bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);

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

    users.push({ email, password: hashedPassword });

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
  fs.readFile("users.json", "utf8", async (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Error reading user data." });
    }

    const users = JSON.parse(data || "[]");

    // Find the user by email
    const user = users.find((user) => user.email === email);
    if (!user) {
      return res
        .status(200)
        .json({ success: false, message: "Invalid email or password." });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(200)
        .json({ success: false, message: "Invalid email or password." });
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res.json({ success: true, message: "Login successful.", token });
  });
});

// Middleware to verify JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Access denied." });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token." });
    req.user = user;
    next();
  });
}

app.get("/products", (req, res) => {
  fs.readFile("Product.json", "utf8", (err, data) => {
    if (err)
      return res.status(500).json({ message: "Error reading products." });
    res.json(JSON.parse(data));
  });
});
app.get("/popular-product", (req, res) => {
  fs.readFile("Product.json", "utf8", (err, data) => {
    if (err)
      return res.status(500).json({ message: "Error reading products." });
    const products = JSON.parse(data);
    const product = products.filter((p) => p.rating > 4.7);
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.json(product);
  });
});
app.get("/categories", (req, res) => {
  fs.readFile("Product.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading products." });
    }

    const products = JSON.parse(data);

    const categories = [];
    const categoryMap = {};

    products.forEach((product) => {
      if (!categoryMap[product.category]) {
        categoryMap[product.category] = {
          categoryId: product.categoryId,
          image: product.image,
        };
      }
    });

    for (const [category, details] of Object.entries(categoryMap)) {
      categories.push({
        category,
        categoryId: details.categoryId,
        image: details.image,
      });
    }

    res.json(categories.slice(0, 12));
  });
});

app.get("/product", (req, res) => {
  const productId = req.query.id;

  fs.readFile("Product.json", "utf8", (err, data) => {
    if (err)
      return res.status(500).json({ message: "Error reading products." });

    const products = JSON.parse(data);
    const product = products.find((p) => p.id === parseInt(productId));

    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.json(product);
  });
});

app.get("/random-products", (req, res) => {
  fs.readFile("Product.json", "utf8", (err, data) => {
    if (err)
      return res.status(500).json({ message: "Error reading products." });

    const products = JSON.parse(data);
    const randomProducts = products
      .sort(() => 0.5 - Math.random())
      .slice(0, 12);

    res.json(randomProducts);
  });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

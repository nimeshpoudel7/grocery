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
function generateOrderId() {
  const timestamp = new Date().getTime();
  const randomNum = Math.floor(Math.random() * 1000000);
  return `ORD-${timestamp}-${randomNum}`;
}
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
    if (err) return res.status(401).json({ message: "Invalid token." });
    req.user = user;
    next();
  });
}

app.get("/products", (req, res) => {
  fs.readFile("Product.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({
        message: "Error reading products.",
        error: err.message,
      });
    }

    try {
      let products = JSON.parse(data);
      const { filter, filterType } = req.query;

      // If no filter parameters are provided, return all products
      if (!filter || !filterType) {
        return res.json(products);
      }

      // Apply filters if provided
      switch (filter.toLowerCase()) {
        case "rating":
          // Filter products by rating greater than or equal to specified value
          products = products.filter(
            (product) => product.rating >= parseFloat(filterType)
          );
          break;

        case "category":
          // Filter products by category
          products = products.filter(
            (product) =>
              product.category.toLowerCase() === filterType.toLowerCase()
          );
          break;

        case "price":
          // Sort products by price
          products.sort((a, b) => {
            if (filterType.toLowerCase() === "lowtohigh") {
              return a.price - b.price;
            } else if (filterType.toLowerCase() === "hightolow") {
              return b.price - a.price;
            }
            return 0;
          });
          break;

        default:
          return res.status(400).json({
            message:
              "Invalid filter parameter. Supported filters: price, rating, category",
          });
      }

      res.json(products);
    } catch (parseError) {
      return res.status(500).json({
        message: "Error parsing products data.",
        error: parseError.message,
      });
    }
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

app.post("/wishlist/add", authenticateToken, (req, res) => {
  const { productId, quality, discount } = req.body;
  const userEmail = req.user.email;

  fs.readFile("users.json", "utf8", (err, data) => {
    if (err)
      return res.status(500).json({ message: "Error reading user data." });

    const users = JSON.parse(data || "[]");
    const user = users.find((u) => u.email === userEmail);
    if (!user) return res.status(404).json({ message: "User not found." });
    const productExists =
      user.wishlist &&
      user.wishlist.some((item) => item.productId === productId);

    if (productExists) {
      return res.json({
        success: false,
        message: "Product is already in your wishlist.",
      });
    }
    user.wishlist = user.wishlist || [];
    user.wishlist.push({
      productId,
      addedDate: new Date().toISOString(),
    });

    fs.writeFile("users.json", JSON.stringify(users, null, 2), (err) => {
      if (err)
        return res.status(500).json({ message: "Error saving wishlist data." });
      res.json({ success: true, message: "Product added to wishlist." });
    });
  });
});
app.get("/wishlist", authenticateToken, (req, res) => {
  const userEmail = req.user.email;

  // Read users.json to get the user's wishlist
  fs.readFile("users.json", "utf8", (err, userData) => {
    if (err)
      return res.status(500).json({ message: "Error reading user data." });

    const users = JSON.parse(userData || "[]");
    const user = users.find((u) => u.email === userEmail);
    if (!user) return res.status(404).json({ message: "User not found." });

    const wishlist = user.wishlist || [];

    fs.readFile("Product.json", "utf8", (err, productData) => {
      if (err)
        return res.status(500).json({ message: "Error reading products." });

      const products = JSON.parse(productData || "[]");

      const detailedWishlist = wishlist.map((item) => {
        const product = products.find((p) => p.id === item.productId);
        return product ? { ...item, ...product } : item;
      });
      const resposeData = {
        data: detailedWishlist,
        success: true,
      };

      res.json(resposeData);
    });
  });
});
app.post("/wishlist/remove", authenticateToken, (req, res) => {
  const { productId } = req.body;
  const userEmail = req.user.email;

  fs.readFile("users.json", "utf8", (err, data) => {
    if (err)
      return res.status(500).json({ message: "Error reading user data." });

    const users = JSON.parse(data || "[]");
    const user = users.find((u) => u.email === userEmail);
    if (!user) return res.status(404).json({ message: "User not found." });

    user.wishlist = user.wishlist.filter(
      (item) => item.productId !== productId
    );

    fs.writeFile("users.json", JSON.stringify(users, null, 2), (err) => {
      if (err)
        return res.status(500).json({ message: "Error saving wishlist data." });
      res.json({ success: true, message: "Product removed from wishlist." });
    });
  });
});

app.post("/cart", authenticateToken, (req, res) => {
  const userEmail = req.user.email;
  const { productId, quantity } = req.body;

  fs.readFile("cart.json", "utf8", (err, cartData) => {
    if (err)
      return res.status(500).json({ message: "Error reading cart data." });

    const carts = JSON.parse(cartData || "[]");
    let userCart = carts.find((c) => c.email === userEmail);

    if (!userCart) {
      userCart = { email: userEmail, cart: [] };
      carts.push(userCart);
    }

    const existingItem = userCart.cart.find(
      (item) => item.productId === productId
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      userCart.cart.push({
        productId,
        quantity,
        addedDate: new Date().toISOString(),
      });
    }

    fs.writeFile("cart.json", JSON.stringify(carts, null, 2), (err) => {
      if (err)
        return res.status(500).json({ message: "Error saving cart data." });
      res.json({ message: "Product added to cart.", success: true });
    });
  });
});
app.get("/cart", authenticateToken, (req, res) => {
  const userEmail = req.user.email;
  fs.readFile("cart.json", "utf8", (err, cartData) => {
    if (err)
      return res.status(500).json({ message: "Error reading cart data." });

    const carts = JSON.parse(cartData || "[]");
    const userCart = carts.find((c) => c.email === userEmail)?.cart || [];

    fs.readFile("Product.json", "utf8", (err, productData) => {
      if (err)
        return res.status(500).json({ message: "Error reading products." });

      const products = JSON.parse(productData || "[]");

      const detailedCart = userCart.map((item) => {
        const product = products.find((p) => p.id === item.productId);
        return product ? { ...item, ...product } : item;
      });

      res.json({ data: detailedCart, success: true });
    });
  });
});
app.post("/cart-remove", authenticateToken, (req, res) => {
  const userEmail = req.user.email;
  const { productId } = req.body;

  fs.readFile("cart.json", "utf8", (err, cartData) => {
    if (err)
      return res.status(500).json({ message: "Error reading cart data." });

    const carts = JSON.parse(cartData || "[]");
    const userCart = carts.find((c) => c.email === userEmail);

    if (!userCart) {
      return res.status(404).json({ message: "Cart not found for this user." });
    }

    const itemIndex = userCart.cart.findIndex(
      (item) => item.productId === productId
    );

    if (itemIndex === -1) {
      return res.status(404).json({ message: "Product not found in cart." });
    }

    userCart.cart.splice(itemIndex, 1);

    fs.writeFile("cart.json", JSON.stringify(carts, null, 2), (err) => {
      if (err)
        return res.status(500).json({ message: "Error saving cart data." });
      res.json({ message: "Product removed from cart.", success: true });
    });
  });
});
app.post("/create-order", authenticateToken, (req, res) => {
  const {
    firstName,
    lastName,
    company,
    address,
    country,
    province,
    postalCode,
    phone,
    paymentMethod,
    total,
  } = req.body;
  const userEmail = req.user.email;
  const orderId = generateOrderId();

  // Load the existing users from user.json
  fs.readFile("users.json", "utf8", (err, data) => {
    if (err)
      return res.status(500).json({ message: "Error reading user data." });

    let users = JSON.parse(data || "[]");
    let user = users.find((u) => u.email === userEmail);

    if (!user) {
      // If the user doesn't exist, create a new user record
      user = {
        firstName,
        lastName,
        company,
        address,
        country,
        province,
        postalCode,
        phone,
        paymentMethod,
      };
      users.push(user);
    } else {
      // Update existing user info
      user.firstName = firstName;
      user.lastName = lastName;
      user.company = company;
      user.address = address;
      user.country = country;
      user.province = province;
      user.postalCode = postalCode;
      user.phone = phone;
      user.paymentMethod = paymentMethod;
    }

    // Save updated user data back to user.json
    fs.writeFile("users.json", JSON.stringify(users, null, 2), (err) => {
      if (err)
        return res.status(500).json({ message: "Error saving user data." });

      // Now load the cart data for this user
      fs.readFile("cart.json", "utf8", (err, cartData) => {
        if (err)
          return res.status(500).json({ message: "Error reading cart data." });

        let carts = JSON.parse(cartData || "[]");
        let userCart = carts.find((cart) => cart.email === userEmail);

        if (!userCart || userCart.cart.length === 0) {
          return res.status(400).json({ message: "Cart is empty." });
        }

        // Prepare the order details from the user's cart and add payment method
        const orderDetails = {
          items: userCart.cart, // Contains the products and quantities from the cart
          paymentMethod, // Include payment method in order details
        };

        // Create a new order history entry for this user
        const newOrder = {
          orderId,
          userEmail,
          orderDate: new Date().toISOString(),
          orderDetails,
          shippingAddress: user,
          total,
        };

        // Load order history and add the new order
        fs.readFile("orderhistory.json", "utf8", (err, orderData) => {
          if (err)
            return res
              .status(500)
              .json({ message: "Error reading order history." });

          let orders = JSON.parse(orderData || "[]");
          orders.push(newOrder);

          // Save updated order history
          fs.writeFile(
            "orderhistory.json",
            JSON.stringify(orders, null, 2),
            (err) => {
              if (err)
                return res
                  .status(500)
                  .json({ message: "Error saving order history." });

              // Now clear the user's cart in cart.json
              userCart.cart = []; // Clear the cart items

              // Save the updated cart data
              fs.writeFile(
                "cart.json",
                JSON.stringify(carts, null, 2),
                (err) => {
                  if (err)
                    return res
                      .status(500)
                      .json({ message: "Error clearing cart data." });

                  res.json({
                    success: true,
                    message: "Order created successfully.",
                  });
                }
              );
            }
          );
        });
      });
    });
  });
});

app.get("/user-dashboard", authenticateToken, (req, res) => {
  const userEmail = req.user.email;

  // Get user details
  fs.readFile("users.json", "utf8", (err, userData) => {
    if (err)
      return res.status(500).json({ message: "Error reading user data." });

    const users = JSON.parse(userData || "[]");
    const user = users.find((u) => u.email === userEmail);

    if (!user) return res.status(404).json({ message: "User not found." });

    // Get recent order history
    fs.readFile("orderhistory.json", "utf8", (err, orderData) => {
      if (err)
        return res
          .status(500)
          .json({ message: "Error reading order history." });

      const orders = JSON.parse(orderData || "[]");
      const recentOrders = orders
        .filter((order) => order.userEmail === userEmail)
        .sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate))
        .slice(0, 5);
      const formattedRecentOrders = recentOrders.map((order) => ({
        ...order,
        orderDate: new Date(order.orderDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
      }));

      res.json({
        userDetails: user,
        recentOrders: formattedRecentOrders,
        success: true,
      });
    });
  });
});
app.get("/order-history", authenticateToken, (req, res) => {
  const userEmail = req.user.email;

  fs.readFile("orderhistory.json", "utf8", (err, data) => {
    if (err)
      return res.status(500).json({ message: "Error reading order history." });

    const orders = JSON.parse(data || "[]");
    const userOrders = orders.filter((order) => order.userEmail === userEmail);

    res.json({
      data: userOrders,
      success: true,
    });
  });
});
app.get("/order-details", authenticateToken, (req, res) => {
  const { orderId } = req.query;
  const userEmail = req.user.email;
  console.log(orderId);
  fs.readFile("orderhistory.json", "utf8", (err, data) => {
    if (err)
      return res.status(500).json({ message: "Error reading order history." });

    const orders = JSON.parse(data || "[]");
    const order = orders.find(
      (o) => o.userEmail === userEmail && o.orderId === orderId
    );

    if (!order) return res.status(404).json({ message: "Order not found." });

    fs.readFile("Product.json", "utf8", (err, productData) => {
      if (err)
        return res.status(500).json({ message: "Error reading products." });

      const products = JSON.parse(productData || "[]");
      const orderDetails = order.orderDetails.items.map((item) => {
        const product = products.find((p) => p.id === item.productId);
        return { ...item, ...product };
      });

      res.json({
        orderDetails,
        shippingAddress: order.shippingAddress,
        total: order.total,
        success: true,
      });
    });
  });
});
app.post("/change-password", authenticateToken, async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const userEmail = req.user.email;

  fs.readFile("users.json", "utf8", async (err, data) => {
    if (err)
      return res.status(500).json({ message: "Error reading user data." });

    const users = JSON.parse(data || "[]");
    const user = users.find((u) => u.email === userEmail);

    if (!user) return res.status(404).json({ message: "User not found." });

    // Check if the current password is valid
    const isPasswordValid = await bcrypt.compare(
      currentPassword,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Current password is invalid." });
    }

    // Hash the new password and update the user's password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;

    fs.writeFile("users.json", JSON.stringify(users, null, 2), (err) => {
      if (err)
        return res.status(500).json({ message: "Error saving user data." });
      res.json({ message: "Password updated successfully.", success: true });
    });
  });
});
app.get("/cart-summary", authenticateToken, (req, res) => {
  const userEmail = req.user.email;

  fs.readFile("cart.json", "utf8", (err, cartData) => {
    if (err)
      return res.status(500).json({ message: "Error reading cart data." });

    const carts = JSON.parse(cartData || "[]");
    const userCart = carts.find((c) => c.email === userEmail);

    if (!userCart || userCart.cart.length === 0) {
      return res.json({ totalItems: 0, totalCost: 0, success: true });
    }

    fs.readFile("Product.json", "utf8", (err, productData) => {
      if (err)
        return res.status(500).json({ message: "Error reading products." });

      const products = JSON.parse(productData || "[]");

      const cartSummary = userCart.cart.reduce(
        (summary, item) => {
          const product = products.find((p) => p.id === item.productId);
          if (product) {
            summary.totalItems += Number(item.quantity);
            summary.totalCost += product.price * item.quantity;
          }
          return summary;
        },
        { totalItems: 0, totalCost: 0 }
      );

      res.json({
        ...cartSummary,
        success: true,
      });
    });
  });
});
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

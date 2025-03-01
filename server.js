// // const express = require("express");
// // const mongoose = require("mongoose");
// // const bcrypt = require("bcryptjs");
// // const jwt = require("jsonwebtoken");
// // const cors = require("cors");
// // const stripe = require("stripe")("sk_test_51Qlb4KELRrh4kP62yPoxFQYxG6ujJDlSylJYwCXdrcwvPmJ1qC7eMmwKG8XId5obHsSM7bTaCeFgFAELaat1MvgO00uKPuGp8Z"); // Replace with your Stripe Secret Key
// // const User = require("./models/User");

// // const app = express();
// // app.use(express.json()); // To parse JSON requests
// // app.use(cors()); // To enable CORS
// // app.use(express.static("public")); // To serve static files

// // // ✅ **Connect to MongoDB Atlas** (Replace with your MongoDB URI)
// // mongoose.connect("mongodb+srv://am22abdullahmohammed:ABDullah2405@cluster0.wket6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// // })
// // .then(() => console.log("✅ MongoDB Connected"))
// // .catch(err => console.log("❌ MongoDB Connection Error:", err));

// // /* ==============================
// //    ✅ Signup Route (User Registration)
// // ============================== */
// // app.post("/signup", async (req, res) => {
// //     try {
// //         const { email, password } = req.body;

// //         // Check if user already exists
// //         const existingUser = await User.findOne({ email });
// //         if (existingUser) return res.status(400).json({ message: "User already exists" });

// //         // Hash the password before saving
// //         const hashedPassword = await bcrypt.hash(password, 10);
// //         const newUser = new User({ email, password: hashedPassword });
// //         await newUser.save();

// //         res.status(201).json({ message: "User created successfully" });
// //     } catch (error) {
// //         res.status(500).json({ error: error.message });
// //     }
// // });

// // /* ==============================
// //    ✅ Login Route (User Authentication)
// // ============================== */
// // app.post("/login", async (req, res) => {
// //     try {
// //         const { email, password } = req.body;

// //         // Find user in the database
// //         const user = await User.findOne({ email });
// //         if (!user) return res.status(400).json({ message: "User not found" });

// //         // Compare the hashed password
// //         const isMatch = await bcrypt.compare(password, user.password);
// //         if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

// //         // Generate a JWT token
// //         const token = jwt.sign({ id: user._id }, "your_secret_key", { expiresIn: "1h" });

// //         res.json({ message: "Login successful", token });
// //     } catch (error) {
// //         res.status(500).json({ error: error.message });
// //     }
// // });

// // /* ==============================
// //    ✅ Profile Route (Get User Profile)
// // ============================== */
// // app.get("/profile", async (req, res) => {
// //     const token = req.header("Authorization")?.split(" ")[1]; // Extract token from Authorization header
// //     if (!token) return res.status(403).json({ message: "Access denied, no token provided" });

// //     try {
// //         const decoded = jwt.verify(token, "your_secret_key"); // Decode token using secret key
// //         const user = await User.findById(decoded.id); // Find the user by decoded ID
// //         if (!user) return res.status(400).json({ message: "User not found" });

// //         // Return the user's email (never return the password)
// //         res.json({ email: user.email });
// //     } catch (error) {
// //         res.status(400).json({ message: "Invalid or expired token" });
// //     }
// // });

// // /* ==============================
// //    ✅ Stripe Payment Integration
// // ============================== */
// // app.post("/create-checkout-session", async (req, res) => {
// //     const { price, quantity } = req.body; // Receive price and quantity from frontend

// //     // Validate inputs
// //     if (!price || !quantity || quantity <= 0) {
// //         return res.status(400).json({ error: "Invalid price or quantity" });
// //     }

// //     try {
// //         const session = await stripe.checkout.sessions.create({
// //             payment_method_types: ["card"], // Accept card payments
// //             line_items: [
// //                 {
// //                     price_data: {
// //                         currency: "usd", // Payment currency
// //                         product_data: {
// //                             name: "CapShop Product", // Product name
// //                         },
// //                         unit_amount: Math.round(price * 100), // Convert price to cents
// //                     },
// //                     quantity: quantity, // Quantity from frontend
// //                 },
// //             ],
// //             mode: "payment", // One-time payment mode
// //             success_url: "http://localhost:3000/success.html", // Redirect after success
// //             cancel_url: "http://localhost:3000/cancel.html", // Redirect after cancellation
// //         });

// //         res.json({ id: session.id }); // Send session ID back to frontend
// //     } catch (error) {
// //         console.error("Error creating Stripe session:", error);
// //         res.status(500).json({ error: error.message }); // Handle errors
// //     }
// // });

// // // ✅ **Start the Server**
// // app.listen(3000, () => {
// //     console.log("Server is running on http://localhost:3000");
// // });


// const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const cors = require("cors");
// const stripe = require("stripe")(""); // Replace with your Stripe Secret Key
// const User = require("./models/User");

// const app = express();
// app.use(express.json()); // To parse JSON requests
// app.use(cors()); // To enable CORS
// app.use(express.static("public")); // To serve static files

// // ✅ **Connect to MongoDB Atlas** (Replace with your MongoDB URI)
// mongoose.connect("mongodb+srv://am22abdullahmohammed:ABDullah2405@cluster0.wket6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch(err => console.log("❌ MongoDB Connection Error:", err));

// /* ==============================
//    ✅ Signup Route (User Registration)
// ============================== */
// app.post("/signup", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Check if user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) return res.status(400).json({ message: "User already exists" });

//         // Hash the password before saving
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = new User({ email, password: hashedPassword });
//         await newUser.save();

//         res.status(201).json({ message: "User created successfully" });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// /* ==============================
//    ✅ Login Route (User Authentication)
// ============================== */
// app.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Find user in the database
//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ message: "User not found" });

//         // Compare the hashed password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//         // Generate a JWT token
//         const token = jwt.sign({ id: user._id }, "your_secret_key", { expiresIn: "1h" });

//         res.json({ message: "Login successful", token });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// /* ==============================
//    ✅ Profile Route (Get User Profile)
// ============================== */
// app.get("/profile", async (req, res) => {
//     const token = req.header("Authorization")?.split(" ")[1]; // Extract token from Authorization header
//     if (!token) return res.status(403).json({ message: "Access denied, no token provided" });

//     try {
//         const decoded = jwt.verify(token, "your_secret_key"); // Decode token using secret key
//         const user = await User.findById(decoded.id); // Find the user by decoded ID
//         if (!user) return res.status(400).json({ message: "User not found" });

//         // Return the user's email (never return the password)
//         res.json({ email: user.email });
//     } catch (error) {
//         res.status(400).json({ message: "Invalid or expired token" });
//     }
// });

// /* ==============================
//    ✅ Stripe Payment Integration
// ============================== */
// app.post("/create-checkout-session", async (req, res) => {
//     const { price, quantity } = req.body; // Receive price and quantity from frontend

//     // Validate inputs
//     if (!price || !quantity || quantity <= 0) {
//         return res.status(400).json({ error: "Invalid price or quantity" });
//     }

//     try {
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ["card"], // Accept card payments
//             line_items: [
//                 {
//                     price_data: {
//                         currency: "usd", // Payment currency
//                         product_data: {
//                             name: "CapShop Product", // Product name
//                         },
//                         unit_amount: Math.round(price * 100), // Convert price to cents
//                     },
//                     quantity: quantity, // Quantity from frontend
//                 },
//             ],
//             mode: "payment", // One-time payment mode
//             success_url: "http://localhost:3000/success.html", // Redirect after success
//             cancel_url: "http://localhost:3000/cancel.html", // Redirect after cancellation
//         });

//         res.json({ id: session.id }); // Send session ID back to frontend
//     } catch (error) {
//         console.error("Error creating Stripe session:", error);
//         res.status(500).json({ error: error.message }); // Handle errors
//     }
// });

// // ✅ **Start the Server**
// app.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");
// });


// const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const cors = require("cors");
// const stripe = require("stripe")("sk_test_51Qlb4KELRrh4kP62yPoxFQYxG6ujJDlSylJYwCXdrcwvPmJ1qC7eMmwKG8XId5obHsSM7bTaCeFgFAELaat1MvgO00uKPuGp8Z"); // Replace with your Stripe Secret Key
// const User = require("./models/User");

// const app = express();
// app.use(express.json()); // To parse JSON requests
// app.use(cors()); // To enable CORS
// app.use(express.static("public")); // To serve static files

// // ✅ **Connect to MongoDB Atlas** (Replace with your MongoDB URI)
// mongoose.connect("mongodb+srv://am22abdullahmohammed:ABDullah2405@cluster0.wket6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch(err => console.log("❌ MongoDB Connection Error:", err));

// /* ==============================
//    ✅ Signup Route (User Registration)
// ============================== */
// app.post("/signup", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Check if user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) return res.status(400).json({ message: "User already exists" });

//         // Hash the password before saving
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = new User({ email, password: hashedPassword });
//         await newUser.save();

//         res.status(201).json({ message: "User created successfully" });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// /* ==============================
//    ✅ Login Route (User Authentication)
// ============================== */
// app.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Find user in the database
//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ message: "User not found" });

//         // Compare the hashed password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//         // Generate a JWT token
//         const token = jwt.sign({ id: user._id }, "your_secret_key", { expiresIn: "1h" });

//         res.json({ message: "Login successful", token });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// /* ==============================
//    ✅ Profile Route (Get User Profile)
// ============================== */
// app.get("/profile", async (req, res) => {
//     const token = req.header("Authorization")?.split(" ")[1]; // Extract token from Authorization header
//     if (!token) return res.status(403).json({ message: "Access denied, no token provided" });

//     try {
//         const decoded = jwt.verify(token, "your_secret_key"); // Decode token using secret key
//         const user = await User.findById(decoded.id); // Find the user by decoded ID
//         if (!user) return res.status(400).json({ message: "User not found" });

//         // Return the user's email (never return the password)
//         res.json({ email: user.email });
//     } catch (error) {
//         res.status(400).json({ message: "Invalid or expired token" });
//     }
// });


// /* ==============================
//    ✅ Stripe Payment Integration
// ============================== */
// app.post("/create-checkout-session", async (req, res) => {
//     const { price, quantity } = req.body; // Receive price and quantity from frontend

//     // Validate inputs
//     if (!price || !quantity || quantity <= 0) {
//         return res.status(400).json({ error: "Invalid price or quantity" });
//     }

//     try {
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ["card"], // Accept card payments
//             line_items: [
//                 {
//                     price_data: {
//                         currency: "usd", // Payment currency
//                         product_data: {
//                             name: "CapShop Product", // Product name
//                         },
//                         unit_amount: Math.round(price * 100), // Convert price to cents
//                     },
//                     quantity: quantity, // Quantity from frontend
//                 },
//             ],
//             mode: "payment", // One-time payment mode
//             success_url: "http://localhost:3000/success.html", // Redirect after success
//             cancel_url: "http://localhost:3000/cancel.html", // Redirect after cancellation
//         });

//         res.json({ id: session.id }); // Send session ID back to frontend
//     } catch (error) {
//         console.error("Error creating Stripe session:", error);
//         res.status(500).json({ error: error.message }); // Handle errors
//     }
// });

// // ✅ **Start the Server**
// app.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");
// });



// const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const cors = require("cors");
// const stripe = require("stripe")("sk_test_51Qlb4KELRrh4kP62yPoxFQYxG6ujJDlSylJYwCXdrcwvPmJ1qC7eMmwKG8XId5obHsSM7bTaCeFgFAELaat1MvgO00uKPuGp8Z"); // Replace with your Stripe Secret Key
// const User = require("./models/User");

// const app = express();
// app.use(express.json()); // To parse JSON requests
// app.use(cors()); // To enable CORS
// app.use(express.static("public")); // To serve static files

// // ✅ **Connect to MongoDB Atlas** (Replace with your MongoDB URI)
// mongoose.connect("mongodb+srv://am22abdullahmohammed:ABDullah2405@cluster0.wket6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch(err => console.log("❌ MongoDB Connection Error:", err));

// /* ==============================
//    ✅ Signup Route (User Registration)
// ============================== */
// app.post("/signup", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Check if user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) return res.status(400).json({ message: "User already exists" });

//         // Hash the password before saving
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = new User({ email, password: hashedPassword });
//         await newUser.save();

//         res.status(201).json({ message: "User created successfully" });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// /* ==============================
//    ✅ Login Route (User Authentication)
// ============================== */
// app.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Find user in the database
//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ message: "User not found" });

//         // Compare the hashed password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//         // Generate a JWT token
//         const token = jwt.sign({ id: user._id }, "your_secret_key", { expiresIn: "1h" });

//         res.json({ message: "Login successful", token });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// /* ==============================
//    ✅ Stripe Payment Integration
// ============================== */
// app.post("/create-checkout-session", async (req, res) => {
//     const { price, quantity } = req.body; // Receive price and quantity from frontend

//     // Validate inputs
//     if (!price || !quantity || quantity <= 0) {
//         return res.status(400).json({ error: "Invalid price or quantity" });
//     }

//     try {
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ["card"], // Accept card payments
//             line_items: [
//                 {
//                     price_data: {
//                         currency: "usd", // Payment currency
//                         product_data: {
//                             name: "CapShop Product", // Product name
//                         },
//                         unit_amount: Math.round(price * 100), // Convert price to cents
//                     },
//                     quantity: quantity, // Quantity from frontend
//                 },
//             ],
//             mode: "payment", // One-time payment mode
//             success_url: "http://localhost:3000/success.html", // Redirect after success
//             cancel_url: "http://localhost:3000/cancel.html", // Redirect after cancellation
//         });

//         res.json({ id: session.id }); // Send session ID back to frontend
//     } catch (error) {
//         console.error("Error creating Stripe session:", error);
//         res.status(500).json({ error: error.message }); // Handle errors
//     }
// });

// // ✅ **Start the Server**
// app.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");
// });


// const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const cors = require("cors");
// const stripe = require("stripe")("sk_test_51Qlb4KELRrh4kP62yPoxFQYxG6ujJDlSylJYwCXdrcwvPmJ1qC7eMmwKG8XId5obHsSM7bTaCeFgFAELaat1MvgO00uKPuGp8Z"); // Replace with your Stripe Secret Key
// const User = require("./models/User");

// const app = express();
// app.use(express.json()); // To parse JSON requests
// app.use(cors()); // To enable CORS
// app.use(express.static("public")); // To serve static files

// // ✅ **Connect to MongoDB Atlas** (Replace with your MongoDB URI)
// mongoose.connect("mongodb+srv://am22abdullahmohammed:ABDullah2405@cluster0.wket6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch(err => console.log("❌ MongoDB Connection Error:", err));

// /* ==============================
//    ✅ Signup Route (User Registration)
// ============================== */
// app.post("/signup", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Check if user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) return res.status(400).json({ message: "User already exists" });

//         // Hash the password before saving
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = new User({ email, password: hashedPassword });
//         await newUser.save();

//         res.status(201).json({ message: "User created successfully" });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// /* ==============================
//    ✅ Login Route (User Authentication)
// ============================== */
// app.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Find user in the database
//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ message: "User not found" });

//         // Compare the hashed password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//         // Generate a JWT token
//         const token = jwt.sign({ id: user._id }, "your_secret_key", { expiresIn: "1h" });

//         res.json({ message: "Login successful", token });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// /* ==============================
//    ✅ Stripe Payment Integration
// ============================== */
// app.post("/create-checkout-session", async (req, res) => {
//     const { price, quantity } = req.body; // Receive price and quantity from frontend

//     // Validate inputs
//     if (!price || !quantity || quantity <= 0) {
//         return res.status(400).json({ error: "Invalid price or quantity" });
//     }

//     try {
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ["card"], // Accept card payments
//             line_items: [
//                 {
//                     price_data: {
//                         currency: "usd", // Payment currency
//                         product_data: {
//                             name: "CapShop Product", // Product name
//                         },
//                         unit_amount: Math.round(price * 100), // Convert price to cents
//                     },
//                     quantity: quantity, // Quantity from frontend
//                 },
//             ],
//             mode: "payment", // One-time payment mode
//             success_url: "http://localhost:3000/success.html", // Redirect after success
//             cancel_url: "http://localhost:3000/cancel.html", // Redirect after cancellation
//         });

//         res.json({ id: session.id }); // Send session ID back to frontend
//     } catch (error) {
//         console.error("Error creating Stripe session:", error);
//         res.status(500).json({ error: error.message }); // Handle errors
//     }
// });

// /* ==============================
//    ✅ Profile Route (User Profile)
// ============================== */
// app.get("/profile", async (req, res) => {
//     const token = req.headers["authorization"]?.split(" ")[1]; // Extract token from Authorization header
    
//     if (!token) {
//         return res.status(401).json({ message: "Authentication required" });
//     }

//     try {
//         // Verify the JWT token
//         const decoded = jwt.verify(token, "your_secret_key");
        
//         // Find the user based on the decoded token's user ID
//         const user = await User.findById(decoded.id).select("email"); // Only return email for now

//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         res.json({ message: "User profile", user: { email: user.email } });
//     } catch (error) {
//         res.status(401).json({ message: "Invalid or expired token" });
//     }
// });

// // ✅ **Start the Server**
// app.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");
// });

// const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const cors = require("cors");
// const stripe = require("stripe")("sk_test_51Qlb4KELRrh4kP62yPoxFQYxG6ujJDlSylJYwCXdrcwvPmJ1qC7eMmwKG8XId5obHsSM7bTaCeFgFAELaat1MvgO00uKPuGp8Z"); // Replace with your Stripe Secret Key
// const User = require("./models/User");

// const app = express();
// app.use(express.json()); // To parse JSON requests
// app.use(cors()); // To enable CORS
// app.use(express.static("public")); // To serve static files

// // ✅ **Connect to MongoDB Atlas** (Replace with your MongoDB URI)
// mongoose.connect("mongodb+srv://am22abdullahmohammed:ABDullah2405@cluster0.wket6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch(err => console.log("❌ MongoDB Connection Error:", err));

// /* ==============================
//    ✅ Signup Route (User Registration)
// ============================== */
// app.post("/signup", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Check if user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) return res.status(400).json({ message: "User already exists" });

//         // Hash the password before saving
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = new User({ email, password: hashedPassword });
//         await newUser.save();

//         res.status(201).json({ message: "User created successfully" });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// /* ==============================
//    ✅ Login Route (User Authentication)
// ============================== */
// app.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Find user in the database
//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ message: "User not found" });

//         // Compare the hashed password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//         // Generate a JWT token
//         const token = jwt.sign({ id: user._id }, "your_secret_key", { expiresIn: "1h" });

//         res.json({ message: "Login successful", token });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// /* ==============================
//    ✅ Stripe Payment Integration
// ============================== */
// app.post("/create-checkout-session", async (req, res) => {
//     const { price, quantity } = req.body; // Receive price and quantity from frontend

//     // Validate inputs
//     if (!price || !quantity || quantity <= 0) {
//         return res.status(400).json({ error: "Invalid price or quantity" });
//     }

//     try {
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ["card"], // Accept card payments
//             line_items: [
//                 {
//                     price_data: {
//                         currency: "usd", // Payment currency
//                         product_data: {
//                             name: "CapShop Product", // Product name
//                         },
//                         unit_amount: Math.round(price * 100), // Convert price to cents
//                     },
//                     quantity: quantity, // Quantity from frontend
//                 },
//             ],
//             mode: "payment", // One-time payment mode
//             success_url: "http://localhost:3000/success.html", // Redirect after success
//             cancel_url: "http://localhost:3000/cancel.html", // Redirect after cancellation
//         });

//         res.json({ id: session.id }); // Send session ID back to frontend
//     } catch (error) {
//         console.error("Error creating Stripe session:", error);
//         res.status(500).json({ error: error.message }); // Handle errors
//     }
// });

// /* ==============================
//    ✅ Profile Route (User Profile)
// ============================== */
// app.get("/profile", async (req, res) => {
//     const token = req.headers["authorization"]?.split(" ")[1]; // Extract token from Authorization header
    
//     if (!token) {
//         return res.status(401).json({ message: "Authentication required" });
//     }

//     try {
//         // Verify the JWT token
//         const decoded = jwt.verify(token, "your_secret_key");
        
//         // Find the user based on the decoded token's user ID
//         const user = await User.findById(decoded.id).select("email"); // Only return email for now

//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         res.json({ message: "User profile", user: { email: user.email } });
//     } catch (error) {
//         res.status(401).json({ message: "Invalid or expired token" });
//     }
// });

// // ✅ **Start the Server**
// app.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");
// });



// const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const cors = require("cors");
// const stripe = require("stripe")("sk_test_51Qlb4KELRrh4kP62yPoxFQYxG6ujJDlSylJYwCXdrcwvPmJ1qC7eMmwKG8XId5obHsSM7bTaCeFgFAELaat1MvgO00uKPuGp8Z"); // Replace with your Stripe Secret Key
// const User = require("./models/User");

// const app = express();
// app.use(express.json()); // To parse JSON requests
// app.use(cors()); // To enable CORS
// app.use(express.static("public")); // To serve static files

// // ✅ **Connect to MongoDB Atlas** (Replace with your MongoDB URI)
// mongoose.connect("mongodb+srv://am22abdullahmohammed:ABDullah2405@cluster0.wket6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch(err => console.log("❌ MongoDB Connection Error:", err));

// /* ==============================
//    ✅ Signup Route (User Registration)
// ============================== */
// app.post("/signup", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Check if user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) return res.status(400).json({ message: "User already exists" });

//         // Hash the password before saving
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = new User({ email, password: hashedPassword });
//         await newUser.save();

//         res.status(201).json({ message: "User created successfully" });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// /* ==============================
//    ✅ Login Route (User Authentication)
// ============================== */
// app.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Find user in the database
//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ message: "User not found" });

//         // Compare the hashed password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//         // Generate a JWT token
//         const token = jwt.sign({ id: user._id }, "your_secret_key", { expiresIn: "1h" });

//         res.json({ message: "Login successful", token });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// /* ==============================
//    ✅ Stripe Payment Integration
// ============================== */
// app.post("/create-checkout-session", async (req, res) => {
//     const { price, quantity } = req.body; // Receive price and quantity from frontend

//     // Validate inputs
//     if (!price || !quantity || quantity <= 0) {
//         return res.status(400).json({ error: "Invalid price or quantity" });
//     }

//     try {
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ["card"], // Accept card payments
//             line_items: [
//                 {
//                     price_data: {
//                         currency: "usd", // Payment currency
//                         product_data: {
//                             name: "CapShop Product", // Product name
//                         },
//                         unit_amount: Math.round(price * 100), // Convert price to cents
//                     },
//                     quantity: quantity, // Quantity from frontend
//                 },
//             ],
//             mode: "payment", // One-time payment mode
//             success_url: "http://localhost:3000/success.html", // Redirect after success
//             cancel_url: "http://localhost:3000/cancel.html", // Redirect after cancellation
//         });

//         res.json({ id: session.id }); // Send session ID back to frontend
//     } catch (error) {
//         console.error("Error creating Stripe session:", error);
//         res.status(500).json({ error: error.message }); // Handle errors
//     }
// });

// // ✅ **Start the Server**
// app.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");
// });

// const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const cors = require("cors");
// const stripe = require("stripe")("sk_test_51Qlb4KELRrh4kP62yPoxFQYxG6ujJDlSylJYwCXdrcwvPmJ1qC7eMmwKG8XId5obHsSM7bTaCeFgFAELaat1MvgO00uKPuGp8Z"); // Replace with your Stripe Secret Key
// const User = require("./models/User");

// const app = express();
// app.use(express.json()); // To parse JSON requests
// app.use(cors()); // To enable CORS
// app.use(express.static("public")); // To serve static files

// // ✅ **Connect to MongoDB Atlas** (Replace with your MongoDB URI)
// mongoose.connect("mongodb+srv://am22abdullahmohammed:ABDullah2405@cluster0.wket6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch(err => console.log("❌ MongoDB Connection Error:", err));

// /* ==============================
//    ✅ Signup Route (User Registration)
// ============================== */
// app.post("/signup", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Check if user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) return res.status(400).json({ message: "User already exists" });

//         // Hash the password before saving
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = new User({ email, password: hashedPassword });
//         await newUser.save();

//         res.status(201).json({ message: "User created successfully" });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// /* ==============================
//    ✅ Login Route (User Authentication)
// ============================== */
// app.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Find user in the database
//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ message: "User not found" });

//         // Compare the hashed password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//         // Generate a JWT token
//         const token = jwt.sign({ id: user._id }, "your_secret_key", { expiresIn: "1h" });

//         res.json({ message: "Login successful", token });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// /* ==============================
//    ✅ Stripe Payment Integration
// ============================== */
// app.post("/create-checkout-session", async (req, res) => {
//     const { price, quantity } = req.body; // Receive price and quantity from frontend

//     // Validate inputs
//     if (!price || !quantity || quantity <= 0) {
//         return res.status(400).json({ error: "Invalid price or quantity" });
//     }

//     try {
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ["card"], // Accept card payments
//             line_items: [
//                 {
//                     price_data: {
//                         currency: "usd", // Payment currency
//                         product_data: {
//                             name: "CapShop Product", // Product name
//                         },
//                         unit_amount: Math.round(price * 100), // Convert price to cents
//                     },
//                     quantity: quantity, // Quantity from frontend
//                 },
//             ],
//             mode: "payment", // One-time payment mode
//             success_url: "http://localhost:3000/success.html", // Redirect after success
//             cancel_url: "http://localhost:3000/cancel.html", // Redirect after cancellation
//         });

//         res.json({ id: session.id }); // Send session ID back to frontend
//     } catch (error) {
//         console.error("Error creating Stripe session:", error);
//         res.status(500).json({ error: error.message }); // Handle errors
//     }
// });

// // ✅ Profile Route (User Profile)
// app.get("/profile", async (req, res) => {
//     const token = req.headers["authorization"]?.split(" ")[1]; // Extract token from Authorization header
    
//     if (!token) {
//         return res.status(401).json({ message: "Authentication required" });
//     }

//     try {
//         // Verify the JWT token
//         const decoded = jwt.verify(token, "your_secret_key");
        
//         // Find the user based on the decoded token's user ID
//         const user = await User.findById(decoded.id).select("email password"); // Return email and password

//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         res.json({ message: "User profile", user: { email: user.email, password: user.password } });
//     } catch (error) {
//         res.status(401).json({ message: "Invalid or expired token" });
//     }
// });

// // ✅ **Start the Server**
// app.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");
// });



// Load environment variables from .env file
require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // Replace with your Stripe Secret Key
const User = require("./models/User");

const app = express();
app.use(express.json()); // To parse JSON requests
app.use(cors()); // To enable CORS
app.use(express.static("public")); // To serve static files

// ✅ **Connect to MongoDB Atlas** (Replace with your MongoDB URI)
mongoose.connect("mongodb+srv://am22abdullahmohammed:ABDullah2405@cluster0.wket6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ MongoDB Connection Error:", err));

/* ==============================
   ✅ Signup Route (User Registration)
============================== */
app.post("/signup", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/* ==============================
   ✅ Login Route (User Authentication)
============================== */
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user in the database
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        // Compare the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, "your_secret_key", { expiresIn: "1h" });

        res.json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/* ==============================
   ✅ Stripe Payment Integration
============================== */
app.post("/create-checkout-session", async (req, res) => {
    const { price, quantity } = req.body; // Receive price and quantity from frontend

    // Validate inputs
    if (!price || !quantity || quantity <= 0) {
        return res.status(400).json({ error: "Invalid price or quantity" });
    }

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"], // Accept card payments
            line_items: [
                {
                    price_data: {
                        currency: "usd", // Payment currency
                        product_data: {
                            name: "CapShop Product", // Product name
                        },
                        unit_amount: Math.round(price * 100), // Convert price to cents
                    },
                    quantity: quantity, // Quantity from frontend
                },
            ],
            mode: "payment", // One-time payment mode
            success_url: "http://localhost:3000/success.html", // Redirect after success
            cancel_url: "http://localhost:3000/cancel.html", // Redirect after cancellation
        });

        res.json({ id: session.id }); // Send session ID back to frontend
    } catch (error) {
        console.error("Error creating Stripe session:", error);
        res.status(500).json({ error: error.message }); // Handle errors
    }
});

// ✅ Profile Route (User Profile)
app.get("/profile", async (req, res) => {
    const token = req.headers["authorization"]?.split(" ")[1]; // Extract token from Authorization header
    
    if (!token) {
        return res.status(401).json({ message: "Authentication required" });
    }

    try {
        // Verify the JWT token
        const decoded = jwt.verify(token, "your_secret_key");
        
        // Find the user based on the decoded token's user ID
        const user = await User.findById(decoded.id).select("email password"); // Return email and password

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "User profile", user: { email: user.email, password: user.password } });
    } catch (error) {
        res.status(401).json({ message: "Invalid or expired token" });
    }
});

// ✅ **Start the Server**
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

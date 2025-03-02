

// // // // document.addEventListener("DOMContentLoaded", function () {
// // // //     // ✅ Initialize Stripe
// // // //     const stripe = Stripe("pk_test_51Qlb4KELRrh4kP62DSwQcxyOeKkLSPUPQwiWS3nMP7dprJMkcSrpgX4F87fZtZQSbiV5t4");

// // // //     // ✅ Ensure the loading spinner exists before trying to manipulate it
// // // //     const loadingSpinner = document.querySelector(".loading-spinner");
// // // //     if (!loadingSpinner) {
// // // //         console.warn("Loading spinner not found in the DOM!");
// // // //     }

// // // //     // ✅ Smooth scroll to products section
// // // //     document.querySelector(".hero button").addEventListener("click", function () {
// // // //         const productsSection = document.getElementById("products");
// // // //         productsSection.scrollIntoView({ behavior: "smooth" });
// // // //     });

// // // //     /* ==============================
// // // //        ✅ Login & Signup Functionality
// // // //     =============================== */

// // // //     // ✅ Get Navbar Elements
// // // //     const loginButton = document.getElementById("loginButton");
// // // //     const logoutButton = document.getElementById("logoutButton");

// // // //     // ✅ Get Login/Signup Modal Elements
// // // //     const authModal = document.getElementById("authModal");
// // // //     const closeModal = document.getElementById("closeModal");
// // // //     const authForm = document.getElementById("authForm");
// // // //     const authTitle = document.getElementById("authTitle");
// // // //     const toggleAuth = document.getElementById("toggleAuth");
// // // //     const authErrorMessage = document.getElementById("authErrorMessage");

// // // //     // ✅ Ensure Modal is Fully Hidden on Page Load (Fix Flashing Issue)
// // // //     window.addEventListener("DOMContentLoaded", function () {
// // // //         authModal.style.display = "none";
// // // //         authModal.classList.remove("show");
// // // //     });

// // // //     // ✅ Open Login/Signup Modal ONLY When Clicking "Login/Sign Up"
// // // //     loginButton.addEventListener("click", function (e) {
// // // //         e.preventDefault();
// // // //         authModal.style.display = "flex"; // Make the modal visible
// // // //         authModal.classList.add("show"); // Apply the 'show' class to trigger animation
// // // //         authTitle.innerText = "Login"; // Show Login title by default
// // // //         toggleAuth.innerHTML = `Don't have an account? <a href="#">Sign Up</a>`; // Show "Sign Up" link
// // // //         authForm.reset(); // Reset the form (clear fields)
// // // //     });

// // // //     // ✅ Close Modal on "X" Click
// // // //     closeModal.addEventListener("click", function () {
// // // //         authModal.style.display = "none";
// // // //         authModal.classList.remove("show");
// // // //     });

// // // //     // ✅ Close Modal When Clicking Outside
// // // //     window.addEventListener("click", function (e) {
// // // //         if (e.target === authModal) {
// // // //             authModal.style.display = "none";
// // // //             authModal.classList.remove("show");
// // // //         }
// // // //     });

// // // //     // ✅ Switch Between Login and Sign Up Forms
// // // //     toggleAuth.addEventListener("click", function (e) {
// // // //         e.preventDefault();

// // // //         if (authTitle.innerText === "Login") {
// // // //             authTitle.innerText = "Sign Up"; // Change title to Sign Up
// // // //             toggleAuth.innerHTML = `Already have an account? <a href="#">Login</a>`; // Change toggle link to "Login"
// // // //             authForm.reset(); // Reset fields for Sign Up
// // // //         } else {
// // // //             authTitle.innerText = "Login"; // Change title back to Login
// // // //             toggleAuth.innerHTML = `Don't have an account? <a href="#">Sign Up</a>`; // Change toggle link back to "Sign Up"
// // // //             authForm.reset(); // Reset fields for Login
// // // //         }
// // // //     });

// // // //     // ✅ Handle Form Submission (Login / Sign Up)
// // // //     authForm.addEventListener("submit", async function (e) {
// // // //         e.preventDefault(); // Prevent default form submission

// // // //         const email = document.getElementById("email").value;
// // // //         const password = document.getElementById("password").value;
// // // //         const endpoint = authTitle.innerText === "Login" ? "/login" : "/signup"; // Check whether it's login or signup

// // // //         console.log("Form submitted");
// // // //         console.log("Email: ", email);
// // // //         console.log("Password: ", password);

// // // //         // ✅ Disable button & show spinner
// // // //         const submitButton = authForm.querySelector("button");
// // // //         submitButton.disabled = true;
// // // //         if (loadingSpinner) {
// // // //             loadingSpinner.style.display = "block"; // Show loading spinner
// // // //         }
// // // //         authErrorMessage.style.display = "none"; // Hide old error messages

// // // //         try {
// // // //             // ✅ Make the request to the backend
// // // //             console.log("Making request to endpoint:", endpoint);
// // // //             const response = await fetch(endpoint, {
// // // //                 method: "POST",
// // // //                 headers: { "Content-Type": "application/json" },
// // // //                 body: JSON.stringify({ email, password }), // Send the data to the backend
// // // //             });

// // // //             const data = await response.json();
// // // //             console.log("Response:", data); // Debugging log

// // // //             // ✅ Show error if signup/login fails
// // // //             if (!response.ok) {
// // // //                 authErrorMessage.textContent = data.message || "Invalid email or password!";
// // // //                 authErrorMessage.style.display = "block";
// // // //                 return;
// // // //             }

// // // //             // ✅ Successful login/signup
// // // //             if (authTitle.innerText === "Login") {
// // // //                 localStorage.setItem("token", data.token); // Store the JWT token in localStorage
// // // //                 authModal.style.display = "none"; // Close the modal
// // // //                 authModal.classList.remove("show");
// // // //                 document.body.classList.remove("modal-open");

// // // //                 // Hide login button and show logout button
// // // //                 loginButton.style.display = "none";
// // // //                 logoutButton.style.display = "block";
// // // //             } else {
// // // //                 alert("Signup successful! Please log in.");
// // // //             }
// // // //         } catch (error) {
// // // //             console.error("Auth Error:", error);
// // // //             authErrorMessage.textContent = "Something went wrong. Please try again!";
// // // //             authErrorMessage.style.display = "block";
// // // //         } finally {
// // // //             // ✅ Enable button & hide spinner
// // // //             submitButton.disabled = false;
// // // //             if (loadingSpinner) {
// // // //                 loadingSpinner.style.display = "none"; // Hide loading spinner
// // // //             }
// // // //         }
// // // //     });

// // // //     // ✅ Handle Logout
// // // //     logoutButton.addEventListener("click", function () {
// // // //         localStorage.removeItem("token");

// // // //         // ✅ Reload to update state
// // // //         location.reload();
// // // //     });

// // // //     // ✅ Check If User is Already Logged In (Persist Login)
// // // //     window.addEventListener("load", function () {
// // // //         const token = localStorage.getItem("token");
// // // //         if (token) {
// // // //             loginButton.style.display = "none";
// // // //             logoutButton.style.display = "block";
// // // //         }
// // // //     });

// // // //     // ✅ Toggle Show Password
// // // //     document.getElementById("showPassword").addEventListener("click", function () {
// // // //         const passwordField = document.getElementById("password");
// // // //         if (passwordField.type === "password") {
// // // //             passwordField.type = "text";
// // // //             this.textContent = "🙈";
// // // //         } else {
// // // //             passwordField.type = "password";
// // // //             this.textContent = "👁";
// // // //         }
// // // //     });
// // // // });

// // // document.addEventListener("DOMContentLoaded", function () {
// // //     // ✅ Initialize Stripe
// // //     const stripe = Stripe("pk_test_51Qlb4KELRrh4kP62DSwQcxyOeKkLSPUPQwiWS3nMP7dprJMkcSrpgX4F87fZtZQSbiV5t4");

// // //     // ✅ Ensure the loading spinner exists before trying to manipulate it
// // //     const loadingSpinner = document.querySelector(".loading-spinner");
// // //     if (!loadingSpinner) {
// // //         console.warn("Loading spinner not found in the DOM!");
// // //     }

// // //     // ✅ Smooth scroll to products section
// // //     document.querySelector(".hero button").addEventListener("click", function () {
// // //         const productsSection = document.getElementById("products");
// // //         productsSection.scrollIntoView({ behavior: "smooth" });
// // //     });

// // //     // ✅ Initialize filters
// // //     const products = document.querySelectorAll(".product-card");
// // //     const filterButtons = document.querySelectorAll("#filter-options button");
// // //     const filterOptions = document.getElementById("filter-options");

// // //     // ✅ Ensure filters are hidden initially
// // //     filterOptions.style.display = "none";

// // //     // ✅ Reset all filters
// // //     function resetFilters() {
// // //         filterButtons.forEach((btn) => btn.classList.remove("active"));
// // //         products.forEach((product) => {
// // //             product.style.display = "block";
// // //         });
// // //     }

// // //     // ✅ Toggle filter options
// // //     document.getElementById("show-filters").addEventListener("click", function () {
// // //         if (filterOptions.style.display === "none") {
// // //             filterOptions.style.display = "block";
// // //         } else {
// // //             filterOptions.style.display = "none";
// // //             resetFilters();
// // //         }
// // //     });

// // //     // ✅ Filter products based on selected criteria
// // //     filterButtons.forEach(function (button) {
// // //         button.addEventListener("click", function () {
// // //             document.querySelectorAll(".purchase-details").forEach((details) => {
// // //                 details.style.display = "none";
// // //             });

// // //             const filter = this.getAttribute("data-filter");

// // //             if (this.classList.contains("active")) {
// // //                 resetFilters();
// // //             } else {
// // //                 filterButtons.forEach((btn) => btn.classList.remove("active"));
// // //                 this.classList.add("active");

// // //                 products.forEach(function (product) {
// // //                     const priceText = product.querySelector("p").textContent;
// // //                     const price = parseFloat(priceText.replace("$", ""));
// // //                     const category = product.getAttribute("data-category");

// // //                     if (
// // //                         filter === "all" ||
// // //                         (filter === "men" && category === "men") ||
// // //                         (filter === "women" && category === "women") ||
// // //                         (filter === "low" && price < 20) ||
// // //                         (filter === "mid" && price >= 20 && price <= 30) ||
// // //                         (filter === "high" && price > 30)
// // //                     ) {
// // //                         product.style.display = "block";
// // //                     } else {
// // //                         product.style.display = "none";
// // //                     }
// // //                 });
// // //             }
// // //         });
// // //     });

// // //     // ✅ Show quantity input and confirm button
// // //     document.querySelectorAll(".buy-now").forEach(function (button) {
// // //         button.addEventListener("click", function () {
// // //             const purchaseDetails = this.nextElementSibling;
// // //             document.querySelectorAll(".purchase-details").forEach((details) => {
// // //                 if (details !== purchaseDetails) {
// // //                     details.style.display = "none";
// // //                 }
// // //             });

// // //             if (purchaseDetails.style.display === "block") {
// // //                 purchaseDetails.style.display = "none";
// // //             } else {
// // //                 purchaseDetails.style.display = "block";
// // //             }
// // //         });
// // //     });

// // //     // ✅ Handle confirm purchase functionality
// // //     document.querySelectorAll(".confirm-purchase").forEach(function (button) {
// // //         button.addEventListener("click", function () {
// // //             const productCard = button.closest(".product-card");
// // //             const price = parseFloat(productCard.getAttribute("data-price"));
// // //             const quantity = parseInt(productCard.querySelector(".quantity").value);

// // //             if (isNaN(quantity) || quantity <= 0) {
// // //                 alert("Please enter a valid quantity.");
// // //                 return;
// // //             }

// // //             fetch("/create-checkout-session", {
// // //                 method: "POST",
// // //                 headers: {
// // //                     "Content-Type": "application/json",
// // //                 },
// // //                 body: JSON.stringify({ price, quantity }),
// // //             })
// // //             .then((res) => {
// // //                 if (!res.ok) {
// // //                     throw new Error("Failed to create checkout session.");
// // //                 }
// // //                 return res.json();
// // //             })
// // //             .then((data) => {
// // //                 return stripe.redirectToCheckout({ sessionId: data.id });
// // //             })
// // //             .catch((error) => {
// // //                 console.error("Error:", error);
// // //                 alert("Something went wrong. Please try again.");
// // //             });
// // //         });
// // //     });

// // //     /* ==============================
// // //        ✅ Login & Signup Functionality
// // //     =============================== */

// // //     // ✅ Get Navbar Elements
// // //     const loginButton = document.getElementById("loginButton");
// // //     const logoutButton = document.getElementById("logoutButton");
// // //     const profileButton = document.getElementById("profileButton"); // Profile button

// // //     // ✅ Get Login/Signup Modal Elements
// // //     const authModal = document.getElementById("authModal");
// // //     const closeModal = document.getElementById("closeModal");
// // //     const authForm = document.getElementById("authForm");
// // //     const authTitle = document.getElementById("authTitle");
// // //     const toggleAuth = document.getElementById("toggleAuth");
// // //     const authErrorMessage = document.getElementById("authErrorMessage");

// // //     // ✅ Ensure Modal is Fully Hidden on Page Load (Fix Flashing Issue)
// // //     window.addEventListener("DOMContentLoaded", function () {
// // //         authModal.style.display = "none";
// // //         authModal.classList.remove("show");
// // //     });

// // //     // ✅ Open Login/Signup Modal ONLY When Clicking "Login/Sign Up"
// // //     loginButton.addEventListener("click", function (e) {
// // //         e.preventDefault();
// // //         authModal.style.display = "flex"; // Make the modal visible
// // //         authModal.classList.add("show"); // Apply the 'show' class to trigger animation
// // //         authTitle.innerText = "Login"; // Show Login title by default
// // //         toggleAuth.innerHTML = `Don't have an account? <a href="#">Sign Up</a>`; // Show "Sign Up" link
// // //         authForm.reset(); // Reset the form (clear fields)
// // //     });

// // //     // ✅ Close Modal on "X" Click
// // //     closeModal.addEventListener("click", function () {
// // //         authModal.style.display = "none";
// // //         authModal.classList.remove("show");
// // //     });

// // //     // ✅ Close Modal When Clicking Outside
// // //     window.addEventListener("click", function (e) {
// // //         if (e.target === authModal) {
// // //             authModal.style.display = "none";
// // //             authModal.classList.remove("show");
// // //         }
// // //     });

// // //     // ✅ Switch Between Login and Sign Up Forms
// // //     toggleAuth.addEventListener("click", function (e) {
// // //         e.preventDefault();

// // //         if (authTitle.innerText === "Login") {
// // //             authTitle.innerText = "Sign Up"; // Change title to Sign Up
// // //             toggleAuth.innerHTML = `Already have an account? <a href="#">Login</a>`; // Change toggle link to "Login"
// // //             authForm.reset(); // Reset fields for Sign Up
// // //         } else {
// // //             authTitle.innerText = "Login"; // Change title back to Login
// // //             toggleAuth.innerHTML = `Don't have an account? <a href="#">Sign Up</a>`; // Change toggle link back to "Sign Up"
// // //             authForm.reset(); // Reset fields for Login
// // //         }
// // //     });

// // //     // ✅ Handle Form Submission (Login / Sign Up)
// // //     authForm.addEventListener("submit", async function (e) {
// // //         e.preventDefault(); // Prevent default form submission

// // //         const email = document.getElementById("email").value;
// // //         const password = document.getElementById("password").value;
// // //         const endpoint = authTitle.innerText === "Login" ? "/login" : "/signup"; // Check whether it's login or signup

// // //         // ✅ Disable button & show spinner
// // //         const submitButton = authForm.querySelector("button");
// // //         submitButton.disabled = true;
// // //         if (loadingSpinner) {
// // //             loadingSpinner.style.display = "block"; // Show loading spinner
// // //         }
// // //         authErrorMessage.style.display = "none"; // Hide old error messages

// // //         try {
// // //             // ✅ Make the request to the backend
// // //             const response = await fetch(endpoint, {
// // //                 method: "POST",
// // //                 headers: { "Content-Type": "application/json" },
// // //                 body: JSON.stringify({ email, password }), // Send the data to the backend
// // //             });

// // //             const data = await response.json();

// // //             // ✅ Show error if signup/login fails
// // //             if (!response.ok) {
// // //                 authErrorMessage.textContent = data.message || "Invalid email or password!";
// // //                 authErrorMessage.style.display = "block";
// // //                 return;
// // //             }

// // //             // ✅ Successful login/signup
// // //             if (authTitle.innerText === "Login") {
// // //                 localStorage.setItem("token", data.token); // Store the JWT token in localStorage
// // //                 authModal.style.display = "none"; // Close the modal
// // //                 authModal.classList.remove("show");
// // //                 document.body.classList.remove("modal-open");

// // //                 // Hide login button and show logout button
// // //                 loginButton.style.display = "none";
// // //                 logoutButton.style.display = "block";
// // //                 profileButton.style.display = "block"; // Show Profile Button
// // //             } else {
// // //                 alert("Signup successful! Please log in.");
// // //             }
// // //         } catch (error) {
// // //             console.error("Auth Error:", error);
// // //             authErrorMessage.textContent = "Something went wrong. Please try again!";
// // //             authErrorMessage.style.display = "block";
// // //         } finally {
// // //             // ✅ Enable button & hide spinner
// // //             submitButton.disabled = false;
// // //             if (loadingSpinner) {
// // //                 loadingSpinner.style.display = "none"; // Hide loading spinner
// // //             }
// // //         }
// // //     });

// // //     // ✅ Handle Logout
// // //     logoutButton.addEventListener("click", function () {
// // //         localStorage.removeItem("token");

// // //         // ✅ Reload to update state
// // //         location.reload();
// // //     });

// // //     // ✅ Handle Profile Click (Show User Details)
// // //     profileButton.addEventListener("click", function () {
// // //         const token = localStorage.getItem("token");

// // //         if (!token) {
// // //             alert("Please log in first.");
// // //             return;
// // //         }

// // //         // Fetch user profile data
// // //         fetch("/profile", {
// // //             method: "GET",
// // //             headers: {
// // //                 "Authorization": `Bearer ${token}`, // Send the token in the Authorization header
// // //             },
// // //         })
// // //         .then((response) => response.json())
// // //         .then((data) => {
// // //             if (!data) {
// // //                 alert("Unable to fetch profile data.");
// // //                 return;
// // //             }

// // //             // Populate profile data
// // //             document.getElementById("userEmail").textContent = data.email;
// // //             document.getElementById("userPassword").textContent = "••••••••"; // Never show real password
// // //             document.getElementById("profileSection").style.display = "block";
// // //         })
// // //         .catch((error) => {
// // //             console.error("Error fetching profile:", error);
// // //             alert("Failed to fetch profile data.");
// // //         });
// // //     });

// // //     // ✅ Close Profile Section
// // //     document.getElementById("closeProfile").addEventListener("click", function () {
// // //         document.getElementById("profileSection").style.display = "none";
// // //     });

// // //     // ✅ Check If User is Already Logged In (Persist Login)
// // //     window.addEventListener("load", function () {
// // //         const token = localStorage.getItem("token");
// // //         if (token) {
// // //             loginButton.style.display = "none";
// // //             logoutButton.style.display = "block";
// // //             profileButton.style.display = "block"; // Show Profile Button
// // //         }
// // //     });
// // // });

// // document.addEventListener("DOMContentLoaded", function () {
// //     // ✅ Initialize Stripe
// //     const stripe = Stripe("pk_test_51Qlb4KELRrh4kP62DSwQcxyOeKkLSPUPQwiWS3nMP7dprJMkcSrpgX4F87fZtZQSbiV5t4");

// //     // ✅ Ensure the loading spinner exists before trying to manipulate it
// //     const loadingSpinner = document.querySelector(".loading-spinner");
// //     if (!loadingSpinner) {
// //         console.warn("Loading spinner not found in the DOM!");
// //     }

// //     // ✅ Smooth scroll to products section
// //     document.querySelector(".hero button").addEventListener("click", function () {
// //         const productsSection = document.getElementById("products");
// //         productsSection.scrollIntoView({ behavior: "smooth" });
// //     });

// //     // ✅ Initialize filters
// //     const products = document.querySelectorAll(".product-card");
// //     const filterButtons = document.querySelectorAll("#filter-options button");
// //     const filterOptions = document.getElementById("filter-options");

// //     // ✅ Ensure filters are hidden initially
// //     filterOptions.style.display = "none";

// //     // ✅ Reset all filters
// //     function resetFilters() {
// //         filterButtons.forEach((btn) => btn.classList.remove("active"));
// //         products.forEach((product) => {
// //             product.style.display = "block";
// //         });
// //     }

// //     // ✅ Toggle filter options
// //     document.getElementById("show-filters").addEventListener("click", function () {
// //         if (filterOptions.style.display === "none") {
// //             filterOptions.style.display = "block";
// //         } else {
// //             filterOptions.style.display = "none";
// //             resetFilters();
// //         }
// //     });

// //     // ✅ Filter products based on selected criteria
// //     filterButtons.forEach(function (button) {
// //         button.addEventListener("click", function () {
// //             document.querySelectorAll(".purchase-details").forEach((details) => {
// //                 details.style.display = "none";
// //             });

// //             const filter = this.getAttribute("data-filter");

// //             if (this.classList.contains("active")) {
// //                 resetFilters();
// //             } else {
// //                 filterButtons.forEach((btn) => btn.classList.remove("active"));
// //                 this.classList.add("active");

// //                 products.forEach(function (product) {
// //                     const priceText = product.querySelector("p").textContent;
// //                     const price = parseFloat(priceText.replace("$", ""));
// //                     const category = product.getAttribute("data-category");

// //                     if (
// //                         filter === "all" ||
// //                         (filter === "men" && category === "men") ||
// //                         (filter === "women" && category === "women") ||
// //                         (filter === "low" && price < 20) ||
// //                         (filter === "mid" && price >= 20 && price <= 30) ||
// //                         (filter === "high" && price > 30)
// //                     ) {
// //                         product.style.display = "block";
// //                     } else {
// //                         product.style.display = "none";
// //                     }
// //                 });
// //             }
// //         });
// //     });

// //     // ✅ Show quantity input and confirm button
// //     document.querySelectorAll(".buy-now").forEach(function (button) {
// //         button.addEventListener("click", function () {
// //             const purchaseDetails = this.nextElementSibling;
// //             document.querySelectorAll(".purchase-details").forEach((details) => {
// //                 if (details !== purchaseDetails) {
// //                     details.style.display = "none";
// //                 }
// //             });

// //             if (purchaseDetails.style.display === "block") {
// //                 purchaseDetails.style.display = "none";
// //             } else {
// //                 purchaseDetails.style.display = "block";
// //             }
// //         });
// //     });

// //     // ✅ Handle confirm purchase functionality
// //     document.querySelectorAll(".confirm-purchase").forEach(function (button) {
// //         button.addEventListener("click", function () {
// //             const productCard = button.closest(".product-card");
// //             const price = parseFloat(productCard.getAttribute("data-price"));
// //             const quantity = parseInt(productCard.querySelector(".quantity").value);

// //             if (isNaN(quantity) || quantity <= 0) {
// //                 alert("Please enter a valid quantity.");
// //                 return;
// //             }

// //             fetch("/create-checkout-session", {
// //                 method: "POST",
// //                 headers: {
// //                     "Content-Type": "application/json",
// //                 },
// //                 body: JSON.stringify({ price, quantity }),
// //             })
// //             .then((res) => {
// //                 if (!res.ok) {
// //                     throw new Error("Failed to create checkout session.");
// //                 }
// //                 return res.json();
// //             })
// //             .then((data) => {
// //                 return stripe.redirectToCheckout({ sessionId: data.id });
// //             })
// //             .catch((error) => {
// //                 console.error("Error:", error);
// //                 alert("Something went wrong. Please try again.");
// //             });
// //         });
// //     });

// //     /* ==============================
// //        ✅ Login & Signup Functionality
// //     =============================== */

// //     // ✅ Get Navbar Elements
// //     const loginButton = document.getElementById("loginButton");
// //     const logoutButton = document.getElementById("logoutButton");
// //     const profileButton = document.getElementById("profileButton"); // Profile button

// //     // ✅ Get Login/Signup Modal Elements
// //     const authModal = document.getElementById("authModal");
// //     const closeModal = document.getElementById("closeModal");
// //     const authForm = document.getElementById("authForm");
// //     const authTitle = document.getElementById("authTitle");
// //     const toggleAuth = document.getElementById("toggleAuth");
// //     const authErrorMessage = document.getElementById("authErrorMessage");

// //     // ✅ Ensure Modal is Fully Hidden on Page Load (Fix Flashing Issue)
// //     window.addEventListener("DOMContentLoaded", function () {
// //         authModal.style.display = "none";
// //         authModal.classList.remove("show");
// //     });

// //     // ✅ Open Login/Signup Modal ONLY When Clicking "Login/Sign Up"
// //     loginButton.addEventListener("click", function (e) {
// //         e.preventDefault();
// //         authModal.style.display = "flex"; // Make the modal visible
// //         authModal.classList.add("show"); // Apply the 'show' class to trigger animation
// //         authTitle.innerText = "Login"; // Show Login title by default
// //         toggleAuth.innerHTML = `Don't have an account? <a href="#">Sign Up</a>`; // Show "Sign Up" link
// //         authForm.reset(); // Reset the form (clear fields)
// //     });

// //     // ✅ Close Modal on "X" Click
// //     closeModal.addEventListener("click", function () {
// //         authModal.style.display = "none";
// //         authModal.classList.remove("show");
// //     });

// //     // ✅ Close Modal When Clicking Outside
// //     window.addEventListener("click", function (e) {
// //         if (e.target === authModal) {
// //             authModal.style.display = "none";
// //             authModal.classList.remove("show");
// //         }
// //     });

// //     // ✅ Switch Between Login and Sign Up Forms
// //     toggleAuth.addEventListener("click", function (e) {
// //         e.preventDefault();

// //         if (authTitle.innerText === "Login") {
// //             authTitle.innerText = "Sign Up"; // Change title to Sign Up
// //             toggleAuth.innerHTML = `Already have an account? <a href="#">Login</a>`; // Change toggle link to "Login"
// //             authForm.reset(); // Reset fields for Sign Up
// //         } else {
// //             authTitle.innerText = "Login"; // Change title back to Login
// //             toggleAuth.innerHTML = `Don't have an account? <a href="#">Sign Up</a>`; // Change toggle link back to "Sign Up"
// //             authForm.reset(); // Reset fields for Login
// //         }
// //     });

// //     // ✅ Handle Form Submission (Login / Sign Up)
// //     authForm.addEventListener("submit", async function (e) {
// //         e.preventDefault(); // Prevent default form submission

// //         const email = document.getElementById("email").value;
// //         const password = document.getElementById("password").value;
// //         const endpoint = authTitle.innerText === "Login" ? "/login" : "/signup"; // Check whether it's login or signup

// //         // ✅ Disable button & show spinner
// //         const submitButton = authForm.querySelector("button");
// //         submitButton.disabled = true;
// //         if (loadingSpinner) {
// //             loadingSpinner.style.display = "block"; // Show loading spinner
// //         }
// //         authErrorMessage.style.display = "none"; // Hide old error messages

// //         try {
// //             // ✅ Make the request to the backend
// //             const response = await fetch(endpoint, {
// //                 method: "POST",
// //                 headers: { "Content-Type": "application/json" },
// //                 body: JSON.stringify({ email, password }), // Send the data to the backend
// //             });

// //             const data = await response.json();

// //             // ✅ Show error if signup/login fails
// //             if (!response.ok) {
// //                 authErrorMessage.textContent = data.message || "Invalid email or password!";
// //                 authErrorMessage.style.display = "block";
// //                 return;
// //             }

// //             // ✅ Successful login/signup
// //             if (authTitle.innerText === "Login") {
// //                 localStorage.setItem("token", data.token); // Store the JWT token in localStorage
// //                 authModal.style.display = "none"; // Close the modal
// //                 authModal.classList.remove("show");
// //                 document.body.classList.remove("modal-open");

// //                 // Hide login button and show logout button
// //                 loginButton.style.display = "none";
// //                 logoutButton.style.display = "block";
// //                 profileButton.style.display = "block"; // Show Profile Button
// //             } else {
// //                 alert("Signup successful! Please log in.");
// //             }
// //         } catch (error) {
// //             console.error("Auth Error:", error);
// //             authErrorMessage.textContent = "Something went wrong. Please try again!";
// //             authErrorMessage.style.display = "block";
// //         } finally {
// //             // ✅ Enable button & hide spinner
// //             submitButton.disabled = false;
// //             if (loadingSpinner) {
// //                 loadingSpinner.style.display = "none"; // Hide loading spinner
// //             }
// //         }
// //     });

// //     // ✅ Handle Logout
// //     logoutButton.addEventListener("click", function () {
// //         localStorage.removeItem("token");

// //         // ✅ Reload to update state
// //         location.reload();
// //     });

// //     // ✅ Handle Profile Click (Show User Details)
// //     profileButton.addEventListener("click", function () {
// //         const token = localStorage.getItem("token");

// //         if (!token) {
// //             alert("Please log in first.");
// //             return;
// //         }

// //         // Fetch user profile data
// //         fetch("/profile", {
// //             method: "GET",
// //             headers: {
// //                 "Authorization": `Bearer ${token}`, // Send the token in the Authorization header
// //             },
// //         })
// //         .then((response) => response.json())
// //         .then((data) => {
// //             if (!data) {
// //                 alert("Unable to fetch profile data.");
// //                 return;
// //             }

// //             // Populate profile data
// //             document.getElementById("userEmail").textContent = data.email;
// //             document.getElementById("userPassword").textContent = "••••••••"; // Never show real password
// //             document.getElementById("profileSection").style.display = "block";
// //         })
// //         .catch((error) => {
// //             console.error("Error fetching profile:", error);
// //             alert("Failed to fetch profile data.");
// //         });
// //     });

// //     // ✅ Close Profile Section
// //     document.getElementById("closeProfile").addEventListener("click", function () {
// //         document.getElementById("profileSection").style.display = "none";
// //     });

// //     // ✅ Check If User is Already Logged In (Persist Login)
// //     window.addEventListener("load", function () {
// //         const token = localStorage.getItem("token");
// //         if (token) {
// //             loginButton.style.display = "none";
// //             logoutButton.style.display = "block";
// //             profileButton.style.display = "block"; // Show Profile Button
// //         }
// //     });
// // });

// // //finish..........................................................................................

// document.addEventListener("DOMContentLoaded", function () {
//     // ✅ Initialize Stripe
//     const stripe = Stripe("pk_test_51Qlb4KELRrh4kP62DSwQcxyOeKkLSPUPQwiWS3nMP7dprJMkcSrpgX4F87fZtZQSbiV5t4");

//     // ✅ Ensure the loading spinner exists before trying to manipulate it
//     const loadingSpinner = document.querySelector(".loading-spinner");
//     if (!loadingSpinner) {
//         console.warn("Loading spinner not found in the DOM!");
//     }

//     // ✅ Smooth scroll to products section
//     document.querySelector(".hero button").addEventListener("click", function () {
//         const productsSection = document.getElementById("products");
//         productsSection.scrollIntoView({ behavior: "smooth" });
//     });

//     /* ==============================
//        ✅ Show/Hide Password Functionality
//     =============================== */

//     // Get password input and show/hide password icon
//     const passwordField = document.getElementById("password");
//     const showPasswordBtn = document.getElementById("showPassword");

//    // Toggle password visibility
//     showPasswordBtn.addEventListener("click", function () {
//         if (passwordField.type === "password") {
//             passwordField.type = "text"; // Show password
//             showPasswordBtn.textContent = "🙈"; // Change text to "Hide" (can also use an icon)
//         } else {
//             passwordField.type = "password"; // Hide password
//             showPasswordBtn.textContent = "👁"; // Change text to "Show" (can also use an icon)
//         }
//     });

    

//     // ✅ Initialize filters
//     const products = document.querySelectorAll(".product-card");
//     const filterButtons = document.querySelectorAll("#filter-options button");
//     const filterOptions = document.getElementById("filter-options");

//     // ✅ Ensure filters are hidden initially
//     filterOptions.style.display = "none";

//     // ✅ Reset all filters
//     function resetFilters() {
//         filterButtons.forEach((btn) => btn.classList.remove("active"));
//         products.forEach((product) => {
//             product.style.display = "block";
//         });
//     }

//     // ✅ Toggle filter options
//     document.getElementById("show-filters").addEventListener("click", function () {
//         if (filterOptions.style.display === "none") {
//             filterOptions.style.display = "block";
//         } else {
//             filterOptions.style.display = "none";
//             resetFilters();
//         }
//     });

//     // ✅ Filter products based on selected criteria
//     filterButtons.forEach(function (button) {
//         button.addEventListener("click", function () {
//             document.querySelectorAll(".purchase-details").forEach((details) => {
//                 details.style.display = "none";
//             });

//             const filter = this.getAttribute("data-filter");

//             if (this.classList.contains("active")) {
//                 resetFilters();
//             } else {
//                 filterButtons.forEach((btn) => btn.classList.remove("active"));
//                 this.classList.add("active");

//                 products.forEach(function (product) {
//                     const priceText = product.querySelector("p").textContent;
//                     const price = parseFloat(priceText.replace("$", ""));
//                     const category = product.getAttribute("data-category");

//                     if (
//                         filter === "all" ||
//                         (filter === "men" && category === "men") ||
//                         (filter === "women" && category === "women") ||
//                         (filter === "low" && price < 20) ||
//                         (filter === "mid" && price >= 20 && price <= 30) ||
//                         (filter === "high" && price > 30)
//                     ) {
//                         product.style.display = "block";
//                     } else {
//                         product.style.display = "none";
//                     }
//                 });
//             }
//         });
//     });

//     // ✅ Show quantity input and confirm button
//     document.querySelectorAll(".buy-now").forEach(function (button) {
//         button.addEventListener("click", function () {
//             const purchaseDetails = this.nextElementSibling;
//             document.querySelectorAll(".purchase-details").forEach((details) => {
//                 if (details !== purchaseDetails) {
//                     details.style.display = "none";
//                 }
//             });

//             if (purchaseDetails.style.display === "block") {
//                 purchaseDetails.style.display = "none";
//             } else {
//                 purchaseDetails.style.display = "block";
//             }
//         });
//     });

//     // ✅ Handle confirm purchase functionality
//     document.querySelectorAll(".confirm-purchase").forEach(function (button) {
//         button.addEventListener("click", function () {
//             const productCard = button.closest(".product-card");
//             const price = parseFloat(productCard.getAttribute("data-price"));
//             const quantity = parseInt(productCard.querySelector(".quantity").value);

//             if (isNaN(quantity) || quantity <= 0) {
//                 alert("Please enter a valid quantity.");
//                 return;
//             }

//             fetch("/create-checkout-session", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ price, quantity }),
//             })
//             .then((res) => {
//                 if (!res.ok) {
//                     throw new Error("Failed to create checkout session.");
//                 }
//                 return res.json();
//             })
//             .then((data) => {
//                 return stripe.redirectToCheckout({ sessionId: data.id });
//             })
//             .catch((error) => {
//                 console.error("Error:", error);
//                 alert("Something went wrong. Please try again.");
//             });
//         });
//     });

//     /* ==============================
//        ✅ Login & Signup Functionality
//     =============================== */

//     // ✅ Get Navbar Elements
//     const loginButton = document.getElementById("loginButton");
//     const logoutButton = document.getElementById("logoutButton");
//     const profileButton = document.getElementById("profileButton"); // Profile button

//     // ✅ Get Login/Signup Modal Elements
//     const authModal = document.getElementById("authModal");
//     const closeModal = document.getElementById("closeModal");
//     const authForm = document.getElementById("authForm");
//     const authTitle = document.getElementById("authTitle");
//     const toggleAuth = document.getElementById("toggleAuth");
//     const authErrorMessage = document.getElementById("authErrorMessage");

//     // ✅ Ensure Modal is Fully Hidden on Page Load (Fix Flashing Issue)
//     window.addEventListener("DOMContentLoaded", function () {
//         authModal.style.display = "none";
//         authModal.classList.remove("show");
//     });

//     // ✅ Open Login/Signup Modal ONLY When Clicking "Login/Sign Up"
//     loginButton.addEventListener("click", function (e) {
//         e.preventDefault();
//         authModal.style.display = "flex"; // Make the modal visible
//         authModal.classList.add("show"); // Apply the 'show' class to trigger animation
//         authTitle.innerText = "Login"; // Show Login title by default
//         toggleAuth.innerHTML = `Don't have an account? <a href="#">Sign Up</a>`; // Show "Sign Up" link
//         authForm.reset(); // Reset the form (clear fields)
//     });

//     // ✅ Close Modal on "X" Click
//     closeModal.addEventListener("click", function () {
//         authModal.style.display = "none";
//         authModal.classList.remove("show");
//     });

//     // ✅ Close Modal When Clicking Outside
//     window.addEventListener("click", function (e) {
//         if (e.target === authModal) {
//             authModal.style.display = "none";
//             authModal.classList.remove("show");
//         }
//     });

//     // ✅ Switch Between Login and Sign Up Forms
//     toggleAuth.addEventListener("click", function (e) {
//         e.preventDefault();

//         if (authTitle.innerText === "Login") {
//             authTitle.innerText = "Sign Up"; // Change title to Sign Up
//             toggleAuth.innerHTML = `Already have an account? <a href="#">Login</a>`; // Change toggle link to "Login"
//             authForm.reset(); // Reset fields for Sign Up
//         } else {
//             authTitle.innerText = "Login"; // Change title back to Login
//             toggleAuth.innerHTML = `Don't have an account? <a href="#">Sign Up</a>`; // Change toggle link back to "Sign Up"
//             authForm.reset(); // Reset fields for Login
//         }
//     });

//     // ✅ Handle Form Submission (Login / Sign Up)
//     authForm.addEventListener("submit", async function (e) {
//         e.preventDefault(); // Prevent default form submission

//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;
//         const endpoint = authTitle.innerText === "Login" ? "/login" : "/signup"; // Check whether it's login or signup

//         // ✅ Disable button & show spinner
//         const submitButton = authForm.querySelector("button");
//         submitButton.disabled = true;
//         if (loadingSpinner) {
//             loadingSpinner.style.display = "block"; // Show loading spinner
//         }
//         authErrorMessage.style.display = "none"; // Hide old error messages

//         try {
//             // ✅ Make the request to the backend
//             const response = await fetch(endpoint, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password }), // Send the data to the backend
//             });

//             const data = await response.json();

//             // ✅ Show error if signup/login fails
//             if (!response.ok) {
//                 authErrorMessage.textContent = data.message || "Invalid email or password!";
//                 authErrorMessage.style.display = "block";
//                 return;
//             }

//             // ✅ Successful login/signup
//             if (authTitle.innerText === "Login") {
//                 localStorage.setItem("token", data.token); // Store the JWT token in localStorage
//                 authModal.style.display = "none"; // Close the modal
//                 authModal.classList.remove("show");
//                 document.body.classList.remove("modal-open");

//                 // Hide login button and show logout button
//                 loginButton.style.display = "none";
//                 logoutButton.style.display = "block";
//                 profileButton.style.display = "block"; // Show Profile Button
//             } else {
//                 alert("Signup successful! Please log in.");
//             }
//         } catch (error) {
//             console.error("Auth Error:", error);
//             authErrorMessage.textContent = "Something went wrong. Please try again!";
//             authErrorMessage.style.display = "block";
//         } finally {
//             // ✅ Enable button & hide spinner
//             submitButton.disabled = false;
//             if (loadingSpinner) {
//                 loadingSpinner.style.display = "none"; // Hide loading spinner
//             }
//         }
//     });

//     // ✅ Handle Logout
//     logoutButton.addEventListener("click", function () {
//         localStorage.removeItem("token");

//         // ✅ Reload to update state
//         location.reload();
//     });

//     // ✅ Handle Profile Click (Show User Details)
//     profileButton.addEventListener("click", function () {
//         const token = localStorage.getItem("token");

//         if (!token) {
//             alert("Please log in first.");
//             return;
//         }

//         // Redirect to profile page
//         window.location.href = "profile.html"; // Profile page navigation
//     });

//     // ✅ Check If User is Already Logged In (Persist Login)
//     window.addEventListener("load", function () {
//         const token = localStorage.getItem("token");
//         if (token) {
//             loginButton.style.display = "none";
//             logoutButton.style.display = "block";
//             profileButton.style.display = "block"; // Show Profile Button
//         }
//     });
// });

// //finish..........................................................................................

// document.addEventListener("DOMContentLoaded", function () {
//     // ✅ Initialize Stripe
//     const stripe = Stripe("pk_test_51Qlb4KELRrh4kP62DSwQcxyOeKkLSPUPQwiWS3nMP7dprJMkcSrpgX4F87fZtZQSbiV5t4");

//     // ✅ Ensure the loading spinner exists before trying to manipulate it
//     const loadingSpinner = document.querySelector(".loading-spinner");
//     if (!loadingSpinner) {
//         console.warn("Loading spinner not found in the DOM!");
//     }

//     // ✅ Smooth scroll to products section
//     document.querySelector(".hero button").addEventListener("click", function () {
//         const productsSection = document.getElementById("products");
//         productsSection.scrollIntoView({ behavior: "smooth" });
//     });

//     /* ==============================
//        ✅ Show/Hide Password Functionality
//     =============================== */

//     // Get password input and show/hide password icon
//     const passwordField = document.getElementById("password");
//     const showPasswordBtn = document.getElementById("showPassword");

//     // Toggle password visibility
//     showPasswordBtn.addEventListener("click", function () {
//         if (passwordField.type === "password") {
//             passwordField.type = "text"; // Show password
//             showPasswordBtn.textContent = "🙈"; // Change text to "Hide" (can also use an icon)
//         } else {
//             passwordField.type = "password"; // Hide password
//             showPasswordBtn.textContent = "👁"; // Change text to "Show" (can also use an icon)
//         }
//     });

//     // ✅ Initialize filters
//     const products = document.querySelectorAll(".product-card");
//     const filterButtons = document.querySelectorAll("#filter-options button");
//     const filterOptions = document.getElementById("filter-options");

//     // ✅ Ensure filters are hidden initially
//     filterOptions.style.display = "none";

//     // ✅ Reset all filters
//     function resetFilters() {
//         filterButtons.forEach((btn) => btn.classList.remove("active"));
//         products.forEach((product) => {
//             product.style.display = "block";
//         });
//     }

//     // ✅ Toggle filter options
//     document.getElementById("show-filters").addEventListener("click", function () {
//         if (filterOptions.style.display === "none") {
//             filterOptions.style.display = "block";
//         } else {
//             filterOptions.style.display = "none";
//             resetFilters();
//         }
//     });

//     // ✅ Filter products based on selected criteria
//     filterButtons.forEach(function (button) {
//         button.addEventListener("click", function () {
//             document.querySelectorAll(".purchase-details").forEach((details) => {
//                 details.style.display = "none";
//             });

//             const filter = this.getAttribute("data-filter");

//             if (this.classList.contains("active")) {
//                 resetFilters();
//             } else {
//                 filterButtons.forEach((btn) => btn.classList.remove("active"));
//                 this.classList.add("active");

//                 products.forEach(function (product) {
//                     const priceText = product.querySelector("p").textContent;
//                     const price = parseFloat(priceText.replace("$", ""));
//                     const category = product.getAttribute("data-category");

//                     if (
//                         filter === "all" ||
//                         (filter === "men" && category === "men") ||
//                         (filter === "women" && category === "women") ||
//                         (filter === "low" && price < 20) ||
//                         (filter === "mid" && price >= 20 && price <= 30) ||
//                         (filter === "high" && price > 30)
//                     ) {
//                         product.style.display = "block";
//                     } else {
//                         product.style.display = "none";
//                     }
//                 });
//             }
//         });
//     });

//     // ✅ Show quantity input and confirm button
//     document.querySelectorAll(".buy-now").forEach(function (button) {
//         button.addEventListener("click", function () {
//             const purchaseDetails = this.nextElementSibling;
//             document.querySelectorAll(".purchase-details").forEach((details) => {
//                 if (details !== purchaseDetails) {
//                     details.style.display = "none";
//                 }
//             });

//             if (purchaseDetails.style.display === "block") {
//                 purchaseDetails.style.display = "none";
//             } else {
//                 purchaseDetails.style.display = "block";
//             }
//         });
//     });

//     // ✅ Handle confirm purchase functionality
//     document.querySelectorAll(".confirm-purchase").forEach(function (button) {
//         button.addEventListener("click", function () {
//             const productCard = button.closest(".product-card");
//             const price = parseFloat(productCard.getAttribute("data-price"));
//             const quantity = parseInt(productCard.querySelector(".quantity").value);

//             if (isNaN(quantity) || quantity <= 0) {
//                 alert("Please enter a valid quantity.");
//                 return;
//             }

//             fetch("/create-checkout-session", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ price, quantity }),
//             })
//             .then((res) => {
//                 if (!res.ok) {
//                     throw new Error("Failed to create checkout session.");
//                 }
//                 return res.json();
//             })
//             .then((data) => {
//                 return stripe.redirectToCheckout({ sessionId: data.id });
//             })
//             .catch((error) => {
//                 console.error("Error:", error);
//                 alert("Something went wrong. Please try again.");
//             });
//         });
//     });

//     /* ==============================
//        ✅ Login & Signup Functionality
//     =============================== */

//     // ✅ Get Navbar Elements
//     const loginButton = document.getElementById("loginButton");
//     const logoutButton = document.getElementById("logoutButton");
//     const profileButton = document.getElementById("profileButton"); // Profile button

//     // ✅ Get Login/Signup Modal Elements
//     const authModal = document.getElementById("authModal");
//     const closeModal = document.getElementById("closeModal");
//     const authForm = document.getElementById("authForm");
//     const authTitle = document.getElementById("authTitle");
//     const toggleAuth = document.getElementById("toggleAuth");
//     const authErrorMessage = document.getElementById("authErrorMessage");

//     // ✅ Ensure Modal is Fully Hidden on Page Load (Fix Flashing Issue)
//     window.addEventListener("DOMContentLoaded", function () {
//         authModal.style.display = "none";
//         authModal.classList.remove("show");
//     });

//     // ✅ Open Login/Signup Modal ONLY When Clicking "Login/Sign Up"
//     loginButton.addEventListener("click", function (e) {
//         e.preventDefault();
//         authModal.style.display = "flex"; // Make the modal visible
//         authModal.classList.add("show"); // Apply the 'show' class to trigger animation
//         authTitle.innerText = "Login"; // Show Login title by default
//         toggleAuth.innerHTML = `Don't have an account? <a href="#">Sign Up</a>`; // Show "Sign Up" link
//         authForm.reset(); // Reset the form (clear fields)
//     });

//     // ✅ Close Modal on "X" Click
//     closeModal.addEventListener("click", function () {
//         authModal.style.display = "none";
//         authModal.classList.remove("show");
//     });

//     // ✅ Close Modal When Clicking Outside
//     window.addEventListener("click", function (e) {
//         if (e.target === authModal) {
//             authModal.style.display = "none";
//             authModal.classList.remove("show");
//         }
//     });

//     // ✅ Switch Between Login and Sign Up Forms
//     toggleAuth.addEventListener("click", function (e) {
//         e.preventDefault();

//         if (authTitle.innerText === "Login") {
//             authTitle.innerText = "Sign Up"; // Change title to Sign Up
//             toggleAuth.innerHTML = `Already have an account? <a href="#">Login</a>`; // Change toggle link to "Login"
//             authForm.reset(); // Reset fields for Sign Up
//         } else {
//             authTitle.innerText = "Login"; // Change title back to Login
//             toggleAuth.innerHTML = `Don't have an account? <a href="#">Sign Up</a>`; // Change toggle link back to "Sign Up"
//             authForm.reset(); // Reset fields for Login
//         }
//     });

//     // ✅ Handle Form Submission (Login / Sign Up)
//     authForm.addEventListener("submit", async function (e) {
//         e.preventDefault(); // Prevent default form submission

//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;
//         const endpoint = authTitle.innerText === "Login" ? "/login" : "/signup"; // Check whether it's login or signup

//         try {
//             const response = await fetch(endpoint, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password }),
//             });

//             const data = await response.json();

//             if (!response.ok) {
//                 authErrorMessage.textContent = data.message || "Invalid email or password!";
//                 authErrorMessage.style.display = "block";
//                 return;
//             }

//             if (authTitle.innerText === "Login") {
//                 localStorage.setItem("token", data.token);
//                 authModal.style.display = "none";
//                 authModal.classList.remove("show");

//                 loginButton.style.display = "none";
//                 logoutButton.style.display = "block";
//                 profileButton.style.display = "block"; // Show Profile Button
//             } else {
//                 alert("Signup successful! Please log in.");
//             }
//         } catch (error) {
//             console.error("Auth Error:", error);
//             authErrorMessage.textContent = "Something went wrong. Please try again!";
//             authErrorMessage.style.display = "block";
//         }
//     });

//     // ✅ Handle Logout
//     logoutButton.addEventListener("click", function () {
//         localStorage.removeItem("token");
//         location.reload(); // Reload the page to update state
//     });

//     // ✅ Handle Profile Click (Show User Details)
//     profileButton.addEventListener("click", function () {
//         const token = localStorage.getItem("token");

//         if (!token) {
//             alert("Please log in first.");
//             return;
//         }

//         // Redirect to profile page
//         window.location.href = "profile.html"; // Profile page navigation
//     });

//     // ✅ Check If User is Already Logged In (Persist Login)
//     window.addEventListener("load", function () {
//         const token = localStorage.getItem("token");
//         if (token) {
//             loginButton.style.display = "none";
//             logoutButton.style.display = "block";
//             profileButton.style.display = "block"; // Show Profile Button
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     // ✅ Initialize Stripe
//     const stripe = Stripe("pk_test_51Qlb4KELRrh4kP62DSwQcxyOeKkLSPUPQwiWS3nMP7dprJMkcSrpgX4F87fZtZQSbiV5t4");

//     // ✅ Ensure the loading spinner exists before trying to manipulate it
//     const loadingSpinner = document.querySelector(".loading-spinner");
//     if (!loadingSpinner) {
//         console.warn("Loading spinner not found in the DOM!");
//     }

//     // ✅ Smooth scroll to products section
//     document.querySelector(".hero button").addEventListener("click", function () {
//         const productsSection = document.getElementById("products");
//         productsSection.scrollIntoView({ behavior: "smooth" });
//     });

//     /* ==============================
//        ✅ Show/Hide Password Functionality
//     =============================== */

//     // Get password input and show/hide password icon
//     const passwordField = document.getElementById("password");
//     const showPasswordBtn = document.getElementById("showPassword");

//     // Toggle password visibility
//     showPasswordBtn.addEventListener("click", function () {
//         if (passwordField.type === "password") {
//             passwordField.type = "text"; // Show password
//             showPasswordBtn.textContent = "🙈"; // Change text to "Hide" (can also use an icon)
//         } else {
//             passwordField.type = "password"; // Hide password
//             showPasswordBtn.textContent = "👁"; // Change text to "Show" (can also use an icon)
//         }
//     });

//     // ✅ Initialize filters
//     const products = document.querySelectorAll(".product-card");
//     const filterButtons = document.querySelectorAll("#filter-options button");
//     const filterOptions = document.getElementById("filter-options");

//     // ✅ Ensure filters are hidden initially
//     filterOptions.style.display = "none";

//     // ✅ Reset all filters
//     function resetFilters() {
//         filterButtons.forEach((btn) => btn.classList.remove("active"));
//         products.forEach((product) => {
//             product.style.display = "block";
//         });
//     }

//     // ✅ Toggle filter options
//     document.getElementById("show-filters").addEventListener("click", function () {
//         if (filterOptions.style.display === "none") {
//             filterOptions.style.display = "block";
//         } else {
//             filterOptions.style.display = "none";
//             resetFilters();
//         }
//     });

//     // ✅ Filter products based on selected criteria
//     filterButtons.forEach(function (button) {
//         button.addEventListener("click", function () {
//             document.querySelectorAll(".purchase-details").forEach((details) => {
//                 details.style.display = "none";
//             });

//             const filter = this.getAttribute("data-filter");

//             if (this.classList.contains("active")) {
//                 resetFilters();
//             } else {
//                 filterButtons.forEach((btn) => btn.classList.remove("active"));
//                 this.classList.add("active");

//                 products.forEach(function (product) {
//                     const priceText = product.querySelector("p").textContent;
//                     const price = parseFloat(priceText.replace("$", ""));
//                     const category = product.getAttribute("data-category");

//                     if (
//                         filter === "all" ||
//                         (filter === "men" && category === "men") ||
//                         (filter === "women" && category === "women") ||
//                         (filter === "low" && price < 20) ||
//                         (filter === "mid" && price >= 20 && price <= 30) ||
//                         (filter === "high" && price > 30)
//                     ) {
//                         product.style.display = "block";
//                     } else {
//                         product.style.display = "none";
//                     }
//                 });
//             }
//         });
//     });

//     // ✅ Show quantity input and confirm button
//     document.querySelectorAll(".buy-now").forEach(function (button) {
//         button.addEventListener("click", function () {
//             const purchaseDetails = this.nextElementSibling;
//             document.querySelectorAll(".purchase-details").forEach((details) => {
//                 if (details !== purchaseDetails) {
//                     details.style.display = "none";
//                 }
//             });

//             if (purchaseDetails.style.display === "block") {
//                 purchaseDetails.style.display = "none";
//             } else {
//                 purchaseDetails.style.display = "block";
//             }
//         });
//     });

//     // ✅ Handle confirm purchase functionality
//     document.querySelectorAll(".confirm-purchase").forEach(function (button) {
//         button.addEventListener("click", function () {
//             const productCard = button.closest(".product-card");
//             const price = parseFloat(productCard.getAttribute("data-price"));
//             const quantity = parseInt(productCard.querySelector(".quantity").value);

//             if (isNaN(quantity) || quantity <= 0) {
//                 alert("Please enter a valid quantity.");
//                 return;
//             }

//             fetch("/create-checkout-session", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ price, quantity }),
//             })
//             .then((res) => {
//                 if (!res.ok) {
//                     throw new Error("Failed to create checkout session.");
//                 }
//                 return res.json();
//             })
//             .then((data) => {
//                 return stripe.redirectToCheckout({ sessionId: data.id });
//             })
//             .catch((error) => {
//                 console.error("Error:", error);
//                 alert("Something went wrong. Please try again.");
//             });
//         });
//     });

//     /* ==============================
//        ✅ Login & Signup Functionality
//     =============================== */

//     // ✅ Get Navbar Elements
//     const loginButton = document.getElementById("loginButton");
//     const logoutButton = document.getElementById("logoutButton");
//     const profileButton = document.getElementById("profileButton"); // Profile button

//     // ✅ Get Login/Signup Modal Elements
//     const authModal = document.getElementById("authModal");
//     const closeModal = document.getElementById("closeModal");
//     const authForm = document.getElementById("authForm");
//     const authTitle = document.getElementById("authTitle");
//     const toggleAuth = document.getElementById("toggleAuth");
//     const authErrorMessage = document.getElementById("authErrorMessage");

//     // ✅ Ensure Modal is Fully Hidden on Page Load (Fix Flashing Issue)
//     window.addEventListener("DOMContentLoaded", function () {
//         authModal.style.display = "none";
//         authModal.classList.remove("show");
//     });

//     // ✅ Open Login/Signup Modal ONLY When Clicking "Login/Sign Up"
//     loginButton.addEventListener("click", function (e) {
//         e.preventDefault();
//         authModal.style.display = "flex"; // Make the modal visible
//         authModal.classList.add("show"); // Apply the 'show' class to trigger animation
//         authTitle.innerText = "Login"; // Show Login title by default
//         toggleAuth.innerHTML = `Don't have an account? <a href="#">Sign Up</a>`; // Show "Sign Up" link
//         authForm.reset(); // Reset the form (clear fields)
//     });

//     // ✅ Close Modal on "X" Click
//     closeModal.addEventListener("click", function () {
//         authModal.style.display = "none";
//         authModal.classList.remove("show");
//     });

//     // ✅ Close Modal When Clicking Outside
//     window.addEventListener("click", function (e) {
//         if (e.target === authModal) {
//             authModal.style.display = "none";
//             authModal.classList.remove("show");
//         }
//     });

//     // ✅ Switch Between Login and Sign Up Forms
//     toggleAuth.addEventListener("click", function (e) {
//         e.preventDefault();

//         if (authTitle.innerText === "Login") {
//             authTitle.innerText = "Sign Up"; // Change title to Sign Up
//             toggleAuth.innerHTML = `Already have an account? <a href="#">Login</a>`; // Change toggle link to "Login"
//             authForm.reset(); // Reset fields for Sign Up
//         } else {
//             authTitle.innerText = "Login"; // Change title back to Login
//             toggleAuth.innerHTML = `Don't have an account? <a href="#">Sign Up</a>`; // Change toggle link back to "Sign Up"
//             authForm.reset(); // Reset fields for Login
//         }
//     });

//     // ✅ Handle Form Submission (Login / Sign Up)
//     authForm.addEventListener("submit", async function (e) {
//         e.preventDefault(); // Prevent default form submission

//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;
//         const endpoint = authTitle.innerText === "Login" ? "/login" : "/signup"; // Check whether it's login or signup

//         try {
//             const response = await fetch(endpoint, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password }),
//             });

//             const data = await response.json();

//             if (!response.ok) {
//                 authErrorMessage.textContent = data.message || "Invalid email or password!";
//                 authErrorMessage.style.display = "block";
//                 return;
//             }

//             if (authTitle.innerText === "Login") {
//                 localStorage.setItem("token", data.token); // Store the JWT token in localStorage
//                 authModal.style.display = "none"; // Close the modal
//                 authModal.classList.remove("show");

//                 loginButton.style.display = "none";
//                 logoutButton.style.display = "block";
//                 profileButton.style.display = "block"; // Show Profile Button
//             } else {
//                 alert("Signup successful! Please log in.");
//             }
//         } catch (error) {
//             console.error("Auth Error:", error);
//             authErrorMessage.textContent = "Something went wrong. Please try again!";
//             authErrorMessage.style.display = "block";
//         }
//     });

//     // ✅ Handle Logout
//     logoutButton.addEventListener("click", function () {
//         localStorage.removeItem("token");
//         location.reload(); // Reload the page to update state
//     });

//     // ✅ Handle Profile Click (Show User Details)
//     profileButton.addEventListener("click", function () {
//         const token = localStorage.getItem("token");

//         if (!token) {
//             alert("Please log in first.");
//             return;
//         }

//         // Redirect to profile page
//         window.location.href = "profile.html"; // Profile page navigation
//     });

//     // ✅ Check If User is Already Logged In (Persist Login)
//     window.addEventListener("load", function () {
//         const token = localStorage.getItem("token");
//         if (token) {
//             loginButton.style.display = "none";
//             logoutButton.style.display = "block";
//             profileButton.style.display = "block"; // Show Profile Button
//         }
//     });
// });


// document.addEventListener("DOMContentLoaded", function () {

//         // ✅ Initialize Stripe
    
//         const stripe = Stripe("pk_test_51Qlb4KELRrh4kP62DSwQcxyOeKkLSPUPQwiWS3nMP7dprJMkcSrpgX4F87fZtZQSbiV5t4");
    
    
    
//         // ✅ Ensure the loading spinner exists before trying to manipulate it
    
//         const loadingSpinner = document.querySelector(".loading-spinner");
    
//         if (!loadingSpinner) {
    
//             console.warn("Loading spinner not found in the DOM!");
    
//         }
    
    
    
//         // ✅ Smooth scroll to products section
    
//         document.querySelector(".hero button").addEventListener("click", function () {
    
//             const productsSection = document.getElementById("products");
    
//             productsSection.scrollIntoView({ behavior: "smooth" });
    
//         });
    
    
    
//         /* ==============================
    
//            ✅ Show/Hide Password Functionality
    
//         =============================== */
    
    
    
//         // Get password input and show/hide password icon
    
//         const passwordField = document.getElementById("password");
    
//         const showPasswordBtn = document.getElementById("showPassword");
    
    
    
//         // Toggle password visibility
    
//         showPasswordBtn.addEventListener("click", function () {
    
//             if (passwordField.type === "password") {
    
//                 passwordField.type = "text"; // Show password
    
//                 showPasswordBtn.textContent = "🙈"; // Change text to "Hide" (can also use an icon)
    
//             } else {
    
//                 passwordField.type = "password"; // Hide password
    
//                 showPasswordBtn.textContent = "👁"; // Change text to "Show" (can also use an icon)
    
//             }
    
//         });
    
    
    
//         // ✅ Initialize filters
    
//         const products = document.querySelectorAll(".product-card");
    
//         const filterButtons = document.querySelectorAll("#filter-options button");
    
//         const filterOptions = document.getElementById("filter-options");
    
    
    
//         // ✅ Ensure filters are hidden initially
    
//         filterOptions.style.display = "none";
    
    
    
//         // ✅ Reset all filters
    
//         function resetFilters() {
    
//             filterButtons.forEach((btn) => btn.classList.remove("active"));
    
//             products.forEach((product) => {
    
//                 product.style.display = "block";
    
//             });
    
//         }
    
    
    
//         // ✅ Toggle filter options
    
//         document.getElementById("show-filters").addEventListener("click", function () {
    
//             if (filterOptions.style.display === "none") {
    
//                 filterOptions.style.display = "block";
    
//             } else {
    
//                 filterOptions.style.display = "none";
    
//                 resetFilters();
    
//             }
    
//         });
    
    
    
//         // ✅ Filter products based on selected criteria
    
//         filterButtons.forEach(function (button) {
    
//             button.addEventListener("click", function () {
    
//                 document.querySelectorAll(".purchase-details").forEach((details) => {
    
//                     details.style.display = "none";
    
//                 });
    
    
    
//                 const filter = this.getAttribute("data-filter");
    
    
    
//                 if (this.classList.contains("active")) {
    
//                     resetFilters();
    
//                 } else {
    
//                     filterButtons.forEach((btn) => btn.classList.remove("active"));
    
//                     this.classList.add("active");
    
    
    
//                     products.forEach(function (product) {
    
//                         const priceText = product.querySelector("p").textContent;
    
//                         const price = parseFloat(priceText.replace("$", ""));
    
//                         const category = product.getAttribute("data-category");
    
    
    
//                         if (
    
//                             filter === "all" ||
    
//                             (filter === "men" && category === "men") ||
    
//                             (filter === "women" && category === "women") ||
    
//                             (filter === "low" && price < 20) ||
    
//                             (filter === "mid" && price >= 20 && price <= 30) ||
    
//                             (filter === "high" && price > 30)
    
//                         ) {
    
//                             product.style.display = "block";
    
//                         } else {
    
//                             product.style.display = "none";
    
//                         }
    
//                     });
    
//                 }
    
//             });
    
//         });
    
    
    
//         // ✅ Show quantity input and confirm button
    
//         document.querySelectorAll(".buy-now").forEach(function (button) {
    
//             button.addEventListener("click", function () {
    
//                 const purchaseDetails = this.nextElementSibling;
    
//                 document.querySelectorAll(".purchase-details").forEach((details) => {
    
//                     if (details !== purchaseDetails) {
    
//                         details.style.display = "none";
    
//                     }
    
//                 });
    
    
    
//                 if (purchaseDetails.style.display === "block") {
    
//                     purchaseDetails.style.display = "none";
    
//                 } else {
    
//                     purchaseDetails.style.display = "block";
    
//                 }
    
//             });
    
//         });
    
    
    
//         // ✅ Handle confirm purchase functionality
    
//         document.querySelectorAll(".confirm-purchase").forEach(function (button) {
    
//             button.addEventListener("click", function () {
    
//                 const productCard = button.closest(".product-card");
    
//                 const price = parseFloat(productCard.getAttribute("data-price"));
    
//                 const quantity = parseInt(productCard.querySelector(".quantity").value);
    
    
    
//                 if (isNaN(quantity) || quantity <= 0) {
    
//                     alert("Please enter a valid quantity.");
    
//                     return;
    
//                 }
    
    
    
//                 fetch("/create-checkout-session", {
    
//                     method: "POST",
    
//                     headers: {
    
//                         "Content-Type": "application/json",
    
//                     },
    
//                     body: JSON.stringify({ price, quantity }),
    
//                 })
    
//                 .then((res) => {
    
//                     if (!res.ok) {
    
//                         throw new Error("Failed to create checkout session.");
    
//                     }
    
//                     return res.json();
    
//                 })
    
//                 .then((data) => {
    
//                     return stripe.redirectToCheckout({ sessionId: data.id });
    
//                 })
    
//                 .catch((error) => {
    
//                     console.error("Error:", error);
    
//                     alert("Something went wrong. Please try again.");
    
//                 });
    
//             });
    
//         });
    
    
    
//         /* ==============================
    
//            ✅ Login & Signup Functionality
    
//         =============================== */
    
    
    
//         // ✅ Get Navbar Elements
    
//         const loginButton = document.getElementById("loginButton");
    
//         const logoutButton = document.getElementById("logoutButton");
    
//         const profileButton = document.getElementById("profileButton"); // Profile button
    
    
    
//         // ✅ Get Login/Signup Modal Elements
    
//         const authModal = document.getElementById("authModal");
    
//         const closeModal = document.getElementById("closeModal");
    
//         const authForm = document.getElementById("authForm");
    
//         const authTitle = document.getElementById("authTitle");
    
//         const toggleAuth = document.getElementById("toggleAuth");
    
//         const authErrorMessage = document.getElementById("authErrorMessage");
    
    
    
//         // ✅ Ensure Modal is Fully Hidden on Page Load (Fix Flashing Issue)
    
//         window.addEventListener("DOMContentLoaded", function () {
    
//             authModal.style.display = "none";
    
//             authModal.classList.remove("show");
    
//         });
    
    
    
//         // ✅ Open Login/Signup Modal ONLY When Clicking "Login/Sign Up"
    
//         loginButton.addEventListener("click", function (e) {
    
//             e.preventDefault();
    
//             authModal.style.display = "flex"; // Make the modal visible
    
//             authModal.classList.add("show"); // Apply the 'show' class to trigger animation
    
//             authTitle.innerText = "Login"; // Show Login title by default
    
//             toggleAuth.innerHTML = `Don't have an account? <a href="#">Sign Up</a>`; // Show "Sign Up" link
    
//             authForm.reset(); // Reset the form (clear fields)
    
//         });
    
    
    
//         // ✅ Close Modal on "X" Click
    
//         closeModal.addEventListener("click", function () {
    
//             authModal.style.display = "none";
    
//             authModal.classList.remove("show");
    
//         });
    
    
    
//         // ✅ Close Modal When Clicking Outside
    
//         window.addEventListener("click", function (e) {
    
//             if (e.target === authModal) {
    
//                 authModal.style.display = "none";
    
//                 authModal.classList.remove("show");
    
//             }
    
//         });
    
    
    
//         // ✅ Switch Between Login and Sign Up Forms
    
//         toggleAuth.addEventListener("click", function (e) {
    
//             e.preventDefault();
    
    
    
//             if (authTitle.innerText === "Login") {
    
//                 authTitle.innerText = "Sign Up"; // Change title to Sign Up
    
//                 toggleAuth.innerHTML = `Already have an account? <a href="#">Login</a>`; // Change toggle link to "Login"
    
//                 authForm.reset(); // Reset fields for Sign Up
    
//             } else {
    
//                 authTitle.innerText = "Login"; // Change title back to Login
    
//                 toggleAuth.innerHTML = `Don't have an account? <a href="#">Sign Up</a>`; // Change toggle link back to "Sign Up"
    
//                 authForm.reset(); // Reset fields for Login
    
//             }
    
//         });
    
    
    
//         // ✅ Handle Form Submission (Login / Sign Up)
    
//         authForm.addEventListener("submit", async function (e) {
    
//             e.preventDefault(); // Prevent default form submission
    
    
    
//             const email = document.getElementById("email").value;
    
//             const password = document.getElementById("password").value;
    
//             const endpoint = authTitle.innerText === "Login" ? "/login" : "/signup"; // Check whether it's login or signup
    
    
    
//             try {
    
//                 const response = await fetch(endpoint, {
    
//                     method: "POST",
    
//                     headers: { "Content-Type": "application/json" },
    
//                     body: JSON.stringify({ email, password }),
    
//                 });
    
    
    
//                 const data = await response.json();
    
    
    
//                 if (!response.ok) {
    
//                     authErrorMessage.textContent = data.message || "Invalid email or password!";
    
//                     authErrorMessage.style.display = "block";
    
//                     return;
    
//                 }
    
    
    
//                 if (authTitle.innerText === "Login") {
    
//                     localStorage.setItem("token", data.token); // Store the JWT token in localStorage
    
//                     authModal.style.display = "none"; // Close the modal
    
//                     authModal.classList.remove("show");
    
    
    
//                     loginButton.style.display = "none";
    
//                     logoutButton.style.display = "block";
    
//                     profileButton.style.display = "block"; // Show Profile Button
    
//                 } else {
    
//                     alert("Signup successful! Please log in.");
    
//                 }
    
//             } catch (error) {
    
//                 console.error("Auth Error:", error);
    
//                 authErrorMessage.textContent = "Something went wrong. Please try again!";
    
//                 authErrorMessage.style.display = "block";
    
//             }
    
//         });
    
    
    
//         // ✅ Handle Logout
    
//         logoutButton.addEventListener("click", function () {
    
//             localStorage.removeItem("token");
    
//             location.reload(); // Reload the page to update state
    
//         });
    
    
    
//         // ✅ Handle Profile Click (Show User Details)
    
//       profileButton.addEventListener("click", function () {
//         const token = localStorage.getItem("token");

//         if (!token) {
//             alert("Please log in first.");
//             return;
//         }

//         fetch('/profile', {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Failed to fetch profile');
//             }
//             return response.json();
//         })
//         .then(data => {
//             localStorage.setItem("userEmail", data.email); // Store email after API call
//             window.location.href = "profile.html"; // Redirect to profile page
//         })
//         .catch(error => {
//             console.error('Error fetching profile:', error);
//             alert('Error fetching profile. Please try again.');
//         });
//     });

//     window.addEventListener("load", function () {
//         const token = localStorage.getItem("token");
//         if (token) {
//             loginButton.style.display = "none";
//             logoutButton.style.display = "block";
//             profileButton.style.display = "block";
//         }
//     });
    
//     });









// document.addEventListener("DOMContentLoaded", function () {
//     // ✅ Initialize Stripe
//     const stripe = Stripe("pk_test_51Qlb4KELRrh4kP62DSwQcxyOeKkLSPUPQwiWS3nMP7dprJMkcSrpgX4F87fZtZQSbiV5t4");

//     // ✅ Ensure the loading spinner exists before trying to manipulate it
//     const loadingSpinner = document.querySelector(".loading-spinner");
//     if (!loadingSpinner) {
//         console.warn("Loading spinner not found in the DOM!");
//     }

//     // ✅ Smooth scroll to products section
//     document.querySelector(".hero button").addEventListener("click", function () {
//         const productsSection = document.getElementById("products");
//         productsSection.scrollIntoView({ behavior: "smooth" });
//     });

//     /* ==============================
//        ✅ Show/Hide Password Functionality
//     =============================== */

//     // Get password input and show/hide password icon
//     const passwordField = document.getElementById("password");
//     const showPasswordBtn = document.getElementById("showPassword");

//     // Toggle password visibility
//     showPasswordBtn.addEventListener("click", function () {
//         if (passwordField.type === "password") {
//             passwordField.type = "text"; // Show password
//             showPasswordBtn.textContent = "🙈"; // Change text to "Hide" (can also use an icon)
//         } else {
//             passwordField.type = "password"; // Hide password
//             showPasswordBtn.textContent = "👁"; // Change text to "Show" (can also use an icon)
//         }
//     });

//     // ✅ Initialize filters
//     const products = document.querySelectorAll(".product-card");
//     const filterButtons = document.querySelectorAll("#filter-options button");
//     const filterOptions = document.getElementById("filter-options");

//     // ✅ Ensure filters are hidden initially
//     filterOptions.style.display = "none";

//     // ✅ Reset all filters
//     function resetFilters() {
//         filterButtons.forEach((btn) => btn.classList.remove("active"));
//         products.forEach((product) => {
//             product.style.display = "block";
//         });
//     }

//     // ✅ Toggle filter options
//     document.getElementById("show-filters").addEventListener("click", function () {
//         if (filterOptions.style.display === "none") {
//             filterOptions.style.display = "block";
//         } else {
//             filterOptions.style.display = "none";
//             resetFilters();
//         }
//     });

//     // ✅ Filter products based on selected criteria
//     filterButtons.forEach(function (button) {
//         button.addEventListener("click", function () {
//             document.querySelectorAll(".purchase-details").forEach((details) => {
//                 details.style.display = "none";
//             });

//             const filter = this.getAttribute("data-filter");

//             if (this.classList.contains("active")) {
//                 resetFilters();
//             } else {
//                 filterButtons.forEach((btn) => btn.classList.remove("active"));
//                 this.classList.add("active");

//                 products.forEach(function (product) {
//                     const priceText = product.querySelector("p").textContent;
//                     const price = parseFloat(priceText.replace("$", ""));
//                     const category = product.getAttribute("data-category");

//                     if (
//                         filter === "all" ||
//                         (filter === "men" && category === "men") ||
//                         (filter === "women" && category === "women") ||
//                         (filter === "low" && price < 20) ||
//                         (filter === "mid" && price >= 20 && price <= 30) ||
//                         (filter === "high" && price > 30)
//                     ) {
//                         product.style.display = "block";
//                     } else {
//                         product.style.display = "none";
//                     }
//                 });
//             }
//         });
//     });

//     // ✅ Show quantity input and confirm button
//     document.querySelectorAll(".buy-now").forEach(function (button) {
//         button.addEventListener("click", function () {
//             const purchaseDetails = this.nextElementSibling;
//             document.querySelectorAll(".purchase-details").forEach((details) => {
//                 if (details !== purchaseDetails) {
//                     details.style.display = "none";
//                 }
//             });

//             if (purchaseDetails.style.display === "block") {
//                 purchaseDetails.style.display = "none";
//             } else {
//                 purchaseDetails.style.display = "block";
//             }
//         });
//     });

//     // ✅ Handle confirm purchase functionality
//     document.querySelectorAll(".confirm-purchase").forEach(function (button) {
//         button.addEventListener("click", function () {
//             const productCard = button.closest(".product-card");
//             const price = parseFloat(productCard.getAttribute("data-price"));
//             const quantity = parseInt(productCard.querySelector(".quantity").value);

//             if (isNaN(quantity) || quantity <= 0) {
//                 alert("Please enter a valid quantity.");
//                 return;
//             }

//             fetch("/create-checkout-session", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ price, quantity }),
//             })
//             .then((res) => {
//                 if (!res.ok) {
//                     throw new Error("Failed to create checkout session.");
//                 }
//                 return res.json();
//             })
//             .then((data) => {
//                 return stripe.redirectToCheckout({ sessionId: data.id });
//             })
//             .catch((error) => {
//                 console.error("Error:", error);
//                 alert("Something went wrong. Please try again.");
//             });
//         });
//     });

//     /* ==============================
//        ✅ Login & Signup Functionality
//     =============================== */

//     // ✅ Get Navbar Elements
//     const loginButton = document.getElementById("loginButton");
//     const logoutButton = document.getElementById("logoutButton");

//     // ✅ Get Login/Signup Modal Elements
//     const authModal = document.getElementById("authModal");
//     const closeModal = document.getElementById("closeModal");
//     const authForm = document.getElementById("authForm");
//     const authTitle = document.getElementById("authTitle");
//     const toggleAuth = document.getElementById("toggleAuth");
//     const authErrorMessage = document.getElementById("authErrorMessage");

//     // ✅ Ensure Modal is Fully Hidden on Page Load (Fix Flashing Issue)
//     window.addEventListener("DOMContentLoaded", function () {
//         authModal.style.display = "none";
//         authModal.classList.remove("show");
//     });

//     // ✅ Open Login/Signup Modal ONLY When Clicking "Login/Sign Up"
//     loginButton.addEventListener("click", function (e) {
//         e.preventDefault();
//         authModal.style.display = "flex"; // Make the modal visible
//         authModal.classList.add("show"); // Apply the 'show' class to trigger animation
//         authTitle.innerText = "Login"; // Show Login title by default
//         toggleAuth.innerHTML = `Don't have an account? <a href="#">Sign Up</a>`; // Show "Sign Up" link
//         authForm.reset(); // Reset the form (clear fields)
//     });

//     // ✅ Close Modal on "X" Click
//     closeModal.addEventListener("click", function () {
//         authModal.style.display = "none";
//         authModal.classList.remove("show");
//     });

//     // ✅ Close Modal When Clicking Outside
//     window.addEventListener("click", function (e) {
//         if (e.target === authModal) {
//             authModal.style.display = "none";
//             authModal.classList.remove("show");
//         }
//     });

//     // ✅ Switch Between Login and Sign Up Forms
//     toggleAuth.addEventListener("click", function (e) {
//         e.preventDefault();

//         if (authTitle.innerText === "Login") {
//             authTitle.innerText = "Sign Up"; // Change title to Sign Up
//             toggleAuth.innerHTML = `Already have an account? <a href="#">Login</a>`; // Change toggle link to "Login"
//             authForm.reset(); // Reset fields for Sign Up
//         } else {
//             authTitle.innerText = "Login"; // Change title back to Login
//             toggleAuth.innerHTML = `Don't have an account? <a href="#">Sign Up</a>`; // Change toggle link back to "Sign Up"
//             authForm.reset(); // Reset fields for Login
//         }
//     });

//     // ✅ Handle Form Submission (Login / Sign Up)
//     authForm.addEventListener("submit", async function (e) {
//         e.preventDefault(); // Prevent default form submission

//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;
//         const endpoint = authTitle.innerText === "Login" ? "/login" : "/signup"; // Check whether it's login or signup

//         try {
//             const response = await fetch(endpoint, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password }),
//             });

//             const data = await response.json();

//             if (!response.ok) {
//                 authErrorMessage.textContent = data.message || "Invalid email or password!";
//                 authErrorMessage.style.display = "block";
//                 return;
//             }

//             if (authTitle.innerText === "Login") {
//                 localStorage.setItem("token", data.token); // Store the JWT token in localStorage
//                 authModal.style.display = "none"; // Close the modal
//                 authModal.classList.remove("show");

//                 loginButton.style.display = "none";
//                 logoutButton.style.display = "block"; // Show logout button
//             } else {
//                 alert("Signup successful! Please log in.");
//             }
//         } catch (error) {
//             console.error("Auth Error:", error);
//             authErrorMessage.textContent = "Something went wrong. Please try again!";
//             authErrorMessage.style.display = "block";
//         }
//     });

//     // ✅ Handle Logout
//     logoutButton.addEventListener("click", function () {
//         localStorage.removeItem("token");
//         location.reload(); // Reload the page to update state
//     });

//     // ✅ Check If User is Already Logged In (Persist Login)
//     window.addEventListener("load", function () {
//         const token = localStorage.getItem("token");
//         if (token) {
//             loginButton.style.display = "none";
//             logoutButton.style.display = "block"; // Show logout button
//         }
//     });
// });


// document.addEventListener("DOMContentLoaded", function () {
//     // ✅ Initialize Stripe
//     const stripe = Stripe("pk_test_51Qlb4KELRrh4kP62DSwQcxyOeKkLSPUPQwiWS3nMP7dprJMkcSrpgX4F87fZtZQSbiV5t4");

//     // ✅ Ensure the loading spinner exists before trying to manipulate it
//     const loadingSpinner = document.querySelector(".loading-spinner");
//     if (!loadingSpinner) {
//         console.warn("Loading spinner not found in the DOM!");
//     }

//     // ✅ Smooth scroll to products section
//     document.querySelector(".hero button").addEventListener("click", function () {
//         const productsSection = document.getElementById("products");
//         productsSection.scrollIntoView({ behavior: "smooth" });
//     });

//     /* ==============================
//        ✅ Show/Hide Password Functionality
//     =============================== */

//     // Get password input and show/hide password icon
//     const passwordField = document.getElementById("password");
//     const showPasswordBtn = document.getElementById("showPassword");

//     // Toggle password visibility
//     showPasswordBtn.addEventListener("click", function () {
//         if (passwordField.type === "password") {
//             passwordField.type = "text"; // Show password
//             showPasswordBtn.textContent = "🙈"; // Change text to "Hide" (can also use an icon)
//         } else {
//             passwordField.type = "password"; // Hide password
//             showPasswordBtn.textContent = "👁"; // Change text to "Show" (can also use an icon)
//         }
//     });

//     // ✅ Initialize filters
//     const products = document.querySelectorAll(".product-card");
//     const filterButtons = document.querySelectorAll("#filter-options button");
//     const filterOptions = document.getElementById("filter-options");

//     // ✅ Ensure filters are hidden initially
//     filterOptions.style.display = "none";

//     // ✅ Reset all filters
//     function resetFilters() {
//         filterButtons.forEach((btn) => btn.classList.remove("active"));
//         products.forEach((product) => {
//             product.style.display = "block";
//         });
//     }

//     // ✅ Toggle filter options
//     document.getElementById("show-filters").addEventListener("click", function () {
//         if (filterOptions.style.display === "none") {
//             filterOptions.style.display = "block";
//         } else {
//             filterOptions.style.display = "none";
//             resetFilters();
//         }
//     });

//     // ✅ Filter products based on selected criteria
//     filterButtons.forEach(function (button) {
//         button.addEventListener("click", function () {
//             document.querySelectorAll(".purchase-details").forEach((details) => {
//                 details.style.display = "none";
//             });

//             const filter = this.getAttribute("data-filter");

//             if (this.classList.contains("active")) {
//                 resetFilters();
//             } else {
//                 filterButtons.forEach((btn) => btn.classList.remove("active"));
//                 this.classList.add("active");

//                 products.forEach(function (product) {
//                     const priceText = product.querySelector("p").textContent;
//                     const price = parseFloat(priceText.replace("$", ""));
//                     const category = product.getAttribute("data-category");

//                     if (
//                         filter === "all" ||
//                         (filter === "men" && category === "men") ||
//                         (filter === "women" && category === "women") ||
//                         (filter === "low" && price < 20) ||
//                         (filter === "mid" && price >= 20 && price <= 30) ||
//                         (filter === "high" && price > 30)
//                     ) {
//                         product.style.display = "block";
//                     } else {
//                         product.style.display = "none";
//                     }
//                 });
//             }
//         });
//     });

//     // ✅ Show quantity input and confirm button
//     document.querySelectorAll(".buy-now").forEach(function (button) {
//         button.addEventListener("click", function () {
//             const purchaseDetails = this.nextElementSibling;
//             document.querySelectorAll(".purchase-details").forEach((details) => {
//                 if (details !== purchaseDetails) {
//                     details.style.display = "none";
//                 }
//             });

//             if (purchaseDetails.style.display === "block") {
//                 purchaseDetails.style.display = "none";
//             } else {
//                 purchaseDetails.style.display = "block";
//             }
//         });
//     });

//     // ✅ Handle confirm purchase functionality
//     document.querySelectorAll(".confirm-purchase").forEach(function (button) {
//         button.addEventListener("click", function () {
//             const productCard = button.closest(".product-card");
//             const price = parseFloat(productCard.getAttribute("data-price"));
//             const quantity = parseInt(productCard.querySelector(".quantity").value);

//             if (isNaN(quantity) || quantity <= 0) {
//                 alert("Please enter a valid quantity.");
//                 return;
//             }

//             fetch("/create-checkout-session", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ price, quantity }),
//             })
//             .then((res) => {
//                 if (!res.ok) {
//                     throw new Error("Failed to create checkout session.");
//                 }
//                 return res.json();
//             })
//             .then((data) => {
//                 return stripe.redirectToCheckout({ sessionId: data.id });
//             })
//             .catch((error) => {
//                 console.error("Error:", error);
//                 alert("Something went wrong. Please try again.");
//             });
//         });
//     });

//     /* ==============================
//        ✅ Login & Signup Functionality
//     =============================== */

//     // ✅ Get Navbar Elements
//     const loginButton = document.getElementById("loginButton");
//     const logoutButton = document.getElementById("logoutButton");

//     // ✅ Get Login/Signup Modal Elements
//     const authModal = document.getElementById("authModal");
//     const closeModal = document.getElementById("closeModal");
//     const authForm = document.getElementById("authForm");
//     const authTitle = document.getElementById("authTitle");
//     const toggleAuth = document.getElementById("toggleAuth");
//     const authErrorMessage = document.getElementById("authErrorMessage");

//     // ✅ Ensure Modal is Fully Hidden on Page Load (Fix Flashing Issue)
//     window.addEventListener("DOMContentLoaded", function () {
//         authModal.style.display = "none";
//         authModal.classList.remove("show");
//     });

//     // ✅ Open Login/Signup Modal ONLY When Clicking "Login/Sign Up"
//     loginButton.addEventListener("click", function (e) {
//         e.preventDefault();
//         authModal.style.display = "flex"; // Make the modal visible
//         authModal.classList.add("show"); // Apply the 'show' class to trigger animation
//         authTitle.innerText = "Login"; // Show Login title by default
//         toggleAuth.innerHTML = `Don't have an account? <a href="#">Sign Up</a>`; // Show "Sign Up" link
//         authForm.reset(); // Reset the form (clear fields)
//     });

//     // ✅ Close Modal on "X" Click
//     closeModal.addEventListener("click", function () {
//         authModal.style.display = "none";
//         authModal.classList.remove("show");
//     });

//     // ✅ Close Modal When Clicking Outside
//     window.addEventListener("click", function (e) {
//         if (e.target === authModal) {
//             authModal.style.display = "none";
//             authModal.classList.remove("show");
//         }
//     });

//     // ✅ Switch Between Login and Sign Up Forms
//     toggleAuth.addEventListener("click", function (e) {
//         e.preventDefault();

//         if (authTitle.innerText === "Login") {
//             authTitle.innerText = "Sign Up"; // Change title to Sign Up
//             toggleAuth.innerHTML = `Already have an account? <a href="#">Login</a>`; // Change toggle link to "Login"
//             authForm.reset(); // Reset fields for Sign Up
//         } else {
//             authTitle.innerText = "Login"; // Change title back to Login
//             toggleAuth.innerHTML = `Don't have an account? <a href="#">Sign Up</a>`; // Change toggle link back to "Sign Up"
//             authForm.reset(); // Reset fields for Login
//         }
//     });

//     // ✅ Handle Form Submission (Login / Sign Up)
//     authForm.addEventListener("submit", async function (e) {
//         e.preventDefault(); // Prevent default form submission

//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;
//         const endpoint = authTitle.innerText === "Login" ? "/login" : "/signup"; // Check whether it's login or signup

//         try {
//             const response = await fetch(endpoint, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password }),
//             });

//             const data = await response.json();

//             if (!response.ok) {
//                 authErrorMessage.textContent = data.message || "Invalid email or password!";
//                 authErrorMessage.style.display = "block";
//                 return;
//             }

//             if (authTitle.innerText === "Login") {
//                 localStorage.setItem("token", data.token); // Store the JWT token in localStorage
//                 authModal.style.display = "none"; // Close the modal
//                 authModal.classList.remove("show");

//                 loginButton.style.display = "none"; // Hide Login Button
//                 logoutButton.style.display = "block"; // Show Logout Button
//                 document.getElementById("profileButton").style.display = "inline-block"; // Show Profile Button
//             } else {
//                 alert("Account created successfully. Please log in.");
//                 authTitle.innerText = "Login"; // Change title back to Login
//                 toggleAuth.innerHTML = `Don't have an account? <a href="#">Sign Up</a>`; // Reset toggle link
//                 authForm.reset(); // Reset form for login
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             authErrorMessage.textContent = "Something went wrong. Please try again.";
//             authErrorMessage.style.display = "block";
//         }
//     });

//     // ✅ Handle Logout
//     logoutButton.addEventListener("click", function () {
//         localStorage.removeItem("token"); // Remove token
//         loginButton.style.display = "block"; // Show Login button
//         logoutButton.style.display = "none"; // Hide Logout button
//         document.getElementById("profileButton").style.display = "none"; // Hide Profile button
//     });

//     // ✅ Show Profile Button Only If Logged In
//     if (localStorage.getItem("token")) {
//         loginButton.style.display = "none"; // Hide Login button
//         logoutButton.style.display = "block"; // Show Logout button
//         document.getElementById("profileButton").style.display = "inline-block"; // Show Profile button
//     }

//     // ✅ Redirect to Profile page when clicking Profile Button
//     document.getElementById("profileButton").addEventListener("click", function () {
//         window.location.href = "profile.html"; // Redirect to Profile page
//     });
// });





// document.addEventListener("DOMContentLoaded", function () {
//     // ✅ Initialize Stripe
//     const stripe = Stripe("pk_test_51Qlb4KELRrh4kP62DSwQcxyOeKkLSPUPQwiWS3nMP7dprJMkcSrpgX4F87fZtZQSbiV5t4");

//     // ✅ Ensure the loading spinner exists before trying to manipulate it
//     const loadingSpinner = document.querySelector(".loading-spinner");
//     if (!loadingSpinner) {
//         console.warn("Loading spinner not found in the DOM!");
//     }

//     // ✅ Smooth scroll to products section
//     document.querySelector(".hero button").addEventListener("click", function () {
//         const productsSection = document.getElementById("products");
//         productsSection.scrollIntoView({ behavior: "smooth" });
//     });

//     /* ==============================
//        ✅ Show/Hide Password Functionality
//     =============================== */

//     // Get password input and show/hide password icon
//     const passwordField = document.getElementById("password");
//     const showPasswordBtn = document.getElementById("showPassword");

//     // Toggle password visibility
//     showPasswordBtn.addEventListener("click", function () {
//         if (passwordField.type === "password") {
//             passwordField.type = "text"; // Show password
//             showPasswordBtn.textContent = "🙈"; // Change text to "Hide" (can also use an icon)
//         } else {
//             passwordField.type = "password"; // Hide password
//             showPasswordBtn.textContent = "👁"; // Change text to "Show" (can also use an icon)
//         }
//     });

//     // ✅ Initialize filters
//     const products = document.querySelectorAll(".product-card");
//     const filterButtons = document.querySelectorAll("#filter-options button");
//     const filterOptions = document.getElementById("filter-options");

//     // ✅ Ensure filters are hidden initially
//     filterOptions.style.display = "none";

//     // ✅ Reset all filters
//     function resetFilters() {
//         filterButtons.forEach((btn) => btn.classList.remove("active"));
//         products.forEach((product) => {
//             product.style.display = "block";
//         });
//     }

//     // ✅ Toggle filter options
//     document.getElementById("show-filters").addEventListener("click", function () {
//         if (filterOptions.style.display === "none") {
//             filterOptions.style.display = "block";
//         } else {
//             filterOptions.style.display = "none";
//             resetFilters();
//         }
//     });

//     // ✅ Filter products based on selected criteria
//     filterButtons.forEach(function (button) {
//         button.addEventListener("click", function () {
//             document.querySelectorAll(".purchase-details").forEach((details) => {
//                 details.style.display = "none";
//             });

//             const filter = this.getAttribute("data-filter");

//             if (this.classList.contains("active")) {
//                 resetFilters();
//             } else {
//                 filterButtons.forEach((btn) => btn.classList.remove("active"));
//                 this.classList.add("active");

//                 products.forEach(function (product) {
//                     const priceText = product.querySelector("p").textContent;
//                     const price = parseFloat(priceText.replace("$", ""));
//                     const category = product.getAttribute("data-category");

//                     if (
//                         filter === "all" ||
//                         (filter === "men" && category === "men") ||
//                         (filter === "women" && category === "women") ||
//                         (filter === "low" && price < 20) ||
//                         (filter === "mid" && price >= 20 && price <= 30) ||
//                         (filter === "high" && price > 30)
//                     ) {
//                         product.style.display = "block";
//                     } else {
//                         product.style.display = "none";
//                     }
//                 });
//             }
//         });
//     });

//     // ✅ Show quantity input and confirm button
//     document.querySelectorAll(".buy-now").forEach(function (button) {
//         button.addEventListener("click", function () {
//             const purchaseDetails = this.nextElementSibling;
//             document.querySelectorAll(".purchase-details").forEach((details) => {
//                 if (details !== purchaseDetails) {
//                     details.style.display = "none";
//                 }
//             });

//             if (purchaseDetails.style.display === "block") {
//                 purchaseDetails.style.display = "none";
//             } else {
//                 purchaseDetails.style.display = "block";
//             }
//         });
//     });

//     // ✅ Handle confirm purchase functionality
//     document.querySelectorAll(".confirm-purchase").forEach(function (button) {
//         button.addEventListener("click", function () {
//             const productCard = button.closest(".product-card");
//             const price = parseFloat(productCard.getAttribute("data-price"));
//             const quantity = parseInt(productCard.querySelector(".quantity").value);

//             if (isNaN(quantity) || quantity <= 0) {
//                 alert("Please enter a valid quantity.");
//                 return;
//             }

//             fetch("/create-checkout-session", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ price, quantity }),
//             })
//             .then((res) => {
//                 if (!res.ok) {
//                     throw new Error("Failed to create checkout session.");
//                 }
//                 return res.json();
//             })
//             .then((data) => {
//                 return stripe.redirectToCheckout({ sessionId: data.id });
//             })
//             .catch((error) => {
//                 console.error("Error:", error);
//                 alert("Something went wrong. Please try again.");
//             });
//         });
//     });

//     /* ==============================
//        ✅ Login & Signup Functionality
//     =============================== */

//     // ✅ Get Navbar Elements
//     const loginButton = document.getElementById("loginButton");
//     const logoutButton = document.getElementById("logoutButton");

//     // ✅ Get Login/Signup Modal Elements
//     const authModal = document.getElementById("authModal");
//     const closeModal = document.getElementById("closeModal");
//     const authForm = document.getElementById("authForm");
//     const authTitle = document.getElementById("authTitle");
//     const toggleAuth = document.getElementById("toggleAuth");
//     const authErrorMessage = document.getElementById("authErrorMessage");

//     // ✅ Ensure Modal is Fully Hidden on Page Load (Fix Flashing Issue)
//     window.addEventListener("DOMContentLoaded", function () {
//         authModal.style.display = "none";
//         authModal.classList.remove("show");
//     });

//     // ✅ Open Login/Signup Modal ONLY When Clicking "Login/Sign Up"
//     loginButton.addEventListener("click", function (e) {
//         e.preventDefault();
//         authModal.style.display = "flex"; // Make the modal visible
//         authModal.classList.add("show"); // Apply the 'show' class to trigger animation
//         authTitle.innerText = "Login"; // Show Login title by default
//         toggleAuth.innerHTML = "Don't have an account? <a href='#'>Sign Up</a>"; // Show "Sign Up" link
//         authForm.reset(); // Reset the form (clear fields)
//     });

//     // ✅ Close Modal on "X" Click
//     closeModal.addEventListener("click", function () {
//         authModal.style.display = "none";
//         authModal.classList.remove("show");
//     });

//     // ✅ Close Modal When Clicking Outside
//     window.addEventListener("click", function (e) {
//         if (e.target === authModal) {
//             authModal.style.display = "none";
//             authModal.classList.remove("show");
//         }
//     });

//     // ✅ Switch Between Login and Sign Up Forms
//     toggleAuth.addEventListener("click", function (e) {
//         e.preventDefault();

//         if (authTitle.innerText === "Login") {
//             authTitle.innerText = "Sign Up"; // Change title to Sign Up
//             toggleAuth.innerHTML = "Already have an account? <a href='#'>Login</a>"; // Change toggle link to "Login"
//             authForm.reset(); // Reset fields for Sign Up
//         } else {
//             authTitle.innerText = "Login"; // Change title back to Login
//             toggleAuth.innerHTML = "Don't have an account? <a href='#'>Sign Up</a>"; // Change toggle link back to "Sign Up"
//             authForm.reset(); // Reset fields for Login
//         }
//     });

//     // ✅ Handle Form Submission (Login / Sign Up)
//     authForm.addEventListener("submit", async function (e) {
//         e.preventDefault(); // Prevent default form submission

//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;
//         const endpoint = authTitle.innerText === "Login" ? "/login" : "/signup"; // Check whether it's login or signup

//         try {
//             const response = await fetch(endpoint, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password }),
//             });

//             const data = await response.json();

//             if (!response.ok) {
//                 authErrorMessage.textContent = data.message || "Invalid email or password!";
//                 authErrorMessage.style.display = "block";
//                 return;
//             }

//             if (authTitle.innerText === "Login") {
//                 localStorage.setItem("token", data.token); // Store the JWT token in localStorage
//                 authModal.style.display = "none"; // Close the modal
//                 authModal.classList.remove("show");

//                 loginButton.style.display = "none"; // Hide Login Button
//                 logoutButton.style.display = "block"; // Show Logout Button
//             } else {
//                 alert("Account created successfully. Please log in.");
//                 authTitle.innerText = "Login"; // Change title back to Login
//                 toggleAuth.innerHTML = "Don't have an account? <a href='#'>Sign Up</a>"; // Reset toggle link
//                 authForm.reset(); // Reset form for login
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             authErrorMessage.textContent = "Something went wrong. Please try again.";
//             authErrorMessage.style.display = "block";
//         }
//     });

//     // ✅ Handle Logout
//     logoutButton.addEventListener("click", function () {
//         localStorage.removeItem("token"); // Remove token
//         loginButton.style.display = "block"; // Show Login button
//         logoutButton.style.display = "none"; // Hide Logout button
//     });
// });








// document.addEventListener("DOMContentLoaded", function () {
//     // ✅ Initialize Stripe
//     const stripe = Stripe("pk_test_51Qlb4KELRrh4kP62DSwQcxyOeKkLSPUPQwiWS3nMP7dprJMkcSrpgX4F87fZtZQSbiV5t4");

//     // ✅ Ensure the loading spinner exists before trying to manipulate it
//     const loadingSpinner = document.querySelector(".loading-spinner");
//     if (!loadingSpinner) {
//         console.warn("Loading spinner not found in the DOM!");
//     }

//     // ✅ Smooth scroll to products section
//     document.querySelector(".hero button").addEventListener("click", function () {
//         const productsSection = document.getElementById("products");
//         productsSection.scrollIntoView({ behavior: "smooth" });
//     });

//     // ✅ Get Navbar Elements
//     const loginButton = document.getElementById("loginButton");
//     const logoutButton = document.getElementById("logoutButton");

//     // ✅ Show Profile Button Only If Logged In
//     if (localStorage.getItem("token")) {
//         loginButton.style.display = "none"; // Hide Login button
//         logoutButton.style.display = "block"; // Show Logout button
//         document.getElementById("profileButton").style.display = "inline-block"; // Show Profile button
//     }

//     // ✅ Handle Logout
//     logoutButton.addEventListener("click", function () {
//         localStorage.removeItem("token"); // Remove token
//         loginButton.style.display = "block"; // Show Login button
//         logoutButton.style.display = "none"; // Hide Logout button
//         document.getElementById("profileButton").style.display = "none"; // Hide Profile button
//     });

//     // ✅ Redirect to Profile page when clicking Profile Button
//     document.getElementById("profileButton").addEventListener("click", function () {
//         window.location.href = "profile.html"; // Redirect to Profile page
//     });

//     // ✅ Open Login/Signup Modal ONLY When Clicking "Login/Sign Up"
//     loginButton.addEventListener("click", function (e) {
//         e.preventDefault();
//         authModal.style.display = "flex"; // Make the modal visible
//         authModal.classList.add("show"); // Apply the 'show' class to trigger animation
//         authTitle.innerText = "Login"; // Show Login title by default
//         toggleAuth.innerHTML = "Don't have an account? <a href='#'>Sign Up</a>"; // Show "Sign Up" link
//         authForm.reset(); // Reset the form (clear fields)
//     });

//     // ✅ Close Modal on "X" Click
//     closeModal.addEventListener("click", function () {
//         authModal.style.display = "none";
//         authModal.classList.remove("show");
//     });

//     // ✅ Close Modal When Clicking Outside
//     window.addEventListener("click", function (e) {
//         if (e.target === authModal) {
//             authModal.style.display = "none";
//             authModal.classList.remove("show");
//         }
//     });

//     // ✅ Switch Between Login and Sign Up Forms
//     toggleAuth.addEventListener("click", function (e) {
//         e.preventDefault();

//         if (authTitle.innerText === "Login") {
//             authTitle.innerText = "Sign Up"; // Change title to Sign Up
//             toggleAuth.innerHTML = "Already have an account? <a href='#'>Login</a>"; // Change toggle link to "Login"
//             authForm.reset(); // Reset fields for Sign Up
//         } else {
//             authTitle.innerText = "Login"; // Change title back to Login
//             toggleAuth.innerHTML = "Don't have an account? <a href='#'>Sign Up</a>"; // Change toggle link back to "Sign Up"
//             authForm.reset(); // Reset fields for Login
//         }
//     });

//     // ✅ Handle Form Submission (Login / Sign Up)
//     authForm.addEventListener("submit", async function (e) {
//         e.preventDefault(); // Prevent default form submission

//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;
//         const endpoint = authTitle.innerText === "Login" ? "/login" : "/signup"; // Check whether it's login or signup

//         try {
//             const response = await fetch(endpoint, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password }),
//             });

//             const data = await response.json();

//             if (!response.ok) {
//                 authErrorMessage.textContent = data.message || "Invalid email or password!";
//                 authErrorMessage.style.display = "block";
//                 return;
//             }

//             if (authTitle.innerText === "Login") {
//                 localStorage.setItem("token", data.token); // Store the JWT token in localStorage
//                 authModal.style.display = "none"; // Close the modal
//                 authModal.classList.remove("show");

//                 loginButton.style.display = "none"; // Hide Login Button
//                 logoutButton.style.display = "block"; // Show Logout Button
//                 document.getElementById("profileButton").style.display = "inline-block"; // Show Profile Button
//             } else {
//                 alert("Account created successfully. Please log in.");
//                 authTitle.innerText = "Login"; // Change title back to Login
//                 toggleAuth.innerHTML = "Don't have an account? <a href='#'>Sign Up</a>"; // Reset toggle link
//                 authForm.reset(); // Reset form for login
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             authErrorMessage.textContent = "Something went wrong. Please try again.";
//             authErrorMessage.style.display = "block";
//         }
//     });

//     // ✅ Handle Login/Signup Modal Elements
//     const authModal = document.getElementById("authModal");
//     const closeModal = document.getElementById("closeModal");
//     const authForm = document.getElementById("authForm");
//     const authTitle = document.getElementById("authTitle");
//     const toggleAuth = document.getElementById("toggleAuth");
//     const authErrorMessage = document.getElementById("authErrorMessage");

//     // ✅ Ensure Modal is Fully Hidden on Page Load (Fix Flashing Issue)
//     window.addEventListener("DOMContentLoaded", function () {
//         authModal.style.display = "none";
//         authModal.classList.remove("show");
//     });

//     // ✅ Get Navbar Elements
//     const profileButton = document.getElementById("profileButton");

//     // ✅ Show Profile Button Only If Logged In
//     if (localStorage.getItem("token")) {
//         loginButton.style.display = "none"; // Hide Login button
//         logoutButton.style.display = "block"; // Show Logout button
//         profileButton.style.display = "inline-block"; // Show Profile button
//     }

//     // ✅ Handle Logout
//     logoutButton.addEventListener("click", function () {
//         localStorage.removeItem("token"); // Remove token
//         loginButton.style.display = "block"; // Show Login button
//         logoutButton.style.display = "none"; // Hide Logout button
//         profileButton.style.display = "none"; // Hide Profile button
//     });

//     // ✅ Redirect to Profile page when clicking Profile Button
//     profileButton.addEventListener("click", function () {
//         window.location.href = "profile.html"; // Redirect to Profile page
//     });
// });

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul:last-child');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    // ✅ Initialize Stripe
    const stripe = Stripe("pk_test_51Qlb4KELRrh4kP62DSwQcxyOeKkLSPUPQwiWS3nMP7dprJMkcSrpgX4F87fZtZQSbiV5t41bPgfmzPtvMop2JicH000c52pxKI");

    // ✅ Ensure the loading spinner exists before trying to manipulate it
    const loadingSpinner = document.querySelector(".loading-spinner");
    if (!loadingSpinner) {
        console.warn("Loading spinner not found in the DOM!");
    }

    // ✅ Smooth scroll to products section
    document.querySelector(".hero button").addEventListener("click", function () {
        const productsSection = document.getElementById("products");
        productsSection.scrollIntoView({ behavior: "smooth" });
    });

    // ✅ Modal Elements
    const authModal = document.getElementById("authModal");
    const closeModal = document.getElementById("closeModal");
    const authForm = document.getElementById("authForm");
    const authTitle = document.getElementById("authTitle");
    const toggleAuth = document.getElementById("toggleAuth");
    const authErrorMessage = document.getElementById("authErrorMessage");
    
    // ✅ Get Navbar Elements
    const loginButton = document.getElementById("loginButton");
    const logoutButton = document.getElementById("logoutButton");

    // ✅ Show Profile Button Only If Logged In
    if (localStorage.getItem("token")) {
        loginButton.style.display = "none"; // Hide Login button
        logoutButton.style.display = "block"; // Show Logout button
        document.getElementById("profileButton").style.display = "inline-block"; // Show Profile button
    }

    // ✅ Handle Logout
    logoutButton.addEventListener("click", function () {
        localStorage.removeItem("token"); // Remove token
        loginButton.style.display = "block"; // Show Login button
        logoutButton.style.display = "none"; // Hide Logout button
        document.getElementById("profileButton").style.display = "none"; // Hide Profile button
    });

    // ✅ Redirect to Profile page when clicking Profile Button
    document.getElementById("profileButton").addEventListener("click", function () {
        window.location.href = "profile.html"; // Redirect to Profile page
    });

    // ✅ Open Login/Signup Modal ONLY When Clicking "Login/Sign Up"
    loginButton.addEventListener("click", function (e) {
        e.preventDefault();
        authModal.style.display = "flex"; // Make the modal visible
        authModal.classList.add("show"); // Apply the 'show' class to trigger animation
        authTitle.innerText = "Login"; // Show Login title by default
        toggleAuth.innerHTML = "Don't have an account? <a href='#'>Sign Up</a>"; // Show "Sign Up" link
        authForm.reset(); // Reset the form (clear fields)
    });

    // ✅ Close Modal on "X" Click
    closeModal.addEventListener("click", function () {
        authModal.style.display = "none";
        authModal.classList.remove("show");
    });

    // ✅ Close Modal When Clicking Outside
    window.addEventListener("click", function (e) {
        if (e.target === authModal) {
            authModal.style.display = "none";
            authModal.classList.remove("show");
        }
    });

    // ✅ Switch Between Login and Sign Up Forms
    toggleAuth.addEventListener("click", function (e) {
        e.preventDefault();

        if (authTitle.innerText === "Login") {
            authTitle.innerText = "Sign Up"; // Change title to Sign Up
            toggleAuth.innerHTML = "Already have an account? <a href='#'>Login</a>"; // Change toggle link to "Login"
            authForm.reset(); // Reset fields for Sign Up
        } else {
            authTitle.innerText = "Login"; // Change title back to Login
            toggleAuth.innerHTML = "Don't have an account? <a href='#'>Sign Up</a>"; // Change toggle link back to "Sign Up"
            authForm.reset(); // Reset fields for Login
        }
    });

    // ✅ Handle Form Submission (Login / Sign Up)
    authForm.addEventListener("submit", async function (e) {
        e.preventDefault(); // Prevent default form submission

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const endpoint = authTitle.innerText === "Login" ? "/login" : "/signup"; // Check whether it's login or signup

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                authErrorMessage.textContent = data.message || "Invalid email or password!";
                authErrorMessage.style.display = "block";
                return;
            }

            if (authTitle.innerText === "Login") {
                localStorage.setItem("token", data.token); // Store the JWT token in localStorage
                authModal.style.display = "none"; // Close the modal
                authModal.classList.remove("show");

                loginButton.style.display = "none"; // Hide Login Button
                logoutButton.style.display = "block"; // Show Logout Button
                document.getElementById("profileButton").style.display = "inline-block"; // Show Profile Button
            } else {
                alert("Account created successfully. Please log in.");
                authTitle.innerText = "Login"; // Change title back to Login
                toggleAuth.innerHTML = "Don't have an account? <a href='#'>Sign Up</a>"; // Reset toggle link
                authForm.reset(); // Reset form for login
            }
        } catch (error) {
            console.error("Error:", error);
            authErrorMessage.textContent = "Something went wrong. Please try again.";
            authErrorMessage.style.display = "block";
        }
    });

    // ✅ Ensure Modal is Fully Hidden on Page Load (Fix Flashing Issue)
    window.addEventListener("DOMContentLoaded", function () {
        authModal.style.display = "none";
        authModal.classList.remove("show");
    });

    /* ==============================
       ✅ Show/Hide Password Functionality
    =============================== */

    // Get password input and show/hide password icon
    const passwordField = document.getElementById("password");
    const showPasswordBtn = document.getElementById("showPassword");

    // Toggle password visibility
    showPasswordBtn.addEventListener("click", function () {
        if (passwordField.type === "password") {
            passwordField.type = "text"; // Show password
            showPasswordBtn.textContent = "🙈"; // Change text to "Hide" (can also use an icon)
        } else {
            passwordField.type = "password"; // Hide password
            showPasswordBtn.textContent = "👁"; // Change text to "Show" (can also use an icon)
        }
    });

    // ✅ Initialize filters
    const products = document.querySelectorAll(".product-card");
    const filterButtons = document.querySelectorAll("#filter-options button");
    const filterOptions = document.getElementById("filter-options");

    // ✅ Ensure filters are hidden initially
    filterOptions.style.display = "none";

    // ✅ Reset all filters
    function resetFilters() {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        products.forEach((product) => {
            product.style.display = "block";
        });
    }

    // ✅ Toggle filter options
    document.getElementById("show-filters").addEventListener("click", function () {
        if (filterOptions.style.display === "none") {
            filterOptions.style.display = "block";
        } else {
            filterOptions.style.display = "none";
            resetFilters();
        }
    });

    // ✅ Filter products based on selected criteria
    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            document.querySelectorAll(".purchase-details").forEach((details) => {
                details.style.display = "none";
            });

            const filter = this.getAttribute("data-filter");

            if (this.classList.contains("active")) {
                resetFilters();
            } else {
                filterButtons.forEach((btn) => btn.classList.remove("active"));
                this.classList.add("active");

                products.forEach(function (product) {
                    const priceText = product.querySelector("p").textContent;
                    const price = parseFloat(priceText.replace("$", ""));
                    const category = product.getAttribute("data-category");

                    if (
                        filter === "all" ||
                        (filter === "men" && category === "men") ||
                        (filter === "women" && category === "women") ||
                        (filter === "low" && price < 20) ||
                        (filter === "mid" && price >= 20 && price <= 30) ||
                        (filter === "high" && price > 30)
                    ) {
                        product.style.display = "block";
                    } else {
                        product.style.display = "none";
                    }
                });
            }
        });
    });

    // ✅ Show quantity input and confirm button
    document.querySelectorAll(".buy-now").forEach(function (button) {
        button.addEventListener("click", function () {
            const purchaseDetails = this.nextElementSibling;
            document.querySelectorAll(".purchase-details").forEach((details) => {
                if (details !== purchaseDetails) {
                    details.style.display = "none";
                }
            });

            if (purchaseDetails.style.display === "block") {
                purchaseDetails.style.display = "none";
            } else {
                purchaseDetails.style.display = "block";
            }
        });
    });

    // ✅ Handle confirm purchase functionality
    document.querySelectorAll(".confirm-purchase").forEach(function (button) {
        button.addEventListener("click", function () {
            const productCard = button.closest(".product-card");
            const price = parseFloat(productCard.getAttribute("data-price"));
            const quantity = parseInt(productCard.querySelector(".quantity").value);

            if (isNaN(quantity) || quantity <= 0) {
                alert("Please enter a valid quantity.");
                return;
            }

            fetch("/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ price, quantity }),
            })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to create checkout session.");
                }
                return res.json();
            })
            .then((data) => {
                return stripe.redirectToCheckout({ sessionId: data.id });
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Something went wrong. Please try again.");
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const profileContent = document.getElementById("profileContent");

    // Fetch user profile data
    const token = localStorage.getItem("token");
    if (!token) {
        window.location.href = "index.html"; // Redirect to home page if not logged in
    }

    fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.user) {
            document.getElementById("email").textContent = data.user.email;
            document.getElementById("password").textContent = data.user.password;
        } else {
            profileContent.innerHTML = "<p>Profile not found or expired session</p>";
        }
    })
    .catch((error) => {
        profileContent.innerHTML = "<p>There was an error fetching your profile. Please try again later.</p>";
    });

    // Handle logout
    document.getElementById("logoutButton").addEventListener("click", function () {
        localStorage.removeItem("token");
        window.location.href = "index.html"; // Redirect to homepage on logout
    });
});

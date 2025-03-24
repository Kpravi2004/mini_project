// Wait for the page to load before running the script
document.addEventListener("DOMContentLoaded", function () {
    console.log("BestDealHub Premium UI Loaded!");

    // Fake Search Button Animation
    document.getElementById("search-btn").addEventListener("click", function () {
        let searchBox = document.getElementById("search-box");
        let button = this;
        
        // Show Loading Effect
        button.innerHTML = "Searching...";
        button.style.opacity = "0.7";

        setTimeout(() => {
            button.innerHTML = "Search (Disabled)";
            button.style.opacity = "1";
            alert("Search is for display only. Full functionality coming soon!");
        }, 2000);
    });

    // Add Hover Glow Effect for All Buttons
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.boxShadow = "0px 0px 15px rgba(255, 215, 0, 0.8)";
            button.style.transform = "scale(1.05)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.boxShadow = "none";
            button.style.transform = "scale(1)";
        });
    });

    // Product Price Change Effect on Hover
    let products = document.querySelectorAll(".product");
    products.forEach(product => {
        product.addEventListener("mouseenter", () => {
            let priceTag = product.querySelector(".price");
            let oldPrice = parseFloat(priceTag.dataset.price); // Get Original Price
            let newPrice = (oldPrice * (0.9 + Math.random() * 0.2)).toFixed(2); // Random Discount
            priceTag.textContent = `₹${newPrice}`;
            priceTag.style.color = "#FFD700";
        });

        product.addEventListener("mouseleave", () => {
            let priceTag = product.querySelector(".price");
            priceTag.textContent = `₹${priceTag.dataset.price}`; // Restore Original Price
            priceTag.style.color = "#fff";
        });
    });

    // Smooth Scroll Animation
    window.addEventListener("scroll", function () {
        let elements = document.querySelectorAll(".product");
        let windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            let position = element.getBoundingClientRect().top;
            if (position < windowHeight - 50) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    });
});

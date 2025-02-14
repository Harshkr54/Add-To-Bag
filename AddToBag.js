document.addEventListener("DOMContentLoaded", function () {
    let quantitySelect = document.getElementById("quantity");
    let checkbox = document.getElementById("check");
    let buyButton = document.getElementById("buy");
    let navText = document.querySelector(".navtext span"); // Text inside navigation

    // Original Prices
    let originalMRP = 2599; // Fixed MRP per item
    let discountPercentage = 67; // Fixed discount percentage
    let platformFee = 20; // Fixed platform fee
    let shippingFee = 0; // Free shipping

    // Price elements
    let totalPriceElement = document.querySelector(".totalamt span:nth-child(2)");
    let discountElement = document.querySelector(".MRPDis span:nth-child(2)");
    let couponElement = document.querySelector(".coupon span:nth-child(2)");
    let mrpElement = document.querySelector(".totalmrp span:nth-child(2)"); // Total MRP

    // Hide Buy button initially
    buyButton.style.display = "none";

    // Function to update prices
    function updatePrices() {
        let quantity = parseInt(quantitySelect.value);

        let newMRP = originalMRP * quantity; // New total MRP
        let newDiscount = Math.round((newMRP * discountPercentage) / 100); // 67% discount
        let newTotalPrice = newMRP - newDiscount + platformFee + shippingFee; // Final payable price
        
        // Update the displayed values
        mrpElement.innerText = `₹${newMRP}`; // Update total MRP
        discountElement.innerText = `₹${newDiscount}`; // Update discount
        totalPriceElement.innerText = `₹${newTotalPrice}`; // Update total payable amount
    }

    // Update prices when quantity changes
    quantitySelect.addEventListener("change", updatePrices);

    // Checkbox click event
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            buyButton.style.display = "block"; // ✅ Show the button
            buyButton.disabled = false; // Enable button
            buyButton.style.opacity = "1"; // Make it fully visible
            buyButton.style.cursor = "pointer"; // Show pointer cursor

            checkbox.parentElement.style.color = "#ff3f6c"; // Change text color to button color
            navText.innerText = "1/1 ITEMS SELECTED"; // Change text when checked
        } else {
            buyButton.style.display = "none"; // ❌ Hide the button again
            buyButton.disabled = true; // Disable button
            buyButton.style.opacity = "0.5"; // Reduce opacity
            buyButton.style.cursor = "not-allowed"; // Show not-allowed cursor

            checkbox.parentElement.style.color = "black"; // Reset text color
            navText.innerText = "0/1 ITEMS SELECTED"; // Change text back when unchecked
        }
    });

    // Buy button click event
    buyButton.addEventListener("click", function () {
        alert("Your order has been placed successfully!"); // Show alert
    });
});

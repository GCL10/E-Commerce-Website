// Define variables
var pricePerUnit;
const TAX_RATE = 0.10;
//Set pricePerUnit based on selected product
function setPricePerUnit() {
  var product = document.getElementById("product").value;
  if (product == "treadmill") {
    pricePerUnit = 500;
  } else if (product == "dumbbell") {
    pricePerUnit = 50;
  } else if (product == "yoga-mat") {
    pricePerUnit = 20;
  }
}
// Calculate total price based on quantity
function calculatePrice() {
  var product = document.getElementById("product").value;
  var quantity = document.getElementById("quantity").value;
  
  if (product && quantity) {
    setPricePerUnit();
    var subtotal = pricePerUnit * quantity;
    var tax = subtotal * TAX_RATE;
    var total = subtotal + tax;
    document.getElementById("price").innerHTML = "Total price: $" + total.toFixed(2);
    return("Total price: $" + total.toFixed(2));
  } else {
    document.getElementById("price").innerHTML = "Please select a product and enter a quantity.";
    console.log("Please select a product and enter a quantity.");
  }
}
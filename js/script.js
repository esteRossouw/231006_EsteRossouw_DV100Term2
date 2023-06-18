// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.getElementById('orderForm');
    
    // Add an event listener for the form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting
      
      // Get the form values
      var formData = new FormData(form);
      
      // Create an object to store the selected options and prices
      var selectedItems = {};
      
      // Extract the selected bread option and price
      var selectedBread = formData.get('bread');
      var breadPrice = parseFloat(selectedBread);
      selectedItems['Bread'] = breadPrice;
      
      // Extract the selected protein options and prices
      var selectedProteins = formData.getAll('meat');
      var proteinsPrice = 0;
      selectedProteins.forEach(function(protein) {
        proteinsPrice += parseFloat(protein);
      });
      selectedItems['Proteins'] = proteinsPrice;
      
      // Extract the selected topping options and prices
      var selectedToppings = formData.getAll('toppings');
      var toppingsPrice = 0;
      selectedToppings.forEach(function(topping) {
        toppingsPrice += parseFloat(topping);
      });
      selectedItems['Toppings'] = toppingsPrice;
      
      // Calculate the total cost
      var totalCost = breadPrice + proteinsPrice + toppingsPrice;
      
      // Display the selected items and total cost in the cart
      displayCart(selectedItems, totalCost);
    });
  });
  
  // Function to display the selected items and total cost in the cart
  function displayCart(selectedItems, totalCost) {
    var cartItemsDiv = document.getElementById('cartItems');
    var cartHTML = '';
    
    for (var item in selectedItems) {
      cartHTML += '<p>' + item + ': $' + selectedItems[item] + '</p>';
    }
    
    cartItemsDiv.innerHTML = cartHTML;
    
    var totalCostElement = document.getElementById('totalCost');
    totalCostElement.textContent = 'Total Cost: $' + totalCost;
  }
  

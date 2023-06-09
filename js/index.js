
// Get the form element
const form = document.getElementById('subForm');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
event.preventDefault(); // Prevent the form from submitting

// Get all the selected checkboxes and radio buttons
const selectedItems = [...form.querySelectorAll('input[type="checkbox"]:checked'), ...form.querySelectorAll('input[type="radio"]:checked')];

// Calculate the total cost
let totalCost = 0;
selectedItems.forEach(function(item) {
    const itemPrice = parseInt(item.nextElementSibling.textContent.replace('$', ''));
    totalCost += itemPrice;
});

// Display the total cost
const totalCostElement = document.getElementById('totalCost');
totalCostElement.textContent = 'Total Cost: $' + totalCost;
    
// Display the selected options
const selectedOptionsElement = document.getElementById('selectedOptions');
selectedOptionsElement.innerHTML = 'Selected Options: <br>' + selectedItems.map(item => item.labels[0].textContent).join('<br>');
});

// Get the form element
const form = document.getElementById("subForm");

// Add event listener to form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

// Get the selected values
const bread = document.querySelector('input[name="exampleRadios"]:checked').value;
const proteins = Array.from(document.querySelectorAll('input[type="checkbox"]:checked[name^="protein"]')).map(input => input.value);
const cheeses = Array.from(document.querySelectorAll('input[type="checkbox"]:checked[name^="cheese"]')).map(input => input.value);
const vegetables = Array.from(document.querySelectorAll('input[type="checkbox"]:checked[name^="veggie"]')).map(input => input.value);
const seasonings = Array.from(document.querySelectorAll('input[type="checkbox"]:checked[name^="seasoning"]')).map(input => input.value);
const sauces = Array.from(document.querySelectorAll('input[type="checkbox"]:checked[name^="sauce"]')).map(input => input.value);
const addons = Array.from(document.querySelectorAll('input[type="checkbox"]:checked[name^="addon"]')).map(input => input.value);
const drinks = Array.from(document.querySelectorAll('input[type="checkbox"]:checked[name^="drink"]')).map(input => input.value);

// Create an object to store the selected options
const selectedOptions = {
    bread,
    proteins,
    cheeses,
    vegetables,
    seasonings,
    sauces,
    addons,
    drinks
};

// Store the selected options in local storage
localStorage.setItem("selectedOptions", JSON.stringify(selectedOptions));

// Show a confirmation message or perform any other actions
  alert("Selected options saved to local storage!");
});
const savedOptions = localStorage.getItem("selectedOptions");

if (savedOptions) {
const selectedOptions = JSON.parse(savedOptions);
  // Use the selectedOptions object to populate the form or perform any other actions
}
// Get the price element
const priceElement = document.getElementById("price");

// Add event listener to form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Calculate the total price based on the selected options
  let totalPrice = 0;

  // Calculate the price of the selected bread
  const bread = document.querySelector('input[name="exampleRadios"]:checked');
  if (bread) {
    totalPrice += parseFloat(bread.dataset.price);
  }

  // Calculate the price of the selected proteins
  const proteins = Array.from(document.querySelectorAll('input[type="checkbox"]:checked[name^="protein"]'));
  proteins.forEach((protein) => {
    totalPrice += parseFloat(protein.dataset.price);
  });

  // Calculate the price of the selected cheeses
  const cheeses = Array.from(document.querySelectorAll('input[type="checkbox"]:checked[name^="cheese"]'));
  cheeses.forEach((cheese) => {
    totalPrice += parseFloat(cheese.dataset.price);
  });

  // Calculate the price of the selected vegetables
  const vegetables = Array.from(document.querySelectorAll('input[type="checkbox"]:checked[name^="veggie"]'));
  vegetables.forEach((vegetable) => {
    totalPrice += parseFloat(vegetable.dataset.price);
  });

  // Calculate the price of the selected seasonings
  const seasonings = Array.from(document.querySelectorAll('input[type="checkbox"]:checked[name^="seasoning"]'));
  seasonings.forEach((seasoning) => {
    totalPrice += parseFloat(seasoning.dataset.price);
  });

  // Calculate the price of the selected sauces
  const sauces = Array.from(document.querySelectorAll('input[type="checkbox"]:checked[name^="sauce"]'));
  sauces.forEach((sauce) => {
    totalPrice += parseFloat(sauce.dataset.price);
  });

  // Calculate the price of the selected addons
  const addons = Array.from(document.querySelectorAll('input[type="checkbox"]:checked[name^="addon"]'));
  addons.forEach((addon) => {
    totalPrice += parseFloat(addon.dataset.price);
  });

  // Calculate the price of the selected drinks
  const drinks = Array.from(document.querySelectorAll('input[type="checkbox"]:checked[name^="drink"]'));
  drinks.forEach((drink) => {
    totalPrice += parseFloat(drink.dataset.price);
  });

  // Update the price element with the total price
  priceElement.textContent = "Total Price: $" + totalPrice.toFixed(2);
});

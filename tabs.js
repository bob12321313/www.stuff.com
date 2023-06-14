// Variables to store selected units
let selectedUnitsArmy1 = [];
let selectedUnitsArmy2 = [];

// Function to handle unit selection
function selectUnit(event) {
  const unit = event.target.getAttribute("data-unit");

  if (event.target.parentNode.id === "army1") {
    selectedUnitsArmy1.push(unit);
    event.target.classList.add("selected");
  } else if (event.target.parentNode.id === "army2") {
    selectedUnitsArmy2.push(unit);
    event.target.classList.add("selected");
  }
}

// Function to initiate the battle
function initiateBattle() {
  // Print the selected units for testing
  console.log("Army 1 Units:", selectedUnitsArmy1);
  console.log("Army 2 Units:", selectedUnitsArmy2);

  // Add your battle logic here
}

// Add event listeners to the unit list items
const unitItems = document.querySelectorAll("li[data-unit]");
unitItems.forEach((item) => {
  item.addEventListener("click", selectUnit);
});

// Add event listener to the battle button
const battleBtn = document.getElementById("battle-btn");
battleBtn.addEventListener("click", initiateBattle);

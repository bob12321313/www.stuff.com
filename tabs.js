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
  if (selectedUnitsArmy1.length === 0 || selectedUnitsArmy2.length === 0) {
    alert("Please select units for both armies.");
    return;
  }

  const battleResultContainer = document.getElementById("battle-result");
  battleResultContainer.innerHTML = ""; // Clear previous battle result

  const battleResult = simulateBattle(selectedUnitsArmy1, selectedUnitsArmy2);
  const winner = battleResult.winner;
  const army1Survivors = battleResult.army1Survivors;
  const army2Survivors = battleResult.army2Survivors;

  let resultText = "Battle Result: ";
  if (winner === "draw") {
    resultText += "It's a draw!";
  } else {
    resultText += `Army ${winner} wins!`;
  }

  resultText += `<br>Army 1 Survivors: ${army1Survivors}<br>Army 2 Survivors: ${army2Survivors}`;

  battleResultContainer.innerHTML = resultText;
}

// Function to simulate the battle
function simulateBattle(army1, army2) {
  const army1Survivors = [];
  const army2Survivors = [];

  const maxRounds = Math.max(army1.length, army2.length);

  for (let i = 0; i < maxRounds; i++) {
    const army1Unit = army1[i % army1.length];
    const army2Unit = army2[i % army2.length];

    const outcome = determineOutcome(army1Unit, army2Unit);

    if (outcome === "army1") {
      army1Survivors.push(army1Unit);
    } else if (outcome === "army2") {
      army2Survivors.push(army2Unit);
    }
  }

  let winner = "draw";
  if (army1Survivors.length > army2Survivors.length) {
    winner = "1";
  } else if (army2Survivors.length > army1Survivors.length) {
    winner = "2";
  }

  return {
    winner: winner,
    army1Survivors: army1Survivors.join(", "),
    army2Survivors: army2Survivors.join(", "),
    
  };
}
alert(winner);
alert(army1Survivors);
alert(army2Survivors);

// Function to randomly determine the outcome of a battle round
function determineOutcome(unit1, unit2) {
  const outcomes = ["army1", "army2", "draw"];
  return outcomes[Math.floor(Math.random() * outcomes.length)];
}

// Add event listeners to the unit list items
const unitItems = document.querySelectorAll("li[data-unit]");
unitItems.forEach((item) => {
  item.addEventListener("click", selectUnit);
});

// Add event listener to the battle button
const battleBtn = document.getElementById("battle-btn");
battleBtn.addEventListener("click", initiateBattle);

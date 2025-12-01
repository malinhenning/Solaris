const button = document.querySelectorAll("button");

// forEach loop för att hämta klick från varje klick på planet(button)
button.forEach((button) => {
  button.addEventListener("click", (event) => {
    // För att få fram en specifik planet när man klickar på den
    const planetName = event.currentTarget.dataset.name;
    console.log("Klickade på: " + planetName);

    fetchPlanetInfo(planetName);
  });
});

// API nyckel
async function fetchPlanetInfo(planetName) {
  try {
    const response = await fetch(
      "https://corsproxy.io/?https://4a6l0o1px9.execute-api.eu-north-1.amazonaws.com/bodies",
      {
        method: "GET",
        headers: {
          "x-zocom": "solaris-fPTHpvozwrJ7H2FT",
        },
      }
    );

    console.log("Status:", response.status);

    const data = await response.json();
    // Hämtar datan (bodies) från arrayen
    const planetsArray = data.bodies;

    const planet = planetsArray.find((p) => p.name === planetName);
    // Kontroll i consolen att planeten går att hämta
    console.log(data);
    console.log("Specifik planet:", planet);

    updateOverlay(planet);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

// Function som lägger till innehåll i overlayen med info om alla planeter -
// Kallar på functionen i fetchPlanetInfo-functionen
function updateOverlay(planet) {
  const planetHeader = document.querySelector(".planet-header");

  planetHeader.innerHTML = `
 ${planet.name}
`;

  const planetHeaderSmall = document.querySelector(".planet-header-small");

  planetHeaderSmall.innerHTML = `
${planet.latinName}
`;

  const planetInfo = document.querySelector(".planet-info");

  planetInfo.innerHTML = `
${planet.desc}
`;

  const planetNumbers = document.querySelector(".planet-numbers");

  planetNumbers.innerHTML = `
${planet.circumference}
${planet.distance}
${planet.temp.day}
${planet.temp.night}
`;

  const planetNumbers2 = document.querySelector(".planet-numbers2");

  planetNumbers2.innerHTML = `
${planet.moons.length}
`;
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

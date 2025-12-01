const button = document.getElementById("planet-info");

document.addEventListener("click", () => {
  console.log("eventListener works");
  fetchPlanetInfo();
});

// API nyckel
async function fetchPlanetInfo() {
  let response = await fetch(
    "https://4a6l0o1px9.execute-api.eu-north-1.amazonaws.com/bodies",
    {
      method: "GET",
      headers: { "x-zocom": "solaris-4wOFSa0vV0WtlFYK" },
    },

    {
      key: "solaris-1Cqgm3S6nlMechWO",
    }
  );

  const data = await response.json();
  console.log(data);
}

function on() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("overlay").style.transition = "3.15s";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

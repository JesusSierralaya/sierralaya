// functions.js
let trips = new Array(); // let trips = []

// retrieve saved destination from localstorages
// if there is not saved data tripSaved will be null
let tripsSaved = localStorage.getItem("trips");

// if tripsSaved is not null is parsed from JSON to an
// object (array) and assigned to trips
if (tripsSaved != null) {
  trips = JSON.parse(tripsSaved);
  createTripList(trips); // updates the HTML with saved trips
}
// END retrieve saved destination from localstorages

// when the button is clicked the anonymous function is executed
document.querySelector("#bAdd").addEventListener("click", (event) => {
  let destination = document.querySelector("#iDestination").value;
  let name = document.querySelector('#iName').value;
  let photo = document.querySelector('#iPhoto').value;
  // create a new object called trip using the prev values
  let trip = {
    destination: destination,
    name: name,
    photo: photo
  };
  trips.push(trip); // add the trip to the trips array
  createTripList(trips); // html format
});

// set the HTML elements
function createTripList(trips) {
  let htmlDestinations = "";
  trips.map((trip) => {
    htmlDestinations += `
    <div class="destination">
        <div class="name-trip">${trip.name}</div>
        <div class="country-destination">${trip.destination}</div>
        <div class="div-image">
            <img src="${trip.photo}">
        </div>
    </div>`;
  });
  document.querySelector("#destinations").innerHTML = htmlDestinations;
  // clear the input fields
  document.querySelector("#iDestination").value = "";
  document.querySelector("#iName").value = "";
  document.querySelector("#iPhoto").value = "";
}

// Save destinations in localStorage
document.querySelector("#bSave").addEventListener("click", save);
// Converts trips array into a JSON string
function save() {
  let strTrips = JSON.stringify(trips);
  localStorage.setItem("trips", strTrips);
}
// END - Save destinations in localStorage
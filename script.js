function calculateParkingFee() {
    // Get input values
    const vehicleType = document.getElementById("vehicleType").value;
    const entryTime = new Date("2000-01-01 " + document.getElementById("entryTime").value);
    const exitTime = new Date("2000-01-01 " + document.getElementById("exitTime").value);

    // Calculate parking duration (in minutes)
    const parkingDuration = (exitTime - entryTime) / (1000 * 60);

    // Define parking rates (example)
    let parkingRate;
    switch (vehicleType) {
        case "car":
            parkingRate = 30; // Per hour
            break;
        case "bike":
            parkingRate = 20; // Per hour
            break;
        case "truck":
            parkingRate = 80; // Per hour
            break;
        case "bus":
            parkingRate = 50; // Per hour
            break;
        default:
            parkingRate = 0;
    }

    // Calculate parking fee
    const parkingFee = Math.ceil(parkingDuration / 60) * parkingRate;

    // Display parking fee
    document.getElementById("parkingFee").textContent = "₹" + parkingFee;

    // Add parking history to table
    const tableBody = document.getElementById("parkingHistory").getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    cell1.innerHTML = vehicleType;
    cell2.innerHTML = document.getElementById("vehicleNumber").value;
    cell3.innerHTML = entryTime.toLocaleTimeString();
    cell4.innerHTML = exitTime.toLocaleTimeString();
    cell5.innerHTML = "₹" + parkingFee;
}

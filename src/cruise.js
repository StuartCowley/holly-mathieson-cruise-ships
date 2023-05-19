// ship {
// captain:
// passengers:
// starting port:
// function allAboard()
// }

class Ship {
	constructor(name, captain, maxPassengers, startingPort) {
		this.name = name;
		this.captain = captain;
		this.maxPassengers = maxPassengers;
		this.passengersOnBoard = 0;
		this.passengerList = [];
		this.startingPort = startingPort;
	}

	allAboard() {
		return new Ship();
	}
}

const ship = new Ship("Lollipop", "Bob", 500, "Glasgow");
ship.passengerList = ["Adam Ant", "Briony Button", "Catriona Crisp"];

module.exports = { Ship, ship };

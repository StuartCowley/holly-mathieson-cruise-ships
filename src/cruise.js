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
		this.currentPort = Port;
		this.journey = [];
	}

	allAboard() {
		this.passengersOnBoard = [...this.passengerList];
		return this.passengersOnBoard;
	}

	setSail() {
		return !this.startingPort;
	}

	dock(port) {
		this.currentPort = port;
	}
}

class Port {
	constructor(name) {
		this.portName = name;
	}
}
const ship = new Ship("Lollipop", "Bob", 500, "Glasgow");
ship.passengerList = ["Adam Ant", "Briony Button", "Catriona Crisp"];

module.exports = { Ship, ship, Port };

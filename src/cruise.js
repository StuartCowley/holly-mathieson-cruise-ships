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
		this.previousPort = null;
		this.currentPort = null;
		this.nextPort = null;
	}

	allAboard() {
		this.passengersOnBoard = [...this.passengerList];
		return this.passengersOnBoard;
	}

	setSail() {
		!this.startingPort;
		this.previousPort = this.currentPort;
	}

	dock(port) {
		this.currentPort = port;
	}
}

const ship = new Ship("Lollipop", "Bob", 500, "Glasgow");
ship.passengerList = ["Adam Ant", "Briony Button", "Catriona Crisp"];

module.exports = { Ship, ship };

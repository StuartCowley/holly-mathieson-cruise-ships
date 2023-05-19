// ship {
// captain:
// passengers:
// starting port:
// function allAboard()
// }

class Ship {
	constructor(name, captain, passengers, startingPort) {
		this.name = name;
		this.captain = captain;
		this.passengers = passengers;
		this.startingPort = startingPort;
	}

	allAboard() {
		return new Ship();
	}
}

const ship = new Ship("Lollipop");

module.exports = { Ship, ship };

class Port {
	constructor(name) {
		this.portName = name;
		this.ships = [];
	}

	addShip(ship) {
		return this.ships.push(ship);
	}

	removeShip(ship) {
		const i = this.ships.indexOf(ship);
		this.ships.splice(i, 1);
	}
}

module.exports = { Port };

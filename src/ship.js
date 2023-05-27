class Ship {
	constructor(maxPassengers, itinerary) {
		this.maxPassengers = maxPassengers;
		this.passengersOnBoard = 0;
		this.passengerList = [];
		this.itinerary = itinerary;
		this.previousPort = null;
		this.currentPort = null;
	}

	allAboard() {
		this.passengersOnBoard = [...this.passengerList];
		this.currentPort = this.itinerary.ports[0];
		return this.passengersOnBoard;
	}

	setSail() {
		const itinerary = this.itinerary;
		const portIndex = itinerary.ports.indexOf(this.currentPort);
		if (portIndex === itinerary.ports.length - 1) {
			console.log("Thanks for traveling!");
		} else {
			this.currentPort.removeShip(this);
			this.previousPort = this.currentPort;
			this.currentPort = null;
		}
	}

	dock() {
		const itinerary = this.itinerary;
		const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
		this.currentPort = itinerary.ports[previousPortIndex + 1];
		this.currentPort.addShip(this);
		console.log(`Ooh, isn't the weather lovely here in {$this.currentPort}!`);
	}
}

module.exports = { Ship };

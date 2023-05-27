class Ship {
	constructor(maxPassengers, itinerary) {
		this.maxPassengers = maxPassengers;
		this.passengersOnBoard = 0;
		this.passengerList = [];
		this.itinerary = itinerary;
		this.previousPort = null;
		this.currentPort = itinerary[0];
	}

	allAboard() {
		this.passengersOnBoard = [...this.passengerList];
		return this.passengersOnBoard;
	}

	setSail() {
		const itinerary = this.itinerary;
		const portIndex = this.itinerary.indexOf(this.currentPort);
		if (portIndex === itinerary.length - 1) {
			console.log("Thanks for traveling!");
		} else {
			this.previousPort = this.currentPort;
			this.currentPort = null;
		}
	}

	dock() {
		const itinerary = this.itinerary;
		const previousPortIndex = itinerary.indexOf(this.previousPort);
		this.currentPort = itinerary[previousPortIndex + 1];
		console.log(this.currentPort.ships);
		console.log(`Ooh, isn't the weather lovely here in {$this.currentPort}!`);
	}
}

module.exports = { Ship };

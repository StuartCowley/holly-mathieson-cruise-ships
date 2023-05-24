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
		this.previousPort = this.itinerary[0];
		this.currentPort = null;
	}

	dock() {
		this.currentPort = this.itinerary[1];
	}
}

module.exports = { Ship };

const { Ship, ship } = require("../src/cruise.js");

describe("Ship", () => {
	it("returns a ship when I call new Ship", () => {
		expect(new Ship()).toBeInstanceOf(Object);
	});

	it("every ship needs a name", () => {
		expect(ship.name).toEqual("Lollipop");
	});

	it("every ship needs a Captain", () => {
		expect(ship.captain).toEqual("Bob");
	});

	it("how many passengers are on board?", () => {
		expect(ship.passengersOnBoard).toEqual(0);
	});

	it("how many passengers are we taking?", () => {
		expect(ship.maxPassengers).toEqual(500);
	});

	it("who are we taking?", () => {
		expect(ship.passengerList).toHaveLength(3);
	});

	it("what is the starting port?", () => {
		expect(ship.startingPort).toEqual("Glasgow");
	});

	it("can we get the passengers on board?", () => {
		ship.allAboard();
		expect(ship.passengersOnBoard).toHaveLength(3);
	});

	it("can we start the journey?", () => {
		ship.setSail();
		expect(ship.startingPort).toBeFalsy;
	});
});

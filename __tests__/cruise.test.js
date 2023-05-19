const { Ship, ship } = require("../src/cruise.js");

describe("constructor", () => {
	test("return a ship when I call new Ship", () => {
		expect(new Ship()).toEqual(ship);
	});

	test("every ship needs a name", () => {
		expect(ship.name).toEqual("Lollipop");
	});

	test("every ship needs a Captain", () => {
		expect(ship.captain).toEqual("Bob");
	});

	test("how many passengers are on board?", () => {
		expect(ship.passengersOnBoard).toEqual(0);
	});

	test("how many passengers are we taking?", () => {
		expect(ship.maxPassengers).toEqual(500);
	});

	test("who are we taking?", () => {
		expect(ship.passengerList).toHaveLength(3);
	});

	test("what is the starting port?", () => {
		expect(ship.startingPort).toEqual("Glasgow");
	});

	xtest("can we get the passengers on board?", () => {
		expect(new Ship("Lollipop")).toEqual(ship);
	});
});

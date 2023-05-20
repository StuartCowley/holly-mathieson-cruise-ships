const { Ship, ship, Port, Itinerary } = require("../src/cruise.js");

describe("Ship", () => {
	test("return a ship when I call new Ship", () => {
		expect(new Ship()).toBeInstanceOf(Object);
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

	test("can we get the passengers on board?", () => {
		ship.allAboard();
		expect(ship.passengersOnBoard).toHaveLength(3);
	});

	test("can we start the journey?", () => {
		ship.setSail();
		expect(ship.startingPort).toBeFalsy;
	});

	test("can we dock?", () => {
		const halifax = new Port("Halifax");

		const ship = new Ship(halifax);
		ship.dock(halifax);
		expect(ship.currentPort).toBe(halifax);
		const newYork = new Port("new York");
		ship.dock(newYork);
		expect(ship.currentPort).toBe(newYork);
	});

	test("where are we going?", () => {});
});

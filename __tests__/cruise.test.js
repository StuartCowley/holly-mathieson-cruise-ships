const { Ship, ship, Port, portName } = require("../src/cruise.js");

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
		ship.dock("Halifax");
		expect(ship.port).toEqual("Halifax");
	});
});

describe("Port", () => {
	test("Have we docked?", () => {
		const port = new Port("Glasgow");
		expect(new Port()).toBeInstanceOf(Object);
		expect(port).toHaveProperty("portName");
		expect(port.portName).toEqual("Glasgow");
	});
});

const { Ship } = require("../src/ship.js");

describe("Ship", () => {
	const ship = new Ship(500, ["Glasgow", "Halifax"]);
	ship.passengerList = ["Adam Ant", "Briony Button", "Catriona Crisp"];

	it("returns a ship when I call new Ship", () => {
		expect(new Ship(500, ["Glasgow", "Halifax"])).toBeInstanceOf(Object);
	});

	it("how many passengers are on board?", () => {
		expect(ship.passengersOnBoard).toEqual(0);
	});

	it("how many passengers can we take?", () => {
		expect(ship.maxPassengers).toEqual(500);
	});

	it("who are we taking?", () => {
		expect(ship.passengerList).toHaveLength(3);
	});

	it("can we get the passengers on board?", () => {
		ship.allAboard();
		expect(ship.passengersOnBoard).toHaveLength(3);
	});

	it("can start the journey", () => {
		ship.setSail();
		expect(ship.previousPort).toEqual("Glasgow");
		expect(ship.currentPort).toBe(null);
	});

	it("can dock", () => {
		const ship = new Ship(200, ["Aberdeen", "Dundee"]);
		ship.setSail();
		ship.dock();
		expect(ship.currentPort).toEqual("Dundee");
		expect(ship.previousPort).toEqual("Aberdeen");
	});
});

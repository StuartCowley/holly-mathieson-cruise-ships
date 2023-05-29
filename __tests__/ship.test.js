const { Ship } = require("../src/ship.js");

describe("Ship constructor", () => {
	let aberdeen;
	let dundee;
	let itinerary;
	let ship;

	beforeEach(() => {
		aberdeen = {
			name: "Aberdeen",
			ships: [],
			removeShip: jest.fn(),
			addShip: jest.fn(),
		};
		dundee = {
			name: "Dundee",
			ships: [],
			removeShip: jest.fn(),
			addShip: jest.fn(),
		};
		itinerary = { ports: [aberdeen, dundee] };
		ship = new Ship(itinerary);
	});
	it("can make new ships", () => {
		expect(ship).toBeInstanceOf(Object);
		expect(ship.previousPort).toBeFalsy();
		expect(ship.currentPort).toEqual(aberdeen);
		expect(aberdeen.addShip).toHaveBeenCalledWith(ship);
	});

	it("can start the journey", () => {
		ship.setSail();
		expect(ship.previousPort).toEqual(itinerary.ports[0]);
		expect(ship.currentPort).toBe(null);
		expect(aberdeen.removeShip).toHaveBeenCalledWith(ship);
	});

	it("can dock", () => {
		ship.setSail();
		ship.dock();
		expect(ship.currentPort).toEqual(itinerary.ports[1]);
		expect(ship.previousPort).toEqual(itinerary.ports[0]);
		expect(dundee.addShip).toHaveBeenCalledWith(ship);
	});
});

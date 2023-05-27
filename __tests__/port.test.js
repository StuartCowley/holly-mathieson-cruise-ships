const { Port } = require("../src/port.js");

describe("Port", () => {
	const port = new Port("Glasgow", "Halifax");
	const ship1 = jest.fn();
	const ship2 = jest.fn();

	it("can dock", () => {
		expect(new Port()).toBeInstanceOf(Object);
		expect(port).toHaveProperty("port");
		expect(port.port).toContain("Glasgow");
	});

	it("can keep track of docked ships", () => {
		port.addShip(ship1);
		expect(port.ships).toContain(ship1);
		port.addShip(ship2);
		expect(port.ships).toContain(ship1 && ship2);
	});

	it("can forget ships when they leave", () => {
		port.removeShip(ship1);
		expect(port.ships).toContain(ship2);
		expect(port.ships).not.toContain(ship1);
	});
});

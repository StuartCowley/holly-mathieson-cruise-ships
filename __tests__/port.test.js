const { Ship, ship, Port, portName } = require("../src/cruise.js");

describe("Port", () => {
	test("Have we docked?", () => {
		const port = new Port("Glasgow");
		expect(new Port()).toBeInstanceOf(Object);
		expect(port).toHaveProperty("portName");
		expect(port.portName).toEqual("Glasgow");
	});
});

const { Ship, ship } = require("../src/cruise.js");

describe("constructor", () => {
	test("return a ship when i call new Ship", () => {
		expect(new Ship("Lollipop")).toEqual(ship);
	});
});

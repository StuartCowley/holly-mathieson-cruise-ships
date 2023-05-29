const { Itinerary } = require("../src/itinerary.js");

describe("Itinerary", () => {
	const glasgow = jest.fn();
	const halifax = jest.fn();
	let itinerary;

	beforeEach(() => {
		itinerary = new Itinerary([glasgow, halifax]);
	});

	it("load a new itinerary", () => {
		expect(itinerary).toBeInstanceOf(Object);
	});

	it("has ports in travel order", () => {
		expect(itinerary.ports).toEqual([glasgow, halifax]);
		expect(itinerary.ports[0]).toEqual(glasgow);
		expect(itinerary.ports[1]).toEqual(halifax);
		expect(itinerary.ports[2]).toEqual(undefined);
	});
});

const { Itinerary } = require("../src/itinerary.js");

describe("Itinerary", () => {
	it("load a new itinerary", () => {
		expect(new Itinerary(["Glasgow", "Halifax"])).toBeInstanceOf(Object);
	});

	it("has ports in travel order", () => {
		const dover = "Dover";
		const calais = "Calais";
		const itinerary = new Itinerary([dover, calais]);
		expect(itinerary.ports[0]).toEqual("Dover");
		expect(itinerary.ports[1]).toEqual("Calais");
		expect(itinerary.ports[2]).toEqual(undefined);
	});
});

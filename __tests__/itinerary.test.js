const { Itinerary } = require("../src/itinerary.js");

describe("Itinerary", () => {
	it("load a new itinerary", () => {
		// const glasgow = { name: "Glasgow" };
		// const halifax = { name: "Halifax" };
		// const itinerary = new Itinerary(glasgow, halifax);
		expect(new Itinerary(["Glasgow", "Halifax"])).toBeInstanceOf(Object);
	});
});

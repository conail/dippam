import Place from "../../modules/models/place.js"

describe("A place", () => {
    const place = new Place("Belfast");
    
    it("has a name", () => expect(place.name).toBe("Belfast"))
    it("has a latitude", () => expect(typeof place.lat).toBe("number"))
    it("has a longitute", () => expect(typeof place.lng).toBe("number"))
})
import Collection from "../../modules/models/collection.js"

describe("A collection", () => {
    const c = new Collection("a title", "a description")
    
    it("contains a title", () => expect(c.title).toBe("a title"))
    it("contains a description", () => expect(c.description).toBe("a description"))
    it("has a default URI prefix.", () => expect(c.uri).toBe("/"))
})

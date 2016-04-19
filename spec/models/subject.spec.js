import Subject from "../../modules/models/subject.js"

describe("A Library of Congress Subject", () => {
  var subject = new Subject("Ireland")
  
  it("has a name", () => expect(subject.name).toBe("Ireland"))
  it("has a parent Subject property", () => expect(subject.parent).toBe(null))
})
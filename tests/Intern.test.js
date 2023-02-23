const Intern = require("../lib/Intern");

// Unit test for Intern class
describe("Intern", () => {
  it("should create an object with name, id, and email", () => {
    const intern = new Intern("John Doe", 123, "a@b.com");
    expect(intern.name).toBe("John Doe");
    expect(intern.id).toBe(123);
    expect(intern.email).toBe("a@b.com");
  });
});

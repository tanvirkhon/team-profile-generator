const Manager = require("../lib/Manager");

// Unit test for Manager class
describe("Manager", () => {
  it("should create an object with name, id, and email", () => {
    const manager = new Manager("John Doe", 123, "a@b.com");
    expect(manager.name).toBe("John Doe");
    expect(manager.id).toBe(123);
    expect(manager.email).toBe("a@b.com");
  });
});

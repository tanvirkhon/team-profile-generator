const Engineer = require("../lib/Engineer");

// Unit test for Engineer class
describe("Engineer", () => {
  it("should create an object with name, id, and email", () => {
    const engineer = new Engineer("John Doe", 123, "a@b.com");
    expect(engineer.name).toBe("John Doe");
    expect(engineer.id).toBe(123);
    expect(engineer.email).toBe("a@b.com");
  });
});

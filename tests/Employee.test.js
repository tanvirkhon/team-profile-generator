const Employee = require("../lib/Employee");

// Unit test for Employee class
describe("Employee", () => {
  // Test for Employee class
  describe("Initialization", () => {
    it("should create an object with name, id, and email", () => {
      const employee = new Employee("John Doe", 123, "a@b.com");
      expect(employee.name).toBe("John Doe");
      expect(employee.id).toBe(123);
      expect(employee.email).toBe("a@b.com");
    });
  });
});

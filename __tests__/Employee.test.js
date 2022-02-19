const Employee = require("../lib/employee.js");

test("creates an employee object", () => {
    const employee = new Employee("john", "785315", "john@gmail.com");

    expect(employee.name).toBe("john");
    expect(employee.id).toBe("785315");
    expect(employee.email).toBe("john@gmail.com");
});

test("gets employee name", () => {
    const employee = new Employee("john", "785315", "john@gmail.com");

    expect(employee.getName()).toBe("john");
});

test("gets employee id", () => {
    const employee = new Employee("john", "785315", "john@gmail.com");

    expect(employee.getId()).toBe("785315");
});

test("gets employee email", () => {
    const employee = new Employee("john", "785315", "john@gmail.com");

    expect(employee.getEmail()).toBe("john@gmail.com");
});

test("gets employee role", () => {
    const employee = new Employee("john", "785315", "john@gmail.com");

    expect(employee.getRole()).toBe("Employee");
});
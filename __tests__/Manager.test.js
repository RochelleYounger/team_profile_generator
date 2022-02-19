const Manager = require("../lib/Manager");

test("creates an manager object", () => {
    const manager = new Manager("john", "785315", "john@gmail.com", "3");

    expect(manager.name).toBe("john");
    expect(manager.id).toBe("785315");
    expect(manager.email).toBe("john@gmail.com");
    expect(manager.officeNumber).toBe("3");
});

test("gets manager role", () => {
    const manager = new Manager("john", "785315", "john@gmail.com", "3");

    expect(manager.getRole()).toBe("Manager");
});

test("gets manager office number", () => {
    const manager = new Manager("john", "785315", "john@gmail.com", "3");

    expect(manager.getOfficeNumber()).toBe("3");
});
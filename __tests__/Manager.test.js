const Manager = require("../lib/Manager");

test("creates an manager object", () => {
    const manager = new Manager("john", "785315", "john@gmail.com", "3");

    expect(manager.name).toBe("john");
    expect(manager.id).toBe("785315");
    expect(manager.email).toBe("john@gmail.com");
    expect(manager.officeNumber).toBe("3");
});

test("gets manager name", () => {
    const manager = new Manager("john", "785315", "john@gmail.com", "3");

    expect(manager.getName()).toBe("john");
});

test("gets manager id", () => {
    const manager = new Manager("john", "785315", "john@gmail.com", "3");

    expect(manager.getId()).toBe("785315");
});

test("gets manager email", () => {
    const manager = new Manager("john", "785315", "john@gmail.com", "3");

    expect(manager.getEmail()).toBe("john@gmail.com");
});

test("gets manager role", () => {
    const manager = new Manager("john", "785315", "john@gmail.com", "3");

    expect(manager.getRole()).toBe("Manager");
});

test("gets manager office number", () => {
    const manager = new Manager("john", "785315", "john@gmail.com", "3");

    expect(manager.getOfficeNumber()).toBe("3");
});
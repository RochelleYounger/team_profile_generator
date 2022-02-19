const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
    const engineer = new Engineer("john", "78515", "john@gmail.com", "johnnyjohn");

    expect(engineer.name).toBe("john");
    expect(engineer.id).toBe("78515");
    expect(engineer.email).toBe("john@gmail.com");
    expect(engineer.github).toBe("johnnyjohn");
});

test("gets engineer name", () => {
    const engineer = new Engineer("john", "78515", "john@gmail.com", "johnnyjohn");

    expect(engineer.getName()).toBe("john");
});

test("gets engineer id", () => {
    const engineer = new Engineer("john", "78515", "john@gmail.com", "johnnyjohn");

    expect(engineer.getId()).toBe("78515");
});

test("gets engineer email", () => {
    const engineer = new Engineer("john", "78515", "john@gmail.com", "johnnyjohn");

    expect(engineer.getEmail()).toBe("john@gmail.com");
});

test("gets engineer role", () => {
    const engineer = new Engineer("john", "78515", "john@gmail.com", "johnnyjohn");

    expect(engineer.getRole()).toBe("Engineer");
});

test("gets engineer github username", () => {
    const engineer = new Engineer("john", "78515", "john@gmail.com", "johnnyjohn");

    expect(engineer.getGithub()).toBe("johnnyjohn");
});
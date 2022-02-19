const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
    const engineer = new Engineer("john", "78515", "john@gmail.com", "johnnyjohn");

    expect(engineer.name).toBe("john");
    expect(engineer.id).toBe("78515");
    expect(engineer.email).toBe("john@gmail.com");
    expect(engineer.github).toBe("johnnyjohn");
});

test("gets engineer role", () => {
    const engineer = new Engineer("john", "78515", "john@gmail.com", "johnnyjohn");

    expect(engineer.getRole()).toBe("Engineer");
});

test("gets engineer github username", () => {
    const engineer = new Engineer("john", "78515", "john@gmail.com", "johnnyjohn");

    expect(engineer.getGithub()).toBe("johnnyjohn");
});
const Intern = require("../lib/Intern");

test("creates an intern object", () => {
    const intern = new Intern("john", "78515", "john@gmail.com", "Institute of Interning");

    expect(intern.name).toBe("john");
    expect(intern.id).toBe("78515");
    expect(intern.email).toBe("john@gmail.com");
    expect(intern.school).toBe("Institute of Interning");
});

test("gets intern role", () => {
    const intern = new Intern("john", "78515", "john@gmail.com", "Institute of Interning");

    expect(intern.getRole()).toBe("Intern");
});

test("gets intern school name", () => {
    const intern = new Intern("john", "78515", "john@gmail.com", "Institute of Interning");

    expect(intern.getSchool()).toBe("Institute of Interning");
});
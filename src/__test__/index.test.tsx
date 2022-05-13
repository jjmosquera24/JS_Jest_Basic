const randomStrings = require("../index");

describe("Probar funcionalidades de randomstrings", () => {
  test("Probar el tipo de dato", () => {
    expect(typeof randomStrings()).toBe("string");
  });

  test("Comprobar q no existe una ciudad", () => {
    expect(randomStrings()).not.toMatch(/Cordoba/);
  });
});

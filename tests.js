// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello Unit Tests', function() {
    it('should be a defined function', function () {
        expect(sayHello).toBeDefined();
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello!" when no arguments are passed', function () {
        expect(sayHello()).toBe("Hello!");
    });
    it('should return "Hello, Kat!" when called with argument "Kat"', function () {
        expect(sayHello("Kat")).toBe("Hello, Kat!");
    });
});
import truthy = jasmine.truthy;

describe("Test App", function() {
    it("contains spec with an expectation", function() {
        expect(true).toEqual(truthy());
    });
});

import chai from "chai";

chai.should();

describe('some feature', () => {
    it("should pass", () => {
        'foo'.should.not.equal('bar');
    });

    it("should error", () => {
        (()=> { throw new Error();}).should.throw();
    });
})
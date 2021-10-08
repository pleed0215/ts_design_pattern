"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = __importDefault(require("chai"));
chai_1.default.should();
describe('some feature', function () {
    it("should pass", function () {
        'foo'.should.not.equal('bar');
    });
    it("should error", function () {
        (function () { throw new Error(); }).should.throw();
    });
});

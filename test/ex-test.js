let chai = require('chai')
let expect = chai.expect
// ^node way of saying: <script src='chai.js'></script>

let calc = require('../app.js')

describe('a calculator', function() { //takes 1.string of what you're dsecribing 2.func
    it('can add two numbers', function() {
        expect(calc.add(2,4)).to.equal(6)
        expect(calc.add(10,4)).to.equal(14)
    })
    it('can subtract two numbers', function() {
        expect(calc.sub(10,4)).to.equal(6)
        expect(calc.sub(20,5)).to.equal(15)
        expect(calc.sub(0,2)).to.equal(-2)
    })
})
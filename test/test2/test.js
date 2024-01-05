import assert from 'assert';
import calc from '../../app/calc.js'
const calculette = new calc();

describe('Mes tests mathématiques', () => {
    it('doit aditionner les arguments', (done) => {
      let result = calculette.addition(1, 1);
      assert.strictEqual(result, 2, 'addition égale à 2');
      done();
    });
 
    it('doit aditionner les arguments si un nombre indéfini d\'arguments', (done) => {
        assert.equal(calculette.addition(1,2,3,4), 10, 'addition égale à 10');
        done();
      });

    it('doit soustraire arg2 à arg1', (done) => {
        assert.equal(calculette.soustraction(5, 3), 2, 'soustraction égale à 2');
        done();
    });

    it('doit soustraire les arguments si un nombre indéfini d\'arguments', (done) => {
        assert.equal(calculette.soustraction(30, 10, 5, 2), 13, 'soustraction égale à 2');
        done();
    });

    it('doit multiplier arg1 à arg2', (done) => {
        assert.equal(calculette.multiplication(1, 2), 2, 'soustraction égale à 2');
        done();
    });

    it('doit multiplier les arguments si un nombre indéfini d\'arguments', (done) => {
        assert.equal(calculette.multiplication(1, 2, 2, 3, 5), 60, 'soustraction égale à 2');
        done();
    });


    it('doit diviser arg1 par arg2', (done) => {
        assert.equal(calculette.division(10, 2), 5, 'division égale à 5');
        done();
    });

    it('doit diviser les arguments si un nombre indéfini d\'arguments', (done) => {
        assert.equal(calculette.division(10, 2), 5, 'division égale à 5');
        done();
    });
});
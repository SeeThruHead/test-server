import { assert } from 'chai';

import upcaseReverse from '../utils/upcaseReverse';

suite('upcase and reverse', function() {
  test('should return a reversed uppercased string', function() {
    assert.equal('GFDSA', upcaseReverse('asdfg'));
  });

  test('empty input returns undefined', function() {
    assert.notOk(upcaseReverse(), 'string is undefined');
    assert.notOk(upcaseReverse(''), 'string is empty');
  });
});

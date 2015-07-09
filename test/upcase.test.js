import { assert } from 'chai';

import upcase from '../utils/upcase';

suite('upcase', function() {
  test('upcase should return an uppercased string', function() {
    assert.equal('ASDFG', upcase('asdfg'));
  });

  test('empty input returns undefined', function() {
    assert.notOk(upcase(), 'string is undefined');
    assert.notOk(upcase(''), 'string is empty');
  });
});

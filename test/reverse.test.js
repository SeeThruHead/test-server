import { assert } from 'chai';

import reverse from '../utils/reverse';

suite('reverse', function() {
  test('reverse should return a reversed string', function() {
    assert.equal('asdfg', reverse('gfdsa'));
  });

  test('empty input returns undefined', function() {
    assert.notOk(reverse(), 'string is undefined');
    assert.notOk(reverse(''), 'string is empty');
  });
});

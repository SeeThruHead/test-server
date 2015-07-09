
import { assert } from 'chai';

import reverse from '../utils/reverse';

suite('reverse', function() {
  test('this test should fail', function() {
    assert.equal('asdfg', reverse('dsa'));
  });
});

import test from 'tape';
import TextFilter from '../src/TextFilter';

test('TextFilter', t => {
  t.ok(TextFilter instanceof Function, 'should be function');
  t.end();
});

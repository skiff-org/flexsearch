import test from 'ava';
import { Index } from '../dist/flexsearch.es.js';

test('Create an Index without errors', t => {
  t.notThrows(() => new Index());
});

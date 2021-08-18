import test from 'ava';
import { Index } from '../dist/flexsearch.es.js';

test('Create an Index without errors', t => {
  t.notThrows(() => new Index());
});

test('Simple search', t => {
  const idx = new Index();
  idx.add(1, 'foo');
  idx.add(2, 'bar');
  idx.add(5, 'foobar');
  idx.add(12, 'foo bar');

  let searchResult;

  // Try searching for one term
  searchResult = idx.search('foobar');
  t.is(searchResult.length, 1);
  t.is(searchResult[0], 5);

  // Now try searching for a query that will return multiple results
  searchResult = idx.search('foo');
  t.is(searchResult.length, 2);
  t.assert(searchResult.includes(1));
  t.assert(searchResult.includes(12));

  // Searching for a nonsense query should return nothing
  searchResult = idx.search('unrelated');
  t.is(searchResult.length, 0);
});

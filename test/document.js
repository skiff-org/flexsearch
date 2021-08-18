import test from 'ava';
import { Document } from '../dist/flexsearch.es.js';

test('Create a Document without errors', t => {
  t.notThrows(() => new Document({
    document: {
      id: 'id',
      field: [
        'data:title',
        'data:body'
      ]
    }
  }));
});

test('Simple document search', t => {
  const doc = new Document({
    document: {
      id: 'id',
      field: [
        'title',
        'content'
      ]
    }
  });

  doc.add({
    id: 1, // credit to animedads on tumblr
    title: 'Dark Souls',
    content: 'Every Soul has its Dark'
  });

  let searchResult;

  // this should only register one hit, in content
  searchResult = doc.search('has its');
  t.is(searchResult.length, 1);
  t.is(searchResult[0].field, 'content');

  // But if we search for 'Dark' which appears in both title and content, we
  // should get this result twice
  searchResult = doc.search('Dark');
  // there should be two results
  t.is(searchResult.length, 2);
  // One should have field 'title'
  t.truthy(searchResult.find(result => result.field === 'title'));
  // And one should have field 'content'
  t.truthy(searchResult.find(result => result.field === 'content'));
});

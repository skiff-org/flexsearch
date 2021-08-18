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

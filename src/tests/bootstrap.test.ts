import { expect, test } from 'vitest'
import { app } from '../bootstrap'

test('it should return /', async () => {
  const response = await app.inject({method: 'GET', url: '/'});

  expect(response.statusCode).toBe(200);
  expect(response.payload).toBe('Ikigai');
})

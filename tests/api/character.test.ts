import { test, expect } from '@playwright/test';

test('It should retrieve characters with filters', async ({ request }) => {
  const response = await request.get('https://rickandmortyapi.com/api/character/?name=rick');
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data.results).toBeInstanceOf(Array);
  expect(data.results[0].name).toBe('Rick Sanchez');
});


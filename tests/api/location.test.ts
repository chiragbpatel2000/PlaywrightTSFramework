import test, { expect } from "@playwright/test";

test('It should retrieve location schema', async ({ request }) => {
  const response = await request.get('https://rickandmortyapi.com/api/location/1');
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data).toHaveProperty('name');
  expect(data).toHaveProperty('type');
});
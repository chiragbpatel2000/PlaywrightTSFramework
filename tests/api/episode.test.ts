import test, { expect } from "@playwright/test";

test('It should have at least 1 character in episode', async ({ request }) => {
  const response = await request.get('https://rickandmortyapi.com/api/episode/1');
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data.characters).toBeInstanceOf(Array);
  expect(data.characters.length).toBeGreaterThan(0);
});
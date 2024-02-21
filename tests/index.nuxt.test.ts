import { describe, test, expect } from 'vitest'
import { createPage, setup } from '@nuxt/test-utils/e2e'

describe('Test index page', async () => {
  await setup({
    port: 3030,
    setupTimeout: 1000 * 60 * 2,
  })

  test('test index page has meta title', async () => {
    const page = await createPage('/')
    const title = await page.title()
    expect(title).toMatch(/\w+\s\|\skyomi/)
  })
})

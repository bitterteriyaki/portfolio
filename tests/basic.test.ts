import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('basic', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('Renders "Hello world!"', async () => {
    expect(await $fetch('/')).toMatch('Hello world!')
  })
})

import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import appVue from '~/app.vue'

describe('basic', async () => {
  it('should render "Hello world!"', async () => {
    const component = await mountSuspended(appVue)
    expect(component.html()).toContain('Hello world!')
  })
})

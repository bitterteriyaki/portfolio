import { describe, expect, it } from 'vitest'
import AppMain from '~/components/layout/AppMain.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'

describe('App Main Component', () => {
  it('should render the main component correctly', async () => {
    const component = await mountSuspended(AppMain)
    expect(component.html()).toBeTruthy()
  })

  it('should contain the main element', async () => {
    const component = await mountSuspended(AppMain)
    const main = component.find('main')

    expect(main.exists()).toBe(true)
  })
})

import { describe, expect, it } from 'vitest'
import App from '~/app.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'

describe('Base App Component', () => {
  it('should render the app correctly', async () => {
    const component = await mountSuspended(App)
    expect(component.html()).toBeTruthy()
  })

  it('should include the `AppHeader` component', async () => {
    const component = await mountSuspended(App)

    // Should have navigation items
    expect(component.text()).toContain('Home')
    expect(component.text()).toContain('Blog')
  })

  it('should include the `AppFooter` component', async () => {
    const component = await mountSuspended(App)
    const currentYear = new Date().getFullYear()

    expect(component.text()).toContain(`© ${currentYear}`)
    expect(component.text()).toContain('Built with Nuxt UI')
  })

  it('should include the `AppMain` component', async () => {
    const component = await mountSuspended(App)
    const main = component.find('main')

    expect(main.exists()).toBe(true)
  })
})

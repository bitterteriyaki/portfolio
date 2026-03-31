import { describe, expect, it } from 'vitest'
import AppFooter from '~/components/layout/AppFooter.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'

describe('App Footer Component', () => {
  const github = 'https://github.com/bitterteriyaki'

  it('should render the footer component correctly', async () => {
    const component = await mountSuspended(AppFooter)
    expect(component.html()).toBeTruthy()
  })

  it('should display the footer text', async () => {
    const component = await mountSuspended(AppFooter)
    expect(component.text()).toContain('Made with ❤️ by kyomi')
  })

  it('should contain the GitHub link', async () => {
    const component = await mountSuspended(AppFooter)
    const link = component.find(`a[href="${github}"]`)

    expect(link.exists()).toBe(true)
  })

  it('should have GitHub link open in new tab', async () => {
    const component = await mountSuspended(AppFooter)
    const githubLink = component.find(`a[href="${github}"]`)

    expect(githubLink.attributes('target')).toBe('_blank')
  })

  it('GitHub button has correct aria-label', async () => {
    const component = await mountSuspended(AppFooter)
    const button = component.find('[aria-label="GitHub"]')

    expect(button.exists()).toBe(true)
  })
})

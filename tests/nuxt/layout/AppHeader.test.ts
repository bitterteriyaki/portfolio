import { describe, expect, it } from 'vitest'
import AppHeader from '~/components/layout/AppHeader.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'

describe('App Header Component', () => {
  it('should render the header component correctly', async () => {
    const component = await mountSuspended(AppHeader)
    expect(component.html()).toBeTruthy()
  })

  it('should display the avatar with link to home', async () => {
    const component = await mountSuspended(AppHeader)
    const link = component.find('a[href="/"]')

    expect(link.exists()).toBe(true)
  })

  it('should display the navigation menu items', async () => {
    const component = await mountSuspended(AppHeader)

    expect(component.text()).toContain('Home')
    expect(component.text()).toContain('Blog')
  })

  it('should render the color mode toggle button', async () => {
    const component = await mountSuspended(AppHeader)
    const buttons = component.findAll('button')

    expect(buttons.length).toBeGreaterThan(0)
  })

  it('should display the resume button with correct attributes', async () => {
    const component = await mountSuspended(AppHeader)
    const link = component.find('a[href="/resume.pdf"]')

    expect(component.text()).toContain('Resume')
    expect(link.exists()).toBe(true)
    expect(link.attributes('target')).toBe('_blank')
  })
})

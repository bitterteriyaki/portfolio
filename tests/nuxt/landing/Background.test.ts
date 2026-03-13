import { describe, expect, it } from 'vitest'
import LandingBackground from '~/components/landing/Background.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'

describe('Landing Background Component', () => {
  it('should render the background component correctly', async () => {
    const component = await mountSuspended(LandingBackground)
    expect(component.html()).toBeTruthy()
  })

  it('should render SVG element', async () => {
    const component = await mountSuspended(LandingBackground)
    const svg = component.find('svg')

    expect(svg.exists()).toBe(true)
  })

  it('should have opacity-0 class initially', async () => {
    const component = await mountSuspended(LandingBackground)
    const container = component.find('.absolute')

    expect(container.classes()).toContain('opacity-0')
  })

  it('should have absolute positioning', async () => {
    const component = await mountSuspended(LandingBackground)
    const container = component.find('.absolute')

    expect(container.exists()).toBe(true)
  })
})

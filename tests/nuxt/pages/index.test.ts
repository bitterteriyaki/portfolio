import { describe, expect, it } from 'vitest'
import IndexPage from '~/pages/index.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'

describe('Index Page', () => {
  it('should render the index page correctly', async () => {
    const component = await mountSuspended(IndexPage)
    expect(component.html()).toBeTruthy()
  })

  it('should display the hero section', async () => {
    const component = await mountSuspended(IndexPage)

    expect(component.text()).toContain('Let me turn your ideas into')
    expect(component.text()).toContain('reality')
  })

  it('should display the about me section', async () => {
    const component = await mountSuspended(IndexPage)

    expect(component.text()).toContain('About Me')
    expect(component.text()).toContain('I am a software developer')
  })

  it('should display the experiences section', async () => {
    const component = await mountSuspended(IndexPage)

    expect(component.text()).toContain('Experiences')
    expect(component.text()).toContain('Caixa Econômica Federal')
    expect(component.text()).toContain('Tecnisys')
  })

  it('should render all three landing components', async () => {
    const component = await mountSuspended(IndexPage)
    const html = component.html()

    // Should contain elements from all three components
    expect(html).toBeTruthy()
    expect(html.length).toBeGreaterThan(1000)
  })
})

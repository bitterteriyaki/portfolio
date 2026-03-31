import { describe, expect, it } from 'vitest'
import PostBackButton from '~/components/overlays/blog/PostBackButton.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'

describe('Post Back Button Component', () => {
  it('should render the back button correctly', async () => {
    const component = await mountSuspended(PostBackButton)
    expect(component.html()).toBeTruthy()
  })

  it('should display "Blog" text', async () => {
    const component = await mountSuspended(PostBackButton)
    expect(component.text()).toBe('Blog')
  })

  it('should have the arrow left icon', async () => {
    const component = await mountSuspended(PostBackButton)
    const html = component.html()

    expect(html).toContain('arrow-left')
  })

  it('should render as a link', async () => {
    const component = await mountSuspended(PostBackButton)
    const link = component.find('a[href="/blog"]')

    expect(link.exists()).toBe(true)
  })
})

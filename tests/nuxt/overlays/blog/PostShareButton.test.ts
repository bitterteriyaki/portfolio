import { describe, expect, it } from 'vitest'
import PostShareButton from '~/components/overlays/blog/PostShareButton.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'

describe('Post Share Button Component', () => {
  const defaultStubs = {
    UTooltip: {
      template: '<div><slot /></div>',
    },
  }

  const mountComponent = (props = {}) => {
    return mountSuspended(PostShareButton, {
      props: { route: '/blog/test-post', ...props },
      global: { stubs: defaultStubs },
    })
  }

  it('should render the share button correctly', async () => {
    const component = await mountComponent()
    expect(component.html()).toBeTruthy()
  })

  it('should have the share icon', async () => {
    const component = await mountComponent()
    const html = component.html()

    expect(html).toContain('arrow-up-tray')
  })

  it('button triggers click event', async () => {
    const component = await mountComponent()
    const button = component.find('button')

    expect(button.exists()).toBe(true)
    await button.trigger('click')
  })
})

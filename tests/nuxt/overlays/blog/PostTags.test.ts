import { describe, expect, it } from 'vitest'
import PostTags from '~/components/overlays/blog/PostTags.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'

describe('Post Tags Component', () => {
  const defaultStubs = {
    UTooltip: {
      template: '<div><slot /></div>',
    },
  }

  const mountComponent = (props = {}) => {
    return mountSuspended(PostTags, {
      props: { tags: [], ...props },
      global: { stubs: defaultStubs },
    })
  }

  it('should render the post tags correctly', async () => {
    const component = await mountComponent({ tags: ['vue', 'nuxt'] })
    expect(component.html()).toBeTruthy()
  })

  it('displays all provided tags', async () => {
    const component = await mountComponent({
      tags: ['vue', 'nuxt', 'typescript'],
    })

    expect(component.text()).toContain('vue')
    expect(component.text()).toContain('nuxt')
    expect(component.text()).toContain('typescript')
  })

  it('should have the tag icon', async () => {
    const component = await mountComponent({ tags: ['vue'] })
    const html = component.html()

    expect(html).toContain('tag')
  })

  it('should render the correct number of tags', async () => {
    const tags = ['vue', 'nuxt', 'typescript', 'testing']
    const component = await mountComponent({ tags })

    tags.forEach(tag => expect(component.text()).toContain(tag))
  })

  it('should render at least the language when no tags provided', async () => {
    const component = await mountComponent()
    const items = component.findAll('li')

    expect(items.length).toBeGreaterThanOrEqual(1)
    expect(component.text()).toContain('unknown')
  })
})

import { describe, expect, it } from 'vitest'
import type { BlogCollectionItem } from '@nuxt/content'
import PostMeta from '~/components/overlays/blog/PostMeta.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'

describe('Post Meta Component', () => {
  const mockPost: BlogCollectionItem = {
    id: '1',
    title: 'Test Post Title',
    description: 'Test description',
    date: '2025-03-25T12:20:00.000000-03:00',
    image: '/img/test.png',
    minRead: 5,
    tags: ['vue', 'nuxt'],
    author: {
      name: 'Test Author',
      avatar: { src: '/img/author.png', alt: 'Test Author' },
    },
    path: '/blog/2025/test-post',
    stem: 'test-post',
    extension: '.md',
    seo: {},
    meta: {},
    body: {
      type: 'minimark',
      value: [],
    },
  }

  const defaultStubs = {
    UTooltip: {
      template: '<div><slot /></div>',
    },
  }

  const mountComponent = (props = {}) => {
    return mountSuspended(PostMeta, {
      props: { post: mockPost, ...props },
      global: { stubs: defaultStubs },
      route: '/blog/test',
    })
  }

  it('should render the post meta correctly', async () => {
    const component = await mountComponent()
    expect(component.html()).toBeTruthy()
  })

  it('should render the `PostTags` component', async () => {
    const component = await mountComponent()

    expect(component.text()).toContain('vue')
    expect(component.text()).toContain('nuxt')
  })

  it('should render the `PostShareButton` component', async () => {
    const component = await mountComponent()
    const html = component.html()

    expect(html).toContain('arrow-up-tray')
  })
})

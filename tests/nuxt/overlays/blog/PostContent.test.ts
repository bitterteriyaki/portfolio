import { describe, expect, it } from 'vitest'
import type { BlogCollectionItem } from '@nuxt/content'
import PostContent from '~/components/overlays/blog/PostContent.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'

describe('Post Content Component', () => {
  const mockPost: BlogCollectionItem = {
    id: '1',
    title: 'Test Post Title',
    description: 'Test description',
    date: '2025-01-15',
    language: 'english',
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
    return mountSuspended(PostContent, {
      props: { post: mockPost, ...props },
      global: { stubs: defaultStubs },
    })
  }

  it('should render the post content correctly', async () => {
    const component = await mountComponent()
    expect(component.html()).toBeTruthy()
  })

  it('should display the post title', async () => {
    const component = await mountComponent()
    expect(component.text()).toContain('Test Post Title')
  })

  it('should render the post image with correct attributes', async () => {
    const component = await mountComponent()
    const img = component.find('img[src="/_ipx/_/img/test.png"]')

    expect(img.exists()).toBe(true)
    expect(img.attributes('alt')).toBe('Test Post Title')
  })

  it('should render the `PostInfo` component', async () => {
    const component = await mountComponent()
    expect(component.text()).toContain('5 min read')
  })

  it('should render the `PostMeta` component', async () => {
    const component = await mountComponent()

    expect(component.html()).toContain('vue')
    expect(component.html()).toContain('nuxt')
  })
})

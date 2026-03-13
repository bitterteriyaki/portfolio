import { describe, expect, it, vi } from 'vitest'
import { mockNuxtImport, mountSuspended } from '@nuxt/test-utils/runtime'
import BlogIndexPage from '~/pages/blog/index.vue'

mockNuxtImport('queryCollection', () => {
  return vi.fn(() => ({
    order: vi.fn(() => ({
      all: vi.fn(() => Promise.resolve([
        {
          id: '1',
          path: '/blog/2025/test-post',
          title: 'Test Post 1',
          description: 'Description 1',
          date: '2025-01-15',
          image: '/img/test1.png',
        },
        {
          id: '2',
          path: '/blog/2025/test-post-2',
          title: 'Test Post 2',
          description: 'Description 2',
          date: '2025-01-10',
          image: '/img/test2.png',
        },
      ])),
    })),
  }))
})

describe('Blog Index Page', () => {
  it('should render the blog index page correctly', async () => {
    const component = await mountSuspended(BlogIndexPage)
    expect(component.html()).toBeTruthy()
  })

  it('should display the blog posts', async () => {
    const component = await mountSuspended(BlogIndexPage)

    expect(component.text()).toContain('Test Post 1')
    expect(component.text()).toContain('Test Post 2')
  })

  it('should display the post descriptions', async () => {
    const component = await mountSuspended(BlogIndexPage)

    expect(component.text()).toContain('Description 1')
    expect(component.text()).toContain('Description 2')
  })

  it('should render the posts in descending date order', async () => {
    const component = await mountSuspended(BlogIndexPage)
    const text = component.text()

    const post1Index = text.indexOf('Test Post 1')
    const post2Index = text.indexOf('Test Post 2')

    expect(post1Index).toBeLessThan(post2Index)
  })

  it('should have the links to individual posts', async () => {
    const component = await mountSuspended(BlogIndexPage)
    const links = component.findAll('a[href^="/blog/"]')

    expect(links.length).toBeGreaterThan(0)
  })
})

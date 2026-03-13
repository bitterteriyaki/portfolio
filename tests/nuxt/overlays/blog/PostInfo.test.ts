import { describe, expect, it } from 'vitest'
import type { BlogCollectionItem } from '@nuxt/content'
import PostInfo from '~/components/overlays/blog/PostInfo.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'

describe('Post Info Component', () => {
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

  it('should render the post info correctly', async () => {
    const component = await mountSuspended(PostInfo, {
      props: { post: mockPost },
    })

    expect(component.html()).toBeTruthy()
  })

  it('should display the formatted date properly', async () => {
    const component = await mountSuspended(PostInfo, {
      props: { post: mockPost },
    })

    expect(component.text()).toContain('Mar 25, 2025')
  })

  it('should display the reading time', async () => {
    const component = await mountSuspended(PostInfo, {
      props: { post: mockPost },
    })

    expect(component.text()).toContain('5 min read')
  })

  it('should display the author information', async () => {
    const component = await mountSuspended(PostInfo, {
      props: { post: mockPost },
    })

    expect(component.text()).toContain('Test Author')
  })

  it('should not display date if not provided', async () => {
    const postWithoutDate = { ...mockPost, date: undefined }
    const component = await mountSuspended(PostInfo, {
      props: { post: postWithoutDate },
    })

    const calendarDivs = component
      .findAll('div')
      .filter(div => div.html().includes('calendar'))

    expect(calendarDivs.length).toBe(0)
  })

  it('should not display read time if not provided', async () => {
    const postWithoutReadTime = { ...mockPost, minRead: undefined }
    const component = await mountSuspended(PostInfo, {
      props: { post: postWithoutReadTime },
    })

    const clockDivs = component
      .findAll('div')
      .filter(div => div.html().includes('clock'))

    expect(clockDivs.length).toBe(0)
  })
})

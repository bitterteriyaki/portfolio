import { describe, expect, it } from 'vitest'
import ProseP from '~/components/content/ProseP.vue'
import { h } from 'vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'

describe('Prose Paragraph Component', () => {
  const mountComponent = async (slotContent = 'Test paragraph content') => {
    return await mountSuspended(ProseP, {
      slots: {
        default: () => h('span', slotContent),
      },
    })
  }

  it('should render the prose paragraph correctly', async () => {
    const component = await mountComponent()
    expect(component.html()).toBeTruthy()
  })

  it('should display slot content', async () => {
    const component = await mountComponent('This is a test paragraph')
    expect(component.text()).toContain('This is a test paragraph')
  })

  it('should have correct styling classes', async () => {
    const component = await mountSuspended(ProseP)
    const paragraph = component.find('p')

    expect(paragraph.exists()).toBe(true)
    expect(paragraph.classes()).toContain('my-5')
    expect(paragraph.classes()).toContain('leading-7')
  })

  it('should have text-pretty class', async () => {
    const component = await mountSuspended(ProseP)
    const paragraph = component.find('p')

    expect(paragraph.classes()).toContain('text-pretty')
  })

  it('should render as a p element', async () => {
    const component = await mountSuspended(ProseP)
    const paragraph = component.find('p')

    expect(paragraph.exists()).toBe(true)
  })

  it('should accept and render HTML content', async () => {
    const component = await mountSuspended(ProseP, {
      slots: {
        default: () => [
          h('strong', 'Bold text'),
          ' and ',
          h('em', 'italic text'),
        ],
      },
    })

    expect(component.text()).toContain('Bold text')
    expect(component.text()).toContain('italic text')
  })
})

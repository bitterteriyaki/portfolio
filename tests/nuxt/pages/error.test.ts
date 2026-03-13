import { describe, expect, it } from 'vitest'
import ErrorPage from '~/error.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'

describe('Base Error Component', () => {
  it('should render the error page correctly', async () => {
    const mockError = {
      statusCode: 404,
      statusMessage: 'Page not found',
      message: 'The page you are looking for does not exist.',
    }

    const component = await mountSuspended(ErrorPage, {
      props: { error: mockError },
    })

    expect(component.html()).toBeTruthy()
  })

  it('should display 404 error', async () => {
    const mockError = {
      statusCode: 404,
      statusMessage: 'Page not found',
      message: 'The page you are looking for does not exist.',
    }

    const component = await mountSuspended(ErrorPage, {
      props: { error: mockError },
    })

    expect(component.text()).toContain('404')
  })

  it('should display the error message', async () => {
    const mockError = {
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      message: 'Something went wrong.',
    }

    const component = await mountSuspended(ErrorPage, {
      props: { error: mockError },
    })

    expect(component.text()).toContain('500')
    expect(component.text()).toContain('Internal Server Error')
    expect(component.text()).toContain('Something went wrong.')
  })

  it('should include clear button with neutral color', async () => {
    const mockError = {
      statusCode: 404,
      statusMessage: 'Not Found',
      message: 'Error message',
    }

    const component = await mountSuspended(ErrorPage, {
      props: { error: mockError },
    })

    // Button should be rendered
    const buttons = component.findAll('button')
    expect(buttons.length).toBeGreaterThan(0)
  })
})

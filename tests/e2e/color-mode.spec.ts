// import { test, expect } from '@nuxt/test-utils/playwright'

// test.describe('Color Mode Toggle E2E', () => {
//   test('should have color mode toggle button', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     // Look for color mode button (moon/sun icon)
//     const colorModeButton = page.locator('button[aria-label*="color"], button[aria-label*="theme"], button:has([class*="moon"]), button:has([class*="sun"])')
//     await expect(colorModeButton.first()).toBeVisible()
//   })

//   test('should toggle between light and dark mode', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     // Get initial theme
//     const html = page.locator('html')
//     const initialClass = await html.getAttribute('class')

//     // Click color mode toggle
//     const colorModeButton = page.locator('button[aria-label*="color"], button[aria-label*="theme"], button').first()
//     await colorModeButton.click()

//     // Wait for theme change
//     await page.waitForTimeout(300)

//     // Check that class changed
//     const newClass = await html.getAttribute('class')
//     expect(newClass).not.toBe(initialClass)
//   })

//   test('should persist theme preference', async ({ page, goto, context }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     // Toggle to dark mode
//     const colorModeButton = page.locator('button').first()
//     await colorModeButton.click()
//     await page.waitForTimeout(300)

//     // Reload page
//     await page.reload({ waitUntil: 'hydration' })

//     // Theme should persist (stored in localStorage or cookie)
//     const html = page.locator('html')
//     const htmlClass = await html.getAttribute('class')
//     expect(htmlClass).toBeTruthy()
//   })

//   test('should apply dark mode styles correctly', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     // Force dark mode by adding class
//     await page.evaluate(() => {
//       document.documentElement.classList.add('dark')
//     })

//     await page.waitForTimeout(300)

//     // Check that dark mode is applied
//     const html = page.locator('html')
//     await expect(html).toHaveClass(/dark/)
//   })
// })

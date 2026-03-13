// import { expect, test } from '@nuxt/test-utils/playwright'

// test.describe('Accessibility E2E', () => {
//   test('should have heading hierarchy on home page', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     // Should have h1
//     await expect(page.locator('h1')).toBeVisible()

//     // Should have h2 headings
//     const h2Elements = page.locator('h2')
//     const count = await h2Elements.count()
//     expect(count).toBeGreaterThan(0)
//   })

//   test('images should have alt attributes', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     // All images should have alt text
//     const images = page.locator('img')
//     const count = await images.count()

//     for (let i = 0; i < count; i++) {
//       const img = images.nth(i)
//       await expect(img).toHaveAttribute('alt')
//     }
//   })

//   test('should have semantic HTML structure', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     // Check for semantic elements
//     await expect(page.locator('header')).toBeVisible()
//     await expect(page.locator('main')).toBeVisible()
//     await expect(page.locator('footer')).toBeVisible()
//   })

//   test('navigation should be keyboard accessible', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     // Tab through navigation
//     await page.keyboard.press('Tab')
//     await page.keyboard.press('Tab')

//     // At least some element should be focused
//     const focusedElement = await page.evaluate(() => {
//       return document.activeElement?.tagName
//     })

//     expect(focusedElement).toBeTruthy()
//   })

//   test('buttons should have accessible labels', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     const buttons = page.locator('button')
//     const count = await buttons.count()

//     for (let i = 0; i < count; i++) {
//       const button = buttons.nth(i)
//       const ariaLabel = await button.getAttribute('aria-label')
//       const text = await button.textContent()

//       // Button should have either aria-label or text content
//       expect(ariaLabel || text?.trim()).toBeTruthy()
//     }
//   })

//   test('links should have descriptive text', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     const links = page.locator('a')
//     const count = await links.count()

//     for (let i = 0; i < Math.min(count, 10); i++) {
//       const link = links.nth(i)
//       const text = await link.textContent()
//       const ariaLabel = await link.getAttribute('aria-label')

//       // Link should have text or aria-label
//       expect(text?.trim() || ariaLabel).toBeTruthy()
//     }
//   })

//   test('page should have proper lang attribute', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     const html = page.locator('html')
//     await expect(html).toHaveAttribute('lang', 'en')
//   })

//   test('should have viewport meta tag', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     const viewport = page.locator('meta[name="viewport"]')
//     await expect(viewport).toHaveCount(1)
//   })

//   test('color contrast should be adequate in default mode', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     // Check that text is visible (basic contrast check)
//     const mainHeading = page.locator('h1')
//     await expect(mainHeading).toBeVisible()

//     const aboutHeading = page.getByRole('heading', { name: 'About Me' })
//     await expect(aboutHeading).toBeVisible()
//   })
})

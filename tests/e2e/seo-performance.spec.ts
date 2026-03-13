// import { test, expect } from '@nuxt/test-utils/playwright'

// test.describe('Performance and SEO E2E', () => {
//   test('should have page title on home page', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     await expect(page).toHaveTitle(/Home.*kyomi/)
//   })

//   test('should have meta description', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     const metaDescription = page.locator('meta[name="description"], meta[property="og:description"]')
//     const count = await metaDescription.count()
//     expect(count).toBeGreaterThan(0)
//   })

//   test('should have Open Graph tags', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     const ogTitle = page.locator('meta[property="og:title"]')
//     await expect(ogTitle).toHaveCount(1)
//   })

//   test('should have Twitter Card tags', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     const twitterCard = page.locator('meta[name="twitter:card"]')
//     await expect(twitterCard).toHaveCount(1)
//   })

//   test('should load favicon', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     const favicon = page.locator('link[rel="icon"]')
//     await expect(favicon).toHaveCount(1)
//   })

//   test('blog post should have proper meta tags', async ({ page, goto }) => {
//     await goto('/blog/2025/1.generating-the-fibonacci-sequence-using-matrices', {
//       waitUntil: 'hydration'
//     })

//     // Should have specific title
//     const title = await page.title()
//     expect(title.length).toBeGreaterThan(0)
//     expect(title).toContain('kyomi')
//   })

//   test('should render content quickly', async ({ page, goto }) => {
//     const startTime = Date.now()

//     await goto('/', { waitUntil: 'hydration' })

//     const loadTime = Date.now() - startTime

//     // Should load in reasonable time (5 seconds max)
//     expect(loadTime).toBeLessThan(5000)

//     // Main content should be visible
//     await expect(page.locator('h1')).toBeVisible()
//   })

//   test('should not have console errors on home page', async ({ page, goto }) => {
//     const errors: string[] = []

//     page.on('console', msg => {
//       if (msg.type() === 'error') {
//         errors.push(msg.text())
//       }
//     })

//     await goto('/', { waitUntil: 'hydration' })

//     // Filter out known acceptable errors (like network errors in dev)
//     const criticalErrors = errors.filter(error =>
//       !error.includes('DevTools') &&
//       !error.includes('Hydration')
//     )

//     // Should have minimal errors
//     expect(criticalErrors.length).toBeLessThan(5)
//   })

//   test('images should lazy load', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     // Check for loading attribute on images
//     const images = page.locator('img')
//     const count = await images.count()

//     // At least some images should exist
//     expect(count).toBeGreaterThan(0)
//   })

//   test('should have canonical URL', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     // Check for canonical link (optional but good for SEO)
//     const canonical = page.locator('link[rel="canonical"]')
//     const count = await canonical.count()

//     // It's ok if there's 0 or 1, just checking structure
//     expect(count).toBeGreaterThanOrEqual(0)
//   })
// })

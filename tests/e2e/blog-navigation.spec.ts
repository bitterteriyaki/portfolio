// import { test, expect } from '@nuxt/test-utils/playwright'

// test.describe('Blog Navigation E2E', () => {
//   test('should navigate from home to blog', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     // Click on Blog link in navigation
//     await page.getByRole('link', { name: 'Blog' }).first().click()
//     await page.waitForURL('**/blog')

//     await expect(page).toHaveURL(/\/blog/)
//   })

//   test('should display blog posts on blog page', async ({ page, goto }) => {
//     await goto('/blog', { waitUntil: 'hydration' })

//     // Check that blog posts are displayed
//     const blogPosts = page.locator('article, a[href^="/blog/"]')
//     await expect(blogPosts.first()).toBeVisible()
//   })

//   test('should navigate to a blog post', async ({ page, goto }) => {
//     await goto('/blog', { waitUntil: 'hydration' })

//     // Click on first blog post
//     const firstPost = page.locator('a[href^="/blog/2"]').first()
//     await firstPost.click()

//     // Should navigate to a specific post
//     await expect(page).toHaveURL(/\/blog\/2\d{3}\//)
//   })

//   test('should display post content on post page', async ({ page, goto }) => {
//     // Navigate to a specific post (if it exists)
//     await goto('/blog/2025/1.generating-the-fibonacci-sequence-using-matrices', {
//       waitUntil: 'hydration'
//     })

//     // Check for post elements
//     await expect(page.locator('h1')).toBeVisible()
//     await expect(page.locator('img[alt]')).toBeVisible()
//   })

//   test('should have back button on post page', async ({ page, goto }) => {
//     await goto('/blog/2025/1.generating-the-fibonacci-sequence-using-matrices', {
//       waitUntil: 'hydration'
//     })

//     // Look for back button
//     const backButton = page.getByRole('button', { name: /Blog/i })
//     await expect(backButton).toBeVisible()
//   })

//   test('should display post metadata (date, author)', async ({ page, goto }) => {
//     await goto('/blog/2025/1.generating-the-fibonacci-sequence-using-matrices', {
//       waitUntil: 'hydration'
//     })

//     // Check for date and reading time
//     await expect(page.locator('text=/\\d+ min read/')).toBeVisible()
//   })

//   test('should have share button on post page', async ({ page, goto }) => {
//     await goto('/blog/2025/1.generating-the-fibonacci-sequence-using-matrices', {
//       waitUntil: 'hydration'
//     })

//     // Look for share button
//     const shareButton = page.locator('button[class*="arrow-up-tray"], button:has([class*="arrow-up-tray"])')
//     await expect(shareButton).toBeVisible()
//   })

//   test('should display post tags', async ({ page, goto }) => {
//     await goto('/blog/2025/1.generating-the-fibonacci-sequence-using-matrices', {
//       waitUntil: 'hydration'
//     })

//     // Check for tags section
//     const tagsSection = page.locator('[class*="badge"], [class*="tag"]')
//     const count = await tagsSection.count()
//     expect(count).toBeGreaterThan(0)
//   })

//   test('should have table of contents in sidebar', async ({ page, goto }) => {
//     await goto('/blog/2025/1.generating-the-fibonacci-sequence-using-matrices', {
//       waitUntil: 'hydration'
//     })

//     // Check for TOC (only on larger screens)
//     const viewportSize = page.viewportSize()
//     if (viewportSize && viewportSize.width > 1024) {
//       // Aside elements typically contain TOC
//       await expect(page.locator('aside').first()).toBeVisible()
//     }
//   })

//   test('should highlight active Blog nav item on blog pages', async ({ page, goto }) => {
//     await goto('/blog', { waitUntil: 'hydration' })

//     // Blog navigation item should be active/highlighted
//     const blogNavItem = page.getByRole('link', { name: 'Blog' }).first()
//     await expect(blogNavItem).toBeVisible()
//   })
// })

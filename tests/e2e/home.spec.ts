// import { test, expect } from '@nuxt/test-utils/playwright'

// test.describe('Home Page E2E', () => {
//   test('should load the home page successfully', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     await expect(page).toHaveTitle(/Home.*kyomi/)
//     await expect(page.locator('h1')).toContainText('Let me turn your ideas into')
//   })

//   test('should display header with navigation', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     // Check header elements
//     await expect(page.getByRole('link', { name: 'Home' })).toBeVisible()
//     await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible()
//     await expect(page.getByRole('link', { name: 'Resume' })).toBeVisible()
//   })

//   test('should display hero section with avatar', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     // Check for avatar image
//     const avatar = page.locator('img[alt*="kyomi"]').first()
//     await expect(avatar).toBeVisible()

//     // Check for main heading
//     await expect(page.locator('h1')).toContainText('reality')
//   })

//   test('should display social media links', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     // Check for external social links
//     const githubLink = page.locator('a[href*="github.com/bitterteriyaki"]').first()
//     const linkedinLink = page.locator('a[href*="linkedin.com"]').first()

//     await expect(githubLink).toBeVisible()
//     await expect(linkedinLink).toBeVisible()
//   })

//   test('should display About Me section', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible()
//     await expect(page.locator('text=I am a software developer')).toBeVisible()
//   })

//   test('should display Experiences section with timeline', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     await expect(page.getByRole('heading', { name: 'Experiences' })).toBeVisible()
//     await expect(page.locator('text=Caixa Econômica Federal')).toBeVisible()
//     await expect(page.locator('text=IT Technician')).toBeVisible()
//   })

//   test('should display technology badges in experiences', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     // Check for some technology badges
//     await expect(page.locator('text=Java').first()).toBeVisible()
//     await expect(page.locator('text=TypeScript').first()).toBeVisible()
//   })

//   test('should display footer with copyright', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     const currentYear = new Date().getFullYear()
//     await expect(page.locator(`text=© ${currentYear}`)).toBeVisible()
//     await expect(page.locator('text=Built with Nuxt UI')).toBeVisible()
//   })

//   test('should have working GitHub link in footer', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     const footerGithubLink = page.locator('footer a[href*="github.com"]')
//     await expect(footerGithubLink).toHaveAttribute('target', '_blank')
//   })

//   test('should be responsive and load on mobile viewport', async ({ page, goto }) => {
//     await page.setViewportSize({ width: 375, height: 667 })
//     await goto('/', { waitUntil: 'hydration' })

//     await expect(page.locator('h1')).toBeVisible()
//     await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible()
//   })

//   test('should have accessible navigation', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     // Check for proper semantic HTML
//     await expect(page.locator('header')).toBeVisible()
//     await expect(page.locator('main')).toBeVisible()
//     await expect(page.locator('footer')).toBeVisible()
//   })
// })

// import { test, expect } from '@nuxt/test-utils/playwright'

// test.describe('External Links E2E', () => {
//   test('resume link should open in new tab', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     const resumeLink = page.getByRole('link', { name: /Resume/i })
//     await expect(resumeLink).toHaveAttribute('target', '_blank')
//     await expect(resumeLink).toHaveAttribute('href', '/resume.pdf')
//   })

//   test('social media links should open in new tab', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     // Check GitHub link
//     const githubLink = page.locator('a[href*="github.com/bitterteriyaki"]').first()
//     await expect(githubLink).toHaveAttribute('target', '_blank')

//     // Check LinkedIn link
//     const linkedinLink = page.locator('a[href*="linkedin.com"]').first()
//     await expect(linkedinLink).toHaveAttribute('target', '_blank')
//   })

//   test('external links should have proper attributes', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     const externalLinks = page.locator('a[target="_blank"]')
//     const count = await externalLinks.count()

//     // Should have multiple external links
//     expect(count).toBeGreaterThan(0)
//   })

//   test('Reforma Casa Brasil link should be present in experiences', async ({ page, goto }) => {
//     await goto('/', { waitUntil: 'hydration' })

//     await expect(page.locator('text=Reforma Casa Brasil')).toBeVisible()
//   })
// })

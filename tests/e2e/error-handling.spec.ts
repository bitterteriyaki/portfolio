// import { test, expect } from '@nuxt/test-utils/playwright'

// test.describe('Error Handling E2E', () => {
//   test('should display 404 page for non-existent route', async ({ page, goto }) => {
//     const response = await page.goto('/non-existent-page', {
//       waitUntil: 'hydration'
//     })

//     // Should display 404 error
//     await expect(page.locator('text=404')).toBeVisible()
//   })

//   test('should show error message on 404 page', async ({ page, goto }) => {
//     await page.goto('/this-page-does-not-exist', {
//       waitUntil: 'hydration'
//     })

//     // Should display some error text
//     const errorText = page.locator('text=/not found|error|404/i')
//     await expect(errorText.first()).toBeVisible()
//   })

//   test('should have a button to go back/home on error page', async ({ page, goto }) => {
//     await page.goto('/non-existent-route', {
//       waitUntil: 'hydration'
//     })

//     // Should have a button (clear error button)
//     const buttons = page.locator('button')
//     const buttonCount = await buttons.count()
//     expect(buttonCount).toBeGreaterThan(0)
//   })

//   test('should display 404 for non-existent blog post', async ({ page, goto }) => {
//     await page.goto('/blog/2025/this-post-does-not-exist', {
//       waitUntil: 'hydration'
//     })

//     // Should show 404 error
//     await expect(page.locator('text=404')).toBeVisible()
//   })

//   test('error page should still have app structure', async ({ page, goto }) => {
//     await page.goto('/invalid-page', {
//       waitUntil: 'hydration'
//     })

//     // Should still render in UApp wrapper
//     await expect(page.locator('body')).toBeVisible()
//     await expect(page.locator('text=404')).toBeVisible()
//   })
// })

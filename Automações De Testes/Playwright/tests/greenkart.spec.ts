import { test, expect } from '@playwright/test'

test('', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

    await expect(page).toHaveTitle('GreenKart - veg and fruits kart');

    const adicionarProduto = async (produto: string) => {
        const produtoXPath = `//div[@class="product" and .//h4[text()="${produto} - 1 Kg"]]//button[text()="ADD TO CART"]`;
        const produtoButton = page.locator(produtoXPath);

        // Aguarde até que o botão esteja visível antes de clicar
        await produtoButton.waitFor({ state: 'visible' });
        await produtoButton.click();
        await page.waitForTimeout(1000);
    }

    await adicionarProduto('Brocolli');
    await adicionarProduto('Cauliflower');
    await adicionarProduto('Cucumber');
    await adicionarProduto('Beetroot');
    await adicionarProduto('Cashews');

    await page.click('//img[contains(@class," ")]')
    await page.click('//button[@type="button"][contains(.,"PROCEED TO CHECKOUT")]');
    await expect(page.locator('//button[contains(.,"Place Order")]')).toBeVisible();
    await page.click('//button[contains(.,"Place Order")]');
    await page.selectOption('select', { label: 'Brazil' });
    await page.waitForTimeout(1000)
    await page.click("//input[contains(@type,'checkbox')]");
    await page.waitForTimeout(1000)
    await page.click("//button[contains(.,'Proceed')]");
    await expect(page.locator("//a[contains(.,'Home')]")).toBeVisible();
    await page.waitForTimeout(1000);

})



import { test, expect } from '@playwright/test'

test('', async ({ page }) => {
    await page.goto('http://localhost:8080/')

    await expect(page).toHaveTitle('Gerencie suas tarefas com Mark L')

    const deleteButton = page.locator('//div[p[text()="Ler um livro de TypeScript"]]/button[contains(@class, "_listItemDeleteButton")]');

    if (await deleteButton.isVisible()) {
        await deleteButton.click();
        await expect(page.locator('//div[p[text()="Ler um livro de TypeScript"]]')).not.toBeVisible();
    } else {
        console.log('O botão para deletar a tarefa não foi encontrado, continuando...');
    }


    await expect(page.locator('//div[p[text()="Ler um livro de TypeScript"]]')).not.toBeVisible()

    // await page.fill('//input[contains(@placeholder,"Add a new Task")]', 'Ler um livro de TypeScript')    //forma padrão
    const inputTaskName = page.locator('//input[contains(@placeholder,"Add a new Task")]')
    await inputTaskName.fill('Ler um livro de TypeScript')

    // await inputTaskName.press('Enter')   //pressiona o botão 'enter' do teclado
    await page.click('//button[@type="submit"][contains(.,"Create")]')

    await page.waitForTimeout(1000)
})

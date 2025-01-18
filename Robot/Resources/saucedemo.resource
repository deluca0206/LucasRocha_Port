*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}    https://www.saucedemo.com/

*** Keywords ***
Abrir o Navegador
    Open Browser    browser=chrome
    Maximize Browser Window

Fechar o Navegador
    Capture Page Screenshot
    Close Browser

Acessar a home page https://www.saucedemo.com/
    Go To    url=${URL}
    Wait Until Element Is Visible    locator=//div[@class='login_logo'][contains(.,'Swag Labs')]
    
Preencher o "Username" e o "Password"
    Input Text    locator=//input[contains(@placeholder,'Username')]    text=standard_user
    Input Text    locator=//input[contains(@placeholder,'Password')]    text=secret_sauce
    
Clicar no botão de "Login"
    Click Element    locator=//input[contains(@type,'submit')]
    Wait Until Element Is Visible    locator=//span[@class='title'][contains(.,'Products')]

Adicionar um produto no carrinho
    Click Element    locator=//button[contains(@data-test,'add-to-cart-sauce-labs-backpack')]
    Wait Until Element Is Visible    locator=//button[@class='btn btn_secondary btn_small btn_inventory '][contains(.,'Remove')]

Clicar no carrinho para visualizar o produto
    Click Element    locator=//a[@class='shopping_cart_link'][contains(.,'1')]
    Wait Until Element Is Visible    locator=//span[@class='title'][contains(.,'Your Cart')]

Clicar em "Checkout"
    Click Element    locator=checkout
    Wait Until Element Is Visible    locator=//span[@class='title'][contains(.,'Checkout: Your Information')]

Preencher informações de checkout
    [Arguments]    ${nome}    ${sobrenome}    ${cep}
    Input Text    locator=first-name     text=${nome}
    Input Text    locator=last-name      text=${sobrenome}
    Input Text    locator=postal-code    text=${cep}

Clicar em "Continue"
    Click Element    locator=continue
    Wait Until Element Is Visible    locator=//span[@class='title'][contains(.,'Checkout: Overview')]

Clicar em "Finish"
    Click Element    locator=finish

Verificar se a compra foi concluída
    Element Should Be Visible    locator=//h2[@class='complete-header'][contains(.,'Thank you for your order!')]
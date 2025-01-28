*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}    https://www.saucedemo.com/

*** Keywords ***
Abrir o Navegador
    Open Browser    ${URL}    chrome

Fechar o Navegador
    Close Browser

Acessar a home page
    [Arguments]    ${url}
    Go To    ${url}

Fazer login
    [Arguments]    ${username}    ${password}
    Input Text    id=username    ${username}
    Input Text    id=password    ${password}
    Click Button    id=login-button

Adicionar produto no carrinho
    Click Button    xpath=//button[contains(@class, 'btn_inventory')]

Visualizar carrinho
    Click Link    id=shopping_cart_container

Fazer checkout
    [Arguments]    ${first_name}    ${last_name}    ${postal_code}
    Click Button    id=checkout
    Input Text    id=first-name    ${first_name}
    Input Text    id=last-name    ${last_name}
    Input Text    id=postal-code    ${postal_code}
    Click Button    id=continue

Finalizar compra
    Click Button    id=finish

Verificar compra concluída
    Element Should Be Visible    xpath=//h2[text()='THANK YOU FOR YOUR ORDER']
*** Settings ***
Resource        ../Resources/saucedemo.resource
Test Setup      Abrir o Navegador
Test Teardown   Fechar o Navegador

*** Test Cases ***
Caso de Teste - Fazer login e concluir compra
    [Documentation]    Esse teste faz o login no saucedemo.com,
    ...                adiciona produtos no carrinho e finaliza a compra
    [Tags]             login_compra
    Acessar a home page https://www.saucedemo.com/
    Preencher o "Username" e o "Password"
    Clicar no botão de "Login"
    Adicionar um produto no carrinho
    Clicar no carrinho para visualizar o produto
    Clicar em "Checkout"
    Preencher informações de checkout    João    Silva    12345678
    Clicar em "Continue"
    Clicar em "Finish"
    Verificar se a compra foi concluída


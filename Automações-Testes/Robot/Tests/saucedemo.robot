*** Settings ***
Resource        ../Resources/saucedemo.resource
Test Setup      Abrir o Navegador
Test Teardown   Fechar o Navegador

*** Test Cases ***
Caso de Teste - Fazer login e concluir compra
    [Documentation]    Esse teste faz o login no saucedemo.com,
    ...                adiciona produtos no carrinho e finaliza a compra
    [Tags]             login_compra
    Acessar a home page    https://www.saucedemo.com/
    Fazer login            standard_user    secret_sauce
    Adicionar produto no carrinho
    Visualizar carrinho
    Fazer checkout         João    Silva    12345678
    Finalizar compra
    Verificar compra concluída
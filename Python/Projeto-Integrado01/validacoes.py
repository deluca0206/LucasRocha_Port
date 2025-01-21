def validar_dados(nome, categoria, quantidade, preco, localizacao):
    if not nome or not categoria or not localizacao:
        return "Erro: Campos obrigatórios não podem estar vazios"
    if quantidade < 0:
        return "Erro: Quantidade não pode ser negativa"
    if preco <= 0:
        return "Erro: Preço deve ser maior que zero"
    return "Validação OK"

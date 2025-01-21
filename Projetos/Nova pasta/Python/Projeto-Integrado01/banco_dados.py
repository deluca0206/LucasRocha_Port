import sqlite3

def criar_tabela_produtos():
    conexao = sqlite3.connect('estoque.db')
    cursor = conexao.cursor()
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS produtos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        categoria TEXT,
        quantidade INTEGER,
        preco REAL,
        localizacao TEXT
    )
    ''')
    conexao.commit()
    conexao.close()

def salvar_produto_no_banco(nome, categoria, quantidade, preco, localizacao):
    conexao = sqlite3.connect('estoque.db')
    cursor = conexao.cursor()
    cursor.execute('''
    INSERT INTO produtos (nome, categoria, quantidade, preco, localizacao)
    VALUES (?, ?, ?, ?, ?)
    ''', (nome, categoria, quantidade, preco, localizacao))
    conexao.commit()
    conexao.close()

    
# Chame criar_tabela_produtos() uma vez ao iniciar o programa para garantir que a tabela exista

'''----------------------------------------------------------------------------------------------------------------'''

def atualizar_estoque(nome, quantidade_alterada):
    conexao = sqlite3.connect('estoque.db')
    cursor = conexao.cursor()

    # Verifica a quantidade atual
    cursor.execute('SELECT quantidade FROM produtos WHERE nome = ?', (nome,))
    resultado = cursor.fetchone()

    if resultado:
        quantidade_atual = resultado[0]
        nova_quantidade = quantidade_atual + quantidade_alterada

        # Verifica se a nova quantidade é válida
        if nova_quantidade >= 0:
            cursor.execute('UPDATE produtos SET quantidade = ? WHERE nome = ?', (nova_quantidade, nome))
            conexao.commit()
            print(f'Estoque atualizado. Nova quantidade de {nome}: {nova_quantidade}')
        else:
            print("Erro: Quantidade resultante não pode ser negativa.")
    else:
        print("Erro: Produto não encontrado.")

    conexao.close()


def atualizar_localizacao(nome, nova_localizacao):
    try:
        # Adiciona um tempo limite para evitar bloqueios prolongados
        conexao = sqlite3.connect('estoque.db', timeout=10)
        cursor = conexao.cursor()

        cursor.execute('SELECT * FROM produtos WHERE nome = ?', (nome,))
        if cursor.fetchone():
            cursor.execute('UPDATE produtos SET localizacao = ? WHERE nome = ?', (nova_localizacao, nome))
            conexao.commit()
            print(f"Localização do produto '{nome}' atualizada para '{nova_localizacao}'")
        else:
            print("Erro: Produto não encontrado.")

    except sqlite3.OperationalError as e:
        print(f"Erro de operação: {e}")
    finally:
        conexao.close()

import sqlite3

def relatorio_estoque_baixo(limite=5):
    conexao = sqlite3.connect('estoque.db')
    cursor = conexao.cursor()

    cursor.execute('SELECT * FROM produtos WHERE quantidade <= ?', (limite,))
    resultados = cursor.fetchall()
    
    if resultados:
        print("Produtos com estoque baixo:")
        for produto in resultados:
            print(f"ID: {produto[0]}, Nome: {produto[1]}, Quantidade: {produto[3]}")
    else:
        print("Nenhum produto com estoque baixo encontrado.")

    conexao.close()

def relatorio_excesso_estoque(limite=100):
    conexao = sqlite3.connect('estoque.db')
    cursor = conexao.cursor()

    cursor.execute('SELECT * FROM produtos WHERE quantidade >= ?', (limite,))
    resultados = cursor.fetchall()
    
    if resultados:
        print("Produtos com excesso de estoque:")
        for produto in resultados:
            print(f"ID: {produto[0]}, Nome: {produto[1]}, Quantidade: {produto[3]}")
    else:
        print("Nenhum produto com excesso de estoque encontrado.")

    conexao.close()

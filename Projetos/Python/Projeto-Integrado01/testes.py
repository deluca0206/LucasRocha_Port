def listar_produtos():
    conexao = sqlite3.connect('estoque.db')
    cursor = conexao.cursor()
    cursor.execute('SELECT * FROM produtos')
    for linha in cursor.fetchall():
        print(linha)
    conexao.close()

# Teste rápido em `testes.py`
from banco_dados import atualizar_estoque

# Teste de atualização de estoque
atualizar_estoque('Teclado Mecânico', 10)  # Aumenta o estoque em 10
atualizar_estoque('Teclado Mecânico', -5)  # Diminui o estoque em 5

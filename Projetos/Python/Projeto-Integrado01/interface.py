from tkinter import *
from banco_dados import salvar_produto_no_banco, atualizar_estoque
from validacoes import validar_dados
from banco_dados import salvar_produto_no_banco, atualizar_estoque, atualizar_localizacao, relatorio_estoque_baixo, relatorio_excesso_estoque



def salvar_produto():
    nome = entrada_nome.get()
    categoria = entrada_categoria.get()
    quantidade = int(entrada_quantidade.get())
    preco = float(entrada_preco.get())
    localizacao = entrada_localizacao.get()

    resultado_validacao = validar_dados(nome, categoria, quantidade, preco, localizacao)
    if resultado_validacao == "Validação OK":
        salvar_produto_no_banco(nome, categoria, quantidade, preco, localizacao)
        print("Produto salvo com sucesso!")
    else:
        print(resultado_validacao)

def atualizar_estoque_interface(entrada_nome, entrada_quantidade):
    nome = entrada_nome.get()
    quantidade_alterada = int(entrada_quantidade.get())

    resultado_validacao = validar_dados(nome, "categoria", quantidade_alterada, 1, "localizacao")
    if resultado_validacao == "Validação OK":
        atualizar_estoque(nome, quantidade_alterada)
        print(f"Estoque do produto '{nome}' atualizado com sucesso!")
    else:
        print(resultado_validacao)

def criar_interface_atualizacao():
    root_atualizacao = Toplevel()  # Cria uma nova janela (sub-janela)
    root_atualizacao.title("Atualização de Estoque")

    Label(root_atualizacao, text="Nome do Produto:").grid(row=0)
    entrada_nome_atualizar = Entry(root_atualizacao)
    entrada_nome_atualizar.grid(row=0, column=1)

    Label(root_atualizacao, text="Quantidade a Alterar (+/-):").grid(row=1)
    entrada_quantidade_alterada = Entry(root_atualizacao)
    entrada_quantidade_alterada.grid(row=1, column=1)

    Button(root_atualizacao, text="Atualizar Estoque", command=lambda: atualizar_estoque_interface(entrada_nome_atualizar, entrada_quantidade_alterada)).grid(row=2, column=1)

def iniciar_interface():
    global root  # Define 'root' como uma variável global
    root = Tk()
    root.title("Sistema de Gerenciamento de Estoque")

    Label(root, text="Nome:").grid(row=0)
    global entrada_nome, entrada_categoria, entrada_quantidade, entrada_preco, entrada_localizacao
    entrada_nome = Entry(root)
    entrada_nome.grid(row=0, column=1)

    Label(root, text="Categoria:").grid(row=1)
    entrada_categoria = Entry(root)
    entrada_categoria.grid(row=1, column=1)

    Label(root, text="Quantidade:").grid(row=2)
    entrada_quantidade = Entry(root)
    entrada_quantidade.grid(row=2, column=1)

    Label(root, text="Preço:").grid(row=3)
    entrada_preco = Entry(root)
    entrada_preco.grid(row=3, column=1)

    Label(root, text="Localização:").grid(row=4)
    entrada_localizacao = Entry(root)
    entrada_localizacao.grid(row=4, column=1)

    Button(root, text="Salvar", command=salvar_produto).grid(row=5, column=1)
    Button(root, text="Atualizar Estoque", command=criar_interface_atualizacao).grid(row=6, column=1)

    Button(root, text="Rastreamento de Localização", command=criar_interface_localizacao).grid(row=7, column=1)

    Button(root, text="Relatórios de Estoque", command=criar_interface_relatorios).grid(row=8, column=1)


    root.mainloop()


def atualizar_localizacao_interface(entrada_nome, entrada_localizacao):
    nome = entrada_nome.get()
    nova_localizacao = entrada_localizacao.get()

    if nome and nova_localizacao:
        atualizar_localizacao(nome, nova_localizacao)
        print(f"Localização de '{nome}' atualizada com sucesso.")
    else:
        print("Erro: Campos obrigatórios não podem estar vazios.")


def criar_interface_localizacao():
    root_localizacao = Toplevel()  # Cria uma nova janela (sub-janela)
    root_localizacao.title("Rastreamento de Localização")

    Label(root_localizacao, text="Nome do Produto:").grid(row=0)
    entrada_nome_localizacao = Entry(root_localizacao)
    entrada_nome_localizacao.grid(row=0, column=1)

    Label(root_localizacao, text="Nova Localização:").grid(row=1)
    entrada_nova_localizacao = Entry(root_localizacao)
    entrada_nova_localizacao.grid(row=1, column=1)

    Button(root_localizacao, text="Atualizar Localização", command=lambda: atualizar_localizacao_interface(entrada_nome_localizacao, entrada_nova_localizacao)).grid(row=2, column=1)

def gerar_relatorio_baixo_estoque():
    print("\nRelatório de produtos com estoque baixo:")
    relatorio_estoque_baixo()

def gerar_relatorio_excesso_estoque():
    print("\nRelatório de produtos com excesso de estoque:")
    relatorio_excesso_estoque()

def criar_interface_relatorios():
    root_relatorios = Toplevel()
    root_relatorios.title("Relatórios de Estoque")

    Button(root_relatorios, text="Relatório de Estoque Baixo", command=gerar_relatorio_baixo_estoque).grid(row=0, column=0)
    Button(root_relatorios, text="Relatório de Excesso de Estoque", command=gerar_relatorio_excesso_estoque).grid(row=1, column=0)

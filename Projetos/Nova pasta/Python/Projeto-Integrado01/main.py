from interface import iniciar_interface
from banco_dados import criar_tabela_produtos

if __name__ == "__main__":
    criar_tabela_produtos()  # Certifique-se de que a tabela existe
    iniciar_interface()  # Inicia a interface gráfica

# def maior(num1, num2):
#     if num1 > num2:
#         return num1
#     return num2


# lista = [2, 3, 5, 1]

# def media(lista):
#     soma = 0
#     for n in lista:
#         soma = soma + n
#     return soma/len(lista)

# def asteriscos(n):
#     i = 0
#     var_asteriscos = ''
#     while i < n:
#         var_asteriscos = var_asteriscos+'*'
#         i += 1

#     while i < n:
#         var_asteriscos = var_asteriscos+'*'
#         i += 1
        
#     for ast in var_asteriscos:
#         print(var_asteriscos)
    
# def maiorNome(lista): 
#     maior = lista[0]
#     for nome in lista:
#         if len(nome) > len(maior):
#             maior = nome
#     return maior

# print(maiorNome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))

def compra(area): 
    qtd_litros = (1/3) * area
    qtd_latas = qtd_litros / 18
    qtd_a_pagar = qtd_latas * 80
    return (qtd_latas,  qtd_a_pagar)

print(compra(54))
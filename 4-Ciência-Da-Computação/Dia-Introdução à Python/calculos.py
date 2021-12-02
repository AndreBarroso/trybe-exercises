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

def asteriscos(n):
    i = 0
    var_asteriscos = ''
    while i < n:
        var_asteriscos = var_asteriscos+'*'
        i += 1

    while i < n:
        var_asteriscos = var_asteriscos+'*'
        i += 1
        
    for ast in var_asteriscos:
        print(var_asteriscos)
    
asteriscos(5)
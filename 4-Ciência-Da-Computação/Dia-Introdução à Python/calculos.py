def maior(num1, num2):
    if num1 > num2:
        return num1
    return num2


lista = [2, 3, 5, 1]

def media(lista):
    soma = 0
    for n in lista:
        soma = soma + n
    return soma/len(lista)

print(media(lista))


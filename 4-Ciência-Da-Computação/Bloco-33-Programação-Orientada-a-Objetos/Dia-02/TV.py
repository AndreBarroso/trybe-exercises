class TV:
    def __init__(self, tamanho):
        self.volume = 50
        self.canal = 1
        self.tamanho = tamanho
        self.ligada = False

    def aumentar_volume(self):
        if self.volume < 99:
            self.volume += 1

    def diminuir_volume(self):
        if self.volume > 0:
            self.volume -= 1

    def modificar_canal(self, canal):
        if canal <= 1 or canal >= 99:
            raise ValueError("Canal indisponível")

        self.canal = canal

    def ligar_desligar(self):
        self.ligada = not self.ligada

    def mostrar_dados(self):
        return f" volume: {self.volume}, canal: {self.canal}, tamanho: {self.tamanho}, ligada: {self.ligada}"

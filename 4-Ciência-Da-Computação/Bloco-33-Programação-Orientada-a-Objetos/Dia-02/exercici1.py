class TV:
    def __init__(self, tamanho):
        self.volume = 50
        self.canal = 1
        self.tamanho = tamanho
        self.ligada = False

    def aumentar_volume(self):
        if self.volume < 99:
            self.volume += self.volume

    def diminuir_volume(self):
        if self.volume > 0:
            self.volume -= self.volume

    def modificar_canal(self, canal):
        if canal <= 1 or canal >= 99:
            raise ValueError('Canal indisponível')

        self.canal = canal

    def ligar_desligar(self):
        self.ligada = not self.ligada

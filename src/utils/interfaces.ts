export interface CarouselItem { //carousel
    imagem: string
    titulo: string
    descricao: string
}

export interface Passeio { //passeios
    nome: string
    passeio: string
    resumo: string
    imagem: string
    imagem2: string
    titulo: string
    texto: string
    texto2: string
}

export interface MensagemAlerta { //mensagem de alerta
    status: string
    mensagem: string
    icone: string
}

export interface LoginResponse {
    status: string;
    token?: string;
    mensagem?: string;
}
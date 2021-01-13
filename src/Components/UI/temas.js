import { 
    fundoClaro, 
    conteudoClaro, 
    textoFundoClaro, 
    fundoEscuro,
    conteudoEscuro,
    textoFundoEscuro,
    sombraClara,
    sombraEscura,
} from './variaveis';

export const temaClaro = {
    body: fundoClaro,
    inside: conteudoClaro,
    text: textoFundoClaro,
    sobra: sombraClara,
    filter: '',
};

export const temaEscuro = {
    body: fundoEscuro,
    inside: conteudoEscuro,
    text: textoFundoEscuro,
    sombra: sombraEscura,
    filter: 'invert(100%)',

}
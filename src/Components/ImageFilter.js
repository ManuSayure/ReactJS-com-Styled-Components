import React from 'react';
import alimentacao from '../assets/images/alimentacao.svg';
import transporte from '../assets/images/transporte.svg';
import saude from '../assets/images/saude.svg';
import utilidades from '../assets/images/utilidades.svg';
import outros from '../assets/images/outros.svg';
import  {IconeTema} from '../Components/UI/index';
export default (type) => {
    const Images = {

        Restaurante :<IconeTema src = {alimentacao} alt= 'Restaurante'/>,
        Utilidades:<IconeTema src = {utilidades} alt= 'Utilidades'/>,
        Saude:<IconeTema src = {saude} alt= 'Saúde'/>,
        Transporte:<IconeTema src = {transporte} alt= 'Transporte'/>,
        default:<IconeTema src = {outros} alt= 'Outros'/>,       
    }
    return Images[type] || Images.default;

}

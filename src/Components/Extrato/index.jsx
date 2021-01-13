import React from 'react'
import {Box, Btn} from '../UI/index';
import {extratoLista} from '../../info';
import Itens from '../Itens';

const Extrato = () => {

  const Updates = () => { 
      return( 
        extratoLista.updates.map((update) => {

            return(     
                    <Itens key = {update.id} 
                    type =  {update.type} 
                    from = {update.from} 
                    value = {update.value}
                    date = {update.date}
                     />      
                      
                   
            )
        })  
      )  
} 

    return(
        <Box>
            <Updates/>
            <Btn> Ver Mais</Btn>
        </Box> 

    )
}; export default Extrato;
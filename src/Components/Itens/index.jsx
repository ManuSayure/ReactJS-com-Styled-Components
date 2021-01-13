import React from 'react'
import styled from 'styled-components';
import Item from '../Item';
import ImageFilter from '../ImageFilter'

const Itens = styled.div`
    box-shadow: 3px 3px 20px 0px ${({theme})=> theme.sombra};
    border-radius: 10px;
    margin: 2px 0;
    display: flex;
    align-itens: center;
    justify-content: space-around;
    padding: 10px;
    font-size: 12px;

`;

export default (props) => {
    return(
        <Itens>
            {ImageFilter(props.type)}
            <Item {... props}/> 
            <span>{ props.date }</span>          
        </Itens>
    )
}

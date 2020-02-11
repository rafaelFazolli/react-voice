import React from 'react';
import styled from 'styled-components';

const TextContainerStyled = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    align-self: center;
    background: #db6eff;
    border-radius: 8px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
    box-sizing: border-box;
    padding: 10px;
    color: #fff;
    font-weight: 500;
`;

const TextContainer = (props) => {
    return(
        <TextContainerStyled>
            { props.finalText + props.newText }
        </TextContainerStyled>
    );
}

export default TextContainer;
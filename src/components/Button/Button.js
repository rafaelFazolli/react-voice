import React, { useState }  from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons'

const Button = () => {
    const [icon, changeIcon] = useState(faMicrophone);
    const [active, setActive] = useState(false);

    const activeButton = () => {
        let iconChange = icon.iconName === faMicrophone.iconName ? faMicrophoneSlash : faMicrophone;
        
        setActive(!active);
        changeIcon(iconChange);
    };

    return (
        <ButtonStyled onClick={ activeButton } isActive={ active }>
            <PhoneIcon icon={ icon } />
        </ButtonStyled>
    );
}

const ButtonStyled = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #db6eff;
    border: 0;
    align-self: center;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
    margin-bottom: 20px;
    outline: 0;
    cursor: pointer;
    transition: all .3s ease-in-out;
    transform: scale(${props => props.isActive ? '1.2' : '1.1'});
    &:hover {
        transform: scale(1.2);
    }
`;

const PhoneIcon = styled(FontAwesomeIcon)`
    color: #fff;
    font-size: 1.5em;
`;

export default Button;
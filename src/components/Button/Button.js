import React, { useState }  from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons'

export const buttonActiveAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(219, 110, 255, 1);
  }
  100% {
    box-shadow: 0 0 0 10px rgba(219, 110, 255, 0);
  }
`

const ButtonStyled = styled.button`
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background: #db6eff;
    border: 0;
    align-self: center;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
    margin-bottom: 50px;
    outline: 0;
    cursor: pointer;
    transition: all .3s ease-in-out;
    animation: ${props => props.isActive ? buttonActiveAnimation : ''} 1.2s ease-in-out 0s infinite;
`;

const PhoneIcon = styled(FontAwesomeIcon)`
    color: #fff;
    font-size: 1.5em;
`;

const Button = (props) => {
    const [icon, changeIcon] = useState(faMicrophoneSlash);
    const [active, setActive] = useState(false);

    const activeButton = () => {
        let iconChange = icon.iconName === faMicrophoneSlash.iconName ? faMicrophone : faMicrophoneSlash;
        
        setActive(!active);
        changeIcon(iconChange);
        props.buttonAction();
    };

    return (
        <ButtonStyled onClick={ activeButton } isActive={ active }>
            <PhoneIcon icon={ icon } />
        </ButtonStyled>
    );
}

export default Button;
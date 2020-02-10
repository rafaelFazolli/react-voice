import React from 'react';
import styled from 'styled-components';
import TextContainer from '../../components/TextContainer/TextContainer';
import Button from '../../components/Button/Button';

const HomeStyled = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #9e12cc;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding: 50px 0;
    `;

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px;
`;

const Home = () => {
    return(
        <HomeStyled>
            <Container>
                <Button></Button>
                <TextContainer></TextContainer>
            </Container>
        </HomeStyled>
    );
}

export default Home;
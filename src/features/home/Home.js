import React, { useEffect, useState } from 'react';
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
    let [text, writeText] = useState('');
    let [finalText, writeFinalText] = useState('');
    let [recording, activeButton] = useState(false);

    useEffect(() => {
        initSpeechRec();
    });

    const initSpeechRec = () => {
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
        const recognizer = new window.SpeechRecognition();

        if(recognizer !== null) {
            recognizer.continous = true;
            recognizer.interimResults = true;
            recognizer.lang = 'pt-br';
            
            recognizer.onresult = event => {
                for(let i = event.resultIndex; i < event.results.length; i++) {
                    let transcript = event.results[i][0].transcript;
                    if(event.results[i].isFinal) {
                        writeFinalText(finalText += transcript + ' ');
                    } else {
                        writeText(text += transcript);
                    }
                }
            };

            if(recording) {
                recognizer.start();
                recognizer.onend = () => recognizer.start()
            } else {
                recognizer.stop();
            }
        }
    }

    const handleButton = () => {
        activeButton(!recording);
    }

    return(
        <HomeStyled>
            <Container>
                <Button buttonAction={() => handleButton()}></Button>
                <TextContainer newText={ text } finalText={ finalText }></TextContainer>
            </Container>
        </HomeStyled>
    );
}

export default Home;
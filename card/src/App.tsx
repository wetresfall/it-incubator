import React from 'react';
import logo from './logo.svg';
import './App.css';
import {StyledButton, StyledButtonActive} from "./components/Button.styled";
import {StyledCard} from "./components/Card.styled";
import {StyledImage} from "./components/Image.styled";
import {StyledHeading} from "./components/Heading.styled";
import {StyledParagraph} from "./components/Paragraph.styled";
import {StyledWrapper} from "./components/Wrapper.styled";
import {StyledButtonContainer} from "./components/ButtonContainer.styled";

function App() {
    return (
        <div className="App">
            <StyledWrapper>
                <StyledCard>
                    <div>
                        <StyledImage alt="empty"></StyledImage>
                        <StyledHeading>Headline</StyledHeading>
                        <StyledParagraph>Faucibus. Faucibus. Sit sit sapien sit<br/> tempusrisu ut. Sit molestie ornare in
                            venen.</StyledParagraph>
                    </div>
                    <StyledButtonContainer>
                        <StyledButtonActive>See more</StyledButtonActive>
                        <StyledButton>Save</StyledButton>
                    </StyledButtonContainer>
                </StyledCard>
            </StyledWrapper>
        </div>
    );
}

export default App;

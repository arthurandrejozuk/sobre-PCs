import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans&family=Oswald:wght@300;500;600;700&family=REM:wght@300;400;500;600;700&display=swap');

  html {
    display: flex;
    min-height: 100%;
    flex-direction: column;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    font-family: 'Open Sans', sans-serif;
    font-family: 'Oswald', sans-serif;
    font-family: 'REM', sans-serif;
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: ${props => props.theme.body};
  }
  #__next {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: flex-start;
    flex-shrink: 0;
  }
 
  * {
 
    box-sizing: border-box;
    margin: 0;
    padding: 0;

   
  }
`;



export default GlobalStyles;

import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import styled, { ThemeProvider } from 'styled-components';
import Main from './components/Main';
import Footer from './components/Footer';
import { lightTheme, darkTheme, GlobalStyles} from "./themes.js";
const StyledApp = styled.div`
   color: ${(props) => props.theme.fontColor};
`;
function App(){

  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    {/* <div className='App'> */}
    <GlobalStyles />
      <StyledApp>
        
           <h5 onClick={() => themeToggler()}>Switch the mode</h5>
      </StyledApp>
    <Navigation />
    <Main />
    <Footer />
    
    {/* <DarkMode /> */}
    
    </ThemeProvider>
  );
}
export default App;


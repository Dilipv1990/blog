import lightTheme from "./theme/light";
import darkTheme from "./theme/dark";
import { ThemeProvider } from "styled-components";
import Home from "./pages/home";
import { useState } from "react";
import React from "react";

const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  const switchTheme = () => {
    console.log({ theme });
    setTheme((oldTheme) => (oldTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <Home switchTheme={switchTheme} />
    </ThemeProvider>
  );
};

export default App;

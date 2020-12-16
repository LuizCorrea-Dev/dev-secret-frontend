import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    primary: "#AE1D1D",
    primaryLight: "#FFF3F3",
    secondary: "#00FF19",
    light: "#FFFFFF"
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme
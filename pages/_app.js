import { createGlobalStyle } from "styled-components"
import Theme from '../src/Theme'

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`

export default function App ({ Component, pageProps }) {
  return (
    <Theme>
      <GlobalStyle />
      <Component {...pageProps} />
    </Theme>
  )
}
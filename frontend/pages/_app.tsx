// app/pages/_app.tsx
import { AppProps } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        color: #333;
    }
`;

// _app component
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={{}}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;

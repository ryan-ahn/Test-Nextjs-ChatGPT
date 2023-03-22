import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global';
import theme from '@styles/theme';
import Main from '@components/main';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </>
  );
}

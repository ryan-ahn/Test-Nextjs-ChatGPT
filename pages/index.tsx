import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global';
import theme from '@styles/theme';
import Canvas from '@components/2. canvas';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Canvas />
      </ThemeProvider>
    </>
  );
}

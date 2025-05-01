import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import type { AppProps } from 'next/app';

// Define custom theme with LazySlide colors
const theme = createTheme({
  colors: {
    primary: ['#F0E6F5', '#E6D3EF', '#DBBFEA', '#D1ACE4', '#C68FE6', '#B77AE0', '#A866DA', '#9952D4', '#8A3DCE', '#7B29C8'],
    secondary: ['#E9E5EC', '#D3CBD9', '#BDB1C6', '#A797B3', '#7E698E', '#685579', '#524164', '#3C2D4F', '#26193A', '#100525'],
  },
  primaryColor: 'primary',
  primaryShade: 4, // Use the 5th shade (index 4) as the primary color
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
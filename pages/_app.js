import { extendTheme, ChakraProvider } from '@chakra-ui/react';

import '../styles/globals.css';

const theme = extendTheme({
  colors: {
    blue: {
      100: '#000',
      500: '#44AEB5',
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

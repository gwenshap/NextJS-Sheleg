import type { AppProps } from 'next/app'
import { NileProvider } from '@theniledev/react';
import { Container } from '@mui/joy';

import '../styles/globals.css'

const BASE_PATH = 'https://prod.thenile.dev';
// a workspace can be gotten by signing in to https://nad.thenile.dev/ and creating one
const WORKSPACE = "<Enter workspace here>"; 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NileProvider basePath={BASE_PATH} workspace={WORKSPACE}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </NileProvider>
  );
}

export default MyApp

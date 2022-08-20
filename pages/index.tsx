import type { NextPage } from 'next'
import Head from 'next/head'
import { useNile } from '@theniledev/react';

import WelcomeToNile from '~/components/WelcomeToNile'; // https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping
import MyLoginForm from '~/components/MyLoginForm';

function Header() {
  return (
    <Head>
      <title>Nile App</title>
      <meta name="description" content="Welcome to Nile" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}


const Home: NextPage = () => {
  const nile = useNile();
  /**
   * Delete the code block and component after you've updated the workspace name in ./_app.tsx
   */
  if (nile.workspace === '<Enter workspace here>') {
    return (
      <>
        <Header />
        <WelcomeToNile />
      </>
    );
  }
  /** end delete */

  return (
    <>
      <Header/>
      {/** wrapper around the nile login form */}
      <MyLoginForm />
    </>
  )
}

export default Home

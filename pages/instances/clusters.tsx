import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react';
import ClustersTable from '~/components/ClustersTable'; // https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping

const Clusters: NextPage = () => {
  return (
    <>
      <Head>
        <title>Clusters | Nile</title>
        <meta name="description" content="Clusters by user organization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ClustersTable />
    </>
  );
}
export default Clusters;
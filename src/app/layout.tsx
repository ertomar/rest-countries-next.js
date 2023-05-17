import { Suspense } from 'react';
import Head from 'next/head';

import { Label } from '@/components';

import './globals.css';
import Loading from './Loading';
import ErrorBoundary from './ErrorBoundary';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Countries App</title>
        <meta
          name="description"
          content="A simple app to view countries and their details"
          key="desc"
        />
      </Head>
      <ErrorBoundary>
        <main className="main-layout">
          <Label as="h1" className="headline" variant="primary">
            Countries App
          </Label>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
      </ErrorBoundary>
    </>
  );
};

export default PrimaryLayout;

import Head from 'next/head';

import { Label } from '@/components';

import './globals.css';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Countries App</title>
      </Head>
      <main className="main-layout">
        <Label as="h1" className="headline" variant="primary">
          Countries App
        </Label>
        {children}
      </main>
    </>
  );
};

export default PrimaryLayout;

import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { CountryCard } from '@/components';
import RootLayout from '@/app/layout';

import styles from './index.module.css';

import { useCallback } from 'react';

export interface ICountry {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  population: number;
  languages: {
    [key: string]: string;
  };
  flags: {
    [key: string]: string;
  };
  borders: string[];
}

interface IHome {
  data: ICountry[];
}

const Home: React.FC<IHome> = ({ data: countries }) => {
  const router = useRouter();

  const onCountryClick = useCallback(
    (name: string) => {
      router.push(`/country/${encodeURIComponent(name)}`);
    },
    [router]
  );

  const countriesCards = countries.map((country) => {
    const { name, capital, population, flags } = country;
    const commonName = name.common;
    const officialName = name.official;
    const countryCapital = capital[0];
    const countryPopulation = population;
    const countryFlag = flags.svg;

    return (
      <CountryCard
        key={commonName}
        onClick={() => onCountryClick(officialName)}
        title={commonName}
        name={officialName}
        flag={countryFlag}
        population={countryPopulation}
        capital={countryCapital}
      />
    );
  });

  return (
    <RootLayout>
      <div className={styles.countriesContainer}>{countriesCards}</div>
    </RootLayout>
  );
};

export const getServerSideProps: GetServerSideProps<{
  data: ICountry[];
}> = async () => {
  const selectedFields = [
    'name',
    'capital',
    'currencies',
    'population',
    'flags',
  ];

  const res = await fetch(
    `https://restcountries.com/v3.1/all?fields=${selectedFields.join(',')}`
  );

  const data = await res.json();

  return { props: { data } };
};

export default Home;

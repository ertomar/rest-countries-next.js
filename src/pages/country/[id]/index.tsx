import { GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { ICountry } from '@/pages';
import RootLayout from '@/app/layout';

import { Label, Button } from '@/components';

import styles from './country.module.css';
import BorderingCountries from './components/BorderingCountries';
import Loading from '@/app/Loading';

interface ICountryInfo {
  country: ICountry;
  borderingCountries: ICountry[];
}

const CountryInfo: React.FC<ICountryInfo> = ({
  country,
  borderingCountries,
}) => {
  const countryFlag = country?.flags?.svg;

  const countryCurrency = Object.values(country?.currencies || {})?.[0]?.name;

  const countryLanguages = Object.values(country?.languages || {});

  const router = useRouter();

  const onBackButtonClick = () => {
    router.push('/');
  };

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <RootLayout>
      <div className={styles.backButtonContainer}>
        <Button onClick={onBackButtonClick} variant="primary">
          &lt; back
        </Button>
      </div>
      <section className={styles.CountryDetailsContainer}>
        <div className={styles.imageContainer}>
          <Image
            height={100}
            width={100}
            src={countryFlag}
            alt={country?.name?.common || 'Flag image'}
            className={styles.flagImage}
            priority={false}
          />
        </div>
        <div className={styles.infoCard}>
          <Label as="h3">{country?.name?.official}</Label>
          <Label as="h3">
            Capital: {country?.capital?.[0] || 'No Capital Provided'}
          </Label>
          <Label as="h3">
            Population: {country?.population?.toLocaleString()}
          </Label>
          <Label as="h3">
            Currency: {countryCurrency || 'No Currency Provided'}
          </Label>
          <Label as="h3">
            Languages: {countryLanguages || 'No Language Provided'}
          </Label>
        </div>
        <div className={styles.borderingCountries}>
          <Label as="h2">Bordering Countries</Label>
          <BorderingCountries borderingCountries={borderingCountries || []} />
        </div>
      </section>
    </RootLayout>
  );
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const countriesResponse = await fetch(
    `https://restcountries.com/v3.1/name/${params.id}?fullText=true`
  );
  const countries: ICountry[] = await countriesResponse.json();

  if (countries?.[0]?.borders?.length > 1) {
    let borderingCountriesResponse = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${countries?.[0]?.borders?.join(
        ','
      )}`
    );

    const borderingCountries: ICountry[] =
      await borderingCountriesResponse.json();

    return {
      props: {
        country: countries?.[0],
        borderingCountries,
      },
    };
  }

  return {
    props: {
      country: countries?.[0],
      borderingCountries: [],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all?fields=name');
  const countries = await res.json();

  const paths = countries.map((country: ICountry) => ({
    params: { id: country?.name?.official },
  }));

  return { paths, fallback: true };
};

export default CountryInfo;

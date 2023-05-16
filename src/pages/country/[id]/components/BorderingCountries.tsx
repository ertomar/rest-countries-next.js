import { useCallback } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { Label } from '@/components';
import { ICountry } from '@/pages';

import styles from '../country.module.css';

type BorderingCountriesProps = {
  borderingCountries: ICountry[];
};

const BorderingCountries: React.FC<BorderingCountriesProps> = ({
  borderingCountries,
}) => {
  const borderingCountriesCards = (borderingCountries || [])?.map((country) => {
    const { name, population, flags } = country;
    const commonName = name.common;
    const flag = flags.svg;
    const populationStr = population.toLocaleString();

    return (
      <BorderingCountryCard
        key={commonName}
        countryName={commonName}
        officialName={name.official}
        flag={flag}
        population={populationStr}
      />
    );
  });

  if (borderingCountries?.length == 0) {
    return (
      <div className={styles.borderingEmptyState}>
        <Label as="p">No bordering countries</Label>
      </div>
    );
  }

  return (
    <div className={styles.borderingCountriesContainer}>
      {borderingCountriesCards}
    </div>
  );
};

const BorderingCountryCard: React.FC<{
  countryName: string;
  flag: string;
  population: string;
  officialName: string;
}> = ({ countryName, flag, population, officialName }) => {
  const router = useRouter();

  const onCountryClick = useCallback(() => {
    router.push(`/country/${encodeURIComponent(officialName)}`);
  }, [officialName, router]);

  return (
    <div className={styles.borderingCard} onClick={onCountryClick}>
      <div className={styles.borderingFlagContainer}>
        <Image
          height={100}
          width={100}
          src={flag}
          className={styles.flagImage}
          alt={`${countryName} flag`}
          priority={false}
        />
      </div>
      <div>
        <Label as="h4" className={styles.borderingName}>
          {countryName}
        </Label>
        <Label as="p" className={styles.borderingDetails}>
          Population: {population}
        </Label>
      </div>
    </div>
  );
};

export default BorderingCountries;

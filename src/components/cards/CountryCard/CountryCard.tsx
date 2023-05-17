import Image from 'next/image';

import { Label, Card } from '../../index';

import styles from './CountryCard.module.css';

export interface ICountryCard {
  title: string;
  name: string;
  flag: string;
  population: number;
  capital: string;
  onClick?: () => void;
}

const CountryCard: React.FC<ICountryCard> = (props) => {
  const { title, name, flag, population, capital, onClick } = props;

  return (
    <Card className={styles.container} onClick={onClick}>
      <div className="country-card">
        <Label
          as="h2"
          className={styles.countryFloatingLabel}
          variant="primary"
          id="countryCardTitle"
        >
          {title}
        </Label>
        <div className={styles.imageContainer}>
          <Image
            height={100}
            width={100}
            src={flag}
            alt={name}
            className={styles.countryImage}
            priority={false}
          />
          <div>
            <InfoLabel id="countryName">Official Name: {name}</InfoLabel>
            <InfoLabel id="countryCapital">Capital: {capital}</InfoLabel>
          </div>
        </div>
        <InfoLabel id="countryPopulation">
          Population: {population.toLocaleString()}
        </InfoLabel>
      </div>
    </Card>
  );
};

const InfoLabel: React.FC<{
  children: React.ReactNode;
  id: string;
}> = ({ children, id }) => {
  return (
    <Label as="h3" className={styles.infoLabel} id={id}>
      {children}
    </Label>
  );
};

export default CountryCard;

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
      <Label as="h2" className={styles.countryFloatingLabel} variant="primary">
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
          <InfoLabel>Official Name: {name}</InfoLabel>
          <InfoLabel>Capital: {capital}</InfoLabel>
        </div>
      </div>
      <InfoLabel>Population: {population.toLocaleString()}</InfoLabel>
    </Card>
  );
};

const InfoLabel: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <Label as="h3" className={styles.infoLabel}>
      {children}
    </Label>
  );
};

export default CountryCard;

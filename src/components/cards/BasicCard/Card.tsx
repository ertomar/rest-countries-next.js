import styles from './Card.module.css';

export interface ICard {
  children: React.ReactNode;
}

const Card: React.FC<ICard> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Card;

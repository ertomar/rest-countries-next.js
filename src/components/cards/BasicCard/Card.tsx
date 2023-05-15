import styles from './Card.module.css';

export interface ICard extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<ICard> = ({ children, className, ...props }) => {
  const cardClassName = `${styles.container} ${className}`;

  return (
    <div className={cardClassName} {...props}>
      {children}
    </div>
  );
};

export default Card;

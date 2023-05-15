import cssStyles from './Button.module.css';

const buttonVariants = {
  primary: { backgroundColor: 'var(--primary-color)', color: 'white' },
  secondary: { backgroundColor: 'var(--secondary-color)', color: '#ffffff' },
  black: { backgroundColor: '#000000', color: '#ffffff' },
  white: { backgroundColor: '#ffffff', color: '#000000' },
};

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: keyof typeof buttonVariants;
  styles?: React.CSSProperties;
  className?: string;
}

const Label: React.FC<IButton> = (props) => {
  const { children, variant, styles, className, ...restProps } = props;

  const variantStyle = buttonVariants[variant ?? 'black'];
  const labelStyles = { ...variantStyle, ...styles };

  const buttonClassName = className ?? cssStyles.button;

  return (
    <button {...restProps} style={labelStyles} className={buttonClassName}>
      {children}
    </button>
  );
};

export default Label;

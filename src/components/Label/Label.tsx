const labelVariants = {
  primary: { color: 'var(--primary-color)' },
  secondary: { color: 'var(--secondary-color)' },
  black: { color: '#000000' },
  white: { color: '#ffffff' },
};

export interface ILabel {
  children: React.ReactNode;
  variant?: keyof typeof labelVariants;
  as?: keyof JSX.IntrinsicElements;
  styles?: React.CSSProperties;
  className?: string;
}

const Label: React.FC<ILabel> = (props) => {
  const { children, variant, as = 'label', styles, className } = props;

  const variantStyle = labelVariants[variant ?? 'black'];
  const labelStyles = { ...variantStyle, ...styles };

  const Component = as;

  return (
    <Component style={labelStyles} className={className}>
      {children}
    </Component>
  );
};

export default Label;

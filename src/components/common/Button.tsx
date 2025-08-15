interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant: 'primary' | 'secondary' | 'tertiary';
}

const Button = ({ variant, className, ...buttonProps }: ButtonProps) => {
  return (
    <button
      className={`inline-flex gap-2 justify-center items-center cursor-pointer bg-${variant} py-[8px] px-[16px] text-${
        variant === 'primary' ? 'tertiary' : 'primary'
      } rounded-[8px] ${className || ''}`}
      {...buttonProps}
    ></button>
  );
};

export default Button;

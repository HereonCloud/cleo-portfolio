import { cn } from '../../utils/utils';

interface ButtonProps extends React.ComponentProps<'button'> {
  variant: 'primary' | 'secondary' | 'tertiary';
}

const Button = ({
  variant,
  className,
  children,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'inline-flex gap-2 justify-center items-center cursor-pointer py-[8px] px-[16px] rounded-[8px]',
        {
          'bg-primary': variant === 'primary',
          'bg-secondary': variant === 'secondary',
          'bg-tertiary': variant === 'tertiary',
          'text-tertiary': variant === 'primary',
          'text-primary': variant !== 'primary',
        },
        className
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;

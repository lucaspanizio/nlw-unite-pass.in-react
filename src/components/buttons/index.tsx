import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface IconButtonProps extends ComponentProps<'button'> {
  isTransparent?: boolean;
}

export const Icon: React.FC<IconButtonProps> = ({
  isTransparent = false,
  ...props
}) => {
  return (
    <button
      {...props}
      className={twMerge(
        'border border-white/20 rounded-md p-1.5',
        isTransparent ? 'bg-black/20' : 'bg-white/10',
        props.disabled && 'opacity-50',
      )}
    />
  );
};

export const Button = {
  Icon,
};

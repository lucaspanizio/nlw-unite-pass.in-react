import { ComponentProps, forwardRef } from 'react';

interface ICheckboxProps extends ComponentProps<'input'> {}

export const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  (props, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        className="size-4 bg-black/20 rounded border border-white/10 
          checked:bg-orange-400 checked:hover:bg-orange-400 checked:focus:bg-orange-400
          focus:ring-0 focus:ring-offset-0 cursor-pointer"
        {...props}
      />
    );
  },
);

import { ComponentProps } from 'react';

interface InputTextProps extends ComponentProps<'input'> {}

export const Text: React.FC<InputTextProps> = (props) => {
  return (
    <input
      type="text"
      className="bg-transparent flex-1 outline-none border-0 p-0 text-sm focus:ring-0"
      {...props}
    />
  );
};

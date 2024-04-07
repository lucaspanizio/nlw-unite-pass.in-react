import { ComponentProps } from 'react';
import { SearchIcon } from 'lucide-react';

interface InputTextProps extends ComponentProps<'input'> {}

export const Search: React.FC<InputTextProps> = (props) => {
  return (
    <div className="px-3 py-1.5 w-72 border border-white/10 rounded-lg flex items-center gap-3">
      <SearchIcon className="size-4  text-orange-400" />
      <input
        type="text"
        className="bg-transparent flex-1 outline-none border-0 p-0 text-sm 
        focus:ring-0 caret-orange-300"
        {...props}
      />
    </div>
  );
};

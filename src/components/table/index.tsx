import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { Pagination } from './pagination';

interface TableProps extends ComponentProps<'table'> {}

export const Root: React.FC<TableProps> = (props) => {
  return (
    <div className="border border-white/10 rounded-lg relative">
      <table className="w-full" {...props} />
    </div>
  );
};

interface HeaderProps extends ComponentProps<'thead'> {}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <thead {...props}>
      <tr className="border-b border-white/10">{props.children}</tr>
    </thead>
  );
};

interface HeadProps extends ComponentProps<'th'> {}

export const Head: React.FC<HeadProps> = (props) => {
  return (
    <th className="py-3 px-4 text-sm font-semibold text-left" {...props} />
  );
};

interface BodyProps extends ComponentProps<'tbody'> {}

export const Body: React.FC<BodyProps> = (props) => {
  return <tbody {...props} />;
};

interface LineProps extends ComponentProps<'tr'> {}

export const Line: React.FC<LineProps> = (props) => {
  return (
    <tr className="border-b border-white/10 hover:bg-white/5" {...props} />
  );
};

interface CellProps extends ComponentProps<'td'> {}

export const Cell: React.FC<CellProps> = ({ className, ...props }) => {
  return (
    <td
      className={twMerge('py-3 px-4 text-sm text-zinc-300', className)}
      {...props}
    />
  );
};

interface FootProps extends ComponentProps<'tfoot'> {}

export const Foot: React.FC<FootProps> = (props) => {
  return (
    <tfoot>
      <tr>{props.children}</tr>
    </tfoot>
  );
};

export const Table = {
  Root,
  Header,
  Head,
  Body,
  Line,
  Cell,
  Foot,
  Pagination,
};

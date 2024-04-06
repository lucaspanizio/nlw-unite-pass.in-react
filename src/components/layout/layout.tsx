import { Outlet } from 'react-router-dom';
import { Header } from '../header';

export const Layout: React.FC = () => {
  return (
    <div className="max-w-[1216px] mx-auto py-5 fflex flex-col gap-5">
      <Header />
      <Outlet />
    </div>
  );
};

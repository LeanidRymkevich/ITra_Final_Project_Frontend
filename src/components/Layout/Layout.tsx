import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <div>
      <header style={{ backgroundColor: 'cyan' }}>
        <h2>This is Header</h2>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

import { Outlet } from 'react-router-dom';

const UserPage = () => {
  return (
    <div>
      <div>
        <button>UserTemplates</button>
        <button>UserForms</button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default UserPage;

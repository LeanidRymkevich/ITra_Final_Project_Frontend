import { NavLink, Outlet } from 'react-router-dom';
import { PATHS } from '../../types/enums';

const UserPage = () => {
  return (
    <div>
      <div>
        <NavLink to={PATHS.USER_TEMPLATES_TAB}>UserTemplates</NavLink>
        <NavLink to={PATHS.USER_FORMS_TAB}>UserForms</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default UserPage;

import { Outlet } from 'react-router-dom';

const UserPage = () => {
  return (
    <div>
      <div>
        <button>TemplateEditor</button>
        <button>TemplateForms</button>
        <button>TemplateSettings</button>
        <button>TemplateStatistics</button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default UserPage;

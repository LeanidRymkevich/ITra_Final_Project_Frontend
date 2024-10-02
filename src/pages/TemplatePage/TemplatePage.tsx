import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { PATHS } from '../../types/enums';

const TemplatePage = () => {
  return (
    <div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <NavLink to={PATHS.TEMPLATE_EDITOR_TAB}>TemplateEditor</NavLink>
        <NavLink to={PATHS.TEMPLATE_FORMS_TAB}>TemplateForms</NavLink>
        <NavLink to={PATHS.TEMPLATE_STATISTICS_TAB}>TemplateStatistics</NavLink>
        <NavLink to={PATHS.TEMPLATE_SETTINGS_TAB}>TemplateSettings</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default TemplatePage;

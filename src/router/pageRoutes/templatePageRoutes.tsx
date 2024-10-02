import { Route, Navigate } from 'react-router-dom';

import TemplatePage from '../../pages/TemplatePage/TemplatePage';
import TemplateEditor from '../../pages/TemplatePage/tabs/TemplateEditor';
import TemplateForms from '../../pages/TemplatePage/tabs/TemplateForms';
import TemplateStatistics from '../../pages/TemplatePage/tabs/TemplateStatistics';
import TemplateSettings from '../../pages/TemplatePage/tabs/TemplateSettings';

import { PATHS } from '../../types/enums';

const templatePageRoutes = (
  <Route
    path={PATHS.TEMPLATE_PAGE}
    element={<TemplatePage />}
  >
    <Route
      index
      element={<Navigate to={PATHS.TEMPLATE_EDITOR_TAB} />}
    />
    <Route
      path={PATHS.TEMPLATE_EDITOR_TAB}
      element={<TemplateEditor />}
    />
    <Route
      path={PATHS.TEMPLATE_FORMS_TAB}
      element={<TemplateForms />}
    />
    <Route
      path={PATHS.TEMPLATE_STATISTICS_TAB}
      element={<TemplateStatistics />}
    />
    <Route
      path={PATHS.TEMPLATE_SETTINGS_TAB}
      element={<TemplateSettings />}
    />
  </Route>
);

export default templatePageRoutes;

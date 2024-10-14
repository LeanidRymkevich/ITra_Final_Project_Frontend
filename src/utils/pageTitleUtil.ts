import { PATHS } from '../types/enums';

const notFoundPageI18nKey = 'NotFoundPage';
const i18nPageTitlesMap: Record<string, string> = {
  [PATHS.MAIN_PAGE]: 'Main',
  [PATHS.SIGN_IN]: 'SignIn',
  [PATHS.SIGN_UP]: 'SignUp',
  [PATHS.SEARCH_RESULTS_PAGE]: 'SearchResults',
  [PATHS.ADMIN_PAGE]: 'AdminPage',
  [PATHS.USER_PAGE]: 'UserPage',
  [PATHS.USER_TEMPLATES_TAB]: 'UserTemplates',
  [PATHS.USER_FORMS_TAB]: 'UserForms',
  [PATHS.TEMPLATE_PAGE]: 'Template',
  [PATHS.TEMPLATE_EDITOR_TAB]: 'TemplateEditor',
  [PATHS.TEMPLATE_FORMS_TAB]: 'TemplateForms',
  [PATHS.TEMPLATE_SETTINGS_TAB]: 'TemplateSettings',
  [PATHS.TEMPLATE_STATISTICS_TAB]: 'TemplateStatistics',
};

const getPageTitleI18nKey = (path: string): string => {
  const key: string | undefined = i18nPageTitlesMap[path];
  if (!key) return notFoundPageI18nKey;
  return key;
};

export { getPageTitleI18nKey };

enum PATHS {
  ROOT = '/',
  MAIN_PAGE = '',
  SIGN_IN = 'sign-in',
  SIGN_UP = 'sign-up',
  SEARCH_RESULTS_PAGE = 'search-results',
  ADMIN_PAGE = 'admin',
  USER_PAGE = 'user',
  USER_TEMPLATES_TAB = 'templates',
  USER_FORMS_TAB = 'forms',
  TEMPLATE_PAGE = 'template',
  TEMPLATE_EDITOR_TAB = 'editor',
  TEMPLATE_FORMS_TAB = 'forms',
  TEMPLATE_SETTINGS_TAB = 'settings',
  TEMPLATE_STATISTICS_TAB = 'statistics',
  NOT_EXIST = '*',
}

enum ROLES {
  ADMIN = 'admin',
  USER = 'user',
}

export { PATHS, ROLES };

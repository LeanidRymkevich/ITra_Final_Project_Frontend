enum PATHS {
  ROOT = '/',
  MAIN_PAGE = '/',
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  SEARCH_RESULTS_PAGE = '/search-results',
  ADMIN_PAGE = '/admin',
  USER_PAGE = '/user',
  USER_TEMPLATES_TAB = '/user/templates',
  USER_FORMS_TAB = '/user/forms',
  TEMPLATE_PAGE = '/template',
  TEMPLATE_EDITOR_TAB = '/template/editor',
  TEMPLATE_FORMS_TAB = '/template/forms',
  TEMPLATE_SETTINGS_TAB = '/template/settings',
  TEMPLATE_STATISTICS_TAB = '/template/statistics',
  NOT_EXIST = '*',
}

enum PAGE_NAMES {
  MAIN_PAGE = 'Main',
  SIGN_IN = 'Sign In',
  SIGN_UP = 'Sign Up',
  SEARCH_RESULTS_PAGE = 'Search results',
  ADMIN_PAGE = 'Admin page',
  USER_PAGE = 'User page',
  USER_TEMPLATES_TAB = `User's templates`,
  USER_FORMS_TAB = `User's forms`,
  TEMPLATE_PAGE = 'Template',
  TEMPLATE_EDITOR_TAB = `Template's editor`,
  TEMPLATE_FORMS_TAB = `Template's forms`,
  TEMPLATE_SETTINGS_TAB = `Template's settings`,
  TEMPLATE_STATISTICS_TAB = `Template's statistics`,
  NOT_EXIST = 'Page Not Found',
}

enum ROLES {
  ADMIN = 'admin',
  USER = 'user',
}

enum LOCAL_STORAGE_KEYS {
  MODE = 'mode',
  LANG = 'lang',
}

enum LANGUAGES {
  EN = 'en',
  RU = 'ru',
}

export { PATHS, ROLES, LOCAL_STORAGE_KEYS, PAGE_NAMES, LANGUAGES };

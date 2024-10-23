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

enum USER_ROLES {
  ADMIN = 'admin',
  USER = 'user',
}

enum USER_STATUS {
  BLOCKED = 'blocked',
  ACTIVE = 'active',
}

enum LANGUAGES {
  EN = 'en',
  RU = 'ru',
}

enum REDUX_REDUCERS {
  AUTH = 'auth',
  USERS_TABLE = 'users_table',
}

enum ENDPOINTS {
  ROOT = '/',
  LOCALES = '/locales',
  AUTH = '/auth',
  ADMIN = '/admin',
}

enum AUTH_ENDPOINTS {
  SIGN_IN = '/sign_in',
  SIGN_UP = '/sign_up',
}

enum SERVICES_NAMES {
  AUTH = 'authService',
}

export {
  PATHS,
  USER_ROLES,
  LANGUAGES,
  REDUX_REDUCERS,
  USER_STATUS,
  ENDPOINTS,
  AUTH_ENDPOINTS,
  SERVICES_NAMES,
};

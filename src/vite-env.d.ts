/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEVELOPMENT_SERVER_URL: string;
  readonly VITE_PRODUCTION_SERVER_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

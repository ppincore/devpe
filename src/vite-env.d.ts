/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_IS_DEV: boolean;
  readonly VITE_IS_AUTH_DISABLED: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

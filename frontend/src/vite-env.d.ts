/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL of the articles API. Blank in dev, where the Vite proxy handles /api. */
  readonly VITE_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

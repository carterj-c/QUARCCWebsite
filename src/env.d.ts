/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_PAPER_FUND_API_BASE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

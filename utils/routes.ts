import { BLOG_POSTS, findBlogPost, getBlogPath } from '../constants';
import { Language, Page } from '../types';

export const DEFAULT_LANGUAGE: Language = 'zh';
export const SUPPORTED_LANGUAGES: Language[] = ['zh', 'ja', 'ko'];
export const PATH_PREFIX_LANGUAGES: Exclude<Language, 'zh'>[] = ['ja', 'ko'];

export const LANGUAGE_CONFIG: Record<Language, { label: string; shortLabel: string; htmlLang: string; pathPrefix: string }> = {
  zh: { label: '中文', shortLabel: '中', htmlLang: 'zh-CN', pathPrefix: '' },
  ja: { label: '日本語', shortLabel: '日', htmlLang: 'ja-JP', pathPrefix: 'ja' },
  ko: { label: '한국어', shortLabel: '한', htmlLang: 'ko-KR', pathPrefix: 'ko' },
};

export const DOMAIN_LANGUAGE_MAP: Partial<Record<string, Language>> = {
  'discoverx.co.jp': 'ja',
  'www.discoverx.co.jp': 'ja',
};

export const isLanguage = (value: string): value is Language => {
  return SUPPORTED_LANGUAGES.includes(value as Language);
};

export const getLanguageFromHostname = (hostname: string): Language | undefined => {
  return DOMAIN_LANGUAGE_MAP[hostname.toLowerCase()];
};

export const splitLanguageFromPath = (path: string, hostname = ''): { language: Language; path: string } => {
  const normalizedPath = path.replace(/^\/+|\/+$/g, '');
  const [firstSegment, ...restSegments] = normalizedPath.split('/').filter(Boolean);

  if (firstSegment && PATH_PREFIX_LANGUAGES.includes(firstSegment as Exclude<Language, 'zh'>)) {
    return {
      language: firstSegment as Language,
      path: restSegments.join('/'),
    };
  }

  return {
    language: getLanguageFromHostname(hostname) ?? DEFAULT_LANGUAGE,
    path: normalizedPath,
  };
};

const withLanguagePrefix = (path: string, language: Language = DEFAULT_LANGUAGE) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const prefix = LANGUAGE_CONFIG[language].pathPrefix;

  if (!prefix) {
    return normalizedPath;
  }

  if (normalizedPath === '/') {
    return `/${prefix}`;
  }

  return `/${prefix}${normalizedPath}`;
};

export const getPagePath = (page: Page, value?: string, language: Language = DEFAULT_LANGUAGE) => {
  if (page === Page.Home) {
    return withLanguagePrefix('/', language);
  }

  if (page === Page.Contacts) {
    return `/${Page.Contacts}`;
  }

  if (page === Page.Search) {
    const params = new URLSearchParams();
    if (value) {
      params.set('q', value);
    }
    const suffix = params.toString();
    const basePath = withLanguagePrefix(`/${Page.Search}`, language);
    return suffix ? `${basePath}?${suffix}` : basePath;
  }

  if (page === Page.BlogDetail) {
    const post = value ? findBlogPost(value) : undefined;
    return withLanguagePrefix(post ? getBlogPath(post) : `/${Page.BlogList}`, language);
  }

  return withLanguagePrefix(`/${page}`, language);
};

export const getPrimaryPagePaths = (language: Language = DEFAULT_LANGUAGE) => {
  return [
    Page.Home,
    Page.BlogList,
    Page.Products,
    Page.Targets,
    Page.Applications,
    Page.Custom,
    Page.Documents,
    Page.Contacts,
    Page.Glp1r,
    Page.Gpcr,
    Page.CytokineReceptors,
    Page.CheckpointReceptors,
    Page.KinaseReceptors,
    Page.Nhr,
    Page.IonChannels,
    Page.CellLine,
    Page.ExpressKit,
    Page.BioassayKit,
    Page.InternalizationDetail,
    Page.CytotoxicityDetail,
    Page.SignalPathwayDetail,
    Page.TargetEngagementDetail,
    Page.TpdDetail,
    Page.DatasheetList,
    Page.UserManual,
  ].map((page) => getPagePath(page, undefined, language)).concat(BLOG_POSTS.map((post) => withLanguagePrefix(getBlogPath(post), language)));
};

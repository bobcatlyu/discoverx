import { BLOG_POSTS, findBlogPost, getBlogPath } from '../constants';
import { Page } from '../types';

export const getPagePath = (page: Page, value?: string) => {
  if (page === Page.Home) {
    return '/';
  }

  if (page === Page.Search) {
    const params = new URLSearchParams();
    if (value) {
      params.set('q', value);
    }
    const suffix = params.toString();
    return suffix ? `/${Page.Search}?${suffix}` : `/${Page.Search}`;
  }

  if (page === Page.BlogDetail) {
    const post = value ? findBlogPost(value) : undefined;
    return post ? getBlogPath(post) : `/${Page.BlogList}`;
  }

  return `/${page}`;
};

export const getPrimaryPagePaths = () => {
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
    Page.CellLine,
    Page.ExpressKit,
    Page.BioassayKit,
    Page.InternalizationDetail,
    Page.CytotoxicityDetail,
    Page.DatasheetList,
    Page.UserManual,
  ].map((page) => getPagePath(page)).concat(BLOG_POSTS.map(getBlogPath));
};

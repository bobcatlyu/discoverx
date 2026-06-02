import React from 'react';
import { Language, Page } from '../types';
import { getPagePath } from '../utils/routes';
import { getLocale } from '../locales';

interface FooterProps {
  language: Language;
  onNavigate?: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ language, onNavigate }) => {
  const locale = getLocale(language);
  const footer = locale.footer;

  const handlePageClick = (event: React.MouseEvent<HTMLAnchorElement>, page: Page) => {
    if (!onNavigate) {
      return;
    }

    event.preventDefault();
    onNavigate(page);
  };

  const footerLinkClass = 'transition hover:text-teal-200';

  return (
    <footer className="bg-[#4B827E] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-wider border-b border-white/20 pb-2 inline-block">
            {footer.aboutTitle}
          </h3>
          <p className="text-sm leading-relaxed text-white/90">
            {footer.aboutText}
          </p>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-wider border-b border-white/20 pb-2 inline-block">
            {footer.coreProductsTitle}
          </h3>
          <ul className="text-sm space-y-2 text-white/90">
            <li>
              <a href={getPagePath(Page.Gpcr, undefined, language)} onClick={(event) => handlePageClick(event, Page.Gpcr)} className={footerLinkClass}>
                {footer.links[Page.Gpcr]}
              </a>
            </li>
            <li>
              <a href={getPagePath(Page.Gpcr, undefined, language)} onClick={(event) => handlePageClick(event, Page.Gpcr)} className={footerLinkClass}>
                HitHunter cAMP Kit
              </a>
            </li>
            <li>
              <a href={getPagePath(Page.CytotoxicityDetail, undefined, language)} onClick={(event) => handlePageClick(event, Page.CytotoxicityDetail)} className={footerLinkClass}>
                {footer.links[Page.CytotoxicityDetail]}
              </a>
            </li>
            <li>
              <a href={getPagePath(Page.TargetEngagementDetail, undefined, language)} onClick={(event) => handlePageClick(event, Page.TargetEngagementDetail)} className={footerLinkClass}>
                {footer.links[Page.TargetEngagementDetail]}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-wider border-b border-white/20 pb-2 inline-block">
            {footer.supportTitle}
          </h3>
          <ul className="text-sm space-y-2 text-white/90">
            <li>
              <a href={getPagePath(Page.DatasheetList, undefined, language)} onClick={(event) => handlePageClick(event, Page.DatasheetList)} className={footerLinkClass}>
                {footer.links[Page.DatasheetList]}
              </a>
            </li>
            <li>
              <a href={getPagePath(Page.UserManual, undefined, language)} onClick={(event) => handlePageClick(event, Page.UserManual)} className={footerLinkClass}>
                {footer.links[Page.UserManual]}
              </a>
            </li>
            <li>
              <a href={getPagePath(Page.ApplicationNote, undefined, language)} onClick={(event) => handlePageClick(event, Page.ApplicationNote)} className={footerLinkClass}>
                {footer.links[Page.ApplicationNote]}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-wider border-b border-white/20 pb-2 inline-block">
            {footer.contactTitle}
          </h3>
          <p className="text-sm text-white/90 mb-2">{footer.address}</p>
          <p className="text-sm text-white/90">{footer.email}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/20 text-center text-[10px]">
        <p className="text-white/70 uppercase tracking-[0.2em]">© 2024 Eurofins DiscoverX (China). All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { BLOG_POSTS, getBlogPath } from '../constants';
import { Page } from '../types';

interface BlogListProps {
  onNavigate?: (page: Page, value?: string) => void;
}

const BlogList: React.FC<BlogListProps> = ({ onNavigate }) => {
  const posts = [...BLOG_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 border-b border-slate-200 pb-6">
        <h1 className="mb-3 text-4xl font-extrabold text-[#1C2C5E]">最新动态</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
          汇总 DiscoverX 产品介绍、技术讨论与应用资料，按发布时间倒序展示。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
            <a
              href={getBlogPath(post)}
              onClick={(event) => {
                event.preventDefault();
                onNavigate?.(Page.BlogDetail, post.id);
              }}
              className="block h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={post.imageUrl} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" alt={post.title} />
                <span className="absolute bottom-0 left-0 bg-[#4B827E] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white">
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-tighter text-slate-400">{post.date}</p>
                <h2 className="mb-3 min-h-[3rem] text-lg font-bold leading-tight text-slate-800 transition-colors group-hover:text-[#4B827E]">
                  {post.title}
                </h2>
                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-slate-600">{post.summary}</p>
                <span className="flex items-center text-xs font-bold uppercase tracking-wider text-[#4B827E] transition-transform group-hover:translate-x-1">
                  READ MORE
                  <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;

import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Page } from '../types';

interface BlogDetailProps {
  blogId: string;
  onNavigate?: (page: Page) => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blogId, onNavigate }) => {
  const post = BLOG_POSTS.find(p => p.id === blogId);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">文章未找到</h1>
        <button
          onClick={() => onNavigate?.(Page.Home)}
          className="text-[#4B827E] font-bold hover:underline"
        >
          返回首页
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <section className="bg-slate-50 border-b border-slate-200 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-slate-600">
            <button
              onClick={() => onNavigate?.(Page.Home)}
              className="hover:text-[#4B827E] transition-colors"
            >
              首页
            </button>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-slate-400">最新动态</span>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-slate-800 font-medium">{post.title}</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#4B827E] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-slate-400 text-sm">{post.date}</span>
            {post.author && (
              <>
                <span className="text-slate-300">•</span>
                <span className="text-slate-600 text-sm">作者: {post.author}</span>
              </>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1C2C5E] mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed">
            {post.summary}
          </p>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {post.content ? (
            <div
              className="text-slate-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <div className="text-slate-700 leading-relaxed space-y-6">
              <p>
                文章内容正在更新中...
              </p>
              <p>
                如需了解更多信息，请联系我们的技术支持团队。
              </p>
            </div>
          )}
        </div>

        {/* Back Button */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <button
            onClick={() => onNavigate?.(Page.Home)}
            className="inline-flex items-center text-[#4B827E] font-bold hover:underline transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回首页
          </button>
        </div>
      </article>

      {/* Related Articles (Optional) */}
      <section className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1C2C5E] mb-8">相关文章</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BLOG_POSTS.filter(p => p.id !== blogId)
              .slice(0, 2)
              .map(relatedPost => (
                <div
                  key={relatedPost.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer border border-slate-200"
                  onClick={() => {
                    // Scroll to top when navigating to another blog post
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    // This would need to be handled by parent component to update blogId
                  }}
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={relatedPost.imageUrl}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-bold text-[#4B827E] uppercase tracking-wider">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 mt-2 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {relatedPost.summary}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;

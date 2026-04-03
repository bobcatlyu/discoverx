import React, { useState } from 'react';
import { BLOG_POSTS, DEFAULT_PINNED_BLOG_ID } from '../constants';
import { Page } from '../types';

interface HomeProps {
  onNavigate?: (page: Page, blogId?: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [pinnedPostId, setPinnedPostId] = useState<string | null>(() => {
    return localStorage.getItem('pinnedPostId');
  });
  const effectivePinnedPostId = pinnedPostId || DEFAULT_PINNED_BLOG_ID;

  const togglePin = (id: string) => {
    const newPinnedId = effectivePinnedPostId === id ? null : id;
    setPinnedPostId(newPinnedId);
    if (newPinnedId) {
      localStorage.setItem('pinnedPostId', newPinnedId);
    } else {
      localStorage.removeItem('pinnedPostId');
    }
  };

  const sortedPosts = [...BLOG_POSTS].sort((a, b) => {
    if (a.id === effectivePinnedPostId) return -1;
    if (b.id === effectivePinnedPostId) return 1;
    return 0;
  });

  return (
    <div className="space-y-12 pb-20">
      <section className="relative h-[250px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4B827E] to-[#1a3d3a] z-10 opacity-90"></div>
        <img
          src="/pic/DiscoverX Logo_Blue Discover Text w BlueOrange X.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt="DiscoverX Logo"
        />
        <div className="relative z-20 text-center px-4 max-w-5xl -mt-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 drop-shadow-xl leading-tight tracking-tight">
            DiscoverX 中文网站
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-teal-100 mb-2 uppercase tracking-wide opacity-95">
            Product Solutions For Your Success
          </h2>
          <p className="text-sm md:text-base text-white/80 font-medium opacity-90">
            Global official website:{' '}
            <a href="https://www.discoverx.com" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors font-semibold">
              https://www.discoverx.com
            </a>
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">最新动态</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sortedPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => onNavigate?.(Page.BlogDetail, post.id)}
              className={`group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border cursor-pointer ${
                post.id === effectivePinnedPostId ? 'border-[#4B827E] ring-1 ring-[#4B827E]/20 ring-inset' : 'border-slate-200'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img src={post.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={post.title} />

                <div className="absolute bottom-0 left-0 flex items-center">
                  <span className="bg-[#4B827E] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest">
                    {post.category}
                  </span>
                  {post.id === effectivePinnedPostId && (
                    <span className="bg-[#1C2C5E] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      置顶
                    </span>
                  )}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePin(post.id);
                  }}
                  title={post.id === effectivePinnedPostId ? '取消置顶' : '置顶该文章'}
                  className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all z-20 ${
                    post.id === effectivePinnedPostId
                      ? 'bg-[#4B827E] text-white scale-110'
                      : 'bg-white/40 text-white hover:bg-white/80 hover:text-[#4B827E] opacity-0 group-hover:opacity-100'
                  }`}
                >
                  <svg className="w-4 h-4" fill={post.id === effectivePinnedPostId ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                <p className="text-slate-400 text-[10px] font-bold mb-2 uppercase tracking-tighter">{post.date}</p>
                <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-[#4B827E] transition-colors leading-tight min-h-[3rem]">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm line-clamp-3 mb-4 leading-relaxed">{post.summary}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#4B827E] font-bold text-xs flex items-center group-hover:translate-x-1 transition-transform uppercase tracking-wider">
                    READ MORE
                    <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  {post.id === effectivePinnedPostId && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePin(post.id);
                      }}
                      className="text-[10px] font-bold text-slate-400 hover:text-red-500 transition-colors uppercase tracking-widest"
                    >
                      取消置顶
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-5xl font-black text-[#4B827E] mb-2">1,000+</div>
            <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Assay Kits</div>
          </div>
          <div>
            <div className="text-5xl font-black text-[#4B827E] mb-2">1500+</div>
            <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Cell Lines</div>
          </div>
          <div>
            <div className="text-5xl font-black text-[#4B827E] mb-2">20+</div>
            <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-black text-[#4B827E] mb-2">TOP 50</div>
            <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Pharma Partners</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

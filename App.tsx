
import React, { useState } from 'react';
import { NavigationTab } from './types';
import { TopBar, BottomNav } from './components/Navigation';
import { HeroCarousel } from './components/HeroCarousel';
import { ContentRow } from './components/ContentRow';
import { AIScout } from './components/AIScout';
import { 
  CATEGORIES, 
  FEATURED_CONTENT, 
  LIVE_CHANNELS, 
  SPORTS_COLLECTION, 
  MOVIE_COLLECTION 
} from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavigationTab>(NavigationTab.HOME);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const renderContent = () => {
    switch (activeTab) {
      case NavigationTab.HOME:
        return (
          <>
            <HeroCarousel items={FEATURED_CONTENT} />
            
            {/* Category Pills */}
            <div className="flex gap-3 overflow-x-auto px-4 py-4 no-scrollbar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex-none px-4 py-1.5 rounded-full text-xs font-bold border transition-all ${
                    selectedCategory === cat 
                    ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-600/20' 
                    : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <AIScout />

            <ContentRow title="Live TV Channels" items={LIVE_CHANNELS} variant="landscape" />
            <ContentRow title="Action Movies" items={MOVIE_COLLECTION} variant="portrait" />
            <ContentRow title="Sports Highlights" items={SPORTS_COLLECTION} variant="landscape" />
            <ContentRow title="Trending Hits" items={[...MOVIE_COLLECTION].reverse()} variant="portrait" />
          </>
        );
      case NavigationTab.LIVE:
        return (
          <div className="pt-20 px-4">
            <h2 className="text-2xl font-black mb-4">Live Television</h2>
            <div className="grid grid-cols-2 gap-4">
              {LIVE_CHANNELS.map(channel => (
                <div key={channel.id} className="relative aspect-video rounded-xl overflow-hidden group border border-white/5">
                  <img src={channel.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute bottom-2 left-2 flex items-center gap-2">
                    <div className="w-6 h-6 bg-white/20 backdrop-blur rounded flex items-center justify-center">
                      <i className="fa-solid fa-play text-[10px] text-white"></i>
                    </div>
                    <span className="text-xs font-bold text-white">{channel.title}</span>
                  </div>
                  <div className="absolute top-2 right-2 bg-red-600 text-[8px] font-bold px-1 py-0.5 rounded">LIVE</div>
                </div>
              ))}
            </div>
            <div className="mt-8">
               <AIScout />
            </div>
          </div>
        );
      case NavigationTab.SPORTS:
        return (
          <div className="pt-20">
             <div className="px-4 mb-4 flex items-center gap-3">
                <i className="fa-solid fa-trophy text-red-600 text-2xl"></i>
                <h2 className="text-2xl font-black">Arena</h2>
             </div>
             <ContentRow title="Live Matches" items={SPORTS_COLLECTION} variant="landscape" />
             <AIScout />
             <ContentRow title="Sports Originals" items={SPORTS_COLLECTION.slice(0, 2)} variant="portrait" />
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-gray-500">
            <i className="fa-solid fa-compass text-4xl mb-2 opacity-20"></i>
            <p className="text-sm">Discover more entertainment soon!</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen pb-24 relative">
      <TopBar />
      <main className="max-w-5xl mx-auto">
        {renderContent()}
      </main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;

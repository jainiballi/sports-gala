
export interface ContentItem {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  description: string;
  isLive?: boolean;
  isPremium?: boolean;
  genre?: string[];
  rating?: string;
}

export interface MatchStats {
  teamA: string;
  teamB: string;
  scoreA: string;
  scoreB: string;
  status: string;
  venue: string;
}

export enum NavigationTab {
  HOME = 'home',
  LIVE = 'live',
  SPORTS = 'sports',
  MOVIES = 'movies',
  MORE = 'more'
}


import { ContentItem } from './types';

export const CATEGORIES = [
  'All',
  'Cricket',
  'Football',
  'Movies',
  'Drama',
  'Kids',
  'News'
];

export const FEATURED_CONTENT: ContentItem[] = [
  {
    id: 'f1',
    title: 'ICC Champions Trophy Final',
    thumbnail: 'https://picsum.photos/seed/cricket/1200/600',
    category: 'Sports',
    description: 'The ultimate battle for supremacy on the cricket pitch.',
    isLive: true,
    isPremium: true
  },
  {
    id: 'f2',
    title: 'Shadows of the Desert',
    thumbnail: 'https://picsum.photos/seed/movie1/1200/600',
    category: 'Movies',
    description: 'A gripping action thriller set in the heart of the Sahara.',
    genre: ['Action', 'Thriller'],
    rating: '8.5'
  }
];

export const LIVE_CHANNELS: ContentItem[] = [
  { id: 'c1', title: 'PTV Sports', thumbnail: 'https://picsum.photos/seed/ptv/300/180', category: 'Live', description: 'Live Sports', isLive: true },
  { id: 'c2', title: 'Ten Sports', thumbnail: 'https://picsum.photos/seed/ten/300/180', category: 'Live', description: 'Live Sports', isLive: true },
  { id: 'c3', title: 'Geo News', thumbnail: 'https://picsum.photos/seed/geo/300/180', category: 'Live', description: 'Live News', isLive: true },
  { id: 'c4', title: 'ARY Digital', thumbnail: 'https://picsum.photos/seed/ary/300/180', category: 'Live', description: 'Live Entertainment', isLive: true },
];

export const SPORTS_COLLECTION: ContentItem[] = [
  { id: 's1', title: 'Cricket Highlights', thumbnail: 'https://picsum.photos/seed/s1/300/450', category: 'Sports', description: 'Recent highlights' },
  { id: 's2', title: 'Football Highlights', thumbnail: 'https://picsum.photos/seed/s2/300/450', category: 'Sports', description: 'Recent highlights' },
  { id: 's3', title: 'Wrestling Mania', thumbnail: 'https://picsum.photos/seed/s3/300/450', category: 'Sports', description: 'Weekly roundup' },
  { id: 's4', title: 'Tennis Grand Slam', thumbnail: 'https://picsum.photos/seed/s4/300/450', category: 'Sports', description: 'Live action' },
];

export const MOVIE_COLLECTION: ContentItem[] = [
  { id: 'm1', title: 'The Silent Hour', thumbnail: 'https://picsum.photos/seed/m1/300/450', category: 'Movies', description: 'Thriller' },
  { id: 'm2', title: 'Neon Nights', thumbnail: 'https://picsum.photos/seed/m2/300/450', category: 'Movies', description: 'Sci-Fi' },
  { id: 'm3', title: 'Laughter Peak', thumbnail: 'https://picsum.photos/seed/m3/300/450', category: 'Movies', description: 'Comedy' },
  { id: 'm4', title: 'Ocean Deep', thumbnail: 'https://picsum.photos/seed/m4/300/450', category: 'Movies', description: 'Documentary' },
];

// TOP ANIME RESPONSE
export interface TopAnimeResponse {
  pagination: Pagination;
  data: Anime[];
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: Items;
}

export interface Items {
  count: number;
  total: number;
  per_page: number;
}

export enum Filter {
  Airing = 'airing',
  Upcoming = 'upcoming',
  ByPopulariry = 'bypopularity',
  Favorite = 'favorite',
}
// TOP ANIME RESPONSE

// SEARCH ANIME RESPONSE
export interface SearchAnimeResponse {
  pagination: Pagination;
  data: Anime[];
  links: Links;
  meta: Meta;
}

export interface Links {
  first: string;
  last: string;
  prev: null;
  next: string;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface Link {
  url: null | string;
  label: string;
  active: boolean;
}
// SEARCH ANIME RESPONSE

// DETAIL ANIME RESPONSE
export interface DetailAnimeResponse {
  data: Anime;
}
// DETAIL ANIME RESPONSE

// REVIEWS ANIME RESPONSE
export interface ReviewsAnimeResponse {
  pagination: Pagination;
  data: Review[];
}

export interface Review {
  mal_id: number;
  url: string;
  type: Type;
  reactions: Reactions;
  date: Date;
  review: string;
  score: number;
  tags: Tag[];
  is_spoiler: boolean;
  is_preliminary: boolean;
  episodes_watched: null;
  user: User;
}

export interface Reactions {
  overall?: number;
  nice?: number;
  love_it?: number;
  funny?: number;
  confusing?: number;
  informative?: number;
  well_written?: number;
  creative?: number;
}

export enum Type {
  Anime = 'anime',
}

export enum Tag {
  MixedFeelings = 'Mixed Feelings',
  NotRecommended = 'Not Recommended',
  Preliminary = 'Preliminary',
  Recommended = 'Recommended',
}

export interface User {
  url: string;
  username: string;
  images: { [key: string]: Image };
}
// REVIEWS ANIME RESPONSE

// RECOMMENDATIONS ANIME RESPONSE
export interface RecommendationsAnimeResponse {
  data: Recommendation[];
}

export interface Recommendation {
  entry: Entry;
  url: string;
  votes: number;
}

export interface Entry {
  mal_id: number;
  url: string;
  images: { [key: string]: Image };
  title: string;
}
// RECOMMENDATIONS ANIME RESPONSE

export interface Anime {
  mal_id: number;
  url: string;
  images: { [key: string]: Image };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: null | string;
  title_japanese: null | string;
  title_synonyms: string[];
  type: null | string;
  source: string;
  episodes: number | null;
  status: Status;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: null | string;
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: null | string;
  background: null | string;
  season: null | string;
  year: number | null;
  broadcast: Broadcast;
  producers: Demographic[];
  licensors: Demographic[];
  studios: Demographic[];
  genres: Demographic[];
  explicit_genres: any[];
  themes: Demographic[];
  demographics: Demographic[];
}

export interface Image {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Trailer {
  youtube_id: null | string;
  url: null | string;
  embed_url: null | string;
  images: Images;
}

export interface Title {
  type: TitleType;
  title: string;
}

export enum Status {
  FinishedAiring = 'Finished Airing',
  NotYetAired = 'Not yet aired',
}

export interface Aired {
  from: Date | null;
  to: Date | null;
  prop: Prop;
  string: string;
}

export interface Broadcast {
  day: null | string;
  time: null | string;
  timezone: null | string;
  string: null | string;
}

export interface Demographic {
  mal_id: number;
  type: DemographicType;
  name: string;
  url: string;
}

export interface Images {
  image_url: null | string;
  small_image_url: null | string;
  medium_image_url: null | string;
  large_image_url: null | string;
  maximum_image_url: null | string;
}

export enum TitleType {
  Default = 'Default',
  English = 'English',
  French = 'French',
  German = 'German',
  Japanese = 'Japanese',
  Synonym = 'Synonym',
}

export interface Prop {
  from: From;
  to: From;
}

export enum DemographicType {
  Anime = 'anime',
}

export interface From {
  day: number | null;
  month: number | null;
  year: number | null;
}

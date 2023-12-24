export interface Media {
  s?: string;
  m?: string;
  l: string;
}

export interface FeedItem {
  title: string;
  link: string;
  media: Media;
  date_taken: string;
  description: string;
  published: string;
  author: string;
  author_id: string;
  tags: string;
}

export interface FeedResponse {
  title: string;
  link: string;
  description: string;
  modified: string;
  generator: string;
  items: FeedItem[];
}

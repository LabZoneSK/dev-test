export interface Data {
  title: string;
  link: string;
  media: {
    m: string;
  };
  date_taken: string;
  author: string;
  author_id?: string;
}

export interface DataReducer {
  data: Data[];
  loading: boolean;
  error?: string;
  searchText: string;
}

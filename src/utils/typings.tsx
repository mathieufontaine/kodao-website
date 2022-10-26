export interface Post {
  _id: string;
  title: string;
  authorName: string;
  authorImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  publishedAt: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  body: [object];
  categories: [string];
}

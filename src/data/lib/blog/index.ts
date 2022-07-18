import { Article, Tag, type Articles, type Tags } from '$data/types/blog';

/// tags
const tag1 = new Tag('tag1', '');
const tag2 = new Tag('tag2', '');

/// tags library
export const tags: Tags = new Map();
tags.set(tag2.link, tag1);

/// articles
const art1 = new Article('Article 1', 'art1', [tag1]);
const art2 = new Article('Article 2', 'art2', [tag1, tag2]);

/// articles library
export const articles: Articles = new Map();
articles.set(art1.link, art1);
articles.set(art2.link, art2);

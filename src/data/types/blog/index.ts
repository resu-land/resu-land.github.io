/// tag interface
export type TagT = {
    id: string;
    link: string;
};

/// tag class
export class Tag implements TagT {
    constructor(id: string, link: string) {
        this.id = id;
        this.link = link;
    }
    id: string;
    link: string;
}

/// tags library
export type Tags = Map<string, Tag>;

/// article interface
export type ArticleT = {
    title: string;
    link: string;
    tags: TagT[];
};

/// article class
export class Article implements ArticleT {
    constructor(
        title: string,
        link: string,
        tags: Tag[]
    ) {
        this.title = title;
        this.link = link;
        this.tags = tags;
    }
    title!: string;
    link!: string;
    tags!: Tag[];
}

/// articles library
export type Articles = Map<string, Article>;

/// album interface
export type AlbumT = {
    author: string;
    title: string;
    cover: string;
    year: number;
};

/// album class
export class Album implements AlbumT {
    constructor(author: string, title: string, cover: string, year: number) {
        this.author = author;
        this.title = title;
        this.cover = cover;
        this.year = year;
    }
    author: string;
    title: string;
    cover: string;
    year: number;
}

/// albums timeline
export type Timeline = Map<number, Album[]>;

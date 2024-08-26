export interface AltTitle {
    [key: string]: string;
}

export interface Manga {
    id: string;
    title: string;
    altTitles: AltTitle[];
    description?: string;
    status: string;
    releaseDate: number;
    contentRating: string;
    lastVolume?: string;
    lastChapter?: string;
    image: string;
}

export interface MangaResponse {
    currentPage: number;
    results: Manga[];
}
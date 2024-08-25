export interface AltTitle {
    [key: string]: string;
}

export interface Chapter {
    id: string;
    title: string;
    chapterNumber: string;
    volumeNumber: string;
    pages: number;
}

export interface Description {
    [key: string]: string;
}

export interface InfoResponse {
    id: string;
    title: string;
    altTitles: AltTitle[];
    description: Description;
    genres: string[];
    themes: string[];
    status: string;
    releaseDate: number;
    chapters: Chapter[];
    image: string;
}

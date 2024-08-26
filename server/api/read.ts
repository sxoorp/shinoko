import { MANGA } from "@consumet/extensions";

export default defineEventHandler(async (event) => {
    const { id } = getQuery(event);
    const manga = new MANGA.MangaDex();
    return await manga.fetchChapterPages(id as string);
});
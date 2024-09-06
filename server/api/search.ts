import { MANGA } from "@consumet/extensions";

export default defineEventHandler(async (event) => {
    const { q } = getQuery(event);
    const manga = new MANGA.MangaDex();
    return await manga.search(q as string);
});
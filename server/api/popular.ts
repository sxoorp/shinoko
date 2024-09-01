import { MANGA } from "@consumet/extensions";

export default defineEventHandler(async (event) => {
    const { page, per } = getQuery(event);
    const manga = new MANGA.MangaDex();
    return await manga.fetchPopular(page as number, per as number);
});
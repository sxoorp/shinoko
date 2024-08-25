import { MANGA } from "@consumet/extensions";

export default defineEventHandler(async (event) => {
    const manga = new MANGA.MangaDex();
    return await manga.fetchRecentlyAdded(1, 8);
});
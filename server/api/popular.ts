import { MANGA } from "@consumet/extensions";

export default defineEventHandler(async (event) => {
    const manga = new MANGA.MangaDex();
    return await manga.fetchPopular(1, 8);
});
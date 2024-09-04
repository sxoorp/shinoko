<script lang="ts" setup>
import type { MangaResponse } from "~/types/manga";
const { data } = await useFetch<MangaResponse>("/api/popular", { query: { page: 1, per: 32 } });
</script>

<template>
    <Head>
        <Title>Shinoko - Enjoy Reading Manga Online</Title>
    </Head>
    <Headline label="Popular Titles" />
    <Cards :data="data?.results" />
</template>
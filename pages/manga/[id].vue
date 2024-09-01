<script lang="ts" setup>
import type { InfoResponse } from "~/types/info";
import type { MangaResponse } from "~/types/manga";

const { id } = useRoute().params
const open = ref(false);

const { data } = await useAsyncData(async () => {
    const [info, recent] = await Promise.all([
        await $fetch<InfoResponse>("/api/info", { query: { id } }),
        await $fetch<MangaResponse>("/api/recent")
    ]);

    return { info, recent }
});

const regex = [
    /---\s+\*\*Links:\*\*[\s\S]*$/,
    /---\s+\*\*Notes:\*\*[\s\S]*$/
]
</script>

<template>

    <Head>
        <Title>{{ data?.info.title ? data?.info.title :
            (data?.info.altTitles[0].en ? data?.info.altTitles[0].en : data?.info.altTitles[0].ja) }}</Title>
    </Head>
    <UContainer as="div" class="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-2 md:gap-4 lg:gap-8 m-4">
        <UContainer as="div" class="hidden md:flex flex-col gap-2">
            <NuxtImg :src="data?.info.image" :alt="data?.info.title ? data?.info.title :
                (data?.info.altTitles[0].en ? data?.info.altTitles[0].en : data?.info.altTitles[0].ja)"
                class="w-56 h-80 rounded-sm object-cover" />
            <UButton label="Chapters" size="lg" block @click="open = true" />
        </UContainer>
        <UContainer as="div" class="md:hidden flex flex-col items-center gap-2">
            <NuxtImg :src="data?.info.image" :alt="data?.info.title ? data?.info.title :
                (data?.info.altTitles[0].en ? data?.info.altTitles[0].en : data?.info.altTitles[0].ja)"
                class="w-40 h-60 md:w-48 md:h-72 rounded-sm object-cover" />
            <UButton label="Chapters" size="lg" block @click="open = true" />
            <UContainer as="div" class="flex flex-col justify-center items-center text-center">
                <p class="text-base font-normal">{{ data?.info.status }} {{ data?.info.releaseDate }}</p>
                <p class="text-2xl font-bold line-clamp-3">
                    {{ data?.info.title ? data?.info.title :
                        (data?.info.altTitles[0].en ? data?.info.altTitles[0].en : data?.info.altTitles[0].ja) }}</p>
            </UContainer>
        </UContainer>
        <UContainer as="div" class="flex flex-col gap-2">
            <UContainer as="div" class="hidden md:flex flex-col">
                <p class="text-base font-normal">{{ data?.info.status }} {{ data?.info.releaseDate }}</p>
                <p class="text-2xl font-bold line-clamp-2">
                    {{ data?.info.title ? data?.info.title :
                        (data?.info.altTitles[0].en ? data?.info.altTitles[0].en : data?.info.altTitles[0].ja) }}</p>
            </UContainer>
            <UContainer as="div" class="flex flex-wrap items-center gap-2">
                <UButton v-for="genre in data?.info.genres" variant="soft">{{ genre }}</UButton>
            </UContainer>
            <UCard v-if="data?.info.description && data?.info.description.en">
                <p class="text-base font-normal" v-if="regex[0].test(data?.info.description.en as string)">
                    {{ data?.info.description.en.replace(/---\s+\*\*Links:\*\*[\s\S]*$/, "").trim() }}</p>
                <p class="text-base font-normal" v-else-if="regex[1].test(data?.info.description.en as string)">
                    {{ data?.info.description.en.replace(/---\s+\*\*Notes:\*\*[\s\S]*$/, "").trim() }}</p>
                <p class="text-base font-normal" v-else>{{ data?.info.description.en }}</p>
            </UCard>
            <UCard v-else>
                <p class="text-base font-normal">No Description Available...</p>
            </UCard>
        </UContainer>
    </UContainer>

    <Headline label="Recently Added" />
    <Cards :data="data?.recent.results" />

    <USlideover v-model="open">
        <UContainer as="div" class="space-y-4 p-4 flex-1 overflow-y-auto h-full">
            <UContainer as="div" class="flex justify-between items-center">
                <p class="text-xl font-bold">Chapters</p>
                <UButton icon="i-heroicons-x-mark-solid" color="white" @click="open = false" />
            </UContainer>
            <UContainer as="div" class="grid grid-cols-2 gap-2">
                <UButton v-for="chapter in data?.info.chapters" :to="'/read/' + chapter.id" variant="soft" block
                    v-if="data?.info.chapters.length! > 0">Chapter {{ chapter.chapterNumber }}</UButton>
            </UContainer>
        </UContainer>
    </USlideover>
</template>
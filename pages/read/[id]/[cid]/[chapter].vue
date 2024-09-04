<script lang="ts" setup>
import type { ChapterResponse } from "~/types/chapter";
import type { InfoResponse } from "~/types/info";

const { id, cid, chapter } = useRoute().params
const open = ref(false);

const { data } = await useAsyncData(async () => {
    const [info, chapter] = await Promise.all([
        await $fetch<InfoResponse>("/api/info", { query: { id } }),
        await $fetch<ChapterResponse>("/api/read", { query: { id: cid } })
    ]);

    return { info, chapter }
});

function scrollup() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
</script>

<template>
    <Head>
        <Title>Reading Chapter</Title>
    </Head>
    <Headline :label="`${data?.info.title ? data?.info.title :
        (data?.info.altTitles[0].en ? data?.info.altTitles[0].en
            : data?.info.altTitles[0].ja)} - Chapter ${chapter}`" />
    <UContainer as="div" class="flex justify-between items-center m-4">
        <UButton label="Chapters" @click="open = true" />
        <UButton :to="`/manga/${id}`" label="Info" trailing-icon="i-heroicons-information-circle" />
    </UContainer>
    <UContainer as="div" class="flex flex-col items-center select-none m-4" @click="open = !open">
        <NuxtImg :src="chapter.img" :alt="'Page ' + chapter.page" placeholder format="webp" quality="80"
            class="md:w-3/4 lg:w-1/2" v-for="chapter in data?.chapter" />
    </UContainer>
    <ClientOnly>
        <UContainer as="div" class="flex justify-between items-center m-4">
            <UButton label="Chapters" @click="open = true" />
            <UButton icon="i-heroicons-chevron-up-16-solid" size="lg" @click="scrollup" />
        </UContainer>
    </ClientOnly>
    <USlideover v-model="open">
        <UContainer as="div" class="space-y-4 p-4 flex-1 overflow-y-auto h-full">
            <UContainer as="div" class="flex justify-between items-center">
                <p class="text-xl font-bold">Chapters</p>
                <UButton icon="i-heroicons-x-mark-solid" color="white" @click="open = false" />
            </UContainer>
            <UContainer as="div" class="grid grid-cols-2 gap-2">
                <UButton v-for="chapter in data?.info.chapters"
                    :to="`/read/${id}/${chapter.id}/${chapter.chapterNumber}`" variant="soft" block
                    v-if="data?.info.chapters.length! > 0">Chapter {{ chapter.chapterNumber }}</UButton>
            </UContainer>
        </UContainer>
    </USlideover>
</template>
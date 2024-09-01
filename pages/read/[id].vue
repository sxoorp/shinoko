<script lang="ts" setup>
import type { ChapterResponse } from "~/types/chapter";

const { id } = useRoute().params
const open = ref(false);
const { data } = await useFetch<ChapterResponse>("/api/read", { query: { id } });
</script>

<template>
    <Head>
        <Title>Reading Chapter</Title>
    </Head>
    <UContainer as="div" class="flex flex-col items-center select-none m-4" @click="open = !open">
        <NuxtImg :src="chapter.img" :alt="'Page ' + chapter.page" class="md:w-3/4 lg:w-1/2" v-for="chapter in data" />
    </UContainer>
</template>
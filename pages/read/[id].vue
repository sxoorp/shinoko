<script lang="ts" setup>
import type { ChapterResponse } from "~/interfaces/chapter";

const { id } = useRoute().params
const open = ref(false);

const { data } = await useFetch<ChapterResponse>("/api/read", { query: { id } });

const scrollUP = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
    <Head>
        <Title>Reading Chapter</Title>
    </Head>
    <div class="flex flex-col gap-2 select-none m-4" @click="open = !open">
        <NuxtImg :src="chapter.img" :alt="'Page ' + chapter.page" v-for="chapter in data" />
    </div>
    <ClientOnly>
        <div class="fixed flex bottom-0 right-0 gap-2 p-4 m-4" v-if="open">
            <UButton icon="i-heroicons-chevron-left-solid" label="Go Back" @click="useRouter().back()" />
            <UButton icon="i-heroicons-chevron-up-solid" @click="scrollUP" />
        </div>
    </ClientOnly>
</template>
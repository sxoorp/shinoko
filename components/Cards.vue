<script lang="ts" setup>
const { data } = defineProps(["data"]);
</script>

<template>
    <UContainer as="div" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 select-none m-4">
        <NuxtLink :to="'/manga/' + manga.id" v-for="manga in data" :key="manga.id" class="group flex flex-col">
            <NuxtImg :src="manga.image" :alt="manga.title" :title="manga.title"
                class="w-full h-full object-cover rounded-sm transition-transform group-hover:scale-95" />
            <p class="text-base font-medium truncate">{{ manga.title }}</p>
        </NuxtLink>
    </UContainer>
</template>
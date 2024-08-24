<script lang="ts" setup>
const { data } = defineProps(["data"]);
</script>

<template>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 select-none m-4">
        <NuxtLink v-for="manga in data" :key="manga.id" class="relative group flex flex-col gap-1">
            <div class="w-full h-full rounded-sm overflow-hidden">
                <NuxtImg :src="manga.image" :alt="manga.title"
                    class="w-full h-full object-cover rounded-sm transition-transform group-hover:scale-110" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
            <p class="absolute bottom-0 m-2">{{ manga.title }}</p>
        </NuxtLink>
    </div>
</template>
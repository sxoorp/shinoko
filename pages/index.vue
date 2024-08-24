<script lang="ts" setup>
const { data } = await useAsyncData(async () => {
    const [recent, popular] = await Promise.all([
        await $fetch("/api/recent"),
        await $fetch("/api/popular")
    ]);
    
    return { recent, popular }
})
</script>

<template>
    <Head>
        <Title>Shinoko - Enjoy Reading Manga Online</Title>
    </Head>
    <Headline label="Recently Added" />
    <Cards :data="data?.recent.results" />
    <Headline label="Popular Titles" />
    <Cards :data="data?.popular.results" />
</template>
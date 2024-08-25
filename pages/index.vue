<script lang="ts" setup>
const { data } = await useAsyncData(async () => {
    const [latest, popular] = await Promise.all([
        await $fetch("/api/latest"),
        await $fetch("/api/popular")
    ]);
    
    return { latest, popular }
});
</script>

<template>
    <Head>
        <Title>Shinoko - Enjoy Reading Manga Online</Title>
    </Head>
    <Headline label="Latest Updates" />
    <Cards :data="data?.latest.results" />
    <Headline label="Popular Titles" />
    <Cards :data="data?.popular.results" />
</template>
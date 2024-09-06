<script lang="ts" setup>
const { query } = useRoute().params
const { data } = await useFetch("/api/search", { query: { q: query } });
</script>

<template>
    <Headline label="Search Result" />
    <Cards :data="data?.results" />
</template>
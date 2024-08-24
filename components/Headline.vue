<script lang="ts" setup>
const { label } = defineProps(["label"]);
</script>

<template>
    <div class="flex justify-start items-center m-4">
        <p class="text-xl font-bold uppercase">{{ label }}</p>
    </div>
</template>
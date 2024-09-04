<script setup lang="ts">
const mode = useColorMode();
const isDark = computed({
    get() {
        return mode.value === "dark"
    },
    set() {
        mode.preference = mode.value === "dark" ? "light" : "dark"
    }
});
</script>

<template>
    <ClientOnly>
        <UButton :icon="isDark ? 'i-heroicons-moon-solid' : 'i-heroicons-sun-solid'" variant="soft" aria-label="Theme"
            size="lg" @click="isDark = !isDark" />
    </ClientOnly>
</template>

<script lang="ts" setup>
const open = ref(false);
const state: { query?: string } = reactive({ query: undefined });

const handleSearch = () => {
    const { query } = state
    if (query && query.trim() !== "") {
        open.value = false
        let decoded = decodeURIComponent(query.trim());
        navigateTo(`/search/${decoded.replace(/ /g, "+")}`);
        state.query = undefined
    }
}
</script>

<template>
    <UButton icon="i-heroicons-magnifying-glass" variant="soft" size="lg" @click="open = true" />

    <UModal v-model="open">
        <UForm :state="state" @submit="handleSearch" class="space-y-2 p-4">
            <UFormGroup label="Seach" name="query" required>
                <UInput v-model="state.query" placeholder="Search..." size="lg" :ui="{ rounded: 'rounded-sm' }" />
            </UFormGroup>
            <UButton type="submit" icon="i-heroicons-magnifying-glass" variant="soft" size="lg" block />
        </UForm>
    </UModal>
</template>
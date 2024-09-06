<template>
    <UContainer as="div" class="flex justify-between items-center p-4">
        <NuxtLink to="/" class="text-3xl font-extrabold uppercase hover:text-primary">Shinoko</NuxtLink>
        <UContainer as="div" class="flex items-center gap-2">
            <Search />
            <ColorMode />
        </UContainer>
    </UContainer>
    <UDivider />
</template>
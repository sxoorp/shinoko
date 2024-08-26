<template>
    <Head>
        <Meta name="description"
            content="Enjoy reading manga through a large collection of high quality content now on shinoko" />
        <Meta name="keywords" content="Shinoko, Shinoko Manga, Manga Shinoko, Read Manga, Browse Manga" />
        <Style type="text/css" children="::-webkit-scrollbar { width: 0; }"></Style>
    </Head>
    <NuxtLoadingIndicator color="#14B8A6" />
    <Header />
    <slot />
    <Footer />
</template>
<script lang="ts">
    import Article from '$components/lib/blog/Article.svelte';
    import Body from '$components/lib/cv/Body.svelte';
    import Header from '$components/lib/cv/Header.svelte';
</script>

<page size="A4" layout="portrait">
    <Article cssprops="bg-white p-6 space-y-3 font-nunito h-[297mm] w-[210mm] !place-content-start">
        <Header />
        <hr class="page-sep" />
        <Body />
    </Article>
</page>

<style lang="postcss">
    page[size='A4'][layout='portrait'] {
        @apply h-[297mm];
        @apply w-[210mm];
    }

    .page-sep {
        @apply w-full;
        @apply h-0.5;
        @apply bg-neutral-300;
    }
</style>

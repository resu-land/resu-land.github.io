<script lang="ts">
    import Article from '$components/lib/blog/Article.svelte';
    import Body from '$components/lib/cv/Body.svelte';
    import Header from '$components/lib/cv/Header.svelte';
</script>

<div
    class="
    cazzo
    flex
    flex-col
    h-fit
    w-screen
    sm:w-fit
    space-y-4
    print:p-0
    print:space-y-0
    print:contents"
>
    <button
        class="
        bg-dk_back_2
        text-dk_front_1
        rounded-sm
        fixed
        bottom-10
        left-10
        py-2
        px-6
        active:bg-dk_back_1
        hover:bg-dk_back_1
        print:hidden"
        on:click={() => window.print()}
    >
        Print CV
    </button>
    <Article
        cssprops="bg-white
        p-6
        space-y-3
        font-nunito
        w-screen
        h-fit
        md:h-[297mm]
        md:w-[210mm]
        print:h-[297mm]
        print:w-[210mm]
        !place-content-start
        shadow-2xl
        print:shadow-none"
    >
        <Header />
        <hr class="page-sep" />
        <Body />
    </Article>
</div>

<style lang="postcss">
    .page-sep {
        @apply w-full;
        @apply h-0.5;
        @apply bg-neutral-300;
    }
</style>

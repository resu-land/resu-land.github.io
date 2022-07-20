<script lang="ts">
    import Article from '$components/lib/blog/Article.svelte';
    import Body from '$components/lib/cv/Body.svelte';
    import Header from '$components/lib/cv/Header.svelte';
    import { faPrint } from '@fortawesome/free-solid-svg-icons/index.es';
    import Fa from 'svelte-fa/src/fa.svelte';
</script>

<div
    class="
    flex
    flex-col
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
        text-dk_front_hl
        rounded-sm
        fixed
        top-32
        right-10
        p-4
        active:bg-dk_front_0
        sm:hover:bg-dk_front_0
        sm:active:opacity-50
        transition-all
        duration-100
        print:hidden"
        on:click={() => window.print()}
    >
        <Fa icon={faPrint} />
    </button>
    <div
        class="
            grid
            grid-cols-1
            gap-1
            fixed
            bottom-10
            right-10
            font-semibold
            text-sm
            text-white
            space-y-4
            print:hidden"
    >
        <div class="rounded-full p-2 bg-cv_section" />
        <div class="rounded-full p-2 bg-cv_sub_section" />
        <div class="rounded-full p-2 bg-cv_text" />
        <div class="rounded-full p-2 bg-cv_text_alt" />
        <div class="rounded-full p-2 bg-cv_link" />
        <div class="rounded-full p-2 bg-cv_link_alt" />
    </div>
    <Article
        cssprops="
        bg-white
        py-4 px-6
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
